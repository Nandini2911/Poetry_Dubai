"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const images = [
  "/collection-1.webp",
  "/collection-2.webp",
  "/collection-3.webp",
  "/collection-4.webp",
  "/collection-5.webp",
];

export default function DiscoverCollection() {
  return (
    <section className="bg-[#FAF7F3] py-24 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="
            font-serif
            text-3xl sm:text-4xl lg:text-5xl
            tracking-wide
            text-[#8F2C1C]
          "
        >
          DISCOVER THE LATEST COLLECTION
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          className="
            mx-auto mt-10 max-w-3xl
            font-serif
            text-base sm:text-lg
            leading-relaxed
            text-[#8F2C1C]
          "
        >
          Poetry is not just silverware—it is storytelling in metal. Each piece
          is designed to hold emotion, memory, and meaning, transforming silver
          into a personal expression rather than an ornament.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          className="
            mx-auto mt-8 max-w-3xl
            font-serif
            text-base sm:text-lg
            leading-relaxed
            text-[#8F2C1C]
          "
        >
          Rooted in craftsmanship and elevated by contemporary design,
          <br />
          Poetry exists at the intersection of art, culture, and individuality!
        </motion.p>
      </div>

      {/* SLIDING IMAGE STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
        className="relative mt-16 overflow-hidden"
      >
        <motion.div
          className="flex w-max gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // slow = premium
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="
                relative
                aspect-[4/5]
                w-[220px]
                sm:w-[260px]
                lg:w-[300px]
                flex-shrink-0
              "
            >
              <Image
                src={src}
                alt="Poetry silver collection"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
