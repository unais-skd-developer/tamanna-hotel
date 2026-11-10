import type { Metadata } from "next";
import BanquetHallTemplate from "@/components/BanquetHallTemplate";

export const metadata: Metadata = {
  title: "Best Banquet Hall in Hinjawadi Pune | Hotel Tamanna",
  description:
    "Air Conditioned Carpeted Banquet Hall at Grand Tamanna Hotel, Hinjawadi Pune. Wedding capacity up to 600 persons, board room capacity up to 200 persons.",
  alternates: {
    canonical: "/best-banquet-hall-hinjawadi-pune",
  },
};

export default function BanquetHallPage() {
  return <BanquetHallTemplate />;
}

