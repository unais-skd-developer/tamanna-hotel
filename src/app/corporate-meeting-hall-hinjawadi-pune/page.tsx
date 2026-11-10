import { Metadata } from "next";
import ExecutiveOakTemplate from "@/components/ExecutiveOakTemplate";

export const metadata: Metadata = {
  title: "Corporate Meeting Hall in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Host successful business events at our corporate meeting hall in Hinjawadi, Pune. Equipped with modern facilities and comfortable seating.",
  alternates: {
    canonical: "/corporate-meeting-hall-hinjawadi-pune",
  },
  openGraph: {
    title: "Corporate Meeting Hall in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Host successful business events at our corporate meeting hall in Hinjawadi, Pune. Equipped with modern facilities and comfortable seating.",
    url: "https://tamannahotels.com/corporate-meeting-hall-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/Oak-Party-Hall1-1-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Corporate Meeting Hall in Hinjawadi Pune - Oak Executive Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CorporateMeetingHallHinjawadiPunePage() {
  return <ExecutiveOakTemplate />;
}

