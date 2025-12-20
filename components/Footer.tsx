"use client";

import Link from "next/link";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white text-[#d6b28a]">
      {/* top divider */}
      <div className="h-px w-full bg-[#d6b28a]/40" />

      {/* main */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:gap-14 md:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#d6b28a]">
              For all inquiries, please write to{" "}
              <a
                href="mailto:contact@poetrydubai.com"
                className="underline decoration-[#d6b28a]/60 underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b28a]/40"
              >
                contact@poetrydubai.com
              </a>
            </p>

            <p className="text-sm text-[#d6b28a]/85 max-w-md leading-relaxed">
              Anantara Downtown Hotel Dubai <br />
              Business Bay, Dubai, UAE <br />
              Phone:{" "}
              <a
                href="tel:+971563956179"
                className="underline decoration-[#d6b28a]/40 underline-offset-4 hover:opacity-80"
              >
                +971 56 395 6179
              </a>
              <br />
              <a
                href="tel:+9710563956179"
                className="underline decoration-[#d6b28a]/40 underline-offset-4 hover:opacity-80"
              >
                +971 05 639 56179
              </a>
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 sm:gap-5">
              <a
                className="inline-flex items-center justify-center rounded-md border border-[#d6b28a]/70 p-3 hover:bg-[#d6b28a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b28a]/40"
                href="https://www.instagram.com/poetrydubai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poetry Dubai on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="inline-flex items-center justify-center rounded-md border border-[#d6b28a]/70 p-3 hover:bg-[#d6b28a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b28a]/40"
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poetry Dubai on Pinterest"
              >
                <FaPinterestP />
              </a>

              <a
                className="inline-flex items-center justify-center rounded-md border border-[#d6b28a]/70 p-3 hover:bg-[#d6b28a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b28a]/40"
                href="mailto:contact@poetrydubai.com"
                aria-label="Email Poetry Dubai"
              >
                <HiOutlineMail />
              </a>
            </div>

            {/* MAP */}
            <div className="mt-8 overflow-hidden rounded-xl border border-[#d6b28a]/40">
              <iframe
                title="Poetry Dubai Location"
                src="https://www.google.com/maps?q=Anantara%20Downtown%20Dubai&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: PAGES */}
          <div className="border-[#d6b28a]/40 pt-10 md:pt-0 md:border-l md:pl-12 flex items-center justify-center border-t md:border-t-0">
            <div className="text-center">
              <h3 className="mb-8 font-serif text-3xl text-[#d6b28a]">Pages</h3>

              <nav className="flex flex-col gap-4 text-lg text-[#d6b28a]/85">
                <Link href="/">Home</Link>
                <a href="#collections">Collections</a>
                <Link href="/bar">Accessories</Link>
                <Link href="/gifting">Gifting</Link>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div className="h-px w-full bg-[#d6b28a]/40" />

      {/* copyright */}
      <div className="py-6 text-center text-sm text-[#d6b28a]/75">
        © Poetry Dubai 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
