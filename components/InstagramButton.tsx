"use client";

export default function InstagramButton() {
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
        z-50
        w-14
        h-14
        rounded-full
        bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-105
        transition
      "
    >
      {/* white inner circle */}
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
        {/* official Instagram logo */}
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#d62976]"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1" />
        </svg>
      </span>
    </a>
  );
}
