import React from "react";
import SuiteRoomTemplate from "@/components/SuiteRoomTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suite Hotel Room in Hinjawadi Pune | Tamanna Hotels",
  description:
    "Experience luxury with our 450 sq. ft. suite hotel room in Hinjawadi, Pune, at Grand Tamanna Hotel. Features a king-size bed, bathtub, carpeted flooring, complimentary breakfast, and premium amenities.",
  openGraph: {
    title: "Suite Hotel Room in Hinjawadi Pune | Tamanna Hotels",
    description:
      "Experience luxury with our 450 sq. ft. suite hotel room in Hinjawadi, Pune, at Grand Tamanna Hotel.",
    url: "https://tamannahotels.com/suite-hotel-room-hinjawadi-pune/",
    images: [
      {
        url: "/images/site/Suite-Room-1-scaled.webp",
        width: 1200,
        height: 800,
        alt: "Suite Hotel Room in Hinjawadi Pune",
      },
    ],
  },
};

export default function SuiteHotelRoomHinjawadiPunePage() {
  return <SuiteRoomTemplate />;
}

