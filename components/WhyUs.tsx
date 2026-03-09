"use client";

import { motion } from "framer-motion";
import { Shield, Settings, Heart, Tag } from "lucide-react";

const PILLARS = [
  {
    id: "guidance",
    Icon: Shield,
    title: "Trusted Guidance",
    description:
      "Years of experience serving families and elders — we know what you need before you ask.",
  },
  {
    id: "custom",
    Icon: Settings,
    title: "Custom Packages",
    description:
      "No one-size-fits-all. Your journey is built around your family, your budget, your timeline.",
  },
  {
    id: "care",
    Icon: Heart,
    title: "End-to-End Care",
    description:
      "We are with you from the first booking call to the moment you return home safely.",
  },
  {
    id: "pricing",
    Icon: Tag,
    title: "Transparent Pricing",
    description:
      "No hidden costs, no surprises. You know exactly what you are paying for, always.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-label="Why families trust GoldViz Travels"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#faf7f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
            Our Promise
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Why Families Trust GoldViz
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-xl mx-auto">
            Your peace of mind is our responsibility — from booking to your safe return.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((pillar, index) => {
            const { Icon } = pillar;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-[#e8e0d0] hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-[#c9a227]/10 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#c9a227]" strokeWidth={1.75} />
                </div>

                {/* Green divider */}
                <div className="w-10 h-0.5 bg-[#6b9e2b] rounded-full mb-4" />

                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
