import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Around The World Multi Cuisine Restaurant & Bar | Grand Tamanna Hotel Hinjawadi Pune",
  description:
    "Experience culinary excellence from every corner of the globe at Around The World Multi-Cuisine Restaurant & Bar located at Grand Tamanna Hotel, Hinjawadi Phase 2, Pune.",
};

export default function BestRestaurantsBarsHinjawadiPunePage() {
  const data = RESTAURANT_DETAILS["best-restaurants-bars-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}

