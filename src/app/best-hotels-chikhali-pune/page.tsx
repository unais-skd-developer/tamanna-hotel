import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Best Hotels in Chikhali Pune | Imperial Tamanna Hotel",
  description:
    "Imperial Tamanna Hotel in Chikhali Pune features Urban Platter Restaurant & Bar, The Royal Banquets for 500 guests, and luxury suites near Bhosari MIDC.",
};

export default function ImperialTamannaPage() {
  const hotel = HOTELS_MAP["best-hotels-chikhali-pune"];
  return <HotelDetailView hotel={hotel} />;
}

