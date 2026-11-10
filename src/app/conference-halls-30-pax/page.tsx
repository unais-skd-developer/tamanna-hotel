import { Metadata } from "next";
import PremierConferenceHall30Template from "@/components/PremierConferenceHall30Template";

export const metadata: Metadata = {
  title: "Conference Hall for 30 person in Hinjawadi Pune | Tamanna",
  description:
    "Book a conference hall for 30 persons in Hinjawadi, Pune, ideal for corporate meetings, training sessions, & small gatherings.",
  alternates: {
    canonical: "/conference-hall-for-30-persons-hinjawadi-pune",
  },
};

export default function ConferenceHalls30PaxPage() {
  return <PremierConferenceHall30Template />;
}

