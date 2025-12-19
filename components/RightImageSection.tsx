"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyLoveSilverSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-screen">

      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col md:flex-row md:items-center">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 w-full md:w-1/2 px-8 pt-16 pb-10 md:pl-20 md:pr-10 md:py-24"
        >
          <h2 className="text-3xl md:text-4xl tracking-wide text-[#d6b28a]">
            WHY LOVE FOR SILVER?
          </h2>

          <p className="mt-10 max-w-130 text-lg md:text-xl leading-relaxed text-[#d6b28a]/90">
            It all began with a simple yet exquisite silver kettle, passed down
            through generations. That silver kettle wasn’t just a beautiful
            object—it brought people together around the table, pouring tea,
            laughter, and conversations that created lasting memories. It became
            a symbol of connection, nostalgia, and shared experiences.
          </p>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE — STRONGER SHIFT */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
        className="
          pointer-events-none
          absolute
          top-0
          bottom-0
          right-0
          hidden
          md:flex
          items-end
          translate-x-24
          lg:translate-x-40
        "
      >
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={2000}
          height={2200}
          priority
          className="h-[85vh] w-auto object-contain"
        />
      </motion.div>

      {/* MOBILE IMAGE */}
      <div className="relative mt-6 flex w-full justify-center md:hidden">
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={1200}
          height={1400}
          className="h-[55vh] w-auto object-contain"
        />
      </div>

    </section>
  );
}
