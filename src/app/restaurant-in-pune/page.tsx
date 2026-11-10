"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

// Exact SVG icons matching reference design
function PinWithBaseIcon({ className = "w-4 h-4 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 3.6 5 9.2 5 9.2s5-5.6 5-9.2a5 5 0 0 0-5-5z" />
      <circle cx="12" cy="7" r="1.8" />
      <ellipse cx="12" cy="19.5" rx="6.5" ry="2.2" />
    </svg>
  );
}

function MartiniGlassIcon({ className = "w-4 h-4 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 3.5h17L12 13.5 3.5 3.5Z" />
      <path d="M12 13.5V21" />
      <path d="M7.5 21h9" />
    </svg>
  );
}

function CapacityUsersIcon({ className = "w-4 h-4 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

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
              {/* Left Column: Dining Photo matching live site 500px min-height */}
              <Link
                href={rest.viewMoreUrl}
                className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] overflow-hidden group block cursor-pointer"
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

              {/* Right Column: Outer #EDEDF7C9 Frame with vertical centering matching live site */}
              <div className="w-full lg:w-1/2 bg-[#EDEDF7C9] flex flex-col justify-center p-5 lg:py-5 lg:pr-5 lg:pl-0 z-[9]">
                <div className="w-full bg-white -mt-10 sm:-mt-10 lg:mt-0 lg:-ml-5 relative z-10 p-6 sm:p-7 lg:p-[30px] flex flex-col">
                  {/* Hotel Tag */}
                  <div className="flex items-center gap-2 text-[15px] sm:text-[16px] text-[#0C64AB] font-normal font-poppins mb-[18px]">
                    <PinWithBaseIcon className="w-[18px] h-[18px] text-[#8BB6DA] shrink-0" />
                    <span>{rest.hotelTag}</span>
                  </div>

                  {/* Two-tone Title (Stacked into 2 distinct lines matching live site) */}
                  <Link href={rest.viewMoreUrl} className="block group cursor-pointer mb-[16px]">
                    <h2
                      className="font-bebas text-[36px] sm:text-[40px] leading-[1.0] tracking-[1px] uppercase select-none group-hover:opacity-90 transition-opacity"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      <span className="block text-[#75a7cf] font-normal">
                        {rest.nameLight}
                      </span>
                      <span className="block text-[#0C64AB] font-medium mt-1">
                        {rest.nameBold}
                      </span>
                    </h2>
                  </Link>

                  {/* Description Paragraph */}
                  <p className="font-poppins text-[14px] sm:text-[15px] leading-[1.6] text-[#555555] mb-[20px] font-normal">
                    {rest.description}
                  </p>

                  {/* Row 1: Cuisine Type & Capacity (Matching live site 50px gap & 18px icons) */}
                  <div className="flex flex-wrap items-center gap-x-[50px] gap-y-2 text-[14px] sm:text-[15px] font-poppins text-[#0C64AB] mb-[15px]">
                    <div className="flex items-center gap-2.5">
                      <MartiniGlassIcon className="w-[18px] h-[18px] text-[#0C64AB] shrink-0" />
                      <span className="font-normal">{rest.cuisine}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <CapacityUsersIcon className="w-[18px] h-[18px] text-[#0C64AB] shrink-0" />
                      <span className="font-normal">{rest.capacity}</span>
                    </div>
                  </div>

                  {/* Row 2: Address with Pin-on-pedestal Icon */}
                  <div className="flex items-start gap-2.5 text-[14px] sm:text-[15px] font-poppins text-[#0C64AB] leading-[1.5] mb-[18px]">
                    <PinWithBaseIcon className="w-[19px] h-[19px] text-[#0C64AB] shrink-0 mt-0.5" />
                    <span className="font-normal">{rest.address}</span>
                  </div>

                  {/* Divider matching live site #E0DDDD */}
                  <div className="border-t border-[#E0DDDD] my-[15px]" />

                  {/* Action Buttons Row matching live site exactly: VIEW MORE, VIEW MAP, LET'S GET ORDERING */}
                  <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
                    <div className="flex items-center gap-6 sm:gap-8">
                      <Link
                        href={rest.viewMoreUrl}
                        className="font-bebas text-[18px] text-[#0C64AB] hover:text-[#084572] underline underline-offset-[5px] tracking-[0.8px] font-normal transition-colors py-[14px]"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        VIEW MORE
                      </Link>

                      {rest.mapUrl && (
                        <a
                          href={rest.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bebas text-[18px] text-[#0C64AB] hover:text-[#084572] underline underline-offset-[5px] tracking-[0.8px] font-normal transition-colors py-[14px]"
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
                      className="border-2 border-[#0C64AB] text-[#0C64AB] hover:bg-[#0C64AB] hover:text-white rounded-[50px] px-[30px] py-[12px] font-bebas text-[18px] tracking-[0.8px] uppercase font-normal transition-colors duration-200 shrink-0 inline-flex items-center justify-center cursor-pointer"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      LET&apos;S GET ORDERING
                    </a>
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
