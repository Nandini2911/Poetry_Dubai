"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden min-h-svh">
      {/* Background Image */}
      <Image
        src="/hero_img.JPG"
        alt="Poetry Dubai silver craftsmanship"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Overlays */}
      

      {/* Text Content */}
     
    
    </section>
  );
}
