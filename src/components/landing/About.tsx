export function About() {
  return (
    <section id="about" className="py-24 px-8 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">About</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6 tracking-tight">Reimagining fashion commerce</h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              We develop proprietary AI models trained specifically for fashion, enabling brands to create premium imagery and personalized try-on experiences at scale.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our mission: make high-quality visualization accessible to every brand while helping shoppers make confident decisions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600">AI Photography</span>
              <span className="bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600">Virtual Try-On</span>
              <span className="bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600">E-commerce</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-8">Why we're building this</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Democratize Fashion Content</h4>
                  <p className="text-gray-500 text-sm">Small brands deserve luxury-level imagery</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Reduce Fashion Waste</h4>
                  <p className="text-gray-500 text-sm">Better visualization, fewer returns</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Personalize Shopping</h4>
                  <p className="text-gray-500 text-sm">See clothes on someone like you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
