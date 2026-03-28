"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "/store/store1.jpeg",
  "/store/store2.jpeg",
  "/store/store3.jpeg",
  "/store/store4.jpeg",
  "/store/store5.jpeg",
  "/store/store6.jpeg",
  "/store/store7.jpeg",
  "/store/store8.jpeg",
];

export default function StorePage() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // slightly smoother timing

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BrandStrap />
      <Navbar />

      {/* HERO IMAGE SLIDER */}
      <section className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">

        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Store"
            fill
            priority={i === 0}
            className={`object-cover absolute inset-0 transition-all duration-[2500ms] ${
              i === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO TEXT (optional but recommended) */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-[#4f0000] max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
              Our Store
            </h1>

            <div className="w-10 h-[1px] mx-auto mb-4" />

            <p className="text-sm sm:text-base md:text-lg opacity-80">
              Experience our collection in a refined, immersive space.
            </p>
          </div>
        </div>

      </section>

      {/* STORE DETAILS */}
      <section className="py-16 md:py-24 text-center px-6 sm:px-10">

        <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6">
          Visit us at our boutique
        </h2>

        <div className="w-10 h-[1px] bg-[var(--gold)] mx-auto mb-6 opacity-70" />

        <p className="text-sm sm:text-base md:text-lg tracking-wide opacity-90 max-w-2xl mx-auto">
          Anantara Downtown Hotel Dubai — Business Bay, Dubai, UAE — Phone: +971 56 395 6179
        </p>

      </section>

      {/* MAP */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=Anantara+Downtown+Hotel+Dubai&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        />

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      <Footer />
    </>
  );
}