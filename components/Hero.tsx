"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-svh overflow-hidden">
      
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src="/hero_img.JPG"
          alt="Poetry Dubai silver craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </motion.div>

      {/* Dark Luxury Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center px-6 sm:px-12">
        <div className="max-w-2xl">
          
         

          {/* Subtext */}
          
        </div>
      </div>
    </section>
  );
}
