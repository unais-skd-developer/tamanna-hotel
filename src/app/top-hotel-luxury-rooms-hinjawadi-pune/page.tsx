import { Metadata } from "next";
import ExecutiveLuxuryRoomTemplate from "@/components/ExecutiveLuxuryRoomTemplate";

export const metadata: Metadata = {
  title: "Top Hotel with Luxury Rooms in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Stay at the top hotel with luxury rooms in Hinjawadi, Pune. Experience premium comfort, and exceptional hospitality for business or leisure.",
  alternates: {
    canonical: "/top-hotel-luxury-rooms-hinjawadi-pune",
  },
  openGraph: {
    title: "Top Hotel with Luxury Rooms in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Stay at the top hotel with luxury rooms in Hinjawadi, Pune. Experience premium comfort, and exceptional hospitality for business or leisure.",
    url: "https://tamannahotels.com/top-hotel-luxury-rooms-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/Executive-Room-7-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Top Hotel with Luxury Rooms in Hinjawadi Pune - Executive Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TopHotelLuxuryRoomsHinjawadiPunePage() {
  return <ExecutiveLuxuryRoomTemplate />;
}

