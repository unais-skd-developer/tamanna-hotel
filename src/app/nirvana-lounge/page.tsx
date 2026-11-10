import { Metadata } from "next";
import NirvanaLoungeTemplate from "@/components/NirvanaLoungeTemplate";

export const metadata: Metadata = {
  title: "Nirvana Lounge Bar | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Experience the vibrant nightlife, handcrafted cocktails, premium sound system, and exquisite dining at Nirvana Lounge Bar in Grand Tamanna Hotel, Hinjawadi Pune.",
  alternates: {
    canonical: "/best-lounge-bar-hinjawadi-pune",
  },
};

export default function NirvanaLoungePage() {
  return <NirvanaLoungeTemplate />;
}

