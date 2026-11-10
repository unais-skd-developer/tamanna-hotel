import type { Metadata } from "next";
import PoolSidePartyTemplate from "@/components/PoolSidePartyTemplate";

export const metadata: Metadata = {
  title: "Hotels with Poolside in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Open to sky rooftop poolside party area at Grand Tamanna Hotel, Hinjawadi Pune. Party capacity up to 150 persons, attached banquet facility, and premium catering.",
  alternates: {
    canonical: "/hotels-with-poolside-hinjawadi-pune",
  },
};

export default function PoolSidePartyPage() {
  return <PoolSidePartyTemplate />;
}

