import Image from "next/image"

export default function CharitableInitiatives() {
  const charities = [
    { img: "/cancer.png", name: "Prostate Cancer Foundation" },
    { img: "/american.png", name: "American Tinnitus Association" },
    { img: "/uspain.png", name: "U.S. Pain Foundation" },
    { img: "/diabetes.png", name: "American Diabetes Association" },
    { img: "/heart.png", name: "American Heart Association" },
  ]

  return (
    <section
      className="py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/brand-bg1.jpg')", // ← your background image
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Charitable Initiatives
          <br />
          Health Care Desk Gives Back
        </h2>

        <p className="text-blue-100 text-center mb-12 text-xl leading-relaxed">
          At Health Care Desk, a portion of our profits are committed to supporting charities 
          and global health research initiatives.
        </p>

        {/* Charity Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {charities.map((charity, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image 
                src={charity.img}
                alt={charity.name}
                width={150}
                height={150}
                className="object-contain mb-3"
              />
              {/* <p className="text-white text-center text-sm font-semibold">{charity.name}</p> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
