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
        className="relative w-screen min-h-svh"
      >
        {/* Background Image */}
        <Image
          src="/third section.png"
          alt="Poetry silver collection"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />

        {/* overlays (non-interactive) */}
        <div className="pointer-events-none absolute inset-0 bg-black/45 sm:bg-black/30" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-black/70 via-black/25 to-transparent" />

        {/* Content */}
        <div
          className="
            absolute inset-0 z-10 flex items-end justify-end
            px-4 pb-8
            min-[375px]:px-5 min-[375px]:pb-9
            xs:px-6 xs:pb-10
            md:items-center md:pb-0 md:px-10
            lg:px-16
            xl2:px-20
            4k:px-32
          "
        >
          <div
            className="
              text-right text-white
              max-w-[18rem]
              min-[375px]:max-w-[20rem]
              xs:max-w-[22rem]
              md:max-w-md
              xl2:max-w-lg
              4k:max-w-xl
            "
          >
            {/* Heading scaling */}
            <h2
              className="
                font-serif leading-tight tracking-wide
                text-[24px]
                min-[375px]:text-[28px]
                xs:text-[32px]
                md:text-4xl
                lg:text-5xl
                xl2:text-6xl
                4k:text-[64px]
              "
            >
              Discover <br />
              The Latest <br />
              Collection
            </h2>

            {/* Divider */}
            <div className="mt-4 ml-auto h-px w-12 sm:w-16 bg-white/50" />

            {/* CTA */}
            <motion.button
              type="button"
              onClick={() => router.push("/collection")}
              whileHover={{ x: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ ease: EASE }}
              className="
                mt-6 ml-auto inline-flex items-center gap-3
                border border-white/50
                px-4 py-2
                text-[11px]
                tracking-widest uppercase text-white
                backdrop-blur
                hover:border-white hover:bg-white/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60

                min-[375px]:px-5 min-[375px]:text-xs
                xs:px-6 xs:py-2.5
                md:text-sm
                xl2:text-base
                4k:text-lg
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
