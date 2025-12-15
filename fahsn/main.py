import base64
import os
from typing import Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import HTMLResponse, Response
from google.auth import default
from google.auth.transport.requests import Request

load_dotenv()

app = FastAPI(
    title="Virtual Try-On Tester",
    description="Test Google's Virtual Try-On API",
)

PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT")
REGION = os.getenv("GOOGLE_CLOUD_REGION", "us-central1")
MODEL_ID = "virtual-try-on-preview-08-04"


def get_access_token() -> str:
    """Get Google Cloud access token using Application Default Credentials."""
    credentials, _ = default(scopes=["https://www.googleapis.com/auth/cloud-platform"])
    credentials.refresh(Request())
    return credentials.token


def encode_image_to_base64(image_bytes: bytes) -> str:
    """Encode image bytes to base64 string."""
    return base64.b64encode(image_bytes).decode("utf-8")


def decode_base64_to_image(base64_string: str) -> bytes:
    """Decode base64 string to image bytes."""
    return base64.b64decode(base64_string)


@app.get("/", response_class=HTMLResponse)
async def home():
    """Serve a simple HTML form for testing."""
    return """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Virtual Try-On Tester</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --bg-primary: #0a0a0f;
                --bg-secondary: #12121a;
                --bg-card: #1a1a24;
                --accent: #ff3366;
                --accent-glow: rgba(255, 51, 102, 0.3);
                --text-primary: #f0f0f5;
                --text-secondary: #8888aa;
                --border: #2a2a3a;
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Space Mono', monospace;
                background: var(--bg-primary);
                color: var(--text-primary);
                min-height: 100vh;
                background-image: 
                    radial-gradient(ellipse at 20% 20%, rgba(255, 51, 102, 0.08) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 80%, rgba(102, 51, 255, 0.08) 0%, transparent 50%),
                    linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            }
            
            .container {
                max-width: 900px;
                margin: 0 auto;
                padding: 3rem 1.5rem;
            }
            
            header {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            h1 {
                font-family: 'Syne', sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
                letter-spacing: -0.02em;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .subtitle {
                color: var(--text-secondary);
                font-size: 0.9rem;
            }
            
            .card {
                background: var(--bg-card);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                margin-bottom: 2rem;
            }
            
            .upload-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            
            @media (max-width: 600px) {
                .upload-grid {
                    grid-template-columns: 1fr;
                }
            }
            
            .upload-zone {
                border: 2px dashed var(--border);
                border-radius: 12px;
                padding: 2rem 1rem;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .upload-zone:hover {
                border-color: var(--accent);
                background: rgba(255, 51, 102, 0.05);
            }
            
            .upload-zone.has-file {
                border-color: var(--accent);
                border-style: solid;
            }
            
            .upload-zone input {
                position: absolute;
                inset: 0;
                opacity: 0;
                cursor: pointer;
            }
            
            .upload-icon {
                font-size: 2.5rem;
                margin-bottom: 0.75rem;
            }
            
            .upload-label {
                font-family: 'Syne', sans-serif;
                font-weight: 600;
                font-size: 1rem;
                margin-bottom: 0.25rem;
                color: var(--text-primary);
            }
            
            .upload-hint {
                font-size: 0.75rem;
                color: var(--text-secondary);
            }
            
            .preview-img {
                max-width: 100%;
                max-height: 150px;
                border-radius: 8px;
                margin-top: 1rem;
                display: none;
            }
            
            .options-row {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                margin-bottom: 1.5rem;
            }
            
            .option-group {
                flex: 1;
                min-width: 150px;
            }
            
            label {
                display: block;
                font-size: 0.75rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            select, input[type="number"] {
                width: 100%;
                padding: 0.75rem 1rem;
                background: var(--bg-secondary);
                border: 1px solid var(--border);
                border-radius: 8px;
                color: var(--text-primary);
                font-family: 'Space Mono', monospace;
                font-size: 0.9rem;
            }
            
            select:focus, input[type="number"]:focus {
                outline: none;
                border-color: var(--accent);
            }
            
            .submit-btn {
                width: 100%;
                padding: 1rem;
                background: linear-gradient(135deg, var(--accent) 0%, #cc2952 100%);
                border: none;
                border-radius: 12px;
                color: white;
                font-family: 'Syne', sans-serif;
                font-weight: 600;
                font-size: 1.1rem;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px var(--accent-glow);
            }
            
            .submit-btn:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 6px 30px var(--accent-glow);
            }
            
            .submit-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .results {
                display: none;
            }
            
            .results.show {
                display: block;
            }
            
            .results-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }
            
            .result-img {
                width: 100%;
                border-radius: 12px;
                border: 1px solid var(--border);
            }
            
            .loading {
                display: none;
                text-align: center;
                padding: 2rem;
            }
            
            .loading.show {
                display: block;
            }
            
            .spinner {
                width: 40px;
                height: 40px;
                border: 3px solid var(--border);
                border-top-color: var(--accent);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .error {
                background: rgba(255, 51, 102, 0.1);
                border: 1px solid var(--accent);
                border-radius: 8px;
                padding: 1rem;
                margin-top: 1rem;
                display: none;
            }
            
            .error.show {
                display: block;
            }
            
            .tips {
                background: rgba(102, 51, 255, 0.1);
                border: 1px solid rgba(102, 51, 255, 0.3);
                border-radius: 12px;
                padding: 1.5rem;
            }
            
            .tips h3 {
                font-family: 'Syne', sans-serif;
                font-size: 1rem;
                margin-bottom: 0.75rem;
                color: #aa88ff;
            }
            
            .tips ul {
                margin-left: 1.25rem;
                font-size: 0.85rem;
                color: var(--text-secondary);
                line-height: 1.8;
            }
            
            .tips strong {
                color: var(--text-primary);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Virtual Try-On</h1>
                <p class="subtitle">Test Google's AI clothing try-on API</p>
            </header>
            
            <form id="tryonForm" class="card">
                <div class="upload-grid">
                    <div class="upload-zone" id="personZone">
                        <input type="file" name="person_image" id="personInput" accept="image/*" required>
                        <div class="upload-icon">👤</div>
                        <div class="upload-label">Person Image</div>
                        <div class="upload-hint">Upload a photo of the person</div>
                        <img class="preview-img" id="personPreview">
                    </div>
                    
                    <div class="upload-zone" id="productZone">
                        <input type="file" name="product_image" id="productInput" accept="image/*" required>
                        <div class="upload-icon">👕</div>
                        <div class="upload-label">Product Image</div>
                        <div class="upload-hint">Upload a clothing item photo</div>
                        <img class="preview-img" id="productPreview">
                    </div>
                </div>
                
                <div class="options-row">
                    <div class="option-group">
                        <label for="sampleCount">Number of Results</label>
                        <select name="sample_count" id="sampleCount">
                            <option value="1">1 image</option>
                            <option value="2">2 images</option>
                            <option value="3">3 images</option>
                            <option value="4" selected>4 images</option>
                        </select>
                    </div>
                    
                    <div class="option-group">
                        <label for="baseSteps">Quality Steps</label>
                        <input type="number" name="base_steps" id="baseSteps" value="32" min="1" max="100">
                    </div>
                </div>
                
                <button type="submit" class="submit-btn">Generate Try-On ✨</button>
                
                <div class="error" id="error"></div>
            </form>
            
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p>Generating your try-on images...</p>
                <p class="upload-hint">This may take 30-60 seconds</p>
            </div>
            
            <div class="results card" id="results">
                <h2 style="font-family: 'Syne', sans-serif; margin-bottom: 1rem;">Results</h2>
                <div class="results-grid" id="resultsGrid"></div>
            </div>
            
            <div class="tips">
                <h3>💡 Tips for Best Results</h3>
                <ul>
                    <li><strong>Person image:</strong> Use a clear, well-lit full/upper body photo with a neutral pose</li>
                    <li><strong>Product image:</strong> Use flat-lay photos or garments on mannequins (not worn by someone)</li>
                    <li><strong>Quality:</strong> Higher resolution images produce better results</li>
                    <li><strong>Background:</strong> Clean backgrounds work best for product images</li>
                </ul>
            </div>
        </div>
        
        <script>
            // Preview uploaded images
            function setupPreview(inputId, previewId, zoneId) {
                const input = document.getElementById(inputId);
                const preview = document.getElementById(previewId);
                const zone = document.getElementById(zoneId);
                
                input.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            preview.src = e.target.result;
                            preview.style.display = 'block';
                            zone.classList.add('has-file');
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }
            
            setupPreview('personInput', 'personPreview', 'personZone');
            setupPreview('productInput', 'productPreview', 'productZone');
            
            // Form submission
            document.getElementById('tryonForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const form = e.target;
                const formData = new FormData(form);
                
                const loading = document.getElementById('loading');
                const results = document.getElementById('results');
                const error = document.getElementById('error');
                const submitBtn = form.querySelector('.submit-btn');
                
                loading.classList.add('show');
                results.classList.remove('show');
                error.classList.remove('show');
                submitBtn.disabled = true;
                
                try {
                    const response = await fetch('/try-on', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const data = await response.json();
                    
                    if (!response.ok) {
                        throw new Error(data.detail || 'Something went wrong');
                    }
                    
                    const grid = document.getElementById('resultsGrid');
                    grid.innerHTML = '';
                    
                    data.images.forEach((img, i) => {
                        const imgEl = document.createElement('img');
                        imgEl.src = `data:${img.mime_type};base64,${img.data}`;
                        imgEl.className = 'result-img';
                        imgEl.alt = `Try-on result ${i + 1}`;
                        grid.appendChild(imgEl);
                    });
                    
                    results.classList.add('show');
                } catch (err) {
                    error.textContent = err.message;
                    error.classList.add('show');
                } finally {
                    loading.classList.remove('show');
                    submitBtn.disabled = false;
                }
            });
        </script>
    </body>
    </html>
    """


