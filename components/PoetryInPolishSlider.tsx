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
        className="bg-[#6b0011] py-8 md:py-10 xl2:py-12 4k:py-14"
      >
        <h2
          className="
            text-center font-serif tracking-wide text-[#d6b28a]
            text-3xl
            min-[375px]:text-[34px]
            xs:text-4xl
            md:text-6xl
            xl2:text-7xl
            4k:text-[80px]
          "
        >
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
                className="
                  relative flex-none aspect-[3/4]
                  h-[260px]
                  min-[375px]:h-[290px]
                  xs:h-[320px]
                  md:h-[420px]
                  lg:h-[460px]
                  xl2:h-[520px]
                  4k:h-[620px]
                "
              >
                <Image
                  src={src}
                  alt={`Poetry in Polish ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="
                    (max-width: 320px) 70vw,
                    (max-width: 375px) 68vw,
                    (max-width: 425px) 62vw,
                    (max-width: 768px) 46vw,
                    (max-width: 1024px) 34vw,
                    (max-width: 1440px) 28vw,
                    22vw
                  "
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
        className="bg-[#6b0011] py-7 md:py-8 xl2:py-10 4k:py-12"
      >
        <p
          className="
            mx-auto max-w-5xl px-5 text-center font-serif italic text-[#d6b28a]/90
            text-[14px]
            min-[375px]:text-[15px]
            xs:text-base
            md:text-xl
            xl2:text-2xl
            4k:text-[28px]
          "
        >
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

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
