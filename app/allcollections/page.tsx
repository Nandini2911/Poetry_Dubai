"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Furniture",
    image: "/furniture/table8.jpg",
    link: "/allcollections/furniture",
  },
  {
    name: "Artifacts",
    image: "/showcase/showcase5.jpg",
    link: "/allcollections/artifacts",
  },
  {
    name: "Serveware",
    image: "/kitchen/kitchen.jpg",
    link: "/allcollections/serveware",
  },
];

export default function CollectionPage() {
  const router = useRouter();

  return (
    <>
      {/* TOP BAR */}
      <BrandStrap />
      <Navbar />

      {/* MAIN SECTION */}
      <section className="px-4 md:px-10 py-16">
        
        <h1 className="text-3xl md:text-5xl mb-12">
          Our Collections
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => router.push(item.link)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="relative cursor-pointer overflow-hidden group"
            >
              
              {/* IMAGE */}
              <div className="relative h-[400px]">
                <Image
  src={item.image}
  alt={item.name}
  fill
  className="object-cover blur-[2px] group-hover:blur-0 group-hover:scale-105 transition duration-700 ease-out"
/>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* TEXT */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-2xl tracking-wide">
                  {item.name}
                </h2>
              </div>

            </motion.div>
          ))}
        </div>

      </section>
      <Footer />
    </>
  );
}