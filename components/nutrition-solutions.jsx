import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    img: "/weight-loss.png",
    title: "Weight Loss",
    description: "Find relief with supplements that support your journey to a healthier you.",
  },
  {
    img: "/nerve.png",
    title: "Nerve Pain",
    description: "Feel better with our products that support healthy nerve function.",
  },
  {
    img: "/skincare-routine.png",
    title: "Skin Care",
    description: "Enhance your natural glow with our naturally sourced products.",
  },
  {
    img: "/medical-history.png",
    title: "Men's Health",
    description: "Discover vitality with products designed through wellness research.",
  },
  {
    img: "/doctor1.png",
    title: "Women's Health",
    description: "Explore wellness products crafted for every stage of life.",
  },
]

export default function NutritionSolutions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Nutrition Solutions
          <br />
          for Your Complete Well-Being
        </h2>

        {/* FULL-WIDTH MARQUEE WRAPPER */}
        <div className="w-full overflow-hidden py-6">

          {/* MOVING TRACK */}
          <div className="cards-marquee space-x-6">

            {/* First set of cards */}
            {solutions.map((solution, index) => (
              <div
                key={`set1-${index}`}
                className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition
                   flex flex-col overflow-hidden whitespace-normal break-words
                   w-64 flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={solution.img}
                    alt={solution.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mb-3">{solution.title}</h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <Link
                  href={`/shop?category=${solution.title.toLowerCase().replace(/['\s]/g, "")}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition mt-auto"
                >
                  Buy now
                </Link>
              </div>
            ))}

            {/* Duplicate set (loop effect) */}
            {solutions.map((solution, index) => (
              <div
                key={`set2-${index}`}
                className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition
                   flex flex-col overflow-hidden whitespace-normal break-words
                   w-64 flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={solution.img}
                    alt={solution.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mb-3">{solution.title}</h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <Link
                  href={`/shop?category=${solution.title.toLowerCase().replace(/['\s]/g, "")}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition mt-auto"
                >
                  Buy now
                </Link>
              </div>
            ))}

          </div>
        </div>      
    

    </div>
    </section >
  )
}
