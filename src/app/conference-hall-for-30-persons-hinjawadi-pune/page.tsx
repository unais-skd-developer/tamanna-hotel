import { Metadata } from "next";
import PremierConferenceHall30Template from "@/components/PremierConferenceHall30Template";

export const metadata: Metadata = {
  title: "Conference Hall for 30 person in Hinjawadi Pune | Tamanna",
  description:
    "Book a conference hall for 30 persons in Hinjawadi, Pune, ideal for corporate meetings, training sessions, & small gatherings.",
  alternates: {
    canonical: "/conference-hall-for-30-persons-hinjawadi-pune",
  },
  openGraph: {
    title: "Conference Hall for 30 person in Hinjawadi Pune | Tamanna",
    description:
      "Book a conference hall for 30 persons in Hinjawadi, Pune, ideal for corporate meetings, training sessions, & small gatherings.",
    url: "https://tamannahotels.com/conference-hall-for-30-persons-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/premier-conference-30-hero.webp",
        width: 1200,
        height: 800,
        alt: "Conference Hall for 30 Persons Premier Tamanna Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ConferenceHall30Page() {
  return <PremierConferenceHall30Template />;
}

