"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.9, ease: "easeInOut" }}
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 35%, rgba(255,255,255,0.35), transparent 60%), linear-gradient(180deg, #E9D8AE 0%, #E6D2A1 35%, #D8C08B 100%)",
      }}
    >
      {/* subtle luxury grain */}
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Logo dissolve animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.96, 1, 1.01, 1.02],
          filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(10px)"],
        }}
        transition={{
          duration: 2.8,
          times: [0, 0.25, 0.72, 1],
          ease: "easeInOut",
        }}
        className="relative will-change-transform"
      >
        {/* Responsive wrapper (works on ALL screens) */}
        <div className="w-[clamp(180px,55vw,420px)]">
          <Image
            src="/poetry_trans.webp"
            alt="Poetry Dubai"
            width={420}
            height={160}
            priority
            sizes="(max-width: 480px) 70vw, (max-width: 768px) 60vw, (max-width: 1200px) 420px, 420px"
            className="h-auto w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
