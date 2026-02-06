import { Link } from "react-router-dom"
import { ArrowLeft, Sparkles, Target, Leaf, Users } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-sign text-lg">d</span>
            </div>
            <span className="font-sign text-2xl">dressr</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">About dressr</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reimagining fashion commerce with AI-powered visualization technology.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                dressr is building the future of fashion visualization. We develop proprietary AI models 
                specifically trained for fashion, enabling brands to create premium product imagery and 
                offer personalized try-on experiences at scale. Our goal is to make high-quality product 
                visualization accessible to every fashion brand while helping shoppers make confident 
                purchasing decisions.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">What We Believe</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Democratize Fashion Content",
                  description: "Small brands deserve the same quality imagery as luxury houses. We level the playing field."
                },
                {
                  icon: Leaf,
                  title: "Reduce Fashion Waste",
                  description: "Better visualization means fewer returns and less environmental impact on our planet."
                },
                {
                  icon: Users,
                  title: "Personalize Shopping",
                  description: "Every shopper should see how clothes look on someone like them before buying."
                }
              ].map((value, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift group"
                >
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
              </div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Story</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Founded by a student at Grand Valley State University, dressr started as a hackathon project 
                  and grew into a mission to transform how fashion brands create and showcase their products.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're backed by a passion for AI and a belief that technology can make fashion more accessible, 
                  sustainable, and personalized for everyone. What began as an idea to solve the visualization 
                  problem in e-commerce has evolved into a comprehensive platform serving brands worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-serif mb-4">Ready to transform your fashion content?</h2>
            <p className="text-gray-600 mb-8">Join hundreds of brands using dressr AI today.</p>
            <Link 
              to="/dashboard" 
              className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            >
              Get Started Free
              <Sparkles className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <span className="text-white font-sign text-sm">d</span>
            </div>
            <span className="font-sign text-xl">dressr</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 dressr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
