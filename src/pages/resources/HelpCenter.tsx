import InfoPage from "../InfoPage"

export default function HelpCenter() {
  return (
    <InfoPage
      title="Help Center"
      subtitle="Get answers to your questions about dressr."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">How Can We Help?</h2>
          <p className="text-gray-600 mb-6">
            Find answers to common questions and learn how to get the most out of dressr.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900">What image formats are supported?</h4>
              <p className="text-gray-600">We support JPG, PNG, and WebP images up to 10MB.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">How long does generation take?</h4>
              <p className="text-gray-600">Most images are generated in 10-30 seconds.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Can I use the images commercially?</h4>
              <p className="text-gray-600">Yes, all generated images are yours to use for any purpose.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">What if I'm not happy with the results?</h4>
              <p className="text-gray-600">You can regenerate images or adjust settings. Credits are only used for successful generations.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
          <p className="text-gray-600">
            Need more help? Email us at <a href="mailto:support@dressr.app" className="text-[#0A66C2] hover:underline">support@dressr.app</a>
          </p>
        </div>
      }
    />
  )
}
