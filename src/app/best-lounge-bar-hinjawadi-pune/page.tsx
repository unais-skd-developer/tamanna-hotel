import { Metadata } from "next";
import NirvanaLoungeTemplate from "@/components/NirvanaLoungeTemplate";

export const metadata: Metadata = {
  title: "Best Lounge Bar in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
  description:
    "Experience the vibrant nightlife, handcrafted cocktails, premium sound system, and exquisite dining at Nirvana Lounge Bar in Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/best-lounge-bar-hinjawadi-pune",
  },
};

export default function BestLoungeBarHinjawadiPunePage() {
  return <NirvanaLoungeTemplate />;
}

