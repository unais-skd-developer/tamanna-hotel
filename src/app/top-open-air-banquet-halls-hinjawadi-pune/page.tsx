import { Metadata } from "next";
import BizzHighlandTemplate from "@/components/BizzHighlandTemplate";

export const metadata: Metadata = {
  title: "Top Open Air Banquet Halls in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Celebrate under the stars at the top open-air banquet halls in Hinjawadi, Pune. Ideal for weddings, parties, and corporate events.",
  alternates: {
    canonical: "/top-open-air-banquet-halls-hinjawadi-pune",
  },
  openGraph: {
    title: "Top Open Air Banquet Halls in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Celebrate under the stars at the top open-air banquet halls in Hinjawadi, Pune. Ideal for weddings, parties, and corporate events.",
    url: "https://tamannahotels.com/top-open-air-banquet-halls-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/bizz-highland-hero.webp",
        width: 1200,
        height: 800,
        alt: "Highland Rooftop Open Air Banquet Hall - Bizz Tamanna Hotel Hinjawadi Pune",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TopOpenAirBanquetHallsHinjawadiPunePage() {
  return <BizzHighlandTemplate />;
}

