"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  breadcrumbs,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#0d2016] pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-[#c9a227]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#6b9e2b]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6 flex items-center gap-1.5 text-xs font-[family-name:var(--font-body)] text-white/50"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} className="text-white/30" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#c9a227] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="text-[#c9a227] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-[#c9a227]">{highlight}</span>
            </>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-[family-name:var(--font-body)] text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
