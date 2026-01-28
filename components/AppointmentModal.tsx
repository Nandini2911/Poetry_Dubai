"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AppointmentModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Server error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md bg-white p-8 rounded-sm">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            <h2 className="text-2xl font-serif text-[#8F2C1C] mb-2">
              Book an Appointment
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Please share your details and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full border px-4 py-2"
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full border px-4 py-2"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Your contact number"
                required
                className="w-full border px-4 py-2"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8F2C1C] text-white py-3"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-serif text-[#8F2C1C] mb-2">
              Thank you ✨
            </h3>
            <p className="text-sm text-gray-600">
              Your appointment request has been sent successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
