"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import SplashScreen from "@/components/SplashScreen";
import Footer from "@/components/Footer";
import BrandStrap from "@/components/BrandStrap";
import FounderNote from "@/components/FounderNote";
import LatestCollection from "@/components/LatestCollection";
import WhyLoveSilver from "@/components/WhyLoveSilver";
import IntentBeliefSection from "@/components/IntentBeliefSection";
import SilverStoriesShared from "@/components/SilverStoriesShared";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Splash */}
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

      {/* Main site appears after splash */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 1.015, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <BrandStrap />
          <Navbar />
          <main>
            <Hero />
            <FounderNote />
            <LatestCollection/>
            <WhyLoveSilver/>
            <IntentBeliefSection/>
            <SilverStoriesShared/>
            <Footer/>
          </main>
        </motion.div>
      )}
    </>
  );
}
