import { Metadata } from "next";
import BizzHighlandTemplate from "@/components/BizzHighlandTemplate";

export const metadata: Metadata = {
  title: "Top Open Air Banquet Halls in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Celebrate under the stars at the top open-air banquet halls in Hinjawadi, Pune. Ideal for weddings, parties, and corporate events.",
  alternates: {
    canonical: "/top-open-air-banquet-halls-hinjawadi-pune",
  },
};

export default function HighlandPage() {
  return <BizzHighlandTemplate />;
}

