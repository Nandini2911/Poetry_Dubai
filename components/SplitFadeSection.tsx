"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* TYPEWRITER HOOK */
function useTypewriter(
  text: string,
  speed = 10,
  onComplete?: () => void
) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function SplitFadeSection() {
  const [startSecond, setStartSecond] = useState(false);

  const text1 = useTypewriter(
    "I envisioned a brand where each silver piece is thoughtfully designed and crafted, meant to create lasting memories. Just like that cherished silver kettle had woven itself into the fabric of my Life, I wanted my products to become part of other people's stories elevating simple moments into poetic ones.",
    15,
    () => setStartSecond(true)
  );

  const text2 = useTypewriter(
    startSecond
      ? "Timeless beauty and exquisite experiences await in the heart of your home with every piece. From shared moments to Lasting memories, let each object elevate the warmth and elegance of your space."
      : "",
    15
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#ffffff] mt-12 md:mt-5"    >
      
      {/* IMAGE WRAPPER */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:min-h-screen">

        {/* DESKTOP IMAGE */}
        <motion.div
          initial={{ x: -120, opacity: 0, scale: 1.1 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block absolute inset-0"
        >
          <Image
            src="/about.png"
            alt="Luxury visual"
            fill
            priority
            className="object-cover brightness-90"
          />
        </motion.div>

        {/* MOBILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="block md:hidden absolute inset-0"
        >
          <Image
            src="/about.png"
            alt="Luxury mobile visual"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* FADE OVERLAY (DESKTOP ONLY) */}
      <div className="pointer-events-none absolute inset-0 hidden md:flex">
        <div className="w-1/2 "></div>
        <div className="w-1/2 bg-white/100"></div>
      </div>

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative w-full md:w-1/2 flex items-center px-6 md:px-12 xl2:px-32 py-12"
      >
        <div className="max-w-2xl md:max-w-3xl mx-auto md:mr-auto text-[#8B2C1F] font-playfair leading-[1.8] space-y-10">
          
          {/* TEXT 1 */}
          <p className="text-base md:text-lg min-h-[120px]">
            {text1}
            <span className="animate-pulse">|</span>
          </p>

          {/* TEXT 2 */}
          <p className="text-base md:text-lg min-h-[100px]">
            {text2}
            {startSecond && <span className="animate-pulse">|</span>}
          </p>

          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: startSecond ? 1 : 0,
              y: startSecond ? 0 : 40,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#a67c73] mb-3">
              Founder and Curator
            </p>

            <h2 className="text-2xl md:text-5xl italic">
              Mehul Agarwal
            </h2>
          </motion.div>

        </div>
      </motion.div>

    </motion.section>
  );
}