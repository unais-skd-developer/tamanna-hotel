import React from "react";
import EternityBanquetTemplate from "@/components/EternityBanquetTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eternity Banquet Hall | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Eternity where every celebration becomes a cherished memory. Located in Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/ac-halls-hinjawadi-pune",
  },
};

export default function EternityPage() {
  return <EternityBanquetTemplate />;
}
