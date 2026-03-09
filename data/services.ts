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
    href: "#",
  },
  {
    id: "ticketing",
    icon: "Ticket",
    title: "Ticketing",
    description:
      "Domestic and international flight bookings at competitive prices, handled for you.",
    href: "#",
  },
  {
    id: "visas",
    icon: "FileText",
    title: "Visas",
    description:
      "Hassle-free visa processing for all destinations. We handle the paperwork, you pack your bags.",
    href: "#",
  },
  {
    id: "hotels",
    icon: "Building2",
    title: "Hotels",
    description:
      "Curated hotel bookings across all budget ranges — from comfort stays to premium properties.",
    href: "#",
  },
  {
    id: "transport",
    icon: "Bus",
    title: "Transport",
    description:
      "Airport transfers and group transport arrangements — safe, punctual, and comfortable.",
    href: "#",
  },
  {
    id: "consultation",
    icon: "MessageCircle",
    title: "Consultation",
    description:
      "Free guidance on planning your perfect trip. Talk to our team, no commitment needed.",
    href: "#",
  },
];
