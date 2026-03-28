"use client";

import { motion } from "framer-motion";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  return (
    <>
      <BrandStrap />
      <Navbar />

      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16">

          {/* LEFT → STICKY VIDEO */}
          <div className="relative">
            <div className="sticky top-20 md:top-24">
              
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="relative w-full 
                  h-[300px] 
                  sm:h-[380px] 
                  md:h-[420px] 
                  lg:h-[480px] 
                  overflow-hidden"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/20" />
                <div className="poetry-shimmer" />
              </motion.div>

            </div>
          </div>

          {/* RIGHT → SCROLLING TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            viewport={{ once: true }}
            className="max-w-full md:max-w-lg"
          >

            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-6">
              About Poetry
            </h1>

            <div className="w-10 h-[1px] bg-[var(--gold)] mb-8 opacity-70" />

            <div className="space-y-6 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] tracking-[0.02em] text-justify">

              <p>
                We welcome you into a world where objects are not merely created… they are felt.
              </p>

              <p>
                Poetry was born from a quiet fascination with form, material, and meaning — an instinctive pull towards pieces that do more than occupy space. What began as an intimate relationship with silver, its softness, its strength, its ability to hold light and memory, has slowly evolved into something far more expansive.
              </p>

              <p>
                Today, Poetry is not defined by a single material.<br />
                It is defined by intention.
              </p>

              <p>
                Every creation, whether sculpted in silver, touched with gold, carved in stone, or imagined through form, carries a certain stillness within it — a sense of presence. These are not just objects of luxury, but expressions of thought, emotion, and quiet opulence.
              </p>

              <p>
                We believe that the things you live with should hold meaning. They should anchor moments, invite pause, and elevate the everyday without ever asking for attention.
              </p>

              <p>
                Our pieces are not designed to follow tradition, yet they carry a certain timelessness. They are not bound by categories, yet they belong effortlessly in spaces that seek depth, beauty, and character.
              </p>

              <p>
                At Poetry, luxury is not loud.<br />
                It is intentional.<br />
                It is layered.<br />
                It is something you discover slowly, over time.
              </p>

              <p className="opacity-80">
                Because the most beautiful things are not always seen at first glance…<br />
                they are felt, lived with, and remembered.
              </p>

              {/* LOGO */}
              <div className="pt-10 flex justify-center md:justify-start">
                <img
                  src="/poetry_trans2.jpg"
                  alt="Poetry Logo"
                  className="h-12 sm:h-14 md:h-14 lg:h-15 opacity-80"
                />
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
}