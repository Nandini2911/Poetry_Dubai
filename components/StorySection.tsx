"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function StorySection() {
  return (
    <section
      id="about"
      className="relative bg-white px-4 sm:px-6 lg:px-6 py-16 sm:py-20 lg:py-24 pb-24 sm:pb-0"
    >
      {/* LOGO AS BACKGROUND */}
      <div className="absolute inset-0 z-0 flex items-start justify-center pointer-events-none">
        <Image
          src="/poetry header.png"
          alt="Poetry logo background"
          width={1200}
          height={400}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 896px, 896px"
          className="w-[92%] sm:w-full max-w-[92%] sm:max-w-4xl object-contain opacity-100"
        />
      </div>

      {/* CONTENT ON TOP */}
      <div className="relative z-10 mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-4xl text-center">
        <Reveal>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-poetry/80">
            I envisioned a brand where every silver piece is created with
            intention—designed to be lived with, not just admired. Inspired by a
            cherished silver kettle that became part of my everyday life, I
            understood how objects can hold memory and meaning.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-poetry/80">
            Each creation is thoughtfully crafted to slip into daily rituals,
            gathering stories over time and transforming simple moments into
            something quietly beautiful.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-poetry/80">
            FOUNDER AND CURATOR
          </p>
        </Reveal>
      </div>

      {/* SIGNATURE LOGO AT BOTTOM */}
      <div className="absolute bottom-0 sm:bottom-0 left-1/2 z-20 -translate-x-1/2">
        <Image
          src="/p sign.png"
          alt="Poetry signature"
          width={400}
          height={160}
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 400px"
          className="w-48 sm:w-64 lg:w-100"
        />
      </div>
    </section>
  );
}