@app.post("/try-on")
async def virtual_try_on(
    person_image: UploadFile = File(..., description="Image of the person"),
    product_image: UploadFile = File(..., description="Image of the clothing product"),
    sample_count: int = Form(default=4, ge=1, le=4),
    base_steps: int = Form(default=32, ge=1),
):
    """
    Generate virtual try-on images.
    
    - **person_image**: Upload a photo of the person
    - **product_image**: Upload a photo of the clothing item
    - **sample_count**: Number of result images (1-4)
    - **base_steps**: Quality steps (higher = better quality but slower)
    """
    if not PROJECT_ID:
        raise HTTPException(
            status_code=500,
            detail="GOOGLE_CLOUD_PROJECT environment variable not set. Check your .env file."
        )
    
    # Read and encode images
    person_bytes = await person_image.read()
    product_bytes = await product_image.read()
    
    person_base64 = encode_image_to_base64(person_bytes)
    product_base64 = encode_image_to_base64(product_bytes)
    
    # Build the API request
    url = f"https://{REGION}-aiplatform.googleapis.com/v1/projects/{PROJECT_ID}/locations/{REGION}/publishers/google/models/{MODEL_ID}:predict"
    
    payload = {
        "instances": [
            {
                "personImage": {
                    "image": {
                        "bytesBase64Encoded": person_base64
                    }
                },
                "productImages": [
                    {
                        "image": {
                            "bytesBase64Encoded": product_base64
                        }
                    }
                ]
            }
        ],
        "parameters": {
            "sampleCount": sample_count,
            "baseSteps": base_steps,
            "personGeneration": "allow_adult",
        }
    }
    
    # Get access token and make request
    try:
        access_token = get_access_token()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to get Google Cloud credentials. Make sure you're authenticated with 'gcloud auth application-default login'. Error: {str(e)}"
        )
    
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }
    
    async with httpx.AsyncClient(timeout=120.0) as client:
        response = await client.post(url, json=payload, headers=headers)
    
    if response.status_code != 200:
        raise HTTPException(
            status_code=response.status_code,
            detail=f"API Error: {response.text}"
        )
    
    result = response.json()
    
    # Extract images from response
    images = []
    for prediction in result.get("predictions", []):
        images.append({
            "data": prediction.get("bytesBase64Encoded"),
            "mime_type": prediction.get("mimeType", "image/png")
        })
    
    return {"images": images, "count": len(images)}


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {
        "status": "ok",
        "project_id": PROJECT_ID,
        "region": REGION,
        "model": MODEL_ID
    }

