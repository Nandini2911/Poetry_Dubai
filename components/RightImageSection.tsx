"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyLoveSilverSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-svh">
      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto flex max-w-7xl flex-col md:min-h-[85svh] md:flex-row md:items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="
            relative z-10 w-full
            px-4 pt-12 pb-9
            min-[375px]:px-5 min-[375px]:pt-14
            xs:px-6
            md:w-1/2 md:px-0 md:py-24 md:pl-20 md:pr-10
            xl2:pl-24 xl2:pr-12
            4k:pl-32 4k:pr-16
          "
        >
          <h2
            className="
              tracking-wide text-[#d6b28a]
              text-[20px]
              min-[375px]:text-[22px]
              xs:text-2xl
              md:text-4xl
              xl2:text-5xl
              4k:text-[56px]
            "
          >
            WHY LOVE FOR SILVER?
          </h2>

          <p
            className="
              mt-6 leading-relaxed text-[#d6b28a]/90
              max-w-[22rem]
              text-[14px]
              min-[375px]:text-[15px] min-[375px]:max-w-[24rem]
              xs:text-base xs:max-w-[28rem]
              md:mt-10 md:text-xl md:max-w-2xl
              xl2:text-2xl xl2:max-w-[42rem]
              4k:text-[26px] 4k:max-w-[48rem]
            "
          >
            It all began with a simple yet exquisite silver kettle, passed down
            through generations. That silver kettle wasn’t just a beautiful
            object—it brought people together around the table, pouring tea,
            laughter, and conversations that created lasting memories. It became
            a symbol of connection, nostalgia, and shared experiences.
          </p>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE (DESKTOP) */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
        className="
          pointer-events-none absolute top-0 bottom-0 right-0 hidden
          md:flex items-end
          translate-x-16
          lg:translate-x-28
          xl2:translate-x-36
          4k:translate-x-48
        "
      >
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={2000}
          height={2200}
          sizes="(max-width: 768px) 0px, (max-width: 1024px) 45vw, (max-width: 1440px) 40vw, 36vw"
          className="h-[76svh] w-auto object-contain xl2:h-[78svh] 4k:h-[80svh]"
          priority={false}
        />
      </motion.div>

      {/* MOBILE / TABLET IMAGE */}
      <div className="relative mt-6 flex w-full justify-center md:hidden">
        <Image
          src="/F5.png"
          alt="Silver candle holders"
          width={1200}
          height={1400}
          sizes="(max-width: 320px) 92vw, (max-width: 375px) 92vw, (max-width: 425px) 86vw, (max-width: 768px) 70vw, 60vw"
          className="h-[48svh] w-auto object-contain min-[375px]:h-[50svh] xs:h-[52svh]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
