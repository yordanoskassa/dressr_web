import InfoPage from "../InfoPage"

export default function ApiDocs() {
  return (
    <InfoPage
      title="API Documentation"
      subtitle="Integrate dressr AI into your applications."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Build with dressr</h2>
          <p className="text-gray-600 mb-6">
            Our REST API gives you programmatic access to all dressr features. Generate on-model photos, swap models, and power virtual try-on experiences in your own applications.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Sign up</strong> — Create a dressr account to get your API key</li>
            <li><strong>Authenticate</strong> — Use your API key in request headers</li>
            <li><strong>Make requests</strong> — Call our endpoints to generate images</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Endpoints</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>POST /generate</strong> — Generate on-model images from product photos</li>
            <li><strong>POST /swap</strong> — Swap models in existing photos</li>
            <li><strong>POST /tryon</strong> — Virtual try-on with customer photos</li>
          </ul>
          
          <p className="text-gray-600">
            Full API documentation coming soon. Contact us for early access.
          </p>
        </div>
      }
    />
  )
}
