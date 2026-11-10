import React from "react";
import CelebrationLoungeTemplate from "@/components/CelebrationLoungeTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Lounge in Chinchwad Pune | Hotel Tamanna",
  description:
    "Looking for a party lounge in Chinchwad Pune? Celebrate at The Celebration Lounge with premium hospitality.",
  openGraph: {
    title: "Party Lounge in Chinchwad Pune | Hotel Tamanna",
    description:
      "Looking for a party lounge in Chinchwad Pune? Celebrate at The Celebration Lounge with premium hospitality.",
    url: "https://tamannahotels.com/party-lounge-chinchwad-pune/",
    images: [
      {
        url: "/images/site/ITH-084.webp",
        width: 1200,
        height: 800,
        alt: "The Celebration Lounge Party Lounge in Chinchwad Pune",
      },
    ],
  },
};

export default function PartyLoungeChinchwadPunePage() {
  return <CelebrationLoungeTemplate />;
}

