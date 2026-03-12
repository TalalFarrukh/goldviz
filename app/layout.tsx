import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.goldviztravelsandtours.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "GoldViz Travels & Tours | Umrah Packages & Travel Services Pakistan",
    template: "%s | GoldViz Travels & Tours",
  },
  description:
    "GoldViz Travels & Tours — TAAP registered and LCCI affiliated travel agency offering trusted Umrah packages, international ticketing, visa processing, hotel bookings and transport services across Pakistan. Official FlyJinnah partner. Where Comfort Meets True Care.",
  keywords: [
    "Umrah packages Pakistan",
    "Umrah 2026",
    "travel agency Pakistan",
    "Hajj packages",
    "flight ticketing Pakistan",
    "visa services Pakistan",
    "hotel booking Pakistan",
    "GoldViz Travels",
    "GTT travel",
    "Umrah group packages",
    "Umrah family packages",
    "Karachi travel agency",
    "Lahore travel agency",
    "TAAP registered travel agent Pakistan",
    "LCCI member travel agency",
    "FlyJinnah partner travel agency",
    "FlyJinnah authorised agent Pakistan",
  ],
  authors: [{ name: "GoldViz Travels & Tours", url: BASE_URL }],
  creator: "GoldViz Travels & Tours",
  publisher: "GoldViz Travels & Tours",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "GoldViz Travels & Tours",
    title: "GoldViz Travels & Tours | Umrah Packages & Travel Services",
    description:
      "TAAP registered & LCCI affiliated travel agency. Trusted Umrah packages, ticketing, visa processing, hotels and transport — official FlyJinnah partner serving families across Pakistan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoldViz Travels & Tours — Where Comfort Meets True Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GoldViz Travels & Tours | Umrah Packages & Travel Services",
    description:
      "TAAP registered & LCCI affiliated. Trusted Umrah packages, ticketing, visas, hotels and transport across Pakistan. Official FlyJinnah partner.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body className="antialiased">{children}</body>
    </html>
  );
}
