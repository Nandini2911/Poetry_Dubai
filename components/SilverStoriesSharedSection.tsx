"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SilverStoriesSharedSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* TITLE — SLIDE UP */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center text-3xl sm:text-4xl md:text-6xl tracking-wide text-[#d6b28a]"
        >
          SILVER STORIES SHARED
        </motion.h2>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="relative mx-auto mt-8 sm:mt-10 max-w-5xl"
        >
          {/* Rounded border frame */}
          <div className="overflow-hidden rounded-[44px] border-[6px] border-[#d6b28a]">
            {/* Soft gradient background */}
            <div className="relative flex items-center justify-center rounded-[38px] bg-linear-to-b from-[#fbf7f0] via-[#eadcc8] to-[#d7bf9c] px-7 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center min-h-88 md:min-h-104">
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-2xl leading-relaxed text-[#543008]">
                Our silver creations aren’t just objects — they become a part of
                people’s lives. Here’s what our clients say about the beauty,
                meaning, and memory they’ve found in every piece.
              </p>

              {/* Flowers (decorative) */}
              <Image
                src="/flower.png"
                alt="Floral accent"
                width={360}
                height={360}
                sizes="(max-width: 768px) 176px, 256px"
                className="pointer-events-none absolute -top-14 -right-14 w-44 md:w-64"
                loading="lazy"
              />

              <Image
                src="/flower.png"
                alt="Floral accent"
                width={360}
                height={360}
                sizes="(max-width: 768px) 176px, 256px"
                className="pointer-events-none absolute -bottom-16 -left-16 w-44 md:w-64"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
