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
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-8">
            <p className="text-[17px] leading-relaxed text-[#d6b28a]">
              For all inquiries, please write to{" "}
              <a
                href="mailto:contact@poetrydubai.com"
                className="underline decoration-[#d6b28a]/60 underline-offset-4 hover:opacity-80"
              >
                contact@poetrydubai.com
              </a>
            </p>

            <p className="text-sm text-[#d6b28a]/85 max-w-md">
              Anantara Downtown Hotel Dubai <br />
              Business Bay, Dubai, UAE <br />
              Phone: +971 4 444 1444
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5">
              <a className="border border-[#d6b28a]/70 p-3 rounded-md" href="#">
                <FaInstagram />
              </a>

              <a
                className="border border-[#d6b28a]/70 p-3 rounded-md"
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP />
              </a>

              <a
                className="border border-[#d6b28a]/70 p-3 rounded-md"
                href="mailto:contact@poetrydubai.com"
              >
                <HiOutlineMail />
              </a>
            </div>

            {/* MAP */}
            <div className="mt-8 overflow-hidden rounded-xl border border-[#d6b28a]/40">
              <iframe
                title="Poetry Dubai Location"
                src="https://www.google.com/maps?q=Anantara%20Downtown%20Dubai&output=embed"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: PAGES */}
          <div className="border-t border-[#d6b28a]/40 pt-10 md:pt-0 md:border-t-0 md:border-l flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-serif text-3xl text-[#d6b28a] mb-8">
               
              </h3>

              <nav className="flex flex-col gap-4 text-[#d6b28a]/85 text-lg">
                <Link href="/">Home</Link>
                <Link href="#collections">Collections</Link>
                <Link href="/bar">Bar Accessories</Link>
                <Link href="/gifting">Gifting</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
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
