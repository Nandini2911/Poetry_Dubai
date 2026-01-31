"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeVisitCard() {
  return (
    <div className="bg-[#FAF7F3] px-4 sm:px-6 pt-10 sm:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="
          relative
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-[32px]
          px-8 sm:px-16
          py-12 sm:py-14
          text-center
          shadow-[0_30px_90px_rgba(0,0,0,0.10)]
          ring-1 ring-black/5
          bg-white
        "
      >
        {/* FULL BOX SOFT RED FADE */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute inset-0
            bg-[radial-gradient(120%_120%_at_50%_0%,rgba(143,44,28,0.18),transparent_60%)]
          "
        />

        {/* subtle inner border */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute inset-3
            rounded-[26px]
            border border-[#8F2C1C]/15
          "
        />

        <div className="relative z-10">
          {/* top chip */}
          <div className="mx-auto mb-6 w-fit">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#8F2C1C]/10 px-4 py-2 text-xs sm:text-sm tracking-wide text-[#8F2C1C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8F2C1C]" />
              Home Visit Booking
            </span>
          </div>

          {/* main text */}
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[#1C1C1C]">
            You can book us for a{" "}
            <span className="italic text-[#8F2C1C]">home visit</span>,
            <br className="hidden sm:block" />
            <span className="font-medium">
              available exclusively in Dubai.
            </span>
          </p>

          {/* divider */}
          <div className="mx-auto mt-6 h-px w-24 bg-[#8F2C1C]/40" />

          {/* helper text */}
          <p className="mt-4 text-xs sm:text-sm tracking-wide text-black/55">
            Prior appointment only 
          </p>
        </div>
      </motion.div>
    </div>
  );
}
