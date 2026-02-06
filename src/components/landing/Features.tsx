import { ArrowRight } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Capabilities</span>
        <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4 tracking-tight">Built for fashion brands</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Studio-quality AI photography. No compromises on your brand standards.
        </p>
      </div>

      {/* Feature 1 - Product to Model */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-28">
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
          <img
            src="https://ext.same-assets.com/2206706892/1993143932.jpeg"
            alt="Product to Model"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">01</span>
          <h3 className="text-2xl md:text-3xl font-serif mt-3 mb-4 tracking-tight">Product to Model</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Transform flat-lay photos into realistic on-model imagery. No photoshoot required — just upload your product and let AI do the rest.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-black hover:gap-3 font-medium text-sm transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Feature 2 - Model Swap */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-28">
        <div className="order-2 md:order-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">02</span>
          <h3 className="text-2xl md:text-3xl font-serif mt-3 mb-4 tracking-tight">Model Swap</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Change the model while preserving everything else — product, pose, lighting, background. Reach every audience without reshoots.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-black hover:gap-3 font-medium text-sm transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
          <img
            src="https://ext.same-assets.com/2206706892/3497204393.jpeg"
            alt="Model Swap"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature 3 - Consistent Models */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
          <img
            src="https://ext.same-assets.com/2206706892/1753995726.jpeg"
            alt="Consistent Models"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">03</span>
          <h3 className="text-2xl md:text-3xl font-serif mt-3 mb-4 tracking-tight">Consistent Models</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Keep your models identical across every shoot. Create a recognizable face for your brand and reuse it everywhere.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-black hover:gap-3 font-medium text-sm transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
