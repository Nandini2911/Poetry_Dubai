"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "#collections" },
  { label: "GIFTING", href: "/gifting" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white">
      {/* TOP BAR */}
      <div className="mx-auto flex h-16 sm:h-20 xl:h-24 max-w-7xl items-center justify-center px-6">

        {/* DESKTOP NAV (XL ONLY – NO WRAP EVER) */}
        <ul className="hidden xl:flex items-center justify-center gap-10">
          {navItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-10">
              <Link
                href={item.href}
                className="
                  font-serif
                  text-2xl
                  tracking-[0.35em]
                  text-[#8F2C1C]
                  transition-opacity
                  hover:opacity-70
                "
              >
                {item.label}
              </Link>

              {index !== navItems.length - 1 && (
                <span className="text-[#8F2C1C] text-2xl">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE / TABLET / LAPTOP MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="
            xl:hidden
            flex items-center gap-3
            font-serif
            text-sm sm:text-base
            tracking-[0.3em]
            text-[#8F2C1C]
          "
          aria-label="Toggle menu"
        >
          MENU
          <span className="flex flex-col gap-[4px]">
            <span className="h-[1.5px] w-5 bg-[#8F2C1C]" />
            <span className="h-[1.5px] w-5 bg-[#8F2C1C]" />
            <span className="h-[1.5px] w-5 bg-[#8F2C1C]" />
          </span>
        </button>
      </div>

      {/* MOBILE / TABLET MENU PANEL */}
      <div
        className={`
          xl:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          border-t border-neutral-200 bg-white
        `}
      >
        <ul className="flex flex-col items-center gap-8 py-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  font-serif
                  text-base sm:text-lg
                  tracking-[0.3em]
                  text-[#8F2C1C]
                  transition-opacity
                  hover:opacity-70
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
