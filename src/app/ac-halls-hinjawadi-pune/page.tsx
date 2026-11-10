import React from "react";
import EternityBanquetTemplate from "@/components/EternityBanquetTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Halls in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Find the best AC halls in Hinjawadi, Pune, perfect for weddings, parties, and corporate events. Enjoy air-conditioned, exceptional service.",
  alternates: {
    canonical: "/ac-halls-hinjawadi-pune",
  },
  openGraph: {
    title: "AC Halls in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Find the best AC halls in Hinjawadi, Pune, perfect for weddings, parties, and corporate events. Enjoy air-conditioned, exceptional service.",
    url: "https://tamannahotels.com/ac-halls-hinjawadi-pune/",
    images: [
      {
        url: "/images/site/Eternity-Banquet4-1-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Eternity Banquet AC Hall in Hinjawadi Pune",
      },
    ],
  },
};

export default function ACHallsHinjawadiPunePage() {
  return <EternityBanquetTemplate />;
}

