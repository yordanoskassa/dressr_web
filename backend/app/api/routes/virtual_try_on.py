from fastapi import APIRouter, File, UploadFile, Form, HTTPException
from typing import Optional
from app.services import try_on_service

router = APIRouter()

@router.post("/")
async def virtual_try_on(
    person_image: UploadFile = File(..., description="Image of the person"),
    product_image: UploadFile = File(..., description="Image of the clothing product"),
    user_id: Optional[str] = Form(default=None),
    save_to_cloud: bool = Form(default=True),
):
    """
    Generate a virtual try-on image using Google Vertex AI.
    Returns 1 JPEG image for fastest response.
    """
    try:
        person_bytes = await person_image.read()
        product_bytes = await product_image.read()
        
        result = await try_on_service.generate_try_on(
            person_bytes=person_bytes,
            product_bytes=product_bytes,
            user_id=user_id,
            save_to_cloud=save_to_cloud
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
