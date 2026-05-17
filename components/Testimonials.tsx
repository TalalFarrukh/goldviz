"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl border border-[#e8e0d0] hover:border-[#c9a227]/50 hover:-translate-y-1 h-full flex flex-col transition-all duration-300 relative overflow-hidden">
      {/* Gold corner accent — appears on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#c9a227]/0 to-transparent group-hover:from-[#c9a227]/15 transition-all duration-500 pointer-events-none" />

      {/* Quote icon */}
      <div className="mb-4">
        <Quote
          size={28}
          className="text-[#c9a227]/30 group-hover:text-[#c9a227]/60 group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className="text-[#c9a227] fill-[#c9a227] group-hover:scale-110 transition-transform duration-300"
            style={{ transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#e8e0d0]">
        <div className="w-10 h-10 rounded-full bg-[#c9a227]/15 flex items-center justify-center text-[#c9a227] font-bold text-xs font-[family-name:var(--font-body)] shrink-0 group-hover:bg-[#c9a227]/25 group-hover:scale-110 transition-all duration-300">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-[family-name:var(--font-body)] font-bold text-[#1a1a2e] text-sm">
            {testimonial.name}
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-xs">
            {testimonial.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Customer testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
            Real Experiences
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            What Our Travelers Say
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-xl mx-auto">
            Trusted by families across Pakistan — here are a few of their stories.
          </p>
        </div>

        {/* Desktop: 3-col grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>

        {/* Mobile: Swiper carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-10"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
