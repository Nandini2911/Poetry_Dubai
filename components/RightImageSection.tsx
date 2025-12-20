"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyLoveSilverSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-svh">
      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto flex max-w-7xl flex-col md:min-h-[85svh] md:flex-row md:items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 w-full px-6 pt-14 pb-10 sm:px-8 sm:pt-16 md:w-1/2 md:py-24 md:pl-20 md:pr-10"
        >
          <h2 className="text-2xl tracking-wide text-[#d6b28a] sm:text-3xl md:text-4xl">
            WHY LOVE FOR SILVER?
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#d6b28a]/90 sm:mt-10 sm:text-lg md:text-xl">
            It all began with a simple yet exquisite silver kettle, passed down
            through generations. That silver kettle wasn’t just a beautiful
            object—it brought people together around the table, pouring tea,
            laughter, and conversations that created lasting memories. It became
            a symbol of connection, nostalgia, and shared experiences.
          </p>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE (DESKTOP) */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
        className="
          pointer-events-none absolute top-0 bottom-0 right-0 hidden
          md:flex items-end
          translate-x-16 lg:translate-x-28 xl:translate-x-36
        "
      >
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={2000}
          height={2200}
          sizes="(max-width: 1024px) 45vw, 40vw"
          className="h-[78svh] w-auto object-contain"
          priority={false}
        />
      </motion.div>

      {/* MOBILE / TABLET IMAGE */}
      <div className="relative mt-6 flex w-full justify-center md:hidden">
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={1200}
          height={1400}
          sizes="92vw"
          className="h-[52svh] w-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
