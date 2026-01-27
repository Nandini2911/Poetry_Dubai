import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  HelpCircle,
} from "lucide-react";

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
    description: "A brand ambassador will respond as soon as possible",
    action: "Send an e-mail",
    href: "mailto:support@poetrydubai.com",
  },
  {
    icon: MessageCircle,
    title: "POETRY FOR YOU – MESSAGE US",
    description: "A brand ambassador will assist you on WhatsApp",
    action: "Send a message",
    href: "https://wa.me/971563956179",
  },
  {
    icon: MapPin,
    title: "VISIT US",
    description: "Find your nearest boutique or\nPoetry Website",
    action: "Find a boutique",
    href: "https://www.google.com/maps?q=Anantara+Downtown+Hotel+Dubai",
  },
  {
  icon: Calendar,
  title: "APPOINTMENTS",
  description:
    "Book a personalized appointment\nat our exclusive store",
  action: "Book an appointment",
  href: "https://wa.me/971563956179?text=I%20would%20like%20to%20book%20an%20appointment",
},

  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to commonly raised\nquestions",
    action: "Explore FAQ",
    href: "/faq",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#8F2C1C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between min-h-[180px]"
          >
            {/* TOP CONTENT */}
            <div>
              <item.icon className="w-5 h-5 mb-4" />

              <h3 className="tracking-widest text-lg font-medium uppercase mb-5">
                {item.title}
              </h3>

              <p className="text-lg leading-relaxed text-white/95 whitespace-pre-line mb-6">
                {item.description}
              </p>

              {item.action && item.href && (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition"
                >
                  {item.action}
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>

            {/* FIXED CARTIER LINE */}
            <div className="mt-10 h-px w-full bg-white/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
