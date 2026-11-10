import React from "react";
import RoyalBanquetsTemplate from "@/components/RoyalBanquetsTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banquet Hall in Chinchwad Pune | Hotel Tamanna",
  description:
    "Looking for a banquet hall in Chinchwad Pune? Celebrate at The Royal Banquets with premium venues and catering.",
  openGraph: {
    title: "Banquet Hall in Chinchwad Pune | Hotel Tamanna",
    description:
      "Looking for a banquet hall in Chinchwad Pune? Celebrate at The Royal Banquets with premium venues and catering.",
    url: "https://tamannahotels.com/banquet-hall-chinchwad-pune/",
    images: [
      {
        url: "/images/site/Eternity-Banquet4-1-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "The Royal Banquets Hall in Chinchwad Pune",
      },
    ],
  },
};

export default function BanquetHallChinchwadPunePage() {
  return <RoyalBanquetsTemplate />;
}

