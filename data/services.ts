export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    id: "umrah",
    icon: "Plane",
    title: "Umrah Packages",
    description:
      "Custom Umrah journeys tailored for your family and budget — from visa to hotel to flight.",
    href: "/services/umrah",
  },
  {
    id: "visa-appointments",
    icon: "Stamp",
    title: "Visa & Embassy Appointments",
    description:
      "USA B1/B2/F1/F2 early appointments, Schengen, and global VFS bookings — Karachi & Islamabad.",
    href: "/services/visa-appointments",
  },
  {
    id: "travel-insurance",
    icon: "ShieldCheck",
    title: "Travel Insurance",
    description:
      "Worldwide, Schengen and student plans — travel with confidence and peace of mind.",
    href: "/services/travel-insurance",
  },
  {
    id: "holiday-tours",
    icon: "Palmtree",
    title: "Holiday Tours",
    description:
      "Curated international packages — Baku, Malaysia, Thailand, Bali and more.",
    href: "/services/holiday-tours",
  },
  {
    id: "ticketing",
    icon: "Ticket",
    title: "Air Tickets",
    description:
      "Domestic and international flight bookings at competitive prices, handled for you.",
    href: "/services/air-tickets",
  },
  {
    id: "consultation",
    icon: "MessageCircle",
    title: "Free Consultation",
    description:
      "Free guidance on planning your perfect trip. Talk to our team, no commitment needed.",
    href: "/#contact",
  },
];
