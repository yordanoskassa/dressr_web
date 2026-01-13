import InfoPage from "../InfoPage"

export default function ModelSwap() {
  return (
    <InfoPage
      title="Model Swap"
      subtitle="Change models while keeping your product perfectly preserved."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Same Product, Different Model</h2>
          <p className="text-gray-600 mb-6">
            Swap the model in your existing product photos while maintaining the exact same pose, lighting, and garment appearance. Perfect for diversifying your catalog without reshoots.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">How It Works</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Upload your photo</strong> — Start with any on-model product image</li>
            <li><strong>Select a new model</strong> — Choose from our diverse model library</li>
            <li><strong>Preserve the product</strong> — The garment stays exactly the same</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Use Cases</h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Diversity</strong> — Show your products on different body types and ethnicities</li>
            <li><strong>Localization</strong> — Tailor imagery for different markets</li>
            <li><strong>A/B testing</strong> — Test which models drive more conversions</li>
          </ul>
        </div>
      }
    />
  )
}
