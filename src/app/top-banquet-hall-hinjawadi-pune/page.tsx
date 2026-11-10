import { Metadata } from "next";
import BizzLaurelTemplate from "@/components/BizzLaurelTemplate";

export const metadata: Metadata = {
  title: "Top Banquet Hall in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
  description:
    "Top Banquet Hall in Hinjawadi Pune for weddings, parties, comfortable seating, and corporate events with modern amenities.",
  alternates: {
    canonical: "/top-banquet-hall-hinjawadi-pune",
  },
  openGraph: {
    title: "Top Banquet Hall in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
    description:
      "Top Banquet Hall in Hinjawadi Pune for weddings, parties, comfortable seating, and corporate events with modern amenities.",
    url: "https://tamannahotels.com/top-banquet-hall-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/bizz-laurel-hero.webp",
        width: 1200,
        height: 800,
        alt: "Laurel Banquet Hall - Bizz Tamanna Hotel Hinjawadi Pune",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TopBanquetHallHinjawadiPunePage() {
  return <BizzLaurelTemplate />;
}

