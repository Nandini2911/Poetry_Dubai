"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-svh w-screen overflow-hidden">
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
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-center text-white"
        >
          <h1 className="font-serif text-3xl tracking-wide sm:text-5xl lg:text-6xl">
            Silver That Tells Your Story
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
            Poetry is not just silverware — it is storytelling in metal. Each piece
            is designed to hold emotion, memory, and meaning, transforming silver
            into a personal expression rather than an ornament.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base">
            Rooted in craftsmanship and elevated by contemporary design, Poetry
            exists at the intersection of art, culture, and individuality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
