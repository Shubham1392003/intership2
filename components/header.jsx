"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">

          {/* LEFT — Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Health Desk Logo"
                width={45}
                height={45}
              />
            </Link>
          </div>

          {/* RIGHT — Nav + Cart + Mobile Menu */}
          <div className="flex items-center space-x-6">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition">Shop</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link>
            </nav>

            {/* Cart Icon */}
            <Link href="/cart" className="flex items-center">
              <Image
                src="/cart.png"
                alt="Cart Icon"
                width={15}
                height={15}
                className="object-contain"
              />
            </Link>


            {/* Mobile menu button (only on small screens) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Home</Link>
            <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Shop</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">About Us</Link>
            <Link href="/faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">FAQ</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  )
}
