import Link from "next/link"

export default function Features() {
  const features = [
    {
      title: "100% Natural Components",
      subtitle: "Nature-Powered Wellness You Can Trust",
      description:
        "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits.",
      ctaText: "Learn More",
      image: "/fruits.jpg",
      imagePosition: "left",
    },
    {
      title: "Research-Backed Formulations",
      subtitle: "Formulated with Clinically Tested Ingredients",
      description:
        "We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.",
      ctaText: "Learn More",
      image: "/medical-work.jpg",
      imagePosition: "right",
    },
    {
      title: "Eco-Conscious Manufacturing",
      subtitle: "Sustainable from Source to Shelf",
      description:
        "Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact.",
      ctaText: "Learn More",
      image: "/manufacturing.jpg",
      imagePosition: "left",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Health Desk
          <br />
          The Future Of Smart Health
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          At Health Desk, we are committed to producing supplements that harness the power of all-natural superfoods.
          Our products help support the body's natural processes, improving our customers' quality of life.
        </p>

        {/* Features */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:auto-cols-fr" : ""}`}
            >
              {feature.imagePosition === "right" ? (
                <>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{feature.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    <Link
                      href="/learn-more"
                      className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded text-sm font-semibold hover:bg-blue-50 transition"
                    >
                      {feature.ctaText}
                    </Link>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover rounded-lg"
                      style={{ width: "465px", height: "414px" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* LEFT IMAGE */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover rounded-lg"
                      style={{ width: "465px", height: "414px" }}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{feature.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    <Link
                      href="/learn-more"
                      className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded text-sm font-semibold hover:bg-blue-50 transition"
                    >
                      {feature.ctaText}
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
