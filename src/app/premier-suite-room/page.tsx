import { Metadata } from "next";
import PremierSuiteRoomTemplate from "@/components/PremierSuiteRoomTemplate";

export const metadata: Metadata = {
  title: "Best Suite Hotel Room in Hinjawadi Pune | Premier Tamanna Hotel",
  description:
    "Stay in the best suite hotel room in Hinjawadi Pune at Premier Tamanna Hotel, with spacious interiors, and exceptional service for a truly luxurious experience.",
  alternates: {
    canonical: "/premier-suite-room-pune",
  },
};

export default function PremierSuiteRoomAliasPage() {
  return <PremierSuiteRoomTemplate />;
}

