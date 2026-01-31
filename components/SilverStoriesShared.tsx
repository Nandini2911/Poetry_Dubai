"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SilverStoriesBg() {
  return (
    <section className="relative w-screen min-h-[95vh] bg-white overflow-hidden flex items-center justify-center">
      
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2.4,
          ease: EASE,
        }}
        className="relative w-full max-w-6xl h-[95vh] px-6"
      >
        <Image
          src="/silverstoryshared.webp"
          alt="Poetry silver background"
          fill
          priority
          className="object-contain object-center"
        />
      </motion.div>

    </section>
  );
}
