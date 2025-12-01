"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Link from "next/link"

const tabs = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"]

const products = [
  {
    name: "Dent Pure",
    image: "/DentPure.png",
    rating: 5,
    reviews: 128,
    price: "$29.99",
  },
  {
    name: "True Fem",
    image: "/Truefem.png",
    rating: 5,
    reviews: 95,
    price: "$34.99",
  },
  {
    name: "Vita Renew",
    image: "/ViteRenew.png",
    rating: 5,
    reviews: 142,
    price: "$39.99",
  },
  {
    name: "ProstaZen",
    image: "/Prostazen.png",
    rating: 5,
    reviews: 87,
    price: "$44.99",
  },
  {
    name: "Nerve Freedom",
    image: "/NerveFreedom.png",
    rating: 5,
    reviews: 156,
    price: "$35.99",
  },
]

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState("Results-Driven")

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Best Sellers</h2>
        <p className="text-gray-600 mb-8">
          Formulated with science-backed all-natural ingredients, our unique supplements support holistic health,
          healing & wellness.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold text-sm md:text-base transition ${
                activeTab === tab
                  ? "text-gray-900 border-b-2 border-gray-900 pb-2"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-3">{product.reviews} reviews</p>
              <Link
                href={`/product/${product.name.toLowerCase().replace(/\s/g, "-")}`}
                className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
