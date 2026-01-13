import InfoPage from "../InfoPage"

export default function ProductToModel() {
  return (
    <InfoPage
      title="Product to Model"
      subtitle="Transform flat-lay product photos into stunning on-model imagery."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">From Flat-Lay to Fashion</h2>
          <p className="text-gray-600 mb-6">
            Upload a simple product photo and our AI will generate realistic on-model images in seconds. No photoshoot required.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">How It Works</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Upload your product</strong> — A simple flat-lay or mannequin shot works great</li>
            <li><strong>Choose your model</strong> — Select from diverse AI-generated models or use your own</li>
            <li><strong>Generate</strong> — Get studio-quality on-model photos instantly</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>E-commerce brands</strong> — Scale your product imagery without expensive shoots</li>
            <li><strong>Marketplaces</strong> — Consistent, professional listings</li>
            <li><strong>Dropshippers</strong> — Transform supplier photos into branded content</li>
          </ul>
        </div>
      }
    />
  )
}
