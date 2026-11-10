import type { Metadata } from "next";
import BlissBanquetTemplate from "@/components/BlissBanquetTemplate";

export const metadata: Metadata = {
  title: "Bliss Banquet Hall | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Bliss where every celebration becomes a cherished memory. Located in Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/small-party-banquet-hall-hinjawadi-pune",
  },
};

export default function BlissAliasPage() {
  return <BlissBanquetTemplate />;
}

