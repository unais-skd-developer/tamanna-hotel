import { Metadata } from "next";
import BizzExecutiveRoomTemplate from "@/components/BizzExecutiveRoomTemplate";

export const metadata: Metadata = {
  title: "AC Hotel Rooms in Hinjawadi Pune | Hotel Tamanna",
  description:
    "AC Hotel Rooms in Hinjawadi, Pune, offering comfort, cleanliness, and modern facilities for business and leisure stays.",
  alternates: {
    canonical: "/ac-hotel-rooms-hinjawadi-pune",
  },
};

export default function BizzExecutiveRoomPage() {
  return <BizzExecutiveRoomTemplate />;
}

