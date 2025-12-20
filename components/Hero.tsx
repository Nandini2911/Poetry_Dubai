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
      <div className="relative z-10 flex min-h-svh items-center justify-center px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="w-full max-w-[46rem] text-center text-white"
        >
          <h1 className="text-[22px] leading-tight tracking-wide sm:text-5xl lg:text-65l">
            Silver That Tells Your Story
          </h1>

          <p className="mx-auto mt-4 max-w-[38rem] text-[13px] leading-relaxed text-white/90 sm:mt-6 sm:text-base lg:text-lg">
            Poetry is not just silverware — it is storytelling in metal. Each piece
            is designed to hold emotion, memory, and meaning, transforming silver
            into a personal expression rather than an ornament.
          </p>

          <p className="mx-auto mt-4 max-w-[38rem] text-[13px] leading-relaxed text-white/80 sm:mt-6 sm:text-base">
            Rooted in craftsmanship and elevated by contemporary design, Poetry
            exists at the intersection of art, culture, and individuality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
