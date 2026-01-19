"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "#collections" },
  { label: "GIFTING", href: "/gifting" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white">
      {/* Top bar */}
      <div className="mx-auto flex h-20 sm:h-24 md:h-28 max-w-7xl items-center justify-center px-4">
        {/* DESKTOP NAV → ONLY XL */}
        <ul className="hidden xl:flex items-center justify-center gap-14">
          {navItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-14">
              <Link
                href={item.href}
                style={{ color: "#8F2C1C" }}
                className="
                  font-serif
                  text-2xl
                  tracking-[0.4em]
                  whitespace-nowrap
                  transition-opacity
                  hover:opacity-70
                "
              >
                {item.label}
              </Link>

              {index !== navItems.length - 1 && (
                <span style={{ color: "#8F2C1C" }} className="text-2xl">
                  |
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* TABLET + MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="
            xl:hidden
            flex items-center gap-3
            font-serif
            text-lg sm:text-xl
            tracking-[0.35em]
            text-[#8F2C1C]
          "
          aria-label="Toggle menu"
        >
          MENU
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[1.5px] w-5 bg-[#8F2C1C]" />
            <span className="block h-[1.5px] w-5 bg-[#8F2C1C]" />
            <span className="block h-[1.5px] w-5 bg-[#8F2C1C]" />
          </span>
        </button>
      </div>

      {/* TABLET / MOBILE MENU PANEL */}
      {open && (
        <div className="xl:hidden border-t border-neutral-200 bg-white">
          <ul className="flex flex-col items-center gap-8 py-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ color: "#8F2C1C" }}
                  className="
                    font-serif
                    text-lg sm:text-xl
                    tracking-[0.35em]
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
      )}
    </nav>
  );
}
