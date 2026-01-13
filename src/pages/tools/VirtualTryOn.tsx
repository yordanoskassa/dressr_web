import InfoPage from "../InfoPage"

export default function VirtualTryOn() {
  return (
    <InfoPage
      title="Virtual Try-On"
      subtitle="Let your customers see how clothes look on them before buying."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">See Before You Buy</h2>
          <p className="text-gray-600 mb-6">
            Our AI-powered virtual try-on technology allows shoppers to visualize how garments will look on their body type, reducing uncertainty and increasing purchase confidence.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">How It Works</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Upload a photo</strong> — Customers upload a full-body photo or use their camera</li>
            <li><strong>Select garments</strong> — Browse your catalog and pick items to try on</li>
            <li><strong>Instant visualization</strong> — See realistic results in seconds</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Benefits</h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Reduce returns</strong> — Customers know what they're getting</li>
            <li><strong>Increase conversions</strong> — Confidence leads to purchases</li>
            <li><strong>Enhance engagement</strong> — Interactive shopping experiences</li>
          </ul>
        </div>
      }
    />
  )
}
