export interface TourPackage {
  name: string;
  duration: string;
  highlights?: string[];
}

export interface Tour {
  slug: string;
  destination: string;
  country: string;
  tagline: string;
  intro: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  hotelsNote?: string;
  packages?: TourPackage[];
  addons?: string[];
}

export const TOURS: Tour[] = [
  {
    slug: "baku",
    destination: "Baku",
    country: "Azerbaijan",
    tagline: "Explore the beauty of Baku",
    intro:
      "Discover the rich blend of old-world charm and modern marvel that defines Azerbaijan's capital — from ancient martyrs' lanes to the iconic Flame Towers.",
    highlights: [
      "City Tour (Old & New) — Highland Park, Martyrs' Lane, Flame Towers",
      "Absheron Tour — Fire Temple, Fire Mountain, Heydar Aliyev Park",
      "Shahdag Tour with overnight stay — Cable car experience",
      "Daily breakfast included",
    ],
    inclusions: [
      "Return air tickets",
      "E-Visa processing",
      "Hotel accommodation (twin sharing)",
      "Daily breakfast",
      "City Tour (Old & New)",
      "Absheron Tour",
      "Shahdag Tour with 1-night stay",
      "Return airport transfers",
    ],
    exclusions: [
      "Personal expenses",
      "Meals not specified",
      "Optional activities",
      "Travel insurance",
    ],
  },
  {
    slug: "malaysia",
    destination: "Kuala Lumpur",
    country: "Malaysia",
    tagline: "Visit Malaysia",
    intro:
      "Experience the towering Petronas, the misty Genting Highlands, and the spiritual calm of Batu Caves — Malaysia delivers culture, nature and city life in one trip.",
    highlights: [
      "Half-day Kuala Lumpur city tour",
      "Full-day Genting Highlands tour via Batu Caves",
      "Two-way cable car ride at Genting",
      "All private transfers",
    ],
    inclusions: [
      "Hotel accommodation — IBIS Style Fraser Business Park KL (double room)",
      "Daily breakfast",
      "Half-day KL city tour",
      "Full-day Genting Highlands tour with Batu Caves & cable car",
      "All private transfers",
    ],
    exclusions: [
      "Air tickets",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Meals not specified",
    ],
    hotelsNote: "Hotel: IBIS Style Fraser Business Park, Kuala Lumpur",
  },
  {
    slug: "thailand",
    destination: "Thailand",
    country: "Thailand",
    tagline: "Beaches, temples and city lights",
    intro:
      "From Bangkok's buzzing streets to Pattaya's coral shores, Phuket's sunsets and Krabi's hidden coves — choose the Thailand package that fits your pace.",
    highlights: [
      "Choice of three packages across Bangkok, Pattaya, Phuket and Krabi",
      "Private airport transfers",
      "Daily breakfast",
      "Bangkok city tour and Coral Island tour included",
    ],
    inclusions: [
      "Private airport transfers",
      "Daily breakfast",
      "Hotel accommodation (twin/double sharing)",
      "Bangkok city tour",
      "Coral Island tour",
      "Visa assistance",
    ],
    exclusions: [
      "Air tickets",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "National park fees",
    ],
    packages: [
      {
        name: "Bangkok + Pattaya",
        duration: "4 Nights / 5 Days",
        highlights: ["Bangkok city tour", "Coral Island tour"],
      },
      {
        name: "Bangkok + Phuket",
        duration: "4 Nights / 5 Days",
        highlights: ["Bangkok city tour", "Phuket island experience"],
      },
      {
        name: "Phuket + Krabi",
        duration: "4 Nights / 5 Days",
        highlights: ["Phuket beaches", "Krabi exploration"],
      },
    ],
  },
  {
    slug: "bali",
    destination: "Bali",
    country: "Indonesia",
    tagline: "An island escape, your way",
    intro:
      "Stay near the rice terraces of Ubud and the beaches of Kuta. Bali is built for honeymoons, family escapes and quiet adventures alike — with luxury add-ons if you want to make it unforgettable.",
    highlights: [
      "Private full-day Ubud & Kintamani tour",
      "Full-day East Bali Instagram tour",
      "Stays in Kuta and Ubud (private pool villa option)",
      "Visa cost included",
    ],
    inclusions: [
      "Hotel accommodation — Eden Hotel Kuta (double room) + Freddie's Villas Ubud (deluxe room with private pool)",
      "Full-day private Ubud & Kintamani tour",
      "Full-day East Bali Instagram tour",
      "Visa cost",
      "Private transfers",
    ],
    exclusions: [
      "Air tickets",
      "Travel insurance",
      "Personal expenses",
      "Meals not specified",
    ],
    hotelsNote:
      "2 nights at Eden Hotel Kuta (double room) + 2 nights at Freddie's Villas Ubud (deluxe room, private pool)",
    addons: [
      "Private yacht charter around the Bali islands",
      "Floating candlelight dinner in your villa pool",
      "Helicopter sightseeing tour",
      "Personal photographer for honeymoon moments",
    ],
  },
];
