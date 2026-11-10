import { Metadata } from "next";
import PremierConferenceHall100Template from "@/components/PremierConferenceHall100Template";

export const metadata: Metadata = {
  title: "Conference Halls (100 PAX) | Premier Tamanna Hotel Hinjawadi Pune",
  description:
    "Reserve a conference hall for 100 persons in Hinjawadi, Pune, perfect for seminars, corporate events, and large gatherings at Premier Tamanna Hotel.",
  alternates: {
    canonical: "/conference-hall-for-100-persons-hinjawadi-pune",
  },
};

export default function ConferenceHalls100PaxAliasPage() {
  return <PremierConferenceHall100Template />;
}

