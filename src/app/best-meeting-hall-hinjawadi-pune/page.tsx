import { Metadata } from "next";
import ExecutiveMapleTemplate from "@/components/ExecutiveMapleTemplate";

export const metadata: Metadata = {
  title: "Best Meeting Hall in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Discover the best meeting hall in Hinjawadi, Pune, with state-of-the-art amenities, comfortable seating, and professional services.",
  alternates: {
    canonical: "/best-meeting-hall-hinjawadi-pune",
  },
  openGraph: {
    title: "Best Meeting Hall in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Discover the best meeting hall in Hinjawadi, Pune, with state-of-the-art amenities, comfortable seating, and professional services.",
    url: "https://tamannahotels.com/best-meeting-hall-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/Maple-Conference-Room-1-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Best Meeting Hall in Hinjawadi Pune - Maple Executive Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BestMeetingHallHinjawadiPunePage() {
  return <ExecutiveMapleTemplate />;
}

