"use client";

import Image from "next/image";

export default function BrandStrap() {
  return (
    <header className="w-full bg-[#8F2C1C]">
      <div
        className="
          mx-auto flex items-center justify-center
          h-24
          sm:h-28
          md:h-32
          lg:h-36
          xl:h-40
          max-w-7xl
        "
      >
        <Image
          src="/poetry_trans.webp"
          alt="Poetry"
          priority
          width={400}
          height={120}
          className="
            object-contain
            w-44
            sm:w-52
            md:w-64
            lg:w-72
            xl:w-80
            h-auto
          "
        />
      </div>
    </header>
  );
}
