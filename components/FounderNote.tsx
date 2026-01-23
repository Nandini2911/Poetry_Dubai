"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FounderNote() {
  return (
    <section className="relative bg-[#FAF7F3] py-24 sm:py-32 overflow-hidden">
      
      {/* Flower Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
        className="absolute right-6 bottom-6 sm:right-16 sm:bottom-16 w-32 sm:w-44 lg:w-56 pointer-events-none"
      >
        <Image
          src="/founderpage_flower.png"
          alt="Poetry flower illustration"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="
            font-serif
            text-lg sm:text-xl lg:text-2xl
            leading-relaxed
            text-[#8F2C1C]
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
            mt-10
            font-serif
            text-lg sm:text-xl lg:text-2xl
            leading-relaxed
            text-[#8F2C1C]
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
            mt-10 sm:mt-12
            text-sm
            tracking-[0.25em]
            text-[#8F2C1C]
          "
        >
          FOUNDER AND CURATOR
        </motion.p>

        {/* Signature Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.8 }}
          className="-mt-2 sm:-mt-3 flex justify-center"
        >
          <Image
            src="/poetry_sign.png"
            alt="Mehul Agarwal signature"
            width={420}
            height={90}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
