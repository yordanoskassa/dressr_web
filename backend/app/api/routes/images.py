from fastapi import APIRouter, File, UploadFile, Form, HTTPException, Depends
from typing import Optional, List
from app.services import image_service

router = APIRouter()

# --- Garment Endpoints ---

@router.post("/garments")
async def upload_garment(
    image: UploadFile = File(...),
    name: str = Form(...),
    category: str = Form(default="uncategorized"),
    user_id: str = Form(...)  # TODO: Get from auth token
):
    """Upload a new garment image."""
    try:
        image_bytes = await image.read()
        garment = await image_service.save_garment(
            user_id=user_id,
            image_bytes=image_bytes,
            name=name,
            category=category
        )
        return garment
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/garments/{user_id}")
async def get_garments(
    user_id: str,
    category: Optional[str] = None
):
    """Get all garments for a user."""
    try:
        garments = await image_service.get_user_garments(user_id, category)
        return {"garments": garments, "count": len(garments)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/garments/{garment_id}")
async def delete_garment(
    garment_id: str,
    user_id: str  # TODO: Get from auth token
):
    """Delete a garment."""
    try:
        success = await image_service.delete_garment(garment_id, user_id)
        if not success:
            raise HTTPException(status_code=404, detail="Garment not found")
        return {"success": True}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- Try-On History Endpoints ---

@router.get("/history/{user_id}")
async def get_tryon_history(
    user_id: str,
    limit: int = 20
):
    """Get try-on history for a user."""
    try:
        history = await image_service.get_user_tryon_history(user_id, limit)
        return {"history": history, "count": len(history)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/history/{result_id}")
async def delete_tryon_result(
    result_id: str,
    user_id: str  # TODO: Get from auth token
):
    """Delete a try-on result."""
    try:
        success = await image_service.delete_tryon_result(result_id, user_id)
        if not success:
            raise HTTPException(status_code=404, detail="Result not found")
        return {"success": True}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
