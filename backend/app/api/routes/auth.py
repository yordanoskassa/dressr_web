from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import RedirectResponse
from app.core.security import create_access_token, verify_password, get_password_hash
from app.core.config import settings
from pydantic import BaseModel
from typing import Optional
from starlette.requests import Request
from authlib.integrations.starlette_client import OAuth

router = APIRouter()

oauth = OAuth()
oauth.register(
    name='google',
    client_id=settings.GOOGLE_CLIENT_ID,
    client_secret=settings.GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email profile'
    }
)

# Mock Database
fake_users_db = {}

class UserCreate(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

@router.post("/signup", response_model=Token)
async def signup(user: UserCreate):
    if user.email in fake_users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(user.password)
    fake_users_db[user.email] = {
        "email": user.email,
        "hashed_password": hashed_password
    }
    
    access_token = create_access_token(subject=user.email)
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = fake_users_db.get(form_data.username)
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(subject=user["email"])
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/google")
async def google_login(request: Request):
    redirect_uri = request.url_for('auth_via_google')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/google/callback")
async def auth_via_google(request: Request):
    token = await oauth.google.authorize_access_token(request)
    user = token.get('userinfo')
    if user:
        # Here you would check if user exists in DB, if not create them
        # For now just return a token with user info encoded
        access_token = create_access_token(
            subject=user['email'],
            extra_data={
                "name": user.get('name', ''),
                "picture": user.get('picture', ''),
                "email": user.get('email', '')
            }
        )
        # Redirect to frontend with token and user info
        import urllib.parse
        user_data = urllib.parse.quote(f"{user.get('name', '')}|{user.get('email', '')}|{user.get('picture', '')}")
        return RedirectResponse(url=f"{settings.FRONTEND_URL}/auth/callback?token={access_token}&user={user_data}")
    raise HTTPException(status_code=400, detail="Google Auth failed")
