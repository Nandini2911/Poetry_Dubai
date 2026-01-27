"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  // UAE number – remove + and spaces for wa.me
  const phoneNumber = "971563956179";

  const message = encodeURIComponent(
    "Hello, I would like to enquire about your collections and book an appointment."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        hover:scale-105
        transition-all duration-300
      "
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.2 32l8.3-2.2c2.3 1.2 4.9 1.9 7.5 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.2-2.1-1.9-4.5-1.9-6.9 0-7.4 6-13.4 13.4-13.4S29.4 8.6 29.4 16 23.4 29 16 29zm7.3-10.1c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6 0-.2-.8-2-1.1-2.8-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.4 1.5.6 2 .8.8.2 1.5.2 2.1.1.6-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z" />
      </svg>
    </Link>
  );
}
