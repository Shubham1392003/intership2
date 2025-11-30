import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-12 md:py-24 bg-gray-50">

      {/* Figma Background Box */}
      <div className="absolute top-[110px] left-[72px] w-[1311px] h-[603px] bg-[#0309320A] rounded-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Health Desk Clinic:
              <br />
              All Natural Supplements
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched
              formulas that actually work. Our all-natural, organic health supplements are designed to give your body
              what it needs to thrive and optimize your health each day!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center mt-6">
            <Image
              src="/doctor.png"
              alt="Health Desk Doctor"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  )
}
