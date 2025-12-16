# Dressr Backend

FastAPI backend for the Dressr virtual try-on application.

## EasyPanel Deployment

This backend is ready for EasyPanel hosting with Docker.

### Environment Variables

Set these in your EasyPanel environment:

```
SECRET_KEY=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CLOUD_PROJECT=your-project-id
GOOGLE_CLOUD_REGION=us-central1
FRONTEND_URL=https://your-frontend-domain.com
CLOUDINARY_API_KEY=your-cloudinary-key
CLOUDINARY_API_SECRET=your-cloudinary-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
MONGODB_URL=mongodb://mongodb:27017
MONGODB_DB_NAME=dressr
```

### Deployment Steps

1. Create a new app in EasyPanel
2. Connect to this GitHub repository
3. Set the build context to `/backend`
4. Configure environment variables
5. Deploy with MongoDB service

### Local Development

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Docker

```bash
docker build -t dressr-backend .
docker run -p 8000:8000 dressr-backend
```
