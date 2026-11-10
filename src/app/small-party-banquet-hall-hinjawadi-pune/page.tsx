import type { Metadata } from "next";
import BlissBanquetTemplate from "@/components/BlissBanquetTemplate";

export const metadata: Metadata = {
  title: "Small Party Banquet Hall in Hinjawadi | Tamanna Hotels",
  description:
    "Bliss where every celebration becomes a cherished memory. Located in Grand Tamanna Hotel, Hinjawadi Pune. Ideal for corporate events, parties, and celebrations.",
  alternates: {
    canonical: "/small-party-banquet-hall-hinjawadi-pune",
  },
};

export default function SmallPartyBanquetHallPage() {
  return <BlissBanquetTemplate />;
}

