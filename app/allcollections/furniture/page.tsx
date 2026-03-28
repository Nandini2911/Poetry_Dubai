"use client";

import Image from "next/image";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
  { src: "/furniture/table.jpg", title: "Dining Table" },
  { src: "/furniture/table1.jpg", title: "Classic Table" },
  { src: "/furniture/table2.jpg", title: "Minimal Table" },
  { src: "/furniture/table3.jpg", title: "Wooden Form" },
  { src: "/furniture/table4.jpg", title: "Refined Surface" },
  { src: "/furniture/table5.jpg", title: "Crafted Table" },
  { src: "/furniture/table6.jpg", title: "Elegant Form" },
  { src: "/furniture/table7.jpg", title: "Modern Table" },
  { src: "/furniture/table8.jpg", title: "Lounge Chair" },
  { src: "/furniture/table9.jpg", title: "Accent Chair" },
  { src: "/furniture/table11.jpg", title: "Classic Chair" },
  { src: "/furniture/table12.jpg", title: "Sculptural Chair" },
  { src: "/furniture/table13.jpg", title: "Statement Chair" },
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
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-white text-center md:text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 leading-tight">
        Furniture Collection
      </h1>

      <div className="w-10 h-[1px] bg-white/60 mb-6 mx-auto md:mx-0" />

      <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-md mx-auto md:mx-0">
        A curated expression of form, material, and quiet luxury — where each piece exists with purpose.
      </p>
    </motion.div>

    {/* RIGHT → IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 1.05 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-sm"
    >
      <Image
        src="/furniture/table8.jpg"
        alt="Furniture"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />
    </motion.div>

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

        {/* GRID WITH NAMES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group rounded-sm"
            >
              
              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[320px]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-white text-sm tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition duration-500">
                  {item.title}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}