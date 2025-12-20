"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden min-h-svh">
      {/* Background Image */}
      <Image
        src="/poetry header img.jpg"
        alt="Poetry Dubai silver craftsmanship"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-neutral-900/35" />
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/10 via-neutral-900/35 to-neutral-900/70" />

      {/* Text Content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-4 min-[375px]:px-5 xs:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="w-full text-center text-white max-w-[34rem] md:max-w-[46rem] xl2:max-w-[54rem] 4k:max-w-[64rem]"
        >
          {/* 320: 24px | 375: 28px | 425: 32px | 768: 48px | 1024: 56px | 1440: 64px | 2560: 72px */}
          <h1
            className="
              tracking-wide leading-tight
              text-[24px]
              min-[375px]:text-[28px]
              xs:text-[32px]
              md:text-5xl
              lg:text-6xl
              xl2:text-7xl
              4k:text-[72px]
            "
          >
            Silver That Tells Your Story
          </h1>

          {/* Paragraph 1 */}
          <p
            className="
              mx-auto mt-4 leading-relaxed text-white/90
              max-w-[22rem]
              text-[13px]
              min-[375px]:text-[14px]
              xs:max-w-[26rem] xs:text-[15px]
              md:mt-6 md:max-w-[38rem] md:text-base
              lg:text-lg
              xl2:text-xl
              4k:text-[22px]
            "
          >
            Poetry is not just silverware — it is storytelling in metal. Each
            piece is designed to hold emotion, memory, and meaning, transforming
            silver into a personal expression rather than an ornament.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mx-auto mt-4 leading-relaxed text-white/80
              max-w-[22rem]
              text-[13px]
              min-[375px]:text-[14px]
              xs:max-w-[26rem] xs:text-[15px]
              md:mt-6 md:max-w-[38rem] md:text-base
              lg:text-lg
              xl2:text-xl
              4k:text-[22px]
            "
          >
            Rooted in craftsmanship and elevated by contemporary design, Poetry
            exists at the intersection of art, culture, and individuality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
