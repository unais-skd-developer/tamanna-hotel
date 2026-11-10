import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";

export default function BestMultiCuisineRestaurantHinjawadiPunePage() {
  const data = RESTAURANT_DETAILS["best-multi-cuisine-restaurant-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}

