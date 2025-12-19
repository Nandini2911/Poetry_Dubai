"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  "/slide 1.png",
  "/slide 2.png",
  "/slide 3.png",
  "/slide 4.png",
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PoetryInPolishSlider() {
  const track = [...IMAGES, ...IMAGES];

  return (
    <section id="collections" className="w-full bg-white overflow-hidden">
      
      {/* TOP BAR — SLIDE UP */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="bg-[#6b0011] py-10"
      >
        <h2 className="text-center font-serif text-4xl md:text-6xl tracking-wide text-[#d6b28a]">
          POETRY IN POLISH
        </h2>
      </motion.div>

      {/* SLIDER — NO ANIMATION */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {track.map((src, i) => (
              <div
                key={i}
                className="relative h-80 md:h-105 aspect-3/4 flex-none"
              >
                <Image
                  src={src}
                  alt={`Poetry in Polish ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR — SLIDE UP */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="bg-[#6b0011] py-8"
      >
        <p className="mx-auto max-w-5xl text-center font-serif text-lg md:text-xl text-[#d6b28a]/90 italic px-6">
          From the strength of the lion to the serenity of the Laughing Buddha,
          every piece is more than décor — it’s a vessel of emotion, culture, and legacy.
        </p>
      </motion.div>

      {/* SLIDER CSS */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 22s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
