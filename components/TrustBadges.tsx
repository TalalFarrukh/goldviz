"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Divider = () => (
  <div className="hidden sm:block w-px h-[80px] bg-[#c9a227]/30 shrink-0" />
);

export default function TrustBadges() {
  return (
    <section
      aria-label="Our partners and affiliations"
      className="border-t border-b border-[#c9a227]/40 py-7 bg-[#1a1a2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Label */}
        <motion.p
          className="font-[family-name:var(--font-body)] text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Our Partners &amp; Affiliations
        </motion.p>

        {/* Logos */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* TAAP */}
          <motion.div
            className="rounded-2xl px-6 py-4 flex items-center justify-center border-2 border-transparent"
            style={{ background: "#ffffff" }}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/taapLogo.webp"
              alt="TAAP — Travel Agents Association of Pakistan"
              width={160}
              height={80}
              className="h-[100px] w-auto object-contain"
            />
          </motion.div>

          <Divider />

          {/* LCCI */}
          <motion.div
            className="rounded-2xl px-6 py-4 flex items-center justify-center border-2 border-transparent"
            style={{ background: "#ffffff" }}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/lcciLogo.webp"
              alt="LCCI — Lahore Chamber of Commerce and Industry"
              width={436}
              height={120}
              className="h-[100px] w-auto object-contain"
            />
          </motion.div>

          <Divider />

          {/* FlyJinnah */}
          <motion.div
            className="rounded-2xl px-6 py-4 flex items-center justify-center border-2 border-transparent"
            style={{ background: "#ffffff" }}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/fjLogo.webp"
              alt="FlyJinnah — Airline Partner"
              width={2000}
              height={1126}
              className="h-[100px] object-contain"
              style={{ width: "auto" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
