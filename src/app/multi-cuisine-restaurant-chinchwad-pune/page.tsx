import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Platter Multi Cuisine Restaurant & Bar | Imperial Tamanna Hotel Chinchwad Pune",
  description:
    "Urban Platter is a stylish multi-cuisine restaurant and bar with a seating capacity of 80 guests at Imperial Tamanna Hotel, Chinchwad, Pimpri-Chinchwad, Pune.",
};

export default function MultiCuisineRestaurantChinchwadPunePage() {
  const data = RESTAURANT_DETAILS["multi-cuisine-restaurant-chinchwad-pune"];
  return <RestaurantDetailTemplate data={data} />;
}

