import React from "react";
import ImperialExecutiveRoomTemplate from "@/components/ImperialExecutiveRoomTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Room in Chinchwad Pune | Hotel Tamanna",
  description:
    "Book an Executive Room in Chinchwad Pune at Imperial Tamanna Hotel with modern amenities and premium comfort.",
  openGraph: {
    title: "Executive Room in Chinchwad Pune | Hotel Tamanna",
    description:
      "Book an Executive Room in Chinchwad Pune at Imperial Tamanna Hotel with modern amenities and premium comfort.",
    url: "https://tamannahotels.com/executive-room-chinchwad-pune/",
    images: [
      {
        url: "/images/site/ITH-060.webp",
        width: 1200,
        height: 800,
        alt: "Imperial Tamanna Hotel Executive Room in Chinchwad Pune",
      },
    ],
  },
};

export default function ExecutiveRoomChinchwadPage() {
  return <ImperialExecutiveRoomTemplate />;
}

