"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  MessageSquare,
} from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const EASE = [0.22, 1, 0.36, 1] as const;

const ContactInfo = () => {
  const [openModal, setOpenModal] = useState(false);

  const items = [
    {
      icon: Phone,
      title: "CALL US",
      description:
        "Please call to schedule an appointment\nat your preferred time.",
      action: "Call now",
      href: "tel:+971563956179",
    },
    {
      icon: Mail,
      title: "E-MAIL US",
      description: "A brand executive will respond as soon as possible",
      action: "Send an e-mail",
      href: "mailto:support@poetrydubai.com",
    },
    {
      icon: MessageCircle,
      title: "POETRY FOR YOU – MESSAGE US",
      description: "A brand executive will assist you on WhatsApp",
      action: "Send a message",
      href: "https://wa.me/971563956179",
    },
    {
      icon: MapPin,
      title: "VISIT US",
      description: "Visit us at our boutique or explore the Poetry website.",
      action: "Get directions",
      href: "https://www.google.com/maps?q=Anantara+Downtown+Hotel+Dubai",
    },
    {
      icon: Calendar,
      title: "APPOINTMENTS",
      description:
        "Book a personalized appointment\nat our exclusive store",
      action: "Book an appointment",
      onClick: () => setOpenModal(true),
    },
    {
      icon: MessageSquare,
      title: "FEEDBACK",
      description:
        "Your thoughts inspire us — share your\nfeedback and help us improve",
      action: "Share your feedback",
      href: "https://wa.me/971563956179?text=I%20would%20like%20to%20share%20my%20feedback",
    },
  ];

  return (
    <>
      <section className="bg-[#8F2C1C] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: i * 0.08, // subtle stagger
              }}
              className="flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <item.icon className="w-5 h-5 mb-4" />

                <h3 className="tracking-widest text-lg font-medium uppercase mb-5">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-white/95 whitespace-pre-line mb-6">
                  {item.description}
                </p>

                {item.action &&
                  (item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="inline-flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition"
                    >
                      {item.action}
                      <span aria-hidden>↗</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={
                        item.href?.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition"
                    >
                      {item.action}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
              </div>

              <div className="mt-10 h-px w-full bg-white/30" />
            </motion.div>
          ))}
        </div>
      </section>

      <AppointmentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default ContactInfo;
