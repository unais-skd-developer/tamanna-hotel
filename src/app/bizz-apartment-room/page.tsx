import { Metadata } from "next";
import BizzApartmentRoomTemplate from "@/components/BizzApartmentRoomTemplate";

export const metadata: Metadata = {
  title: "Best Hotel Room for Stay in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Best Hotel room for Stay in Hinjawadi Pune with comfort, great amenities, and easy access to business hubs.",
  alternates: {
    canonical: "/best-hotel-room-for-stay-hinjawadi-pune",
  },
};

export default function BizzApartmentRoomPage() {
  return <BizzApartmentRoomTemplate />;
}

