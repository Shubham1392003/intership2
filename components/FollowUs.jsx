// components/FollowUs.jsx
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Send,
  Linkedin,
} from "lucide-react";

export default function FollowUs() {
  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* LOGO + TEXT ON ONE HORIZONTAL LINE */}
        <div className="flex items-center justify-center gap-1 mb-6">
          <Image
            src="/Health-care.png"
            alt="Health Desk Logo"
            width={155}
            height={155}
            className="object-contain"
          />
          {/* <span className="text-3xl font-bold text-black tracking-wide">
            HEALTH DESK
          </span>
          <span className="text-sm text-gray-600 font-semibold -ml-10">
            CLINIC
          </span> */}
        </div>

        {/* FOLLOW BUTTON */}
        <div className="mb-6">
          <button
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Follow Us
          </button>
        </div>

        {/* SOCIAL ICONS USING LUCIDE */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full"
          >
            <Facebook size={20} color="white" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full"
          >
            <Twitter size={20} color="white" />
          </a>

          <a
            href="#"
            aria-label="Telegram"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full"
          >
            <Send size={20} color="white" />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full"
          >
            <Linkedin size={20} color="white" />
          </a>
        </div>

      </div>
    </section>
  );
}
