"use client";

import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterNav() {
  return (
    <footer className="bg-[#FAF7F3]">
      {/* INSTAGRAM STRIP */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#8F2C1C] mb-8 sm:mb-10 text-center sm:text-left">
          Follow us on instagram to view our latest collection-
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            "/collection-1.webp",
            "/collection-2.webp",
            "/collection-3.webp",
            "/collection-4.webp",
          ].map((img, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={img}
                alt="Instagram preview"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-16 sm:mt-20 bg-[#8F2C1C] text-[#FAF7F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 grid grid-cols-1 md:grid-cols-3 gap-12 relative">

          {/* LEFT */}
          <div className="font-serif space-y-3 text-center md:text-left">
            <a className="block underline cursor-pointer">Our Story</a>
            <a className="block underline cursor-pointer">All Collections</a>
            <a className="block underline cursor-pointer">Gifts and Guides</a>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6 pt-6">
              <a
                href="https://www.instagram.com/poetrydubai?igsh=MWc3OG54NDFkZ3R3dw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={32} />
              </a>

              <a
                href="https://wa.me/971563956179"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} />
              </a>

              <a
                href="mailto:support@poetrydubai.com"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block absolute left-1/3 top-10 bottom-10 w-px bg-[#FAF7F3]/60" />

          {/* CENTER */}
          <div className="text-center font-serif space-y-4 px-2 sm:px-6">
            <p className="text-lg sm:text-xl">
              Exquisite experiences await in <br />
              the heart of your home!
            </p>

            <p className="italic text-lg sm:text-xl">With love,</p>

            <p
              className="italic text-2xl sm:text-3xl"
              style={{ fontFamily: "Alex Brush" }}
            >
              Mehul Agarwal
            </p>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block absolute right-1/3 top-10 bottom-10 w-px bg-[#FAF7F3]/60" />

          {/* RIGHT */}
          <div className="font-serif text-sm space-y-3 text-center md:text-right">
            <p>
              For all inquiries, please write to <br />
              <a
                href="mailto:support@poetrydubai.com"
                className="underline"
              >
                support@poetrydubai.com
              </a>
            </p>

            <p>
              Anantara Downtown Hotel Dubai <br />
              Business Bay, Dubai, UAE
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+971563956179" className="underline">
                +971 56 395 6179
              </a>
            </p>

            {/* MAP */}
            <div className="flex justify-center md:justify-end pt-4">
              <div className="w-full max-w-xs h-32 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Anantara+Downtown+Hotel+Dubai&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
