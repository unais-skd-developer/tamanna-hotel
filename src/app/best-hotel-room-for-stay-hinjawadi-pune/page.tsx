import { Metadata } from "next";
import BizzApartmentRoomTemplate from "@/components/BizzApartmentRoomTemplate";

export const metadata: Metadata = {
  title: "Best Hotel Room for Stay in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Best Hotel room for Stay in Hinjawadi Pune with comfort, great amenities, and easy access to business hubs.",
  alternates: {
    canonical: "/best-hotel-room-for-stay-hinjawadi-pune",
  },
  openGraph: {
    title: "Best Hotel Room for Stay in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Best Hotel room for Stay in Hinjawadi Pune with comfort, great amenities, and easy access to business hubs.",
    url: "https://tamannahotels.com/best-hotel-room-for-stay-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/bizz-apartment-hero.webp",
        width: 1200,
        height: 800,
        alt: "Best Hotel Room for Stay in Hinjawadi Pune - Bizz Tamanna Apartment Room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BestHotelRoomForStayHinjawadiPunePage() {
  return <BizzApartmentRoomTemplate />;
}

