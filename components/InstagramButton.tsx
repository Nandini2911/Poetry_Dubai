"use client";

import { Instagram } from "lucide-react";

export default function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/poetrydubai?igsh=MWc3OG54NDFkZ3R3dw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="
        fixed
        bottom-24
        right-6
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
        text-white
        shadow-lg
        hover:scale-105
        transition
      "
    >
      <Instagram size={26} />
    </a>
  );
}
