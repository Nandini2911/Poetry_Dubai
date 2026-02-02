"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeVisitCard() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ensure portal renders only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      type: "home-visit",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      time: (form.elements.namedItem("time") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
    };

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Home visit request sent successfully ✅");
      form.reset();
      setOpen(false);
    } else {
      alert("Something went wrong ❌");
    }
  }

  return (
    <>
      {/* CARD (UNCHANGED DESIGN) */}
      <div className="bg-[#FAF7F3] px-4 sm:px-6 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="
            relative
            mx-auto mt-10 sm:mt-16
            max-w-4xl
            overflow-hidden
            rounded-[32px]
            px-8 sm:px-16
            py-12 sm:py-14
            text-center
            shadow-[0_30px_90px_rgba(0,0,0,0.10)]
            ring-1 ring-black/5
            bg-white
          "
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(143,44,28,0.20),transparent_60%)]
            "
          />
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(120%_120%_at_50%_50%,rgba(143,44,28,0.10),transparent_70%)]
            "
          />
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-3
              rounded-[26px]
              border border-[#8F2C1C]/15
            "
          />

          <div className="relative z-10">
            <div className="mx-auto mb-6 w-fit">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#8F2C1C]/10 px-4 py-2 text-xs sm:text-sm tracking-wide text-[#8F2C1C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8F2C1C]" />
                Home Visit Booking
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[#1C1C1C]">
              You can book us for a{" "}
              <span className="italic text-[#8F2C1C]">home visit</span>,
              <br className="hidden sm:block" />
              <span className="font-medium">
                available exclusively in Dubai.
              </span>
            </p>

            <div className="mx-auto mt-6 h-px w-24 bg-[#8F2C1C]/40" />

            <p className="mt-4 text-xs sm:text-sm tracking-wide text-black/55">
              Prior appointment only
            </p>

            <button
              onClick={() => setOpen(true)}
              className="
                mt-8 inline-flex items-center justify-center
                rounded-full
                border border-[#8F2C1C]
                px-8 py-3
                text-sm tracking-wide
                text-[#8F2C1C]
                hover:bg-[#8F2C1C] hover:text-white
                transition
              "
            >
              Book Home Visit
            </button>
          </div>
        </motion.div>
      </div>

      {/* ✅ MODAL VIA PORTAL */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-4">
            <div className="relative w-full max-w-md bg-white p-8 text-black">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-black/60 hover:text-black"
              >
                <X size={20} />
              </button>

              <h2 className="mb-6 text-lg tracking-widest uppercase">
                Book Home Visit
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-black/30 px-4 py-3 outline-none"
                />

                <input
                  name="location"
                  type="text"
                  placeholder="Location / Area"
                  required
                  className="w-full border border-black/30 px-4 py-3 outline-none"
                />

                <input
                  name="date"
                  type="date"
                  required
                  className="w-full border border-black/30 px-4 py-3 outline-none"
                />

                <input
                  name="time"
                  type="time"
                  required
                  className="w-full border border-black/30 px-4 py-3 outline-none"
                />

                <input
                  name="contact"
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className="w-full border border-black/30 px-4 py-3 outline-none"
                />

                <button
                  type="submit"
                  className="mt-4 w-full bg-[#8F2C1C] py-3 text-sm tracking-wide text-white hover:opacity-90 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
