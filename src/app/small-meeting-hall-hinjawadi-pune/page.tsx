import { Metadata } from "next";
import PremierBoardRoomTemplate from "@/components/PremierBoardRoomTemplate";

export const metadata: Metadata = {
  title: "Small Meeting Hall in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Book a small meeting hall in Hinjawadi, Pune, with modern facilities and a professional setting for corporate or private events at Premier Tamanna Hotel.",
  alternates: {
    canonical: "/small-meeting-hall-hinjawadi-pune",
  },
};

export default function SmallMeetingHallHinjawadiPunePage() {
  return <PremierBoardRoomTemplate />;
}
