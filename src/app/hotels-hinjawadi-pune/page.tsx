import React from "react";
import type { Metadata } from "next";
import { HOTELS_MAP } from "@/data/siteData";
import HotelDetailView from "@/components/HotelDetailView";

export const metadata: Metadata = {
  title: "Hotels in Hinjawadi Pune | Grand Tamanna Hotel - Tamanna Hotels",
  description:
    "Grand Tamanna stands as a flagship property of Tamanna Hotels in Hinjawadi Pune. 46 premium rooms, Nirvana Lounge Bar, Around The World restaurant, Eternity banquet.",
};

export default function GrandTamannaPage() {
  const hotel = HOTELS_MAP["hotels-hinjawadi-pune"];
  return <HotelDetailView hotel={hotel} />;
}

