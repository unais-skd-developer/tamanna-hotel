import { Metadata } from "next";
import ExecutiveOakTemplate from "@/components/ExecutiveOakTemplate";

export const metadata: Metadata = {
  title: "Oak Banquet & Meeting Hall | Executive Tamanna Hotel",
  description:
    "Host successful business events at our corporate meeting hall in Hinjawadi, Pune. Equipped with modern facilities and comfortable seating.",
  alternates: {
    canonical: "/corporate-meeting-hall-hinjawadi-pune",
  },
};

export default function OakAliasPage() {
  return <ExecutiveOakTemplate />;
}

