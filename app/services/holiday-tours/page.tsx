import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import { TOURS } from "@/data/tours";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Holiday Tours — Baku, Malaysia, Thailand & Bali Packages",
  description:
    "Curated international holiday packages from GoldViz Travels & Tours. Explore Baku, Kuala Lumpur, Thailand and Bali with hotels, tours and transfers handled.",
  alternates: { canonical: "/services/holiday-tours" },
};

export default function HolidayToursPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Holiday Tours"
          title="Curated Escapes —"
          highlight="Built for Memories"
          subtitle="From Baku's Flame Towers to Bali's island villas — our holiday packages handle the planning so you can focus on the trip."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Holiday Tours" },
          ]}
        />

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                Featured Destinations
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                Where Would You Like to Go?
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                Hand-picked international destinations — each with hotels,
                tours and transfers already arranged.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" stagger={0.12}>
              {TOURS.map((tour) => (
                <StaggerItem key={tour.slug}>
                  <Link
                    href={`/services/holiday-tours/${tour.slug}`}
                    className="group block h-full bg-white rounded-3xl border border-[#e8e0d0] hover:border-[#c9a227] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col relative"
                  >
                    {/* Top color band */}
                    <div className="h-2 bg-gradient-to-r from-[#c9a227] via-[#e8c84a] to-[#6b9e2b] bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-[background-position] duration-700" />

                    {/* Decorative shimmer overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative p-7 sm:p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-[family-name:var(--font-body)] text-[#6b9e2b] text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                            <MapPin size={12} className="group-hover:scale-110 transition-transform" />
                            {tour.country}
                          </p>
                          <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#1a1a2e] group-hover:text-[#c9a227] transition-colors">
                            {tour.destination}
                          </h3>
                        </div>
                      </div>

                      <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed mb-5 flex-1">
                        {tour.intro}
                      </p>

                      {/* Highlight preview */}
                      <ul className="space-y-1.5 mb-5">
                        {tour.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            className="font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm flex items-start gap-2"
                          >
                            <span className="text-[#c9a227] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a227]" />
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-1.5 text-[#c9a227] font-[family-name:var(--font-body)] font-bold text-sm uppercase tracking-wider mt-auto">
                        Explore package
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="text-center font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm mt-12">
              Looking for somewhere not listed?{" "}
              <Link
                href="/#contact"
                className="text-[#c9a227] font-bold hover:underline"
              >
                Tell us where
              </Link>{" "}
              — we likely have a package for it.
            </p>
          </div>
        </section>

        <ServiceCTA
          heading="Ready to Plan Your Holiday?"
          subheading="Tell us your destination, group size and preferred dates — we'll build the rest."
          whatsappText="Hi GTT, I'd like to enquire about a holiday package."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
