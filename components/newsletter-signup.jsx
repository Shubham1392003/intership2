"use client";

import { useState } from "react";
import Image from "next/image";

export default function newsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">

      {/* ------------------------------------- */}
      {/* 1️⃣ GRAY TOP SECTION */}
      {/* ------------------------------------- */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Have a Question */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Have a Question?</h3>
            <p className="text-gray-600 mt-2">
              Check out our FAQs where we answer the most commonly asked questions
            </p>
            <button className="mt-4 px-5 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50">
              Read FAQs
            </button>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Connect With Us</h3>
            <p className="text-gray-600 mt-2">
              Enjoy free shipping for all orders.
            </p>
            <p className="mt-4 text-xl font-bold">1-800-822-7777</p>
          </div>

          {/* We're Social */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">We're Social</h3>
            <p className="text-gray-600 mt-2">Like us, love us, follow us!</p>
          </div>

        </div>
      </section>


      {/* ------------------------------------- */}
      {/* 2️⃣ BLUE NEWSLETTER STRIP */}
      {/* ------------------------------------- */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Left side text */}
            <div>
              <h2 className="text-3xl text-white">Let's Grow Together</h2>
              <p className="text-blue-100 mt-2">
                We'll keep it simple. Only the news and updates you need.
              </p>
            </div>

            {/* Right side form */}
            <form
              onSubmit={handleSubmit}
              className="bg-blue-900 rounded-md overflow-hidden flex w-full md:w-[480px]"
            >
              <input
                type="email"
                placeholder="Please Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 text-white placeholder-white outline-none"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold border-l border-gray-200 hover:bg-gray-50"
              >
                Submit
              </button>
            </form>

          </div>

          {submitted && (
            <p className="text-center text-green-100 mt-4">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </section>


      {/* ------------------------------------- */}
      {/* 3️⃣ GRAY BOTTOM SECTION (FOOTER AREA) */}
      {/* ------------------------------------- */}
      <section className="bg-gray-100 py-12 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-12">

            {/* LEFT BLOCK WITH VERTICAL LINE */}
            <div className="pr-8 border-r border-black">
              <Image
                src="/Health-care1.png"
                alt="Health Desk"
                width={60}
                height={30}
                className="object-contain"
              />

              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                Address: 7823 Red Oak Trail, Austin, TX, 78745, United States <br />
                Phone: (512) 555-2376 <br />
                Email: Ereforce@outlook.com
              </p>
            </div>

            {/* RIGHT SIDE PRODUCTS */}
            <div className="md:col-span-3">

              {/* 🔵 Our Products */}
              <h4 className="text-[#145EAD] font-bold text-lg mb-4">
                Our Products
              </h4>

              {/* 4 Columns */}
              <div className="grid grid-cols-4 gap-3 text-gray-700 text-sm">

                {/* Column 1 */}
                <div className="leading-7 ">
                  <p>Vita Renew</p>
                  <p>Testobites</p>
                  <p>Audizen</p>
                  <p>Nerve Flow</p>
                  <p>Uro Flow</p>
                </div>

                {/* Column 2 */}
                <div className="leading-7 ">
                  <p>Vita Renew</p>
                  <p>Testobites</p>
                  <p>Audizen</p>
                  <p>Nerve Flow</p>
                  <p>Memof</p>
                </div>

                {/* Column 3 */}
                <div className="leading-7 ">
                  <p>Vita Renew</p>
                  <p>Testobites</p>
                  <p>Audizen</p>
                  <p>Nerve Flow</p>
                  <p>Derma care</p>
                </div>

                {/* Column 4 */}
                <div className="leading-7">
                  <p>Vita Renew</p>
                  <p>Testobites</p>
                  <p>Audizen</p>
                  <p>Nerve Flow</p>
                  <p>Derma care</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
