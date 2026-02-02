# Easypanel Quick Start Guide

## TL;DR - Deploy in 5 Minutes

### Step 1: Deploy Backend

1. **Create App** in Easypanel → "From Source"
2. **Settings**:
   - Name:backend `dressr-`
   - Build Path: `/backend`
   - Dockerfile: `/backend/Dockerfile`
   - Port: `8000`
3. **Environment Variables**: Copy from `backend/.env.example` and fill in your values
4. **Domain**: Add domain (e.g., `api.yourdomain.com`) and enable SSL
5. **Deploy**

### Step 2: Deploy Frontend

1. **Create App** in Easypanel → "From Source"
2. **Settings**:
   - Name: `dressr-frontend`
   - Build Path: `/`
   - Dockerfile: `/Dockerfile`
   - Port: `80`
3. **Environment Variables**:
   ```
   VITE_API_URL=https://api.yourdomain.com
   ```
   (Use your backend URL from Step 1)
4. **Domain**: Add domain (e.g., `yourdomain.com`) and enable SSL
5. **Deploy**

### Step 3: Update Backend CORS

1. Go to backend app in Easypanel
2. Add/Update environment variable:
   ```
   FRONTEND_URL=https://yourdomain.com
   ```
3. Redeploy backend

## Done! 🎉

Your app should now be live at:
- Frontend: `https://yourdomain.com`
- Backend API: `https://api.yourdomain.com`

## Required External Services

Before deploying, set up these services:

1. **MongoDB** - Get connection string from:
   - MongoDB Atlas (free tier available)
   - Or deploy MongoDB on Easypanel

2. **Cloudinary** - For image storage:
   - Sign up at cloudinary.com
   - Get API key, secret, and cloud name

3. **Google OAuth** (Optional):
   - Create project at console.cloud.google.com
   - Get client ID and secret

## Environment Variables Checklist

### Backend (`dressr-backend`)
```
✓ SECRET_KEY (generate with: openssl rand -hex 32)
✓ MONGODB_URL
✓ MONGODB_DB_NAME
✓ CLOUDINARY_API_KEY
✓ CLOUDINARY_API_SECRET
✓ CLOUDINARY_CLOUD_NAME
✓ FRONTEND_URL (add after frontend deployment)
□ GOOGLE_CLIENT_ID (optional)
□ GOOGLE_CLIENT_SECRET (optional)
```

### Frontend (`dressr-frontend`)
```
✓ VITE_API_URL (your backend URL)
```

## Troubleshooting

**Frontend shows connection error?**
- Check `VITE_API_URL` is correct
- Verify backend is running
- Check browser console for CORS errors

**Backend won't start?**
- Check MongoDB connection string
- Verify all required env vars are set
- Check logs in Easypanel

**CORS errors?**
- Update `FRONTEND_URL` in backend
- Redeploy backend

## File Structure

```
dressr_web/
├── Dockerfile              ← Frontend Docker
├── nginx.conf              ← Frontend Nginx config
├── .dockerignore          ← Frontend ignore
├── .env.example           ← Frontend env template
├── backend/
│   ├── Dockerfile         ← Backend Docker
│   ├── .dockerignore      ← Backend ignore
│   └── .env.example       ← Backend env template
```

## Next Steps

1. Set up custom domains
2. Configure MongoDB backups
3. Set up monitoring/alerts
4. Review security settings
5. Test all features

For detailed instructions, see `DEPLOYMENT.md`
