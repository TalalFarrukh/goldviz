import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceCTAProps {
  heading: string;
  subheading?: string;
  whatsappText?: string;
}

export default function ServiceCTA({
  heading,
  subheading = "Speak to our team — we'll guide you through every step.",
  whatsappText = "Hi GTT, I'd like to enquire about your services.",
}: ServiceCTAProps) {
  const waLink = `https://wa.me/923020438715?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="py-20 lg:py-24 bg-[#faf7f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
          {heading}
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white font-[family-name:var(--font-body)] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-105"
          >
            <FaWhatsapp size={18} className="group-hover:rotate-12 transition-transform duration-200" />
            WhatsApp Us
          </a>
          <a
            href="tel:+923020438715"
            className="group inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#1a1a2e] font-[family-name:var(--font-body)] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#c9a227]/20 hover:shadow-xl hover:shadow-[#c9a227]/40 hover:-translate-y-0.5 hover:scale-105"
          >
            <Phone size={16} className="group-hover:rotate-12 transition-transform duration-200" />
            Call +92 302 0438715
          </a>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 text-[#1a1a2e] hover:text-[#c9a227] font-[family-name:var(--font-body)] font-bold text-sm px-5 py-3.5 transition-colors"
          >
            Send an enquiry
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
