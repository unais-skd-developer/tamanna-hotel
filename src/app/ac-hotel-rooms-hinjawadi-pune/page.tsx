import { Metadata } from "next";
import BizzExecutiveRoomTemplate from "@/components/BizzExecutiveRoomTemplate";

export const metadata: Metadata = {
  title: "AC Hotel Rooms in Hinjawadi Pune | Hotel Tamanna",
  description:
    "AC Hotel Rooms in Hinjawadi, Pune, offering comfort, cleanliness, and modern facilities for business and leisure stays.",
  alternates: {
    canonical: "/ac-hotel-rooms-hinjawadi-pune",
  },
  openGraph: {
    title: "AC Hotel Rooms in Hinjawadi Pune | Hotel Tamanna",
    description:
      "AC Hotel Rooms in Hinjawadi, Pune, offering comfort, cleanliness, and modern facilities for business and leisure stays.",
    url: "https://tamannahotels.com/ac-hotel-rooms-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/bizz-executive-hero.webp",
        width: 1200,
        height: 800,
        alt: "AC Hotel Rooms in Hinjawadi Pune - Bizz Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AcHotelRoomsHinjawadiPunePage() {
  return <BizzExecutiveRoomTemplate />;
}

