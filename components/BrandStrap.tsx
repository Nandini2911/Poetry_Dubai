"use client";

import Image from "next/image";

export default function BrandStrap() {
  return (
    <header className="relative w-full bg-[#8F2C1C] overflow-hidden group">
      {/* subtle gold light sweep */}
      <span className="absolute inset-0 pointer-events-none brand-glow" />

      <div
        className="
          relative mx-auto flex items-center justify-center
          h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40
          max-w-7xl
        "
      >
        <div className="brand-mask">
          <Image
            src="/poetry_trans.webp"
            alt="Poetry"
            priority
            width={400}
            height={120}
            className="
              object-contain
              w-44 sm:w-52 md:w-64 lg:w-72 xl:w-80
              h-auto
              brand-logo
              transition-all duration-700 ease-out
              group-hover:scale-[1.03]
              group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]
            "
          />
        </div>
      </div>
    </header>
  );
}
