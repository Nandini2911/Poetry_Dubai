"use client";

import Image from "next/image";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
 
  { src: "/showcase/showcase.jpg", title: "Owl in pink Quartz" },
  { src: "/showcase/showcase2.jpg", title: "Owl in Treated Steel Sheet" },
  { src: "/showcase/showcase3.jpg", title: "Silver Horse Sculpture in Motion" },
  { src: "/showcase/showcase4.jpg", title: "Owl in Gold Clad" },
   { src: "/showcase/showcase5.jpg", title: "Silver Peacock" },
  { src: "/showcase/showcase6.jpg", title: "Wall Lights Set in silver" },
  { src: "/showcase/showcase7.jpg", title: "Subtle Texture" },
  { src: "/showcase/showcase8.jpg", title: "Elegant Simplicity" },
  { src: "/showcase/showcase9.jpg", title: "Crafted Essence" },
  { src: "/showcase/showcase10.jpg", title: "Enduring Beauty" },
  { src: "/showcase/showcase11.jpg", title: "Quiet Luxury" },
  { src: "/showcase/showcase12.jpg", title: "Timeless Craft" },
  { src: "/showcase/showcase13.jpg", title: "Sculptural Object" },
  { src: "/showcase/showcase14.jpg", title: "Material Presence" },
  { src: "/showcase/showcase15.jpg", title: "Refined Object" }, 
  { src: "/showcase/showcase16.jpg", title: "Quiet Form" },
  { src: "/showcase/showcase17.jpg", title: "Timeless Material" },
  { src: "/showcase/showcase18.jpg", title: "Crafted Form" },
  { src: "/showcase/showcase19.jpg", title: "Subtle Object" },
  { src: "/showcase/showcase20.jpg", title: "Elegant Material" },
  { src: "/showcase/showcase21.jpg", title: "Enduring Object" },
  { src: "/showcase/showcase22.jpg", title: "Quiet Craft" },
  { src: "/showcase/showcase23.jpg", title: "Sculpted Form" },
  { src: "/showcase/showcase24.jpg", title: "Silent Presence" },
  { src: "/showcase/showcase25.jpg", title: "Timeless Object" },
  { src: "/showcase/showcase26.jpg", title: "Material Study" },
  { src: "/showcase/showcase27.jpg", title: "Quiet Detail" },
  { src: "/showcase/showcase28.jpg", title: "Refined Shape" },
  { src: "/showcase/showcase29.jpg", title: "Subtle Texture" },
  { src: "/showcase/showcase30.jpg", title: "Elegant Simplicity" },
  { src: "/showcase/showcase31.jpg", title: "Crafted Essence" },
  { src: "/showcase/showcase32.jpg", title: "Enduring Beauty" },
  { src: "/showcase/showcase33.jpg", title: "Quiet Luxury" }, 
  { src: "/showcase/showcase38.jpg", title: "Quiet Form" },
  { src: "/showcase/showcase39.jpg", title: "Timeless Material" },
  { src: "/showcase/showcase40.jpg", title: "Crafted Form" },
  { src: "/showcase/showcase41.jpg", title: "Subtle Object" },
  { src: "/showcase/showcase42.jpg", title: "Elegant Material" },
  { src: "/showcase/showcase43.jpg", title: "Enduring Object" },
  { src: "/showcase/showcase44.jpg", title: "Quiet Craft" },
  { src: "/showcase/showcase45.jpg", title: "Sculpted Form" },
  { src: "/showcase/showcase46.jpg", title: "Silent Presence" },
  { src: "/showcase/showcase48.jpg", title: "Material Study" },
  { src: "/showcase/showcase49.jpg", title: "Quiet Detail" },
  { src: "/showcase/showcase50.jpg", title: "Refined Shape" },
  { src: "/showcase/showcase51.jpg", title: "Subtle Texture" },
  { src: "/showcase/showcase53.jpg", title: "Crafted Essence" },
  { src: "/showcase/showcase54.jpg", title: "Enduring Beauty" },
  { src: "/showcase/showcase55.jpg", title: "Quiet Luxury" },
  { src: "/showcase/showcase56.jpg", title: "Timeless Craft" },
  { src: "/showcase/showcase57.jpg", title: "Sculptural Object" },
  { src: "/showcase/showcase58.jpg", title: "Material Presence" },
  { src: "/showcase/showcase59.jpg", title: "Refined Object" }, 
  { src: "/showcase/showcase61.jpg", title: "Timeless Material" },
  { src: "/showcase/showcase62.jpg", title: "Crafted Form" },
  { src: "/showcase/showcase63.jpg", title: "Subtle Object" },
  { src: "/showcase/showcase64.jpg", title: "Elegant Material" },
  { src: "/showcase/showcase65.jpg", title: "Enduring Object" },

  
  
  
  
];

export default function ArtifactsPage() {
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
        Artifacts Collection
      </h1>

      <div className="w-10 h-[1px] bg-white/60 mb-6 mx-auto md:mx-0" />

      <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-md mx-auto md:mx-0">
        Objects that carry history, presence, and quiet expression — crafted to exist beyond time.
      </p>
    </motion.div>

    {/* RIGHT → IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-sm"
    >
      <Image
        src="/showcase/showcase5.jpg"
        alt="Artifacts"
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
            Explore Artifacts
          </h2>

          <div className="w-10 h-[1px] bg-[var(--gold)] opacity-70 mx-auto md:mx-0" />
        </div>

        {/* PREMIUM CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              
              {/* CARD */}
              <div className="relative overflow-hidden rounded-md bg-black/5">

                {/* IMAGE */}
                <div className="relative h-[240px] sm:h-[280px] md:h-[300px] lg:h-[340px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                {/* TITLE */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <div className="overflow-hidden">
                    <p className="text-white text-sm tracking-[0.15em] uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}