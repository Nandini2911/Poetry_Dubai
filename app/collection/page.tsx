"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  { id: "1", image: "/c1.webp" },
  { id: "2", image: "/c2.webp" },
  { id: "3", image: "/c3.webp" },
  { id: "4", image: "/c4.webp" },
  { id: "5", image: "/c5.webp" },
  { id: "6", image: "/c6.webp" },
];

// slower, luxury ease
const EASE = [0.16, 1, 0.3, 1] as const;

export default function CollectionPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/collaction-bg.jpg"
          alt="Collection background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-7xl px-6 pt-12">
          <h1 className="font-serif text-3xl tracking-wide text-[#f3e6d2] sm:text-4xl">
            The Collection
          </h1>
        </div>

        {/* GRID */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ITEMS.map((it) => (
              <motion.div
                key={it.id}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.4, ease: EASE }}
                className="
                  overflow-hidden rounded-[28px]
                  bg-black/25
                  ring-1 ring-white/10
                  backdrop-blur-sm
                "
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={it.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
