import InfoPage from "../InfoPage"

export default function Pricing() {
  return (
    <InfoPage
      title="Pricing"
      subtitle="Simple, transparent pricing for every stage of growth."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Start Free, Scale As You Grow</h2>
          <p className="text-gray-600 mb-6">
            Try dressr with free credits. Upgrade when you need more.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-4">$0</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>10 free credits</li>
                <li>All features included</li>
                <li>Community support</li>
              </ul>
            </div>
            <div className="border-2 border-[#1a1a1a] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4">$29/mo</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>100 credits/month</li>
                <li>Priority generation</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Unlimited credits</li>
                <li>API access</li>
                <li>Dedicated support</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-600">
            Questions? Contact us at <a href="mailto:sales@dressr.app" className="text-[#0A66C2] hover:underline">sales@dressr.app</a>
          </p>
        </div>
      }
    />
  )
}
