import React from "react";
import ImperialDeluxeRoomTemplate from "@/components/ImperialDeluxeRoomTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deluxe Room in Pimpri Pune | Hotel Tamanna",
  description:
    "Book a Deluxe Room in Pimpri Pune at Imperial Tamanna Hotel with modern amenities, free Wi-Fi, and premium comfort.",
  openGraph: {
    title: "Deluxe Room in Pimpri Pune | Hotel Tamanna",
    description:
      "Book a Deluxe Room in Pimpri Pune at Imperial Tamanna Hotel with modern amenities, free Wi-Fi, and premium comfort.",
    url: "https://tamannahotels.com/deluxe-room-pimpri-pune/",
    images: [
      {
        url: "/images/site/ITH-0792.webp",
        width: 1200,
        height: 800,
        alt: "Imperial Tamanna Hotel Deluxe Room in Pimpri Pune",
      },
    ],
  },
};

export default function DeluxeRoomPimpriPunePage() {
  return <ImperialDeluxeRoomTemplate />;
}

