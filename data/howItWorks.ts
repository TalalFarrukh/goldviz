export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    number: 1,
    icon: "Phone",
    title: "Reach Out",
    description:
      "Call us, message on WhatsApp, or fill in our quick contact form — whatever is easiest for you.",
  },
  {
    number: 2,
    icon: "MessageCircle",
    title: "Free Consultation",
    description:
      "We listen carefully to understand your needs, budget, and travel dates — no pressure, no rush.",
  },
  {
    number: 3,
    icon: "ClipboardList",
    title: "Custom Plan",
    description:
      "We build your perfect itinerary — flights, accommodation, visas, transport — everything tailored.",
  },
  {
    number: 4,
    icon: "Plane",
    title: "Travel Stress-Free",
    description:
      "We handle everything. You just show up, focus on the journey, and we take care of the rest.",
  },
];
