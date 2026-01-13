# Easypanel Deployment Guide

This guide explains how to deploy the Dressr application to Easypanel with separate frontend and backend apps.

## Prerequisites

- Easypanel account and server set up
- MongoDB database (can be deployed on Easypanel or use external service like MongoDB Atlas)
- Cloudinary account for image storage
- Google OAuth credentials (optional, for OAuth login)

## Architecture

The application is split into two separate Docker containers:

1. **Frontend** - React + Vite application served by Nginx
2. **Backend** - FastAPI Python application

## Deployment Steps

### 1. Backend Deployment

#### Create Backend App in Easypanel

1. Go to your Easypanel dashboard
2. Click "Create App" → "From Source"
3. Configure the app:
   - **Name**: `dressr-backend`
   - **Repository**: Your Git repository URL
   - **Branch**: `main` (or your preferred branch)
   - **Build Path**: `/backend`
   - **Dockerfile Path**: `/backend/Dockerfile`
   - **Port**: `8000`

#### Set Environment Variables

Add these environment variables in Easypanel:

```
PROJECT_NAME=Dressr Backend
SECRET_KEY=<generate-strong-random-key>
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Google OAuth (if using)
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# Google Cloud / Vertex AI
GOOGLE_CLOUD_PROJECT=<your-project-id>
GOOGLE_CLOUD_REGION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=credentials/service_account.json

# Frontend URL (will be set after frontend deployment)
FRONTEND_URL=https://your-frontend-domain.com

# Cloudinary
CLOUDINARY_API_KEY=<your-cloudinary-key>
CLOUDINARY_API_SECRET=<your-cloudinary-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-name>

# MongoDB
MONGODB_URL=mongodb://<your-mongodb-connection-string>
MONGODB_DB_NAME=dressr
```

#### Configure Domain

1. In Easypanel, go to your backend app settings
2. Add a domain (e.g., `api.yourdomain.com`)
3. Enable SSL/HTTPS
4. Note this URL for frontend configuration

### 2. Frontend Deployment

#### Create Frontend App in Easypanel

1. Go to your Easypanel dashboard
2. Click "Create App" → "From Source"
3. Configure the app:
   - **Name**: `dressr-frontend`
   - **Repository**: Your Git repository URL (same repo)
   - **Branch**: `main` (or your preferred branch)
   - **Build Path**: `/`
   - **Dockerfile Path**: `/Dockerfile`
   - **Port**: `80`

#### Set Environment Variables

Add these environment variables in Easypanel:

```
VITE_API_URL=https://api.yourdomain.com
```

**Important**: Replace `https://api.yourdomain.com` with your actual backend URL from step 1.

#### Configure Domain

1. In Easypanel, go to your frontend app settings
2. Add a domain (e.g., `dressr.yourdomain.com` or `yourdomain.com`)
3. Enable SSL/HTTPS

### 3. Update Backend CORS Settings

After frontend is deployed, update the backend environment variable:

```
FRONTEND_URL=https://yourdomain.com
```

Then update the CORS settings in `/Users/yordanos/dressr_web/backend/app/main.py` to restrict origins:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],  # Restrict to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 4. MongoDB Setup (Optional)

If you want to deploy MongoDB on Easypanel:

1. Create a new app → "From Template"
2. Select "MongoDB"
3. Configure and deploy
4. Copy the connection string
5. Update the `MONGODB_URL` in your backend environment variables

Alternatively, use MongoDB Atlas or any other MongoDB hosting service.

## File Structure

```
dressr_web/
├── Dockerfile                 # Frontend Dockerfile
├── nginx.conf                 # Nginx configuration for frontend
├── .dockerignore             # Frontend Docker ignore
├── .env.example              # Frontend environment template
├── backend/
│   ├── Dockerfile            # Backend Dockerfile
│   ├── .dockerignore         # Backend Docker ignore
│   └── .env.example          # Backend environment template
```

## Important Notes

### Security

1. **Never commit `.env` files** - They contain sensitive credentials
2. **Use strong SECRET_KEY** - Generate using: `openssl rand -hex 32`
3. **Restrict CORS origins** - Update to your actual frontend domain
4. **Use HTTPS** - Always enable SSL in Easypanel

### Google Service Account (if using Vertex AI)

If you're using Google Cloud services:

1. Download your service account JSON file
2. In Easypanel, you can either:
   - Mount it as a secret/volume
   - Or encode it as base64 and set as environment variable, then decode in startup script

### Monitoring

- Check logs in Easypanel dashboard for each app
- Backend logs: Uvicorn access logs and application logs
- Frontend logs: Nginx access logs

### Scaling

- Backend can be scaled by increasing the number of workers in the Dockerfile
- Both apps can be scaled horizontally in Easypanel if needed

## Troubleshooting

### Backend won't start
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check logs for specific errors

### Frontend can't connect to backend
- Verify `VITE_API_URL` is set correctly
- Check CORS settings in backend
- Ensure backend domain is accessible

### 502 Bad Gateway
- Backend might not be running on port 8000
- Check backend logs
- Verify port configuration in Easypanel

## Build Commands Reference

### Local Development

```bash
# Frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Local Docker Build

```bash
# Frontend
docker build -t dressr-frontend .

# Backend
cd backend
docker build -t dressr-backend .
```

## Support

For issues, check:
1. Easypanel logs for each app
2. Environment variables are correctly set
3. Domains are properly configured with SSL
4. MongoDB is accessible from backend
