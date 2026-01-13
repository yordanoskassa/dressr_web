import InfoPage from "../InfoPage"

export default function Photoshoots() {
  return (
    <InfoPage
      title="AI Photoshoots"
      subtitle="Generate professional fashion photography without the studio."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Studio Quality, Zero Hassle</h2>
          <p className="text-gray-600 mb-6">
            Create stunning product photography with AI. No models, no photographers, no studio rental. Just upload your products and get professional imagery in minutes.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">What You Get</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>On-model photography</strong> — Realistic images of your clothes worn by AI models</li>
            <li><strong>Consistent lighting</strong> — Perfect studio lighting every time</li>
            <li><strong>Multiple angles</strong> — Generate various poses and perspectives</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Cost Comparison</h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Traditional shoot</strong> — $500-5,000+ per product</li>
            <li><strong>dressr AI</strong> — A fraction of the cost, unlimited iterations</li>
          </ul>
        </div>
      }
    />
  )
}
