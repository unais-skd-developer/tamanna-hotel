import { Metadata } from "next";
import PremierConferenceHall100Template from "@/components/PremierConferenceHall100Template";

export const metadata: Metadata = {
  title: "Conference Hall for 100 person in Hinjawadi Pune | Tamanna",
  description:
    "Reserve a conference hall for 100 persons in Hinjawadi, Pune, perfect for seminars, corporate events, and large gatherings at Premier Tamanna Hotel.",
  alternates: {
    canonical: "/conference-hall-for-100-persons-hinjawadi-pune",
  },
};

export default function ConferenceHall100Page() {
  return <PremierConferenceHall100Template />;
}

