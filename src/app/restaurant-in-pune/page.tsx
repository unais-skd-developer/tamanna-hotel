"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Users } from "lucide-react";

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
      "In Our Elegant Multi-Cuisine Restaurant & Bar, Savor Culinary Masterpieces From Around The World.",
    cuisine: "Cuisine Type Multi Cuisine",
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
      "In The Center Of The Grand Tamanna Hotel, Elegance And Entertainment Come Together.",
    cuisine: "Cuisine Type Lounge & Bar",
    capacity: "Capacity 150 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/best-lounge-bar-hinjawadi-pune",
    mapUrl: "https://maps.app.goo.gl/YvfSNQCSkzSiKDwQ6?g_st=ipc",
    orderUrl: "https://grand.tamannahotels.com/",
  },
  {
    hotelTag: "Premier Tamanna Hotel",
    nameLight: "MULTI CUISINE",
    nameBold: "RESTAURANT",
    image: "/images/site/Premier-restaurant2.webp",
    description:
      "Top Location For Fine Dining. Perfect For Birthday Celebrations, These Get-Togethers Come With A Full Music System.",
    cuisine: "Cuisine Type Multi Cuisine",
    capacity: "Capacity 100 Persons",
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/best-multi-cuisine-restaurant-hinjawadi-pune",
    mapUrl: "https://maps.app.goo.gl/mRwbrjBT4jWd1MCQ6?g_st=ipc",
    orderUrl: "https://orders.tamannahotels.com/",
  },
  {
    hotelTag: "Bizz Tamanna Hotel",
    nameLight: "TALK ABOUT MULTI CUISINE",
    nameBold: "RESTAURANT AND BAR",
    image: "/images/site/Restaurant-1st-Floor1-1-scaled.jpg",
    description:
      "Authentic Cuisine, Friendly Service, A Sophisticated Setting, And Passionately Prepared, Outstanding Dining Experiences Are What Bizz Tamanna Restaurant Offers Its Patrons.",
    cuisine: "Cuisine Type Multi Cuisine",
    capacity: "Capacity 110 Persons",
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    viewMoreUrl: "/best-restaurants-hinjawadi-pune",
    mapUrl: "https://maps.app.goo.gl/mRwbrjBT4jWd1MCQ6?g_st=ipc",
    orderUrl: "https://orders.tamannahotels.com/",
  },
  {
    hotelTag: "Executive Tamanna Hotel",
    nameLight: "MULTI CUISINE",
    nameBold: "RESTAURANT AND BAR",
    image: "/images/site/MultiCuisine-Restaurant-3-scaled.jpg",
    description:
      "Celebrate In Elegance At The Executive Tamanna Hotel, Which Is Ideal For Birthday Parties And Get-Togethers.",
    cuisine: "Cuisine Type Multi Cuisine",
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
      "The Cafeteria At Executive Tamanna Hotel Offers A Cozy Setting With A Range Of South Indian And Continental Snacks, Perfect For Quick Bites Or Casual Meetings.",
    cuisine: "Cuisine Type South Indian Snacks & Cafe",
    capacity: "Capacity 50 Persons",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    viewMoreUrl: "/top-restaurant-hinjawadi-pune",
    mapUrl:
      "https://www.google.com/maps/place/Tamanna+Cafeteria/@18.5857518,73.7324152,17z",
    orderUrl: "https://orders.tamannahotels.com/",
  },
  {
    hotelTag: "Imperial Tamanna Hotel",
    nameLight: "URBAN PLATTER",
    nameBold: "MULTI CUISINE RESTAURANT",
    image: "/images/site/ITH-032.webp",
    description:
      "Urban Platter Is A Stylish Multi-Cuisine Restaurant And Bar With A Seating Capacity Of 80 Guests, Serving A Wide Range Of Indian And International Flavours In A Warm And Contemporary Setting, Perfect For Every Occasion.",
    cuisine: "Cuisine Type Multi Cuisine",
    capacity: "Capacity 80 Persons",
    address:
      "Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    viewMoreUrl: "/multi-cuisine-restaurant-chinchwad-pune",
    mapUrl: "https://maps.app.goo.gl/eCeapCu1RaU9EtbU6",
    orderUrl: "https://imperial.tamannahotels.com/",
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
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#0C64AB] font-normal font-poppins mb-3">
                      <svg
                        className="w-3.5 h-3.5 text-[#0C64AB] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <span>{rest.hotelTag}</span>
                    </div>

                    {/* Two-tone Title (Stacked into 2 distinct lines matching Image 1) */}
                    <Link href={rest.viewMoreUrl} className="block group cursor-pointer mb-4">
                      <h2
                        className="font-bebas text-[34px] xs:text-[38px] sm:text-[42px] lg:text-[45px] leading-[0.92] tracking-normal uppercase select-none group-hover:opacity-90 transition-opacity"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        <span className="block text-[#1c6fae] font-normal tracking-[-0.5px]">
                          {rest.nameLight}
                        </span>
                        <span className="block text-[#0C64AB] font-medium tracking-[-0.5px]">
                          {rest.nameBold}
                        </span>
                      </h2>
                    </Link>

                    {/* Description Paragraph */}
                    <p className="font-poppins text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#555555] mb-6 font-normal">
                      {rest.description}
                    </p>

                    {/* Row 1: Cuisine Type & Capacity (Matching Image 2 exactly) */}
                    <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-12 gap-y-2 text-[13px] sm:text-[14px] font-poppins text-[#0C64AB] mb-4">
                      <div className="flex items-center gap-2">
                        {/* Cocktail / Martini Glass Icon */}
                        <svg
                          className="w-4 h-4 text-[#0C64AB] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 22h8" />
                          <path d="M12 15v7" />
                          <path d="m19 3-7 8-7-8Z" />
                        </svg>
                        <span className="font-normal">{rest.cuisine}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Capacity Users Icon */}
                        <Users className="w-4 h-4 text-[#0C64AB] shrink-0 stroke-[1.8]" />
                        <span className="font-normal">{rest.capacity}</span>
                      </div>
                    </div>

                    {/* Row 2: Address with Circular Locator Target Icon (Matching Image 2 exactly) */}
                    <div className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] font-poppins text-[#0C64AB] leading-[1.55] mb-5">
                      <svg
                        className="w-4 h-4 text-[#0C64AB] shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                      </svg>
                      <span className="font-normal">{rest.address}</span>
                    </div>
                  </div>

                  <div>
                    {/* Divider matching Image 2 */}
                    <div className="border-t border-[#E5E7EB] my-5 sm:my-6" />

                    {/* Action Buttons Row matching Image 2 exactly: VIEW MORE, VIEW MAP, LET'S GET ORDERING */}
                    <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 pt-1">
                      <div className="flex items-center gap-6 sm:gap-10">
                        <Link
                          href={rest.viewMoreUrl}
                          className="font-bebas text-[18px] sm:text-[20px] text-[#0C64AB] hover:text-[#084572] underline underline-offset-4 tracking-[0.5px] uppercase font-normal transition-colors"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          VIEW MORE
                        </Link>

                        {rest.mapUrl && (
                          <a
                            href={rest.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bebas text-[18px] sm:text-[20px] text-[#0C64AB] hover:text-[#084572] underline underline-offset-4 tracking-[0.5px] uppercase font-normal transition-colors"
                            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                          >
                            VIEW MAP
                          </a>
                        )}
                      </div>

                      <a
                        href={rest.orderUrl || "https://orders.tamannahotels.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#0C64AB] text-[#0C64AB] hover:bg-[#0C64AB] hover:text-white rounded-full px-6 sm:px-7 py-2 font-bebas text-[17px] sm:text-[19px] tracking-[0.6px] uppercase font-normal transition-colors duration-200 shrink-0 inline-flex items-center justify-center cursor-pointer"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        LET&apos;S GET ORDERING
                      </a>
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
