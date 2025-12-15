# Virtual Try-On API Tester

A simple FastAPI app to test Google's Virtual Try-On API.

## Setup

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Google Cloud

**Option A: Using gcloud CLI (recommended for testing)**

```bash
# Login to Google Cloud
gcloud auth login

# Set up Application Default Credentials
gcloud auth application-default login

# Set your project
gcloud config set project YOUR_PROJECT_ID
```

**Option B: Using Service Account**

1. Create a service account with Vertex AI permissions
2. Download the JSON key file
3. Set the environment variable:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
   ```

### 3. Set environment variables

```bash
cp .env.example .env
```

Edit `.env` and set your project ID:
```
GOOGLE_CLOUD_PROJECT=your-project-id
GOOGLE_CLOUD_REGION=us-central1
```

### 4. Run the server

```bash
uvicorn main:app --reload
```

Then open http://localhost:8000 in your browser.

## API Endpoints

- `GET /` - Web UI for testing
- `POST /try-on` - API endpoint for virtual try-on
- `GET /health` - Health check

## Image Requirements

### Person Image
- Clear, well-lit photo
- Full body or upper body visible
- Neutral pose works best
- Formats: PNG, JPEG

### Product Image
- Clear photo of the clothing item
- Best with flat-lay or mannequin photos
- Clean background preferred
- Formats: PNG, JPEG

## Troubleshooting

**"Failed to get Google Cloud credentials"**
- Run `gcloud auth application-default login`
- Make sure your project has Vertex AI API enabled

**"API Error: 403"**
- Your project may not have access to the Virtual Try-On model
- Enable Vertex AI API: `gcloud services enable aiplatform.googleapis.com`

**"API Error: 400"**
- Check image formats (PNG/JPEG only)
- Ensure images aren't too large (try under 10MB)

