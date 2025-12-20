"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = ["/slide 1.png", "/slide 2.png", "/slide 3.png", "/slide 4.png"];
const EASE = [0.22, 1, 0.36, 1] as const;

export default function PoetryInPolishSlider() {
  const track = [...IMAGES, ...IMAGES];

  return (
    <section id="collections" className="w-full overflow-hidden bg-white">
      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="bg-[#6b0011] py-10"
      >
        <h2 className="text-center font-serif text-4xl tracking-wide text-[#d6b28a] md:text-6xl">
          POETRY IN POLISH
        </h2>
      </motion.div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {track.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative aspect-[3/4] h-72 flex-none sm:h-80 md:h-[26rem]"
              >
                <Image
                  src={src}
                  alt={`Poetry in Polish ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 320px"
                  className="object-cover"
                  // Keep priority minimal for performance (only first 2)
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="bg-[#6b0011] py-8"
      >
        <p className="mx-auto max-w-5xl px-6 text-center font-serif text-lg italic text-[#d6b28a]/90 md:text-xl">
          From the strength of the lion to the serenity of the Laughing Buddha,
          every piece is more than décor — it’s a vessel of emotion, culture, and
          legacy.
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
          gap: 0; /* keep seamless */
          animation: scroll 22s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
