import InfoPage from "../InfoPage"

export default function About() {
  return (
    <InfoPage
      title="About dressr"
      subtitle="Reimagining fashion commerce with AI."
      content={
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            dressr is building the future of fashion visualization. We develop proprietary AI models specifically trained for fashion, enabling brands to create premium product imagery and offer personalized try-on experiences at scale.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">What We Believe</h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Democratize fashion content</strong> — Small brands deserve the same quality imagery as luxury houses</li>
            <li><strong>Reduce fashion waste</strong> — Better visualization means fewer returns and less environmental impact</li>
            <li><strong>Personalize shopping</strong> — Every shopper should see how clothes look on someone like them</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Our Story</h3>
          <p className="text-gray-600">
            Founded by students at Grand Valley State University, dressr started as a hackathon project and grew into a mission to transform how fashion brands create and showcase their products. We're backed by a passion for AI and a belief that technology can make fashion more accessible and sustainable.
          </p>
        </div>
      }
    />
  )
}
