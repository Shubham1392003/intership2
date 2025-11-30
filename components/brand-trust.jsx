import Image from "next/image"

export default function BrandTrust() {
  const badges = [
    { img: "/leave.png", label: "All Natural" },
    { img: "/rabbit.png", label: "Cruelty-Free" },
    { img: "/batch.png", label: "Money-back Guarantee" },
    { img: "/heart-hand.png", label: "Giving back" },
    { img: "/dna-cancel.png", label: "Non-GMO" },
  ]

  return (
    <section className="flex justify-center my-20">

      <div
        className="p-16 text-center shadow-sm"
        style={{
          width: "1294px",
          height: "414px",
          backgroundImage: "url('/brand-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading */}
        <h3 className="text-4xl font-bold text-gray-900 mb-3">
          A Brand That You Can Trust
        </h3>

        <p className="text-gray-600 mb-12 text-lg">
          Our results-driven supplements are made with premium & safe ingredients
        </p>

        {/* Icons Row */}
        <div className="flex justify-center gap-12 mt-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={badge.img}
                alt={badge.label}
                width={60}
                height={60}
                className="object-contain"
              />
              <p className="text-sm font-semibold text-gray-900 mt-3">
                {badge.label}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
