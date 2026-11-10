import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Restaurant in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
  description:
    "Enjoy a delightful dining experience at the top restaurant in Hinjawadi, Pune. Serving mouth-watering dishes, and a relaxing atmosphere.",
  alternates: {
    canonical: "/top-restaurant-hinjawadi-pune",
  },
  openGraph: {
    title: "Top Restaurant in Hinjawadi Pune | Hotel Tamanna - Tamanna Hotels",
    description:
      "Enjoy a delightful dining experience at the top restaurant in Hinjawadi, Pune. Serving mouth-watering dishes, and a relaxing atmosphere.",
    url: "https://tamannahotels.com/top-restaurant-hinjawadi-pune/",
    siteName: "Tamanna Hotels",
    images: [
      {
        url: "/images/site/blur-coffee-shop-interior-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Top Restaurant in Hinjawadi Pune - South Indian Cuisine Cafeteria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TopRestaurantHinjawadiPunePage() {
  const data = RESTAURANT_DETAILS["top-restaurant-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}
