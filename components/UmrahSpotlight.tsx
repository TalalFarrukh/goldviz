"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const UMRAH_FEATURES = [
  "Customised Group & Solo Packages",
  "Visa & Documentation Support",
  "Hotel Near Haram — All Budgets",
  "Flight Bookings & Airport Transfers",
  "24/7 Support During Travel",
];

const STEPS = [
  { label: "Ihram", desc: "Niyyah & preparation" },
  { label: "Tawaf", desc: "Seven circuits around the Kaaba" },
  { label: "Sa'i", desc: "Between Safa and Marwa" },
  { label: "Completion", desc: "Shaving & completion" },
];

export default function UmrahSpotlight() {
  return (
    <section aria-label="Umrah packages spotlight" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
              Featured Service
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5 leading-tight">
              Embark on a Sacred Journey{" "}
              <span className="text-[#c9a227]">with Confidence</span>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base leading-relaxed mb-8">
              At GoldViz, we understand that Umrah is not just a trip — it is
              one of the most meaningful experiences of your life. We handle
              every detail with the care and respect it deserves, so you can
              focus entirely on your ibadah.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {UMRAH_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#6b9e2b] shrink-0"
                    strokeWidth={2}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#1a1a2e] font-[family-name:var(--font-body)] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#c9a227]/20 hover:shadow-[#c9a227]/40"
            >
              Start Planning Your Umrah
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — Step graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Gold frame card */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0d2016] rounded-3xl p-8 border-2 border-[#c9a227]/40 shadow-2xl">
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#c9a227] rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#c9a227] rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#c9a227] rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#c9a227] rounded-br-lg" />

              <p className="text-center font-[family-name:var(--font-heading)] text-[#c9a227] text-sm font-bold uppercase tracking-widest mb-8">
                Your Umrah Journey
              </p>

              {/* Steps */}
              <div className="space-y-4">
                {STEPS.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-4">
                    {/* Number */}
                    <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center text-[#1a1a2e] font-bold text-sm shrink-0 font-[family-name:var(--font-body)]">
                      {index + 1}
                    </div>

                    {/* Connector */}
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-heading)] text-white font-bold text-base">
                        {step.label}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-white/50 text-xs mt-0.5">
                        {step.desc}
                      </p>
                    </div>

                    {/* Green dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6b9e2b] shrink-0" />
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/40 font-[family-name:var(--font-body)] text-xs">
                  We handle everything — you focus on your ibadah
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
