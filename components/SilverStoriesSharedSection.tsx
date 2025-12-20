"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SilverStoriesSharedSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-14 sm:py-20 xl2:py-24 4k:py-28">
      <div className="mx-auto max-w-6xl px-4 min-[375px]:px-5 sm:px-6 xl2:max-w-7xl 4k:max-w-[88rem]">
        {/* TITLE — SLIDE UP */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="
            text-center tracking-wide text-[#d6b28a]
            text-[26px]
            min-[375px]:text-[30px]
            xs:text-4xl
            md:text-6xl
            xl2:text-7xl
            4k:text-[80px]
          "
        >
          SILVER STORIES SHARED
        </motion.h2>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="relative mx-auto mt-7 min-[375px]:mt-8 sm:mt-10 max-w-5xl xl2:max-w-6xl 4k:max-w-7xl"
        >
          {/* Rounded border frame */}
          <div className="overflow-hidden rounded-[44px] border-[6px] border-[#d6b28a]">
            {/* Soft gradient background */}
            <div
              className="
                relative flex items-center justify-center text-center
                rounded-[38px]
                bg-linear-to-b from-[#fbf7f0] via-[#eadcc8] to-[#d7bf9c]
                px-5 py-10
                min-[375px]:px-6 min-[375px]:py-11
                xs:px-7 xs:py-12
                md:px-16 md:py-20
                xl2:px-20 xl2:py-24
                4k:px-24 4k:py-28
                min-h-[18rem]
                min-[375px]:min-h-[20rem]
                xs:min-h-[22rem]
                md:min-h-[26rem]
                xl2:min-h-[30rem]
                4k:min-h-[34rem]
              "
            >
              <p
                className="
                  mx-auto leading-relaxed text-[#543008]
                  max-w-[22rem]
                  text-[14px]
                  min-[375px]:max-w-[26rem] min-[375px]:text-[15px]
                  xs:max-w-[32rem] xs:text-base
                  md:max-w-3xl md:text-2xl
                  xl2:max-w-4xl xl2:text-3xl
                  4k:max-w-5xl 4k:text-[34px]
                "
              >
                Our silver creations aren’t just objects — they become a part of
                people’s lives. Here’s what our clients say about the beauty,
                meaning, and memory they’ve found in every piece.
              </p>

              {/* Flowers (decorative) — clamped on mobile to avoid scroll */}
              <Image
                src="/flower.png"
                alt="Floral accent"
                width={360}
                height={360}
                loading="lazy"
                sizes="
                  (max-width: 320px) 140px,
                  (max-width: 375px) 160px,
                  (max-width: 425px) 176px,
                  (max-width: 768px) 200px,
                  (max-width: 1024px) 240px,
                  (max-width: 1440px) 256px,
                  320px
                "
                className="
                  pointer-events-none absolute
                  -top-10 -right-10 w-36
                  min-[375px]:-top-12 min-[375px]:-right-12 min-[375px]:w-40
                  xs:-top-14 xs:-right-14 xs:w-44
                  md:w-64
                  xl2:w-72
                  4k:w-80
                "
              />

              <Image
                src="/flower.png"
                alt="Floral accent"
                width={360}
                height={360}
                loading="lazy"
                sizes="
                  (max-width: 320px) 140px,
                  (max-width: 375px) 160px,
                  (max-width: 425px) 176px,
                  (max-width: 768px) 200px,
                  (max-width: 1024px) 240px,
                  (max-width: 1440px) 256px,
                  320px
                "
                className="
                  pointer-events-none absolute
                  -bottom-12 -left-12 w-36
                  min-[375px]:-bottom-14 min-[375px]:-left-14 min-[375px]:w-40
                  xs:-bottom-16 xs:-left-16 xs:w-44
                  md:w-64
                  xl2:w-72
                  4k:w-80
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
