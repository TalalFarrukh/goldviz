export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
  rating: number;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "GTT made our Umrah journey so peaceful. From the visa to the hotel, everything was handled perfectly. We felt cared for every single step of the way.",
    name: "Fatima B.",
    city: "Karachi",
    rating: 5,
    initials: "FB",
  },
  {
    id: "t2",
    quote:
      "I've used many travel agencies but none came close to the level of care GoldViz showed us. They treated our parents like their own family. Truly outstanding service.",
    name: "Ahmed R.",
    city: "Lahore",
    rating: 5,
    initials: "AR",
  },
  {
    id: "t3",
    quote:
      "Booking our family's flights and accommodation was completely stress-free. One call, one team, everything sorted. I would recommend GTT to everyone I know.",
    name: "Sana M.",
    city: "Islamabad",
    rating: 5,
    initials: "SM",
  },
];
