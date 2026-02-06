import { Linkedin } from "lucide-react"

export function Founder() {
  return (
    <section id="team" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Team</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4 tracking-tight">Meet the founder</h2>
        </div>
        
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-5 overflow-hidden ring-2 ring-gray-100">
                <img 
                  src="/yordanos.jpg" 
                  alt="Yordanos Kassa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">Yordanos Kassa</h3>
              <p className="text-gray-400 text-sm mb-4">Founder</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                CIS Student at GVSU. Developer at Vetr Health. Building AI solutions for healthcare and fashion.
              </p>
              <a 
                href="https://www.linkedin.com/in/yordanos-kassa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0A66C2] text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.linkedin.com/company/dressrai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Follow dressr
          </a>
        </div>
      </div>
    </section>
  )
}
