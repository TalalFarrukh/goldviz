import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import { TOURS } from "@/data/tours";
import { CheckCircle2, XCircle, MapPin, BedDouble, Sparkles, Star } from "lucide-react";

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return { title: "Holiday Tour Not Found" };
  return {
    title: `${tour.destination}, ${tour.country} — Holiday Package`,
    description: `${tour.intro} Book your ${tour.destination} holiday with GoldViz Travels & Tours.`,
    alternates: { canonical: `/services/holiday-tours/${tour.slug}` },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow={tour.country}
          title={tour.destination}
          highlight={`— ${tour.tagline}`}
          subtitle={tour.intro}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Holiday Tours", href: "/services/holiday-tours" },
            { label: tour.destination },
          ]}
        />

        {/* Highlights */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Highlights */}
              <Reveal x={-30} y={0}>
                <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="animate-pulse-slow" /> Tour Highlights
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">
                  What Makes This Trip Special
                </h2>
                <StaggerGroup className="space-y-3" stagger={0.08}>
                  {tour.highlights.map((h) => (
                    <StaggerItem key={h}>
                      <div className="group flex items-start gap-3 font-[family-name:var(--font-body)] text-[#1a1a2e] text-base hover:bg-white/60 hover:px-3 hover:py-2 hover:-mx-3 hover:-my-2 rounded-xl transition-all duration-300">
                        <Star
                          size={18}
                          className="text-[#c9a227] shrink-0 mt-0.5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"
                          strokeWidth={2}
                          fill="#c9a227"
                        />
                        {h}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Reveal>

              {/* Hotel + meta */}
              <Reveal x={30} y={0} delay={0.15}>
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0d2016] rounded-3xl p-8 lg:p-10 border-2 border-[#c9a227]/30 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                    <MapPin size={22} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-[#c9a227] text-xs font-bold uppercase tracking-widest">
                      Destination
                    </p>
                    <p className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold">
                      {tour.destination}, {tour.country}
                    </p>
                  </div>
                </div>

                {tour.hotelsNote && (
                  <div className="flex items-start gap-3 pt-6 border-t border-white/10">
                    <BedDouble size={20} className="text-[#c9a227] shrink-0 mt-1" />
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-1">
                        Accommodation
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-white/80 text-sm leading-relaxed">
                        {tour.hotelsNote}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-white/40 font-[family-name:var(--font-body)] text-xs">
                    Pricing &amp; dates available on enquiry — talk to our team
                    for the latest packages.
                  </p>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Packages (if any) */}
        {tour.packages && tour.packages.length > 0 && (
          <section className="py-20 lg:py-24 bg-[#faf7f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-12">
                <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                  Choose Your Itinerary
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
                  Package Options
                </h2>
              </Reveal>
              <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
                {tour.packages.map((pkg) => (
                  <StaggerItem key={pkg.name}>
                  <div
                    className="group h-full bg-white rounded-2xl p-7 border border-[#e8e0d0] hover:shadow-xl hover:border-[#c9a227] hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-xl mb-2 group-hover:text-[#c9a227] transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#c9a227] text-sm font-bold uppercase tracking-wide mb-5">
                      {pkg.duration}
                    </p>
                    {pkg.highlights && (
                      <ul className="space-y-2">
                        {pkg.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-[#6b9e2b] shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        )}

        {/* Inclusions / Exclusions */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <Reveal x={-30} y={0} className="bg-[#6b9e2b]/5 rounded-3xl p-8 lg:p-10 border border-[#6b9e2b]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#6b9e2b]/15 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-[#6b9e2b]" strokeWidth={2} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-2xl">
                    Package Includes
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {tour.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#6b9e2b] shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Exclusions */}
              <Reveal x={30} y={0} delay={0.1} className="bg-[#faf7f0] rounded-3xl p-8 lg:p-10 border border-[#e8e0d0]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#7a7a7a]/15 flex items-center justify-center">
                    <XCircle size={20} className="text-[#7a7a7a]" strokeWidth={2} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-2xl">
                    Not Included
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {tour.exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-[#1a1a2e] text-sm"
                    >
                      <XCircle
                        size={16}
                        className="text-[#7a7a7a] shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Optional add-ons */}
        {tour.addons && tour.addons.length > 0 && (
          <section className="py-20 lg:py-24 bg-gradient-to-br from-[#1a1a2e] to-[#0d2016]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <p className="text-[#c9a227] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center justify-center gap-2">
                  <Sparkles size={14} className="animate-pulse-slow" /> Make It Unforgettable
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                  Optional Luxury Add-ons
                </h2>
                <p className="font-[family-name:var(--font-body)] text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                  Available on request — let us know during enquiry.
                </p>
              </Reveal>
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left" stagger={0.08}>
                {tour.addons.map((a) => (
                  <StaggerItem key={a}>
                    <div className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-[#c9a227]/20 hover:border-[#c9a227]/60 rounded-xl px-5 py-4 hover:scale-[1.02] transition-all duration-300 cursor-default">
                      <Sparkles size={16} className="text-[#c9a227] shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-[family-name:var(--font-body)] text-white text-sm">
                        {a}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        )}

        <ServiceCTA
          heading={`Ready for ${tour.destination}?`}
          subheading="Send us your preferred dates and group size — we'll build a package around you."
          whatsappText={`Hi GTT, I'd like to enquire about the ${tour.destination} package.`}
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
