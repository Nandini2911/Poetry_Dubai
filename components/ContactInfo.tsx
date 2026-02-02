"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  MessageSquare,
  X,
} from "lucide-react";

const ContactInfo = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      description: "Book a personalized appointment\nat our exclusive store",
      action: "Book an appointment",
      onClick: () => setOpen(true),
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Appointment request sent successfully ✅");
      form.reset();
      setOpen(false);
    } catch (error) {
      alert("Something went wrong. Please try again ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-[#8F2C1C] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col justify-between min-h-[180px]">
              <div>
                <item.icon className="w-5 h-5 mb-4" />

                <h3 className="tracking-widest text-lg font-medium uppercase mb-5">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-white/95 whitespace-pre-line mb-6">
                  {item.description}
                </p>

                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="inline-flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition"
                  >
                    {item.action} <span>↗</span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition"
                  >
                    {item.action} <span>↗</span>
                  </a>
                )}
              </div>

              <div className="mt-10 h-px w-full bg-white/30" />
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white text-black w-full max-w-md p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-black/60 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl tracking-widest uppercase mb-6">
              Book Appointment
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-black/30 px-4 py-3 outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
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
                disabled={loading}
                className="w-full bg-[#8F2C1C] text-white py-3 tracking-wide hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
