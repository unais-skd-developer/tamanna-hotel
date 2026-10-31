import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Top Cake Shop in Hinjawadi Pune | Daily Baker - Tamanna Hotels",
  description:
    "Daily Baker by Tamanna Hotels is Hinjawadi's top cake shop and bakery counter in Phase 1 and Phase 2. Fresh artisan pastries, birthday cakes, and savory bakes.",
};

export default function DailyBakerPage() {
  const hotel = HOTELS_MAP["top-cake-shop-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}

