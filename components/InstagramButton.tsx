"use client";

import { useEffect, useState } from "react";

export default function InstagramButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent SSR render → no hydration mismatch
  if (!mounted) return null;

  return (
    <a
      href="https://www.instagram.com/poetrydubai/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="
        fixed
        bottom-24
        right-6
        z-40
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-white
        text-[#8F2C1C]
        shadow-lg
        ring-1
        ring-black/10
        transition
        hover:scale-105
      "
    >
      {/* Instagram Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2z" />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    </a>
  );
}
