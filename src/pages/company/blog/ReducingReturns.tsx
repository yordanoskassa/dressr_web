import InfoPage from "../../InfoPage"

export default function ReducingReturns() {
  return (
    <InfoPage
      title="Reducing Returns with Virtual Try-On"
      subtitle="Why letting customers see how clothes fit before buying leads to happier customers and fewer returns."
      content={
        <article className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-500 mb-6">December 2025 • 4 min read</p>
          
          <p className="text-gray-600 mb-6 text-lg">
            Returns are the silent killer of e-commerce profitability. In fashion, return rates can reach 30-40%, with "didn't fit as expected" being the most common reason. Virtual try-on technology is changing this equation.
          </p>

          <h2 className="text-2xl font-serif mb-4">The True Cost of Returns</h2>
          <p className="text-gray-600 mb-6">
            When a customer returns an item, the brand doesn't just lose the sale. They pay for return shipping, processing, quality inspection, and often have to discount the item for resale. A $50 return can easily cost $15-20 in operational expenses.
          </p>
          <p className="text-gray-600 mb-6">
            Beyond the direct costs, returns create environmental waste. Returned clothing often ends up in landfills rather than being resold, contributing to fashion's sustainability problem.
          </p>

          <h2 className="text-2xl font-serif mb-4">How Virtual Try-On Helps</h2>
          <p className="text-gray-600 mb-6">
            Virtual try-on lets customers see how a garment will look on their body type before purchasing. This simple capability addresses the core uncertainty that drives returns: "Will this look good on me?"
          </p>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Visual confidence</strong> — Customers can see the fit, drape, and proportions on a body similar to theirs</li>
            <li><strong>Reduced uncertainty</strong> — No more guessing how a size Medium will actually look</li>
            <li><strong>Better decisions</strong> — Customers buy what they actually want, not what they hope will work</li>
          </ul>

          <h2 className="text-2xl font-serif mb-4">The Numbers</h2>
          <p className="text-gray-600 mb-6">
            Brands implementing virtual try-on typically see:
          </p>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>25-30% reduction</strong> in return rates</li>
            <li><strong>15-20% increase</strong> in conversion rates</li>
            <li><strong>Higher average order value</strong> as customers buy with more confidence</li>
          </ul>

          <h2 className="text-2xl font-serif mb-4">Implementation is Easier Than You Think</h2>
          <p className="text-gray-600 mb-6">
            Modern virtual try-on solutions integrate directly with existing e-commerce platforms. There's no need to rebuild your website or change your product photography workflow.
          </p>
          <p className="text-gray-600">
            The ROI is clear: reduced returns, higher conversions, and happier customers who come back to buy again.
          </p>
        </article>
      }
    />
  )
}
