"use client";

import BrandStrap from "@/components/BrandStrap";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const horses = [
  { id: 1, src: "/hor1_new.jpeg", name: "Pegasus in Silver with Stones" },
  { id: 2, src: "/hor2-new.jpeg", name: "Silver Horse Figurine" },
  { id: 3, src: "/hor3-new.jpeg", name: "Silver Horse Sculpture in Motion" },
  { id: 4, src: "/hor4-new.jpeg", name: "Gilded Elegance Silver Horse" },
  { id: 5, src: "/hor5-new.jpeg", name: "Gilded Elegance Silver Horse" },
  { id: 6, src: "/hor6-new.jpeg", name: "Carved Wooden Horse Figurine" },
  { id: 7, src: "/hor7-new.jpeg", name: "Pegasus in Silver  " },
  { id: 8, src: "/hor8-new.jpeg", name: "Silver Horse" },
  { id: 9, src: "/hor9-new.jpeg", name: "Red Comet" },

];

export default function CollectionPage() {
  return (
    
    <section className="w-full min-h-screen px-4 ">
           <BrandStrap />
        <Navbar />
      
      {/* TITLE */}
      <h1 className="text-2xl md:text-4xl font-playfair text-center mb-12">
        Our Collection
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {horses.map((horse) => (
          
          /* CARD */
          <div
            key={horse.id}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition duration-300
              group
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={horse.src}
                alt={horse.name}
                fill
                className="
                  object-cover
                  group-hover:scale-105
                  transition duration-500
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">
              <h2 className="text-sm md:text-lg font-semibold tracking-wide">
                {horse.name}
              </h2>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}