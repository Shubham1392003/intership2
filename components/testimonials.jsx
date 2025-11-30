// components/FollowUsAndTestimonials.jsx
import Image from "next/image";
import { Facebook, Twitter, Send, Linkedin } from "lucide-react";
import React from "react";

const StarFilled = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-yellow-400"
    aria-hidden
  >
    <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.8 24 12 20.01 4.2 24l2.1-8.69L.6 9.75l7.732-1.732L12 .587z" />
  </svg>
);

const testimonials = [
  {
    product: "TestoBites",
    image: "/testobites.png",
    bgImage: "/card-bg.png",
    rating: 5,
    text:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    author: "Ryan R.",
  },
  {
    product: "Vita Renew",
    image: "/vitarenew.png",
    bgImage: "/card-bg.png",
    rating: 5,
    text:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    author: "Jamie Fields",
  },
  {
    product: "Nerve Freedom",
    image: "/NerveFreedom.png",
    bgImage: "/card-bg.png",
    rating: 5,
    text:
      "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* ---------------- TESTIMONIALS FIRST ---------------- */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Verified Customer Testimonials
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="relative rounded-[12px] shadow-sm border border-gray-200"
                style={{
                  width: "300px",
                  height: "295px",
                  backgroundColor: "#E9F7FA",
                  backgroundImage: `url(${t.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "visible",
                }}
              >
                <div
                  className="
                    absolute
                    -top-6
                    -left-6
                    w-16
                    h-16
                    rounded-lg
                    flex items-center justify-center
                    z-30
                  "
                  style={{
                    background: "white",
                    boxShadow: "0 6px 14px rgba(16,24,40,0.12)",
                    padding: 4,
                    borderRadius: 10,
                    border: "2px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <Image
                    src={t.image}
                    alt={t.product}
                    width={64}
                    height={64}
                    className="object-cover rounded-sm"
                  />
                </div>

                <div className="p-8 pt-14 h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 text-lg">{t.product}</h3>

                  <div className="flex gap-1 mt-2 mb-4" aria-hidden>
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <StarFilled key={idx} size={16} />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm mb-6 flex-1">
                    {t.text}
                  </p>

                  <p className="text-sm text-gray-500 font-medium">- {t.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FOLLOW US SECOND ---------------- */}
      <section className="pt-2 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <div className="flex items-center justify-center gap-1 mb-6">
            <Image
              src="/Health-care.png"
              alt="Health Desk Logo"
              width={155}
              height={155}
              className="object-contain"
            />
          </div>

          <div className="mb-6">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Follow Us
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <Facebook size={20} color="white" />
            </a>

            <a className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <Twitter size={20} color="white" />
            </a>

            <a className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <Send size={20} color="white" />
            </a>

            <a className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <Linkedin size={20} color="white" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
