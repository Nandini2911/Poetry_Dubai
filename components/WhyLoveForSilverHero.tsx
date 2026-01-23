"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyLoveForSilverHero() {
  return (
<section className="bg-[#FAF7F3] pb-20 sm:pb-28 overflow-hidden">
      
      {/* HEADER */}
<div className="relative mx-auto max-w-6xl px-2 pt-1 text-center">
        
        {/* Flower */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="absolute left-0 top-0 w-32 sm:w-40 lg:w-48"
        >
          <Image
            src="/websiteflower.webp"
            alt="Poetry flower"
            width={360}
            height={360}
            className="object-contain"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
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
          WHY LOVE FOR SILVER?
        </motion.h2>
      </div>

      {/* RED STORY BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        className="
          mt-16
          mx-auto
          max-w-6xl
          bg-[#8F2C1C]
          py-14 sm:py-20
        "
        style={{
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        {/* TEXT FILLS RED AREA */}
        <div className="mx-auto max-w-5xl px-10 sm:px-16 text-center">
          <p
            className="
              font-serif
              text-base sm:text-lg lg:text-xl
              leading-relaxed
              text-[#FAF7F3]
            "
          >
            It all began with a simple yet exquisite silver kettle, passed down
            through generations. That silver kettle wasn’t just a beautiful
            object—it brought people together around the table, pouring tea,
            laughter, and conversations that created lasting memories. It became
            a symbol of connection, nostalgia, and shared experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
