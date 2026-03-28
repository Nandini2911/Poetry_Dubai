"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PoetryIntro() {
  return (
    <section className="w-full bg-white pt-4 pb-10 px-6 md:px-12 text-center">
      
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center mb-4"
      >
        <Image
          src="/poetry_trans2.jpg"
          alt="Poetry Logo"
          width={300}
          height={200}
          className="object-contain"
        />
      </motion.div>
      <br></br>

      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="
          max-w-2xl mx-auto
          text-[#8F2C1C]
          text-sm md:text-lg
          leading-relaxed md:leading-loose
          font-light
          tracking-wide
        "
      >
        In the quiet rhythm of a craftsman’s hands,<br />
        silver learns to breathe.
        Every strike, every curve, every whisper of detail<br />
        becomes a poem of patience, heritage and heart —<br />
        crafted forever by{" "}
        <span className="font-semibold text-[#8F2C1C]">
          Poetry
        </span>.
      </motion.p>

    </section>
  );
}