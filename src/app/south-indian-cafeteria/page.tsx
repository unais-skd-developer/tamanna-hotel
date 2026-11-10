import React from "react";
import RestaurantDetailTemplate from "@/components/RestaurantDetailTemplate";
import { RESTAURANT_DETAILS } from "@/data/restaurantDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Indian Cuisine Cafeteria | Executive Tamanna Hotel",
  description:
    "Enjoy freshly made South Indian snacks and coffee at Executive Tamanna Hotel cafeteria in Hinjawadi, Pune.",
  alternates: {
    canonical: "/top-restaurant-hinjawadi-pune",
  },
};

export default function SouthIndianCafeteriaAliasPage() {
  const data = RESTAURANT_DETAILS["top-restaurant-hinjawadi-pune"];
  return <RestaurantDetailTemplate data={data} />;
}
