import type { Metadata } from "next";
import BanquetHallTemplate from "@/components/BanquetHallTemplate";

export const metadata: Metadata = {
  title: "Banquet Hall | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Air Conditioned Carpeted Banquet Hall at Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/best-banquet-hall-hinjawadi-pune",
  },
};

export default function BanquetHallAliasPage() {
  return <BanquetHallTemplate />;
}

