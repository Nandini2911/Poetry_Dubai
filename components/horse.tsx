"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FullImageCTA() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, ease: EASE }}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden mt-12 md:mt-5 bg-[#4f0000]"
    >
      
      {/* IMAGE WRAPPER */}
      <div className="absolute inset-0">

        {/* DESKTOP IMAGE */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src="/horse.jpeg"
            alt="Collection"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* MOBILE IMAGE */}
        <div className="block md:hidden w-full h-full relative">
          <Image
            src="/mo-horse.jpeg"
            alt="Collection mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* OPTIONAL DARK OVERLAY (adds luxury feel) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-end justify-end md:justify-center px-3 sm:px-4 md:px-16 pb-20 sm:pb-14 md:pb-24">

        <motion.button
          onClick={() => router.push("/horsecollection")}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="
            inline-flex items-center justify-center
            rounded-full
            border border-white
            px-2 py-2
            sm:px-6 sm:py-2.5
            md:px-10 md:py-4
            text-[8px]
            sm:text-sm
            md:text-base
            tracking-wide
            text-white
            hover:bg-white hover:text-black
            transition duration-300
          "
        >
          Discover the Collection
        </motion.button>

      </div>
    </motion.section>
  );
}