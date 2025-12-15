from datetime import datetime
from typing import Optional, List
from bson import ObjectId
from app.core.database import get_database
from app.services import cloudinary_service

# Collection names
GARMENTS_COLLECTION = "garments"
TRYON_RESULTS_COLLECTION = "tryon_results"
USERS_COLLECTION = "users"

# --- Garment Operations ---

async def save_garment(
    user_id: str,
    image_bytes: bytes,
    name: str,
    category: str = "uncategorized"
) -> dict:
    """
    Upload garment image to Cloudinary and save metadata to MongoDB.
    """
    db = await get_database()
    
    # Upload to Cloudinary
    cloud_result = await cloudinary_service.upload_image(
        image_bytes, 
        folder=f"dressr/garments/{user_id}"
    )
    
    # Save to MongoDB
    garment = {
        "user_id": user_id,
        "name": name,
        "category": category,
        "image_url": cloud_result["url"],
        "cloudinary_public_id": cloud_result["public_id"],
        "width": cloud_result.get("width"),
        "height": cloud_result.get("height"),
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
    
    result = await db[GARMENTS_COLLECTION].insert_one(garment)
    garment["_id"] = str(result.inserted_id)
    
    return garment

async def get_user_garments(user_id: str, category: Optional[str] = None) -> List[dict]:
    """
    Get all garments for a user, optionally filtered by category.
    """
    db = await get_database()
    
    query = {"user_id": user_id}
    if category:
        query["category"] = category
    
    cursor = db[GARMENTS_COLLECTION].find(query).sort("created_at", -1)
    garments = []
    async for garment in cursor:
        garment["_id"] = str(garment["_id"])
        garments.append(garment)
    
    return garments

async def delete_garment(garment_id: str, user_id: str) -> bool:
    """
    Delete garment from Cloudinary and MongoDB.
    """
    db = await get_database()
    
    # Find the garment
    garment = await db[GARMENTS_COLLECTION].find_one({
        "_id": ObjectId(garment_id),
        "user_id": user_id
    })
    
    if not garment:
        return False
    
    # Delete from Cloudinary
    if garment.get("cloudinary_public_id"):
        await cloudinary_service.delete_image(garment["cloudinary_public_id"])
    
    # Delete from MongoDB
    await db[GARMENTS_COLLECTION].delete_one({"_id": ObjectId(garment_id)})
    
    return True

# --- Try-On Result Operations ---

async def save_tryon_result(
    user_id: str,
    person_image_url: str,
    garment_image_url: str,
    result_images: List[dict]  # List of {base64_data, mime_type}
) -> dict:
    """
    Upload try-on result images to Cloudinary and save metadata to MongoDB.
    """
    db = await get_database()
    
    # Upload each result image to Cloudinary
    uploaded_results = []
    for i, img in enumerate(result_images):
        cloud_result = await cloudinary_service.upload_base64_image(
            img["data"],
            folder=f"dressr/results/{user_id}"
        )
        uploaded_results.append({
            "url": cloud_result["url"],
            "cloudinary_public_id": cloud_result["public_id"],
            "index": i
        })
    
    # Save to MongoDB
    tryon = {
        "user_id": user_id,
        "person_image_url": person_image_url,
        "garment_image_url": garment_image_url,
        "results": uploaded_results,
        "created_at": datetime.utcnow()
    }
    
    result = await db[TRYON_RESULTS_COLLECTION].insert_one(tryon)
    tryon["_id"] = str(result.inserted_id)
    
    return tryon

async def get_user_tryon_history(user_id: str, limit: int = 20) -> List[dict]:
    """
    Get try-on history for a user.
    """
    db = await get_database()
    
    cursor = db[TRYON_RESULTS_COLLECTION].find(
        {"user_id": user_id}
    ).sort("created_at", -1).limit(limit)
    
    results = []
    async for result in cursor:
        result["_id"] = str(result["_id"])
        results.append(result)
    
    return results

async def delete_tryon_result(result_id: str, user_id: str) -> bool:
    """
    Delete try-on result from Cloudinary and MongoDB.
    """
    db = await get_database()
    
    # Find the result
    tryon = await db[TRYON_RESULTS_COLLECTION].find_one({
        "_id": ObjectId(result_id),
        "user_id": user_id
    })
    
    if not tryon:
        return False
    
    # Delete result images from Cloudinary
    for result in tryon.get("results", []):
        if result.get("cloudinary_public_id"):
            await cloudinary_service.delete_image(result["cloudinary_public_id"])
    
    # Delete from MongoDB
    await db[TRYON_RESULTS_COLLECTION].delete_one({"_id": ObjectId(result_id)})
    
    return True
