"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyLoveSilver() {
  return (
    <section className=" pt-16 sm:pt-20 pb-16 overflow-hidden">
      
      {/* HEADER */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="
            font-serif text-2xl sm:text-3xl lg:text-5xl
            tracking-wide text-[#8F2C1C] mb-6
          "
        >
          WHY LOVE FOR SILVER?
        </motion.h2>
      </div>

      {/* STORY BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        className="mt-8 sm:mt-10 mx-auto max-w-6xl bg-[#8F2C1C] py-10 sm:py-16"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
          <p className="font-serif text-sm sm:text-lg lg:text-xl leading-relaxed text-[#FAF7F3]">
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