import { Metadata } from "next";
import ExecutiveRoomTemplate from "@/components/ExecutiveRoomTemplate";

export const metadata: Metadata = {
  title: "Executive Room in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Book the best executive room in Hinjawadi, Pune, with modern interiors, premium amenities, and top-notch service for a relaxing stay.",
  alternates: {
    canonical: "/best-hotel-room-hinjawadi-pune",
  },
};

export default function ExecutiveRoomAliasPage() {
  return <ExecutiveRoomTemplate />;
}

