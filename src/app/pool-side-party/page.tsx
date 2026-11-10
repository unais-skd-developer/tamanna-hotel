import type { Metadata } from "next";
import PoolSidePartyTemplate from "@/components/PoolSidePartyTemplate";

export const metadata: Metadata = {
  title: "Pool Side Party Venue | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Open to sky rooftop poolside party area at Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/hotels-with-poolside-hinjawadi-pune",
  },
};

export default function PoolSidePartyAliasPage() {
  return <PoolSidePartyTemplate />;
}

