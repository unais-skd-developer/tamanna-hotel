import { Metadata } from "next";
import ExecutiveMapleTemplate from "@/components/ExecutiveMapleTemplate";

export const metadata: Metadata = {
  title: "Maple Meeting Hall | Executive Tamanna Hotel",
  description:
    "Discover the best meeting hall in Hinjawadi, Pune, with state-of-the-art amenities, comfortable seating, and professional services.",
  alternates: {
    canonical: "/best-meeting-hall-hinjawadi-pune",
  },
};

export default function MapleAliasPage() {
  return <ExecutiveMapleTemplate />;
}

