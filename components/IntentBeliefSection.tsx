"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  ["/intent1.png", "/intent2.png", "/intent3.png"],
  ["/intent4.png", "/intent5.png", "/intent6.png"],
  ["/intent7.png", "/intent8.png", "/intent9.png"],
  ["/intent10.png", "/intent11.png", "/intent12.png"],
];

export default function IntentBeliefSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-9">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {slides[index].map((img, i) => (
            <div
              key={i}
              className="relative w-full h-70 md:h-90 overflow-hidden rounded-2xl shadow-xl"
            >
              <motion.div
                key={img}
                
                // 🔥 ONLY BLUR TRANSITION (no disappear)
                initial={{
                  scale: 1.05,
                  filter: "blur(8px)",
                }}
                animate={{
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={img}
                  alt="Poetry collection"
                  fill
                  className="object-cover"
                />

                {/* subtle overlay for richness */}
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}