import InfoPage from "../InfoPage"

export default function FittingRooms() {
  return (
    <InfoPage
      title="Virtual Fitting Rooms"
      subtitle="Bring the fitting room experience online."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Try Before You Buy, Online</h2>
          <p className="text-gray-600 mb-6">
            Integrate virtual fitting rooms into your e-commerce store. Let customers see how clothes look on them before purchasing, reducing returns and increasing satisfaction.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Real-time try-on</strong> — Customers see results instantly</li>
            <li><strong>Size recommendations</strong> — AI-powered fit suggestions</li>
            <li><strong>Easy integration</strong> — Works with Shopify, WooCommerce, and custom stores</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Results</h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>30% fewer returns</strong> — Customers know what fits</li>
            <li><strong>25% higher conversion</strong> — Confidence drives purchases</li>
            <li><strong>Increased engagement</strong> — Interactive shopping experiences</li>
          </ul>
        </div>
      }
    />
  )
}
