import React from "react";
import DailyBakerPhase2Template from "@/components/DailyBakerPhase2Template";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Baker shop in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Daily Baker Phase 2 offers fresh handcrafted cakes, pastries, breads, and cookies in Hinjawadi Phase 2, Pune. Perfect for birthdays, celebrations, and daily cravings.",
  alternates: {
    canonical: "/best-baker-shop-hinjawadi-pune",
  },
  openGraph: {
    title: "Best Baker shop in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Daily Baker Phase 2 offers fresh handcrafted cakes, pastries, breads, and cookies in Hinjawadi Phase 2, Pune. Perfect for celebrations.",
    url: "https://tamannahotels.com/best-baker-shop-hinjawadi-pune/",
    images: [
      {
        url: "/images/site/64.jpg",
        width: 1200,
        height: 800,
        alt: "Daily Baker Phase 2 Bakery Shop in Hinjawadi Pune",
      },
    ],
  },
};

export default function BestBakerShopHinjawadiPunePage() {
  return <DailyBakerPhase2Template />;
}

