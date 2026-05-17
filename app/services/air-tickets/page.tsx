import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import {
  Plane,
  Ticket,
  PlaneTakeoff,
  Users,
  CalendarClock,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Air Tickets — Domestic & International Flight Booking",
  description:
    "Domestic and international air tickets through GoldViz Travels & Tours. Official FlyJinnah partner — competitive fares, group bookings, last-minute travel.",
  alternates: { canonical: "/services/air-tickets" },
};

const FEATURES = [
  {
    icon: PlaneTakeoff,
    title: "Domestic & International",
    text: "Single tickets, round-trips, multi-city — across every major airline.",
  },
  {
    icon: Ticket,
    title: "Competitive Fares",
    text: "We watch the prices so you don't have to — best fares on your route.",
  },
  {
    icon: Users,
    title: "Group Bookings",
    text: "Family travel, corporate groups, Umrah groups — block bookings handled.",
  },
  {
    icon: CalendarClock,
    title: "Last-Minute Travel",
    text: "Urgent travel? We'll find seats even on tight timelines.",
  },
  {
    icon: Plane,
    title: "FlyJinnah Authorised",
    text: "Official FlyJinnah partner agent — direct booking and support.",
  },
  {
    icon: RefreshCw,
    title: "Rescheduling & Refunds",
    text: "Plans change. We handle date changes, cancellations and refund claims with the airline.",
  },
];

export default function AirTicketsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Air Tickets"
          title="Flights, Booked the"
          highlight="Easy Way"
          subtitle="Domestic and international air tickets — competitive prices, personal service, and an official FlyJinnah partnership."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Air Tickets" },
          ]}
        />

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                Why Book with GoldViz
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                More Than Just a Booking
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                Search engines find flights. We find the *right* flight for your
                trip, your group and your budget.
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
          heading="Ready to Book Your Flight?"
          subheading="Send us your route and dates — we'll come back with the best fares."
          whatsappText="Hi GTT, I'd like to book a flight."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
