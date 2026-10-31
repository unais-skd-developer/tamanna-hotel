import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Executive Tamanna Hotel in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Executive Tamanna Hotel in Hinjawadi Phase 2 offers executive rooms, South Indian cafeteria, Maple and Oak conference halls for corporate teams.",
};

export default function ExecutiveTamannaPage() {
  const hotel = HOTELS_MAP["executive-tamanna-hotel-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}

