from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware
from contextlib import asynccontextmanager
from app.core.config import settings
from app.core.database import connect_to_mongo, close_mongo_connection
from app.api.routes import auth, virtual_try_on, images

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await connect_to_mongo()
    yield
    # Shutdown
    await close_mongo_connection()

app = FastAPI(title="Dressr Backend", lifespan=lifespan)

# Trust proxy headers (for HTTPS behind reverse proxy like EasyPanel)
app.add_middleware(ProxyHeadersMiddleware, trusted_hosts=["*"])

# Session middleware (required for OAuth)
# same_site="none" and https_only=True are required for OAuth to work across domains
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.SECRET_KEY,
    same_site="none",
    https_only=True
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # TODO: Restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(virtual_try_on.router, prefix="/try-on", tags=["try-on"])
app.include_router(images.router, prefix="/images", tags=["images"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Dressr Backend"}
