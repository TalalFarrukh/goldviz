import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TrustBadges from "@/components/TrustBadges";
import UmrahSpotlight from "@/components/UmrahSpotlight";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "GoldViz Travels & Tours",
  alternateName: "GTT",
  url: "https://www.goldviztravels.com",
  logo: "https://www.goldviztravels.com/logo.webp",
  description:
    "GoldViz Travels & Tours offers trusted Umrah packages, international ticketing, visa processing, hotel bookings and transport services across Pakistan.",
  slogan: "Where Comfort Meets True Care.",
  telephone: "+92-302-0438715",
  email: "travel@goldviz.com.pk",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  priceRange: "$$",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Bank Transfer",
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Travel Agents Association of Pakistan (TAAP)",
    },
    {
      "@type": "Organization",
      name: "Lahore Chamber of Commerce and Industry (LCCI)",
    },
  ],
  knowsAbout: [
    "Umrah travel packages",
    "Hajj pilgrimage services",
    "International flight ticketing",
    "Visa processing Pakistan",
    "Hotel bookings Pakistan",
    "FlyJinnah authorised booking",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Umrah Packages",
          description:
            "Custom Umrah journeys tailored for your family and budget — from visa to hotel to flight.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flight Ticketing",
          description:
            "Domestic and international flight bookings at competitive prices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Visa Processing",
          description:
            "Hassle-free visa processing for all destinations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel Bookings",
          description:
            "Curated hotel bookings across all budget ranges.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport",
          description:
            "Airport transfers and group transport arrangements.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Travel Consultation",
          description:
            "Free guidance on planning your perfect trip.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <UmrahSpotlight />
        <HowItWorks />
        <Testimonials />
        <TrustBadges />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
