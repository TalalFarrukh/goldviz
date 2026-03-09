"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const TRUST_ITEMS = [
  "Custom Packages",
  "Trusted Guidance",
  "End-to-End Support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1120] via-[#1a1a2e] to-[#0d2016]" />

      {/* Decorative gold orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#6b9e2b]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-[#c9a227]/15 border border-[#c9a227]/30 text-[#c9a227] text-xs font-[family-name:var(--font-body)] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
          Pakistan&apos;s Trusted Travel Partner
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.1] mb-6"
        >
          Your Journey,
          <br />
          <span className="text-[#c9a227]">Our Care.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[family-name:var(--font-body)] text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From sacred Umrah journeys to seamless travel experiences — we handle
          everything so you don&apos;t have to.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#1a1a2e] font-[family-name:var(--font-body)] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c9a227]/20 hover:shadow-[#c9a227]/40 hover:scale-105"
          >
            Plan My Umrah
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#c9a227] text-white hover:text-[#c9a227] font-[family-name:var(--font-body)] font-bold text-base px-8 py-4 rounded-full transition-all duration-200"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/60 font-[family-name:var(--font-body)] text-sm"
            >
              <CheckCircle2 size={16} className="text-[#6b9e2b] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf7f0] to-transparent" />
    </section>
  );
}
