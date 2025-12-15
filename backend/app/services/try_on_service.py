import base64
import os
import httpx
from google.auth import default
from google.auth.transport.requests import Request
from app.core.config import settings
from fastapi import HTTPException
from typing import Optional
from app.services import cloudinary_service, image_service

# Ensure credentials are set for google.auth
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = settings.GOOGLE_APPLICATION_CREDENTIALS

def get_access_token() -> str:
    """Get Google Cloud access token using Application Default Credentials."""
    try:
        credentials, _ = default(scopes=["https://www.googleapis.com/auth/cloud-platform"])
        credentials.refresh(Request())
        return credentials.token
    except Exception as e:
         # Fallback or error logging could go here
         raise Exception(f"Failed to obtain Google Cloud Credentials: {e}")

def encode_image_to_base64(image_bytes: bytes) -> str:
    """Encode image bytes to base64 string."""
    return base64.b64encode(image_bytes).decode("utf-8")

async def generate_try_on(
    person_bytes: bytes,
    product_bytes: bytes,
    sample_count: int = 1,  # Fastest: just 1 image
    user_id: Optional[str] = None,
    save_to_cloud: bool = True
):
    project_id = settings.GOOGLE_CLOUD_PROJECT
    region = settings.GOOGLE_CLOUD_REGION
    model_id = "virtual-try-on-preview-08-04"

    if not project_id:
        raise ValueError("GOOGLE_CLOUD_PROJECT is not set")

    person_base64 = encode_image_to_base64(person_bytes)
    product_base64 = encode_image_to_base64(product_bytes)

    url = f"https://{region}-aiplatform.googleapis.com/v1/projects/{project_id}/locations/{region}/publishers/google/models/{model_id}:predict"

    # Simplest/fastest configuration
    payload = {
        "instances": [
            {
                "personImage": {
                    "image": {
                        "bytesBase64Encoded": person_base64
                    }
                },
                "productImages": [
                    {
                        "image": {
                            "bytesBase64Encoded": product_base64
                        }
                    }
                ]
            }
        ],
        "parameters": {
            "sampleCount": sample_count,
            "personGeneration": "allow_all",  # Allow all ages
            "outputOptions": {
                "mimeType": "image/jpeg",
                "compressionQuality": 80
            }
        }
    }

    access_token = get_access_token()
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=120.0) as client:
        response = await client.post(url, json=payload, headers=headers)

    print(f"Vertex AI Status: {response.status_code}")
    print(f"Vertex AI Response: {response.text[:500] if response.text else 'empty'}")

    if response.status_code != 200:
        raise HTTPException(
            status_code=response.status_code,
            detail=f"Vertex AI Error: {response.text}"
        )

    result = response.json()
    print(f"Parsed result keys: {result.keys() if result else 'None'}")
    
    # Process results
    images = []
    predictions = result.get("predictions", [])
    print(f"Number of predictions: {len(predictions)}")
    
    for i, prediction in enumerate(predictions):
        print(f"Prediction {i} keys: {prediction.keys() if prediction else 'None'}")
        
        # Check if filtered
        if "raiFilteredReason" in prediction:
            raise HTTPException(
                status_code=400,
                detail=f"Image was filtered: {prediction['raiFilteredReason']}"
            )
        
        img_data = prediction.get("bytesBase64Encoded")
        print(f"Prediction {i} has data: {bool(img_data)}, length: {len(img_data) if img_data else 0}")
        
        if img_data:
            images.append({
                "data": img_data,
                "mime_type": prediction.get("mimeType", "image/jpeg")
            })
    
    if not images:
        raise HTTPException(status_code=400, detail="No valid images generated")
    
    # If user_id provided and save_to_cloud is True, save to Cloudinary and MongoDB
    if user_id and save_to_cloud and images:
        try:
            # Upload person and product images to Cloudinary
            person_cloud = await cloudinary_service.upload_image(person_bytes, folder=f"dressr/inputs/{user_id}")
            product_cloud = await cloudinary_service.upload_image(product_bytes, folder=f"dressr/inputs/{user_id}")
            
            # Save try-on result to MongoDB with Cloudinary URLs
            saved_result = await image_service.save_tryon_result(
                user_id=user_id,
                person_image_url=person_cloud["url"],
                garment_image_url=product_cloud["url"],
                result_images=images
            )
            
            # Return URLs instead of base64 for saved results
            return {
                "images": images,
                "count": len(images),
                "saved": True,
                "result_id": saved_result["_id"],
                "result_urls": [r["url"] for r in saved_result["results"]]
            }
        except Exception as e:
            # If saving fails, still return the images
            print(f"Failed to save to cloud: {e}")
            return {"images": images, "count": len(images), "saved": False}
    
    return {"images": images, "count": len(images), "saved": False}
