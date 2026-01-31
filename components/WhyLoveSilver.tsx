"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const images = [
  "/whysec_1.webp",
  "/whysec_2.webp",
  "/whysec_3.webp",
  "/whysec_4.webp",
  "/whysec_5.webp",
];

export default function WhyLoveSilver() {
  return (
    <section className="bg-[#FAF7F3] pt-16 sm:pt-20 pb-0 overflow-hidden">
      {/* HEADER */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Flower */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="
            relative mx-auto mb-4 w-20
            sm:absolute sm:mb-0 sm:left-0 sm:top-0 sm:w-32
            lg:w-40
          "
        >
          <Image
            src="/websiteflower.webp"
            alt="Poetry flower"
            width={320}
            height={320}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="
            font-serif text-2xl sm:text-3xl lg:text-5xl
            tracking-wide text-[#8F2C1C]
          "
        >
          WHY LOVE FOR SILVER?
        </motion.h2>
      </div>

      {/* STORY BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        className="mt-10 sm:mt-12 mx-auto max-w-6xl bg-[#8F2C1C] py-10 sm:py-16"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
          <p className="font-serif text-sm sm:text-lg lg:text-xl leading-relaxed text-[#FAF7F3]">
            It all began with a simple yet exquisite silver kettle, passed down
            through generations. That silver kettle wasn’t just a beautiful
            object—it brought people together around the table, pouring tea,
            laughter, and conversations that created lasting memories. It became
            a symbol of connection, nostalgia, and shared experiences.
          </p>
        </div>
      </motion.div>

      {/* SUB TITLE */}
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        className="
          mt-6 mb-2 mx-auto max-w-6xl px-6 text-center
          font-serif text-xl sm:text-3xl text-[#8F2C1C]
        "
        style={{ fontFamily: "Alex Brush" }}
      />

      {/* SLIDING IMAGE STRIP (shifted upward slightly) */}
      <div className="relative overflow-hidden pt-2 pb-2 sm:pb-4 -mt-4 sm:-mt-6">
        <motion.div
          className="flex w-max gap-4 sm:gap-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="
                relative flex items-center justify-center
                h-[260px] sm:h-[340px] lg:h-[400px]
                w-[200px] sm:w-[280px] lg:w-[320px]
                flex-shrink-0
              "
            >
              <Image
                src={src}
                alt="Poetry silver craft"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
