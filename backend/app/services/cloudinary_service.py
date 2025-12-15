import cloudinary
import cloudinary.uploader
from app.core.config import settings
import base64
from datetime import datetime

# Configure Cloudinary
cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET,
    secure=True
)

async def upload_image(image_bytes: bytes, folder: str = "dressr", public_id: str = None) -> dict:
    """
    Upload image bytes to Cloudinary.
    Returns dict with url, public_id, etc.
    """
    try:
        # Convert bytes to base64 data URI
        base64_image = base64.b64encode(image_bytes).decode('utf-8')
        data_uri = f"data:image/png;base64,{base64_image}"
        
        # Generate unique public_id if not provided
        if not public_id:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
            public_id = f"{folder}/{timestamp}"
        
        result = cloudinary.uploader.upload(
            data_uri,
            folder=folder,
            public_id=public_id,
            resource_type="image"
        )
        
        return {
            "url": result["secure_url"],
            "public_id": result["public_id"],
            "width": result.get("width"),
            "height": result.get("height"),
            "format": result.get("format"),
            "bytes": result.get("bytes")
        }
    except Exception as e:
        raise Exception(f"Cloudinary upload failed: {str(e)}")

async def upload_base64_image(base64_data: str, folder: str = "dressr") -> dict:
    """
    Upload base64 encoded image to Cloudinary.
    """
    try:
        # If it's already a data URI, use it directly
        if base64_data.startswith("data:"):
            data_uri = base64_data
        else:
            data_uri = f"data:image/png;base64,{base64_data}"
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
        
        result = cloudinary.uploader.upload(
            data_uri,
            folder=folder,
            public_id=f"{timestamp}",
            resource_type="image"
        )
        
        return {
            "url": result["secure_url"],
            "public_id": result["public_id"],
            "width": result.get("width"),
            "height": result.get("height"),
            "format": result.get("format"),
            "bytes": result.get("bytes")
        }
    except Exception as e:
        raise Exception(f"Cloudinary upload failed: {str(e)}")

async def delete_image(public_id: str) -> bool:
    """
    Delete image from Cloudinary by public_id.
    """
    try:
        result = cloudinary.uploader.destroy(public_id)
        return result.get("result") == "ok"
    except Exception as e:
        raise Exception(f"Cloudinary delete failed: {str(e)}")
