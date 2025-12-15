from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Dressr Backend"
    SECRET_KEY: str = "CHANGEME_SECRET_KEY"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Google OAuth
    GOOGLE_CLIENT_ID: str = ""
    GOOGLE_CLIENT_SECRET: str = ""

    # Google Cloud / Vertex AI
    GOOGLE_CLOUD_PROJECT: str = ""
    GOOGLE_CLOUD_REGION: str = "us-central1"
    GOOGLE_APPLICATION_CREDENTIALS: str = "credentials/service_account.json"
    
    # Frontend
    FRONTEND_URL: str = "http://localhost:5173"
    
    # Cloudinary
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""
    CLOUDINARY_CLOUD_NAME: str = ""
    
    # MongoDB
    MONGODB_URL: str = "mongodb://localhost:27017"
    MONGODB_DB_NAME: str = "dressr"
    
    class Config:
        env_file = ".env"

settings = Settings()
