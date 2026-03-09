"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ClipboardList, Plane, LucideIcon } from "lucide-react";
import { HOW_IT_WORKS } from "@/data/howItWorks";

const ICON_MAP: Record<string, LucideIcon> = {
  Phone,
  MessageCircle,
  ClipboardList,
  Plane,
};

export default function HowItWorks() {
  return (
    <section
      aria-label="How our travel booking process works"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#faf7f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
            Simple Process
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Your Journey in 4 Simple Steps
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-xl mx-auto">
            We make the process effortless — just reach out and let us handle
            everything from there.
          </p>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 border-t-2 border-dashed border-[#6b9e2b]/40 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
                >
                  {/* Mobile vertical connector */}
                  <div className="lg:hidden flex flex-col items-center shrink-0">
                    {/* Number circle */}
                    <div className="w-14 h-14 rounded-full bg-[#c9a227] flex items-center justify-center text-[#1a1a2e] font-bold text-xl font-[family-name:var(--font-body)] shadow-md shadow-[#c9a227]/20">
                      {step.number}
                    </div>
                    {index < HOW_IT_WORKS.length - 1 && (
                      <div className="w-0.5 h-12 border-l-2 border-dashed border-[#6b9e2b]/40 mt-2" />
                    )}
                  </div>

                  {/* Desktop number circle */}
                  <div className="hidden lg:flex w-16 h-16 rounded-full bg-[#c9a227] items-center justify-center text-[#1a1a2e] font-bold text-2xl font-[family-name:var(--font-body)] shadow-md shadow-[#c9a227]/20 mb-5 mx-auto">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="lg:px-4">
                    {/* Icon */}
                    <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#6b9e2b]/10 items-center justify-center mb-4 mx-auto">
                      {Icon && (
                        <Icon
                          size={18}
                          className="text-[#6b9e2b]"
                          strokeWidth={1.75}
                        />
                      )}
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
