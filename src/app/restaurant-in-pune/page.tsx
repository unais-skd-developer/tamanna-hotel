"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Utensils, Users, MapPin, Building2 } from "lucide-react";

interface RestaurantCardData {
  hotelTag: string;
  nameLight: string;
  nameBold: string;
  image: string;
  description: string;
  cuisine: string;
  capacity: string;
  address: string;
  viewMoreUrl: string;
  mapUrl?: string;
  orderUrl?: string;
}

const RESTAURANT_CARDS: RestaurantCardData[] = [
  {
    hotelTag: "Grand Tamanna Hotel",
    nameLight: "AROUND THE WORLD",
    nameBold: "MULTI CUISINE RESTAURANT",
    image: "/images/site/grand-restaurant2-scaled.avif",
    description:
      "In our elegant multi-cuisine restaurant & bar, savor culinary masterpieces from around the world.",
    cuisine: "Cuisine Type: Multi Cuisine",
    capacity: "Capacity 110 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/best-restaurants-bars-hinjawadi-pune",
    mapUrl: "https://maps.app.goo.gl/mRwbrjBT4jWd1MCQ6?g_st=ipc",
    orderUrl: "https://grand.tamannahotels.com/",
  },
  {
    hotelTag: "Grand Tamanna Hotel",
    nameLight: "NIRVANA",
    nameBold: "LOUNGE BAR",
    image: "/images/site/Nirvana-3-scaled.jpg",
    description:
      "In the center of the Grand Tamanna Hotel, elegance and entertainment come together.",
    cuisine: "Located in Grand Tamanna Hotel",
    capacity: "Capacity 150 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/best-lounge-bar-hinjawadi-pune",
    mapUrl: "https://maps.app.goo.gl/YvfSNQCSkzSiKDwQ6?g_st=ipc",
  },
  {
    hotelTag: "Premier Tamanna Hotel",
    nameLight: "MULTI CUISINE",
    nameBold: "RESTAURANT",
    image: "/images/site/Premier-restaurant2.webp",
    description:
      "Top location for fine dining. Perfect for birthday celebrations, these get-togethers come with a full music system.",
    cuisine: "Multi Cuisine Restaurant & Bar",
    capacity: "Capacity 100 Persons",
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/best-multi-cuisine-restaurant-hinjawadi-pune",
    orderUrl: "https://orders.tamannahotels.com/",
  },
  {
    hotelTag: "Bizz Tamanna Hotel",
    nameLight: "TALK ABOUT MULTI CUISINE",
    nameBold: "RESTAURANT AND BAR",
    image: "/images/site/Restaurant-1st-Floor1-1-scaled.jpg",
    description:
      "Authentic cuisine, friendly service, a sophisticated setting, and passionately prepared, outstanding dining experiences are what Bizz Tamanna Restaurant offers its patrons.",
    cuisine: "Multi Cuisine Restaurant & Bar",
    capacity: "Capacity 110 Persons",
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    viewMoreUrl: "/best-restaurants-hinjawadi-pune",
  },
  {
    hotelTag: "Executive Tamanna Hotel",
    nameLight: "MULTI CUISINE",
    nameBold: "RESTAURANT AND BAR",
    image: "/images/site/MultiCuisine-Restaurant-3-scaled.jpg",
    description:
      "Celebrate in elegance at the Executive Tamanna Hotel, which is ideal for birthday parties and get-togethers.",
    cuisine: "Multi Cuisine Restaurant & Bar",
    capacity: "Capacity 110 Persons",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/top-multi-cuisine-restaurant-bar-hinjawadi-pune",
    mapUrl:
      "https://www.google.com/maps/place/Tamanna+Multi+Cuisine+Restaurant+%26+Bar/@18.5857524,73.7324007,17z",
    orderUrl: "https://orders.tamannahotels.com/",
  },
  {
    hotelTag: "Executive Tamanna Hotel",
    nameLight: "SOUTH INDIAN",
    nameBold: "CUISINE CAFETERIA",
    image: "/images/site/56.jpg",
    description:
      "The cafeteria at Executive Tamanna Hotel offers a cozy setting with a range of south Indian and continental snacks, perfect for quick bites or casual meetings.",
    cuisine: "South Indian snacks & cafe",
    capacity: "Capacity 50 Persons",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/top-restaurant-hinjawadi-pune",
    mapUrl:
      "https://www.google.com/maps/place/Tamanna+Cafeteria/@18.5857518,73.7324152,17z",
  },
  {
    hotelTag: "Imperial Tamanna Hotel",
    nameLight: "URBAN PLATTER",
    nameBold: "MULTI CUISINE RESTAURANT",
    image: "/images/site/ITH-032.webp",
    description:
      "Urban Platter is a stylish multi-cuisine restaurant and bar with a seating capacity of 80 guests, serving a wide range of Indian and international flavours in a warm and contemporary setting, perfect for every occasion.",
    cuisine: "Restaurant and Bar",
    capacity: "Capacity 80 Persons",
    address:
      "Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    viewMoreUrl: "/multi-cuisine-restaurant-chinchwad-pune",
    mapUrl: "https://maps.app.goo.gl/eCeapCu1RaU9EtbU6",
  },
];

