import { Metadata } from "next";
import PremierPremiumRoomTemplate from "@/components/PremierPremiumRoomTemplate";

export const metadata: Metadata = {
  title: "Premium Hotel Room in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Book a premium hotel room in Hinjawadi, Pune, for a luxurious and comfortable stay at Premier Tamanna Hotel. Enjoy modern amenities and exceptional hospitality.",
  alternates: {
    canonical: "/premium-hotel-room-hinjawadi-pune-2",
  },
};

export default function PremierPremiumRoomPage() {
  return <PremierPremiumRoomTemplate />;
}

