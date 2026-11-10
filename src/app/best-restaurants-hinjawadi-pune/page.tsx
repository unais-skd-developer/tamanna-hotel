import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";

export default function BestRestaurantsHinjawadiPunePage() {
  const data = RESTAURANT_DETAILS["best-restaurants-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}
