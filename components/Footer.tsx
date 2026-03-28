"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterNav() {
  return (
    <footer className="">
      
      {/* INSTAGRAM STRIP */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#8F2C1C] mb-8 sm:mb-10 text-center sm:text-left">
          Follow us on instagram to view our latest collection-
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              img: "/insta1.jpg",
              link: "https://www.instagram.com/p/DUvEasoirsw/?igsh=bnRseHA0a25rZWJj",
            },
            {
              img: "/insta2.jpg",
              link: "https://www.instagram.com/p/DUGFoG6Crbr/?igsh=ZGNldDdhbWtuZG41",
            },
            {
              img: "/insta3.jpg",
              link: "https://www.instagram.com/p/DUsMmrHAVDo/?igsh=MTg5cTcxMzdidHNuMg==",
            },
            {
              img: "/insta4.jpg",
              link: "https://www.instagram.com/p/DU0OaueAfTq/?igsh=MTJtdTA3c3d2Y2U5dg==",
            },
          ].map((item, i) => (
            
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
            >
              {/* IMAGE */}
              <Image
                src={item.img}
                alt="Instagram preview"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* ICON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <Instagram className="text-white drop-shadow-lg group-hover:scale-110 transition" size={28} />
              </div>

            </a>

          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-16 sm:mt-20 bg-[#8F2C1C] text-[#FAF7F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 grid grid-cols-1 md:grid-cols-3 gap-12 relative">

          {/* LEFT */}
          <div className="font-serif space-y-3 text-center md:text-left">
            <Link href="/our-story" className="block underline">
              Our Story
            </Link>
            <Link href="/collections" className="block underline">
              All Collections
            </Link>
            <Link href="/gifts-guides" className="block underline">
              Gifts and Guides
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6 pt-6">
              <a
                href="https://www.instagram.com/poetrydubai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={32} />
              </a>

              <a
                href="https://wa.me/971563956179"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={32} />
              </a>

              <a href="mailto:support@poetrydubai.com">
                <Mail size={32} />
              </a>
            </div>
          </div>

          {/* DIVIDERS */}
          <div className="hidden md:block absolute left-1/3 top-10 bottom-10 w-px bg-[#FAF7F3]/60" />
          <div className="hidden md:block absolute right-1/3 top-10 bottom-10 w-px bg-[#FAF7F3]/60" />

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

          {/* RIGHT */}
          <div className="font-serif text-sm space-y-3 text-center md:text-right">
            <p>
              For all inquiries, please write to <br />
              <a href="mailto:support@poetrydubai.com" className="underline">
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