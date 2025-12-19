"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CollectionHighlight() {
  const router = useRouter();

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        viewport={{ once: true }}
        className="relative h-screen w-screen"
      >
        <Image
          src="/third section.png"
          alt="Poetry silver collection"
          fill
          priority
          className="object-cover"
        />

        {/* overlays should not block click */}
        <div className="pointer-events-none absolute inset-0 bg-black/40 sm:bg-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-black/70 via-black/25 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-end justify-end px-5 pb-10 sm:items-center sm:px-12 sm:pb-0 lg:px-20">
          <div className="max-w-70 text-right text-white sm:max-w-md">
            <h2 className="font-serif text-3xl leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Discover <br />
              The Latest <br />
              Collection
            </h2>

            <div className="mt-5 ml-auto h-px w-16 bg-white/50" />

            <motion.button
              type="button"
              onClick={() => router.push("/collection")}
              whileHover={{ x: -6 }}
              transition={{ ease: EASE }}
              className="
                mt-7 ml-auto inline-flex items-center gap-3
                border border-white/50 px-6 py-2.5
                text-sm tracking-widest uppercase text-white
                backdrop-blur hover:border-white hover:bg-white/10
              "
            >
              View Collection <span className="text-lg">→</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
