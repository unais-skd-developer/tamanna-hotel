import React from "react";
import ImperialSuiteRoomTemplate from "@/components/ImperialSuiteRoomTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suite Room in Bhosari MIDC | Hotel Tamanna",
  description:
    "Looking for a luxury suite near Bhosari MIDC? Stay at Imperial Tamanna Hotel for a comfortable and elegant experience.",
  openGraph: {
    title: "Suite Room in Bhosari MIDC | Hotel Tamanna",
    description:
      "Looking for a luxury suite near Bhosari MIDC? Stay at Imperial Tamanna Hotel for a comfortable and elegant experience.",
    url: "https://tamannahotels.com/suite-room-bhosari-midc/",
    images: [
      {
        url: "/images/site/ITH-0982.webp",
        width: 1200,
        height: 800,
        alt: "Imperial Tamanna Hotel Suite Room in Bhosari MIDC",
      },
    ],
  },
};

export default function SuiteRoomBhosariMidcPage() {
  return <ImperialSuiteRoomTemplate />;
}

