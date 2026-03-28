"use client";

import Image from "next/image";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
  "/furniture/table8.jpg",
  "/furniture/table7.jpg",
  "/furniture/table6.jpg",
  "/furniture/table5.jpg",
  "/furniture/table4.jpg",
  "/furniture/table3.jpg",
];

export default function FurniturePage() {
  return (
    <>
      <BrandStrap />
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-screen bg-[#4f0000] flex items-center justify-center px-5 sm:px-8 md:px-16 lg:px-24 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl">

          {/* LEFT → TEXT */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 leading-tight">
              Furniture Collection
            </h1>

            <div className="w-10 h-[1px] bg-white/60 mb-6 mx-auto md:mx-0" />

            <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-md mx-auto md:mx-0">
              A curated expression of form, material, and quiet luxury — where each piece exists with purpose.
            </p>
          </div>

          {/* RIGHT → IMAGE */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-sm">
            <Image
              src="/furniture/table8.jpg"
              alt="Furniture"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>

      </section>

      {/* COLLECTION GRID */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20">

        <div className="mb-10 md:mb-14 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Explore Furniture
          </h2>

          <div className="w-10 h-[1px] bg-[var(--gold)] opacity-70 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group rounded-sm"
            >
              
              <div className="relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[320px]">
                <Image
                  src={img}
                  alt="Furniture item"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}