"use client";

import React, { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Swiper core & module styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export interface HotelProperty {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  location: string;
  rating: number;
  description: string;
  amenities: string[];
  startingPrice: string;
}

export const HOTELS_DATA: HotelProperty[] = [
  {
    id: "grand-tamanna",
    slug: "hotels-hinjawadi-pune",
    name: "Grand Tamanna",
    tagline: "The Flagship Luxury Destination with World-Class Banquets",
    image: "/images/site/grand-tamanna.webp",
    location: "Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Pune",
    rating: 4.8,
    description: "The crown jewel of Tamanna Hotels featuring opulent rooms, Nirvana Lounge Bar, Around The World multi-cuisine restaurant, and Eternity Banquet Hall.",
    amenities: ["Free High-Speed Wi-Fi", "Nirvana Lounge Bar", "Eternity Banquet", "Multi-Cuisine Dining", "24/7 Room Service"],
    startingPrice: "₹ 3,499",
  },
  {
    id: "premier-tamanna",
    slug: "premier-tamanna-hotel-hinjawadi-pune",
    name: "Premier Tamanna",
    tagline: "Striking Contemporary Architecture & Premium Comfort",
    image: "/images/site/44646687_0.jpg",
    location: "Hinjawadi IT Park, Near Embassy TechZone, Pune",
    rating: 4.9,
    description: "Distinctive angular glass architecture offering upscale designer suites, executive lounges, and bespoke hospitality for corporate travelers and tourists.",
    amenities: ["Designer Suites", "Business Lounge", "Workstation Desks", "Free Breakfast", "Airport Shuttle"],
    startingPrice: "₹ 3,999",
  },
  {
    id: "bizz-tamanna",
    slug: "bizz-tamanna-hotel-hinjawadi-pune",
    name: "Bizz Tamanna",
    tagline: "Tailored for the Modern Corporate & Executive Professional",
    image: "/images/site/Overview.jpg",
    location: "Hinjawadi Phase 1, Opposite IT Hubs, Pune",
    rating: 4.7,
    description: "Engineered for productivity and tranquility. Strategically situated minutes from major IT firms like Infosys, Wipro, and Cognizant.",
    amenities: ["Executive Workspaces", "Meeting Rooms", "Buffet Breakfast", "Express Check-in", "Free Wi-Fi"],
    startingPrice: "₹ 2,999",
  },
  {
    id: "executive-tamanna",
    slug: "executive-tamanna-hotel-hinjawadi-pune",
    name: "Executive Tamanna",
    tagline: "Effortless Comfort for Extended Corporate Stays",
    image: "/images/site/12989608.jpg",
    location: "Hinjawadi Phase 2, IT Corridor, Pune",
    rating: 4.6,
    description: "Spacious apartment-style suites equipped with modern kitchenettes, high-speed leased-line internet, and attentive concierge services.",
    amenities: ["Extended Stay Suites", "Laundry Facilities", "Gym & Fitness", "Dedicated Parking", "In-Room Dining"],
    startingPrice: "₹ 2,799",
  },
  {
    id: "shree-inn",
    slug: "shree-inn-by-tamanna-hotel-hinjawadi-pune",
    name: "Shree Inn By Tamanna",
    tagline: "Warm, Boutique Hospitality with Personalized Care",
    image: "/images/site/Shree-Inn-by-Tamanna.avif",
    location: "Hinjawadi Main Road, Hinjawadi, Pune",
    rating: 4.7,
    description: "Intimate and charming boutique accommodation celebrating authentic Indian warmth, comfortable guest rooms, and wholesome culinary offerings.",
    amenities: ["Boutique Ambiance", "Pure Veg Options", "24/7 Front Desk", "Travel Desk", "Free Parking"],
    startingPrice: "₹ 2,499",
  },
  {
    id: "imperial-tamanna",
    slug: "best-hotels-chikhali-pune",
    name: "Imperial Tamanna Hotel",
    tagline: "Urban Elegance, Convenience & Leisure Combined",
    image: "/images/site/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg",
    location: "Spine Road, Chikhali, Chinchwad, Pune",
    rating: 4.8,
    description: "Sleek and polished accommodations providing travelers with prompt connectivity to Pune-Mumbai Expressway and prime industrial nodes.",
    amenities: ["Valet Parking", "Smart LED TVs", "Cocktail Lounge", "Conference Hall", "Doctor on Call"],
    startingPrice: "₹ 3,299",
  },
  {
    id: "daily-baker",
    slug: "top-cake-shop-hinjawadi-pune",
    name: "Daily Baker",
    tagline: "Freshly Baked Confections, Pastries & Custom Cakes",
    image: "/images/site/64.jpg",
    location: "Hinjawadi Phase 1 & Phase 2, Pune",
    rating: 4.9,
    description: "Artisanal bakery and cake shop offering fresh bakes, pastries, designer cakes, and confections daily.",
    amenities: ["Fresh Daily Baking", "Egg & Eggless Options", "Online Delivery", "Custom Theme Cakes"],
    startingPrice: "₹ 199",
  },
];

interface CuratedSpacesProps {
  onSelectHotel?: (hotel: HotelProperty) => void;
}

export default function CuratedSpaces({ onSelectHotel }: CuratedSpacesProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="curated-spaces"
      className="relative w-full py-[70px] bg-[#001232] bg-[url('/images/site/curated-bg.jpg')] bg-cover bg-center bg-no-repeat text-white overflow-hidden select-none"
    >
      <div className="relative w-full mx-auto z-10">
        
        {/* Section Header matching authentic live site with fadeInUp animation */}
        <div
          data-reveal="up"
          suppressHydrationWarning
          className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4 sm:px-6"
        >
          <h2
            className="font-bebas uppercase mb-6 text-center select-none text-[65px] md:text-[95px] leading-[54px] md:leading-[90px]"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span className="text-[#FFFFFFD1] font-normal tracking-[-1.5px] md:tracking-[-3.8px]">
              CURATED HOTEL <span className="block md:inline">SPACES</span>
            </span>
            <span className="text-[#0C64AB] font-normal md:font-medium tracking-[-2.2px] md:tracking-[-3.8px] block">
              FOR UNFORGETTABLE <span className="block md:inline">GETAWAYS</span>
            </span>
          </h2>
          
          <p
            className="font-poppins text-[16px] leading-[28px] text-[#F5EBEB] max-w-[850px] mx-auto font-normal px-2 sm:px-4"
            style={{ fontFamily: '"Poppins", Sans-serif' }}
          >
            Our portfolio includes Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn by Tamanna and Imperial Tamanna Hotel each thoughtfully designed to suit different travel needs. Whether you&rsquo;re visiting for a corporate assignment, a family celebration, or a weekend getaway, Tamanna Hotels ensures every stay is memorable.
          </p>
        </div>

        {/* 3D Swiper Coverflow Slider strictly matching Image 4 */}
        <div className="relative w-full max-w-[1260px] mx-auto overflow-hidden px-2 sm:px-6 py-4">
          
          {mounted ? (
            <div className="relative w-full">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                initialSlide={0}
                loop={true}
                speed={500}
                slideToClickedSlide={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                coverflowEffect={{
                  rotate: 25,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className="w-full !overflow-visible py-4"
              >
                {HOTELS_DATA.map((hotel) => (
                  <SwiperSlide
                    key={hotel.id}
                    className="!w-[330px] xs:!w-[350px] sm:!w-[390px] md:!w-[420px] lg:!w-[450px] !h-[380px] xs:!h-[410px] sm:!h-[440px] md:!h-[460px] lg:!h-[490px] relative rounded-none overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() => {
                      if (onSelectHotel) onSelectHotel(hotel);
                    }}
                  >
                    <div className="relative w-full h-full bg-slate-900">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 450px"
                      />

                      {/* Smooth dark gradient at bottom for maximum legibility */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 pointer-events-none" />

                      {/* Slide Caption: Hotel Name & View More pill button */}
                      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-4 z-20">
                        <h3
                          className="text-2xl sm:text-3xl md:text-[34px] lg:text-[35px] font-bold text-white capitalize mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-normal font-poppins"
                          style={{ fontFamily: '"Poppins", Sans-serif' }}
                        >
                          {hotel.name}
                        </h3>

                        <Link
                          href={`/${hotel.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View details for ${hotel.name}`}
                          className="inline-flex items-center justify-center bg-white hover:bg-[#0C64AB] text-[#0C64AB] hover:text-white font-medium text-xs sm:text-sm px-6 sm:px-7 py-2 sm:py-2.5 rounded-[50px] shadow-lg transition-all duration-300 font-poppins cursor-pointer"
                          style={{ fontFamily: '"Poppins", Sans-serif' }}
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows positioned on the card matching Image 4 */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperRef.current?.slidePrev();
                }}
                className="absolute top-1/2 -translate-y-1/2 left-2 xs:left-4 sm:left-6 md:left-14 lg:left-24 z-30 p-1.5 xs:p-2 text-white hover:scale-125 transition-transform cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  className="w-7 h-7 sm:w-10 sm:h-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperRef.current?.slideNext();
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 xs:right-4 sm:right-6 md:right-14 lg:right-24 z-30 p-1.5 xs:p-2 text-white hover:scale-125 transition-transform cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  className="w-7 h-7 sm:w-10 sm:h-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          ) : (
            // SSR Placeholder to prevent layout shift
            <div className="relative w-full h-[490px] flex items-center justify-center">
              <div className="w-[450px] h-[490px] bg-slate-800 animate-pulse rounded-none" />
            </div>
          )}

        </div>

      </div>

      {/* Scoped CSS for Swiper 3D coverflow styling matching the live site */}
      <style jsx global>{`
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: rgba(0, 0, 0, 0.42) !important;
        }
      `}</style>
    </section>
  );
}
