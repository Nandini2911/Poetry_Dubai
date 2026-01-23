"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FounderNote() {
  return (
    <section
      className="
        relative bg-[#FAF7F3] overflow-hidden
        py-16 sm:py-24 lg:py-32 xl:py-40
      "
    >
      {/* Desktop / Tablet Flower (decorative) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
        className="
          hidden sm:block
          pointer-events-none
          absolute
          right-6 bottom-6
          sm:right-10 sm:bottom-10
          lg:right-16 lg:bottom-16
          xl:right-24 xl:bottom-24
          w-36 lg:w-48 xl:w-56 2xl:w-64
        "
      >
        <Image
          src="/founderpage_flower.png"
          alt="Poetry flower illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto text-center
          px-4 sm:px-6 lg:px-8
          max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
        "
      >
        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="
            font-serif text-[#8F2C1C] leading-relaxed
            text-base sm:text-lg md:text-xl lg:text-2xl
            xl:text-[1.65rem] 2xl:text-3xl
          "
        >
          I envisioned a brand where every silver piece is created with
          intention—designed to be lived with, not just admired. Inspired by a
          cherished silver kettle that became part of my everyday life, I
          understood how objects can hold memory and meaning.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          className="
            mt-8 sm:mt-10 lg:mt-12
            font-serif text-[#8F2C1C] leading-relaxed
            text-base sm:text-lg md:text-xl lg:text-2xl
            xl:text-[1.65rem] 2xl:text-3xl
          "
        >
          Each creation is thoughtfully crafted to slip into daily rituals,
          gathering stories over time and transforming simple moments into
          something quietly beautiful.
        </motion.p>

        {/* Founder Title */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
          className="
            mt-10 sm:mt-12 lg:mt-14
            text-[0.65rem] sm:text-xs lg:text-sm
            tracking-[0.3em]
            text-[#8F2C1C]
          "
        >
          FOUNDER AND CURATOR
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.8 }}
          className="mt-2 sm:mt-3 lg:mt-4 flex justify-center"
        >
          <Image
            src="/poetry_sign.png"
            alt="Mehul Agarwal signature"
            width={520}
            height={120}
            className="
              object-contain
              w-56 sm:w-72 lg:w-96 xl:w-[26rem] 2xl:w-[30rem]
            "
          />
        </motion.div>

        {/* Mobile Flower (below signature) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="mt-6 flex justify-center sm:hidden"
        >
          <Image
            src="/founderpage_flower.png"
            alt="Poetry flower illustration"
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
