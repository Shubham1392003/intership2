// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, MessageCircle, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* DISCLAIMER */}
        <div className="bg-gray-200 rounded-lg p-6 mb-8 text-center text-xl text-gray-600">
          <p className="mb-2">
            These statements have not been evaluated by the Food and Drug Administration.
          </p>
          <p>
            These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
          </p>
        </div>

        {/* PAYMENT METHODS — SINGLE IMAGE */}
        <div className="flex justify-center mb-8">
          <Image
            src="/card1.png"   // <-- your single image here
            alt="Payment Methods"
            width={300}
            height={60}
            className="object-contain"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* COPYRIGHT WITH YELLOW HIGHLIGHT */}
            <p className="text-sm text-gray-700">
              <span className="text-sm text-gray-600 flex items-center gap-4">
                © 2025, Health Desk Clinic. All Rights Reserved.
              </span>
            </p>

            {/* Footer Links + Social Icons */}
            <div className="flex items-center gap-6">
              {/* Text links */}
              <nav className="text-sm text-gray-600 flex items-center gap-4">
                <Link href="#" className="hover:text-[#145EAD]">Terms And Conditions</Link>
                <span className="text-gray-300">|</span>
                <Link href="#" className="hover:text-[#145EAD]">Privacy Policy</Link>
                <span className="text-gray-300">|</span>
                <Link href="#" className="hover:text-[#145EAD]">Contact Us</Link>
              </nav>

              
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
