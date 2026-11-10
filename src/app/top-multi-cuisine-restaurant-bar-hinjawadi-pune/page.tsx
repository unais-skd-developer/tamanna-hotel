import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Multi Cuisine Restaurant & Bar Hinjawadi Pune | Executive Tamanna Hotel",
  description:
    "Celebrate in style at Executive Tamanna Hotel. Top multi-cuisine restaurant and bar in Hinjawadi Phase 1, Pune with fine dining, drinks, and online ordering.",
};

export default function TopMultiCuisineRestaurantBarHinjawadiPunePage() {
  const data = RESTAURANT_DETAILS["top-multi-cuisine-restaurant-bar-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}

