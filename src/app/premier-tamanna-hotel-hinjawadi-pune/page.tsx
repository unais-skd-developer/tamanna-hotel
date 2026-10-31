import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Premier Tamanna Hotel in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Premier Tamanna Hotel in Hinjawadi Pune offers upscale designer suites, executive boardrooms on 2nd floor, 100 pax conference hall, and fine dining.",
};

export default function PremierTamannaPage() {
  const hotel = HOTELS_MAP["premier-tamanna-hotel-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}
