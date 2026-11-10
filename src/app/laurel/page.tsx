import { Metadata } from "next";
import BizzLaurelTemplate from "@/components/BizzLaurelTemplate";

export const metadata: Metadata = {
  title: "Top Banquet Hall in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
  description:
    "Top Banquet Hall in Hinjawadi Pune for weddings, parties, comfortable seating, and corporate events with modern amenities.",
  alternates: {
    canonical: "/top-banquet-hall-hinjawadi-pune",
  },
};

export default function LaurelPage() {
  return <BizzLaurelTemplate />;
}

