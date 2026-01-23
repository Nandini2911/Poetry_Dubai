"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

// reusable animation
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: EASE,
      delay,
    },
  }),
};

export default function IntentBeliefSection() {
  return (
    <section className="bg-[#8F2C1C] py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-16 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            {/* IMAGE — FIRST ON MOBILE */}
            <div className="relative w-full aspect-[5/3] order-1 md:order-none">
              <Image
                src="/whysec_1.webp"
                alt="Poetry silver seating"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT — AFTER IMAGE ON MOBILE */}
            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#FAF7F3] max-w-sm order-2 md:order-none">
              From the strength of the lion to the serenity of the Laughing
              Buddha, every piece is more than decor — it’s a vessel of
              emotion, culture, and legacy.
            </p>
          </motion.div>

          {/* CENTER COLUMN */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-10"
          >
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#FAF7F3] max-w-md">
              Every Poetry piece carries an intention: to welcome abundance,
              harmony, and grace into the spaces we live
            </p>

            <div className="relative w-full max-w-md aspect-[5/3]">
              <Image
                src="/whysec_2.webp"
                alt="Silver tiger sculpture"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true }}
            className="space-y-8 text-left"
          >
            <div className="relative w-full aspect-[5/3]">
              <Image
                src="/whysec_6.webp"
                alt="Laughing Buddha silver"
                fill
                className="object-cover"
              />
            </div>

            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#FAF7F3] max-w-sm">
              Not vastu, not ritual — just mindful creation rooted in centuries
              of belief.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
