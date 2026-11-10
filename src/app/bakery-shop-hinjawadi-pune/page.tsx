import React from "react";
import DailyBakerPhase1Template from "@/components/DailyBakerPhase1Template";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery Shop in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Visit the best bakery shop in Hinjawadi, Pune for fresh cakes, pastries, cookies, and breads. Perfect for celebrations.",
  alternates: {
    canonical: "/bakery-shop-hinjawadi-pune",
  },
  openGraph: {
    title: "Bakery Shop in Hinjawadi Pune | Hotel Tamanna",
    description:
      "Visit the best bakery shop in Hinjawadi, Pune for fresh cakes, pastries, cookies, and breads. Perfect for celebrations.",
    url: "https://tamannahotels.com/bakery-shop-hinjawadi-pune/",
    images: [
      {
        url: "/images/site/63.jpg",
        width: 1200,
        height: 800,
        alt: "Daily Baker Phase 1 Bakery Shop in Hinjawadi Pune",
      },
    ],
  },
};

export default function BakeryShopHinjawadiPunePage() {
  return <DailyBakerPhase1Template />;
}

