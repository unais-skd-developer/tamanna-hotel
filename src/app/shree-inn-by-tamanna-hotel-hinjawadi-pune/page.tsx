import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Shree Inn by Tamanna Hotel in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Shree Inn by Tamanna Hotel in Hinjawadi Pune is a value-based boutique property providing comfortable executive rooms, free Wi-Fi, and 24/7 hospitality.",
};

export default function ShreeInnPage() {
  const hotel = HOTELS_MAP["shree-inn-by-tamanna-hotel-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}

