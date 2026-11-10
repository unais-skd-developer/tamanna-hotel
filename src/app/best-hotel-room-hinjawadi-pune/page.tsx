import { Metadata } from "next";
import ExecutiveRoomTemplate from "@/components/ExecutiveRoomTemplate";

export const metadata: Metadata = {
  title: "Best Hotel Room in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Book the best hotel room in Hinjawadi, Pune, with modern interiors, premium amenities, and top-notch service for a relaxing business.",
  alternates: {
    canonical: "/best-hotel-room-hinjawadi-pune",
  },
  openGraph: {
    title: "Best Hotel Room in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Book the best hotel room in Hinjawadi, Pune, with modern interiors, premium amenities, and top-notch service for a relaxing business.",
    url: "https://tamannahotels.com/best-hotel-room-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/Executive-Room-7-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Best Hotel Room in Hinjawadi Pune - Executive Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BestHotelRoomHinjawadiPunePage() {
  return <ExecutiveRoomTemplate />;
}

