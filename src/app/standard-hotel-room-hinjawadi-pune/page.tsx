import React from "react";
import ShreeInnExecutiveRoomTemplate from "@/components/ShreeInnExecutiveRoomTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standard Hotel Room in Hinjawadi Pune | Tamanna Hotels",
  description:
    "If you're seeking a clean, comfortable, and budget-friendly accommodation option in the heart of Pune's IT hub, the Executive Rooms at Shree Inn by Tamanna are your perfect choice.",
  openGraph: {
    title: "Standard Hotel Room in Hinjawadi Pune | Tamanna Hotels",
    description:
      "If you're seeking a clean, comfortable, and budget-friendly accommodation option in the heart of Pune's IT hub, the Executive Rooms at Shree Inn by Tamanna are your perfect choice.",
    url: "https://tamannahotels.com/standard-hotel-room-hinjawadi-pune/",
    images: [
      {
        url: "/images/site/Executive-Room1-4-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Standard Hotel Room in Hinjawadi Pune",
      },
    ],
  },
};

export default function StandardHotelRoomHinjawadiPunePage() {
  return <ShreeInnExecutiveRoomTemplate />;
}
