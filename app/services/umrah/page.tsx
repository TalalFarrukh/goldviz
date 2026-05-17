import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import UmrahSpotlight from "@/components/UmrahSpotlight";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import {
  CheckCircle2,
  Users,
  BedDouble,
  Plane,
  MapPinned,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Umrah Packages — Custom Family & Group Journeys",
  description:
    "Tailored Umrah packages from GoldViz Travels & Tours — visa, hotels near Haram, flights and 24/7 support. Trusted Umrah agent in Pakistan, TAAP registered.",
  alternates: { canonical: "/services/umrah" },
};

const FEATURES = [
  {
    icon: Users,
    title: "Group & Solo Packages",
    text: "From family travel to solo pilgrims — packages built around your needs and pace.",
  },
  {
    icon: CheckCircle2,
    title: "Visa & Documentation",
    text: "Full Umrah visa processing — we handle every form, every approval.",
  },
  {
    icon: BedDouble,
    title: "Hotels Near Haram",
    text: "Stays across budgets, all within easy reach of the Haram.",
  },
  {
    icon: Plane,
    title: "Flights & Transfers",
    text: "Return flight bookings and seamless airport-to-hotel transfers.",
  },
  {
    icon: MapPinned,
    title: "Ziyarat Arrangements",
    text: "Visits to sacred sites in Makkah and Madinah — guided, scheduled, included.",
  },
  {
    icon: UserCheck,
    title: "Experienced Group Leaders",
    text: "Group packages travel with an experienced mu'allim — guidance every step.",
  },
];

export default function UmrahPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Featured Service"
          title="Umrah Packages —"
          highlight="Crafted with Care"
          subtitle="Umrah is more than a trip. We handle every detail with the respect it deserves, so you can focus entirely on your ibadah."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Umrah" },
          ]}
        />

        <UmrahSpotlight />

        {/* Features grid */}
        <section className="py-20 lg:py-24 bg-[#faf7f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                What&apos;s Included
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                A Complete Umrah Experience
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                Every package is built around your family, your budget and your
                comfort — no one-size-fits-all.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <StaggerItem key={title}>
                  <div className="group h-full bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d0] hover:shadow-xl hover:border-[#c9a227] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="w-12 h-12 rounded-full bg-[#6b9e2b]/10 flex items-center justify-center mb-5 group-hover:bg-[#6b9e2b]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon size={22} className="text-[#6b9e2b]" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <ServiceCTA
          heading="Ready to Plan Your Umrah?"
          subheading="Talk to our team for a tailored package. No commitment — just honest guidance."
          whatsappText="Hi GTT, I'd like to enquire about an Umrah package."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
