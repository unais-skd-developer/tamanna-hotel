import { Metadata } from "next";
import ExecutiveLuxuryRoomTemplate from "@/components/ExecutiveLuxuryRoomTemplate";

export const metadata: Metadata = {
  title: "Luxury Room in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Stay at the top hotel with luxury rooms in Hinjawadi, Pune. Experience premium comfort, and exceptional hospitality for business or leisure.",
  alternates: {
    canonical: "/top-hotel-luxury-rooms-hinjawadi-pune",
  },
};

export default function LuxuryRoomAliasPage() {
  return <ExecutiveLuxuryRoomTemplate />;
}

