export interface InsurancePlan {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    id: "worldwide",
    name: "Worldwide Coverage",
    icon: "Globe",
    tagline: "For travel anywhere on the map",
    description:
      "Comprehensive protection for international travellers — whether you're heading to a single destination or a multi-country trip.",
    highlights: [
      "Medical emergencies & hospitalisation",
      "Trip cancellation & delays",
      "Lost baggage & documents",
      "24/7 emergency assistance",
    ],
  },
  {
    id: "schengen",
    name: "Schengen Travel Plan",
    icon: "Stamp",
    tagline: "Meets Schengen visa requirements",
    description:
      "Schengen-compliant travel insurance accepted across all 27 Schengen countries — required for your visa application.",
    highlights: [
      "Minimum €30,000 medical coverage",
      "Valid across all Schengen countries",
      "Visa-ready documentation",
      "Emergency repatriation cover",
    ],
  },
  {
    id: "student",
    name: "Student Travel Plan",
    icon: "GraduationCap",
    tagline: "Designed for students abroad",
    description:
      "Tailored coverage for students studying overseas — designed around tuition trips, semester travel and longer stays.",
    highlights: [
      "Extended coverage for academic stays",
      "Medical & dental emergencies",
      "Document replacement",
      "Family emergency travel cover",
    ],
  },
];
