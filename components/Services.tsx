"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  Ticket,
  FileText,
  Building2,
  Bus,
  MessageCircle,
  Stamp,
  ShieldCheck,
  Palmtree,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";

const ICON_MAP: Record<string, LucideIcon> = {
  Plane,
  Ticket,
  FileText,
  Building2,
  Bus,
  MessageCircle,
  Stamp,
  ShieldCheck,
  Palmtree,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Everything You Need for Your Journey
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
            From spiritual trips to everyday travel needs — we&apos;ve got it
            all covered.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-transparent hover:border-[#c9a227] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
                >
                  {/* Gold top border accent — wipes in left-to-right */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227] rounded-t-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* Subtle gold glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-full bg-[#6b9e2b]/10 flex items-center justify-center mb-5 group-hover:bg-[#6b9e2b]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {Icon && (
                      <Icon size={22} className="text-[#6b9e2b]" strokeWidth={1.75} />
                    )}
                  </div>

                  {/* Text */}
                  <h3 className="relative font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="relative mt-4 flex items-center gap-1 text-[#c9a227] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[family-name:var(--font-body)] uppercase tracking-wider">
                    Learn more{" "}
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