export default function RestaurantsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Page Hero Banner */}
      <PageHeader
        title="RESTAURANTS"
        bgImage="/images/site/Nirvana-2-1-scaled.jpg"
        showBreadcrumbs={false}
        align="bottom"
        minHeight="h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[420px]"
        overlayClassName="bg-black/35"
        titleClassName="text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-bebas uppercase tracking-[1px] text-white leading-none drop-shadow-sm select-none"
      />

      {/* Restaurant Cards Section matching live Elementor layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          {RESTAURANT_CARDS.map((rest, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col lg:flex-row items-stretch"
            >
              {/* Left Column: Full-Height Dining Photo */}
              <Link
                href={rest.viewMoreUrl}
                className="w-full lg:w-1/2 relative min-h-[300px] xs:min-h-[340px] sm:min-h-[440px] lg:min-h-[600px] xl:min-h-[620px] overflow-hidden group block cursor-pointer"
              >
                <Image
                  src={rest.image}
                  alt={`${rest.nameLight} ${rest.nameBold}`}
                  fill
                  priority={idx < 2}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>

              {/* Right Column: Outer #EDEDF7C9 Frame + Overlapping White Card */}
              <div className="w-full lg:w-1/2 bg-[#EDEDF7C9] flex items-stretch p-3.5 sm:p-5 lg:py-7 lg:pr-7 lg:pl-0">
                <div className="w-full bg-white -mt-10 sm:-mt-12 lg:mt-0 lg:-ml-5 relative z-10 shadow-sm flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    {/* Hotel Tag */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-[#0C64AB] font-medium font-poppins mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0C64AB] shrink-0" />
                      <span>{rest.hotelTag}</span>
                    </div>

                    {/* Two-tone Title */}
                    <Link href={rest.viewMoreUrl} className="block group cursor-pointer">
                      <h2
                        className="font-bebas text-[34px] xs:text-[38px] sm:text-4xl lg:text-[42px] leading-[0.95] tracking-[1px] uppercase mb-3.5 select-none group-hover:opacity-85 transition-opacity"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        <span style={{ color: "#0C64AB91", fontWeight: 400 }}>
                          {rest.nameLight}{" "}
                        </span>
                        <span style={{ color: "#0C64AB", fontWeight: 500 }}>
                          {rest.nameBold}
                        </span>
                      </h2>
                    </Link>

                    {/* Description Paragraph */}
                    <p className="font-poppins text-xs sm:text-[14px] leading-relaxed text-slate-600 mb-6">
                      {rest.description}
                    </p>

                    {/* Cuisine & Capacity Info Pills */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13.5px] text-slate-700 font-poppins mb-5">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-[#0C64AB] shrink-0" />
                        <span>{rest.cuisine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0C64AB] shrink-0" />
                        <span>{rest.capacity}</span>
                      </div>
                    </div>

                    {/* Address with MapPin */}
                    <div className="flex items-start gap-2 text-slate-600 font-poppins text-xs sm:text-[13px] leading-snug">
                      <MapPin className="w-4 h-4 text-[#0C64AB] shrink-0 mt-0.5" />
                      <span>{rest.address}</span>
                    </div>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-[#E0DDDD] my-4 sm:my-6" />

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4 pt-1">
                      <div className="flex items-center justify-between w-full sm:w-auto gap-4 xs:gap-8 sm:gap-6">
                        <Link
                          href={rest.viewMoreUrl}
                          className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          VIEW MORE
                        </Link>

                        {rest.mapUrl && (
                          <a
                            href={rest.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium"
                            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                          >
                            VIEW MAP
                          </a>
                        )}
                      </div>

                      {rest.orderUrl && (
                        <a
                          href={rest.orderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-[#0C64AB] text-[#0C64AB] hover:bg-[#0C64AB] hover:text-white rounded-full px-5 sm:px-6 py-2 font-bebas text-[15px] sm:text-[18px] tracking-[0.8px] uppercase font-medium transition-colors duration-200 shrink-0"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          ORDER FOOD ONLINE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
