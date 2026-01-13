import InfoPage from "../InfoPage"

export default function Careers() {
  return (
    <InfoPage
      title="Careers"
      subtitle="Join us in building the future of fashion tech."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Work at dressr</h2>
          <p className="text-gray-600 mb-6">
            We're a small, fast-moving team building AI tools for the fashion industry. We value creativity, ownership, and shipping great products.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Impactful work</strong> — Your contributions directly shape the product</li>
            <li><strong>Learning environment</strong> — Work with cutting-edge AI technology</li>
            <li><strong>Flexibility</strong> — Remote-friendly, async communication</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Open Positions</h3>
          <p className="text-gray-600 mb-4">
            We're always looking for talented people. Even if you don't see a role that fits, reach out.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600">
              Interested? Send your resume and a note about what excites you to{" "}
              <a href="mailto:careers@dressr.app" className="text-[#0A66C2] hover:underline">careers@dressr.app</a>
            </p>
          </div>
        </div>
      }
    />
  )
}
