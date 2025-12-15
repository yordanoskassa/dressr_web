"""
Fashion Product Scraper using Pexels API
Free API with product-style fashion images.
"""

import json
import asyncio
from pathlib import Path
import httpx

PRODUCTS_DIR = Path("products")
PRODUCTS_DIR.mkdir(exist_ok=True)

# Pexels free API key (public demo key - get your own at pexels.com/api)
# For testing, we'll use direct search without API key
PEXELS_API = "https://api.pexels.com/v1"


async def fetch_pexels_images(query: str, count: int = 10, api_key: str = None):
    """Fetch images from Pexels."""
    
    print(f"🔍 Searching Pexels for '{query}'...")
    
    # Use Pexels search page directly (no API key needed)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    }
    
    if api_key:
        headers["Authorization"] = api_key
        url = f"{PEXELS_API}/search?query={query}&per_page={count}&orientation=portrait"
    else:
        # Direct page scrape fallback
        url = f"https://www.pexels.com/search/{query}/"
    
    products = []
    
    async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
        response = await client.get(url, headers=headers)
        
        if api_key and response.status_code == 200:
            data = response.json()
            photos = data.get("photos", [])
            
            for i, photo in enumerate(photos[:count]):
                img_url = photo["src"]["large"]
                
                # Download image
                img_response = await client.get(img_url)
                filename = f"product_{i}.jpg"
                filepath = PRODUCTS_DIR / filename
                
                with open(filepath, "wb") as f:
                    f.write(img_response.content)
                
                products.append({
                    "id": f"prod_{i}",
                    "name": f"Fashion Item {i+1}",
                    "price": f"${29.99 + (i * 10):.2f}",
                    "category": query,
                    "department": "women",
                    "image_url": img_url,
                    "local_image": str(filepath)
                })
                print(f"   ✅ Downloaded product_{i}.jpg")
        else:
            print(f"   ⚠️ API requires key or blocked. Status: {response.status_code}")
    
    return products


async def main():
    print("=" * 50)
    print("🛍️  Pexels Fashion Scraper")
    print("=" * 50)
    
    # Try without API key first
    products = await fetch_pexels_images("sweater clothing", count=10)
    
    if not products:
        print("\n💡 To use Pexels API:")
        print("   1. Get free API key at: https://www.pexels.com/api/")
        print("   2. Run: python scraper_pexels.py YOUR_API_KEY")
    else:
        # Save catalog
        catalog_path = PRODUCTS_DIR / "catalog.json"
        with open(catalog_path, "w") as f:
            json.dump({"products": products, "total": len(products)}, f, indent=2)
        print(f"\n📁 Saved catalog: {catalog_path}")


if __name__ == "__main__":
    import sys
    asyncio.run(main())

