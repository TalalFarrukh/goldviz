import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import { INSURANCE_PLANS } from "@/data/insurance";
import {
  CheckCircle2,
  Globe,
  Stamp,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Insurance — Worldwide, Schengen & Student Plans",
  description:
    "Reliable travel insurance from GoldViz Travels & Tours — worldwide coverage, Schengen-compliant plans, and student travel insurance for studies abroad.",
  alternates: { canonical: "/services/travel-insurance" },
};

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Stamp,
  GraduationCap,
};

export default function TravelInsurancePage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Travel Insurance"
          title="Travel with Confidence,"
          highlight="Wherever You Go"
          subtitle="Whether you're exploring worldwide, applying for a Schengen visa, or studying abroad — we'll match you with the right plan."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Travel Insurance" },
          ]}
        />

        {/* Plans */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                Coverage Plans
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                Choose the Right Plan for Your Trip
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                Three core plans — each built around how you travel.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
              {INSURANCE_PLANS.map((plan) => {
                const Icon = ICON_MAP[plan.icon] ?? ShieldCheck;
                return (
                  <StaggerItem key={plan.id} className="h-full">
                  <div
                    className="group h-full bg-white rounded-2xl p-8 shadow-md border border-[#e8e0d0] hover:shadow-2xl hover:border-[#c9a227] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 via-[#c9a227]/0 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-14 h-14 rounded-full bg-[#6b9e2b]/10 flex items-center justify-center mb-5 group-hover:bg-[#6b9e2b]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon size={26} className="text-[#6b9e2b]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-xl mb-1.5">
                      {plan.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#c9a227] text-sm font-bold uppercase tracking-wide mb-4">
                      {plan.tagline}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed mb-5">
                      {plan.description}
                    </p>
                    <ul className="space-y-2.5 mt-auto">
                      {plan.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#6b9e2b] shrink-0 mt-0.5"
                            strokeWidth={2}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 lg:py-24 bg-[#faf7f0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="bg-white rounded-3xl border border-[#e8e0d0] p-10 lg:p-14 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#c9a227]/10 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <ShieldCheck size={32} className="text-[#c9a227]" strokeWidth={1.5} />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
                Why Buy Through GoldViz?
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Travel insurance is the single most overlooked part of going
                abroad. We help you pick a plan that actually fits your trip —
                not just the cheapest one — and handle the paperwork so it&apos;s
                visa-ready when you need it.
              </p>
            </Reveal>
          </div>
        </section>

        <ServiceCTA
          heading="Get a Travel Insurance Quote"
          subheading="Tell us where you're going and we'll recommend the right plan — no obligation."
          whatsappText="Hi GTT, I'd like a travel insurance quote."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
