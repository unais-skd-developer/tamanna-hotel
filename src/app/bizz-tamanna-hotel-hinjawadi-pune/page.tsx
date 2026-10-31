import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Bizz Tamanna Hotel in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Bizz Tamanna Hotel in Hinjawadi Pune offers executive and apartment-style rooms for corporate travelers, Highland restaurant, and Laurel celebration hall.",
};

export default function BizzTamannaPage() {
  const hotel = HOTELS_MAP["bizz-tamanna-hotel-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}

