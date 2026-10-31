"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Wifi, Utensils, Star, ArrowUpRight } from "lucide-react";

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
    image: "/images/extracted/curated_grand.png",
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
    image: "/images/extracted/curated_premier.png",
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
    image: "/images/extracted/curated_bizz.png",
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
    image: "/images/gallery_executive.jpg",
    location: "Hinjawadi Phase 2, IT Corridor, Pune",
    rating: 4.6,
    description: "Spacious apartment-style suites equipped with modern kitchenettes, high-speed leased-line internet, and attentive concierge services.",
    amenities: ["Extended Stay Suites", "Laundry Facilities", "Gym & Fitness", "Dedicated Parking", "In-Room Dining"],
    startingPrice: "₹ 2,799",
  },
  {
    id: "shree-inn",
    slug: "shree-inn-by-tamanna-hotel-hinjawadi-pune",
    name: "Shree Inn by Tamanna",
    tagline: "Warm, Boutique Hospitality with Personalized Care",
    image: "/images/gallery_shree.jpg",
    location: "Hinjawadi Main Road, Hinjawadi, Pune",
    rating: 4.7,
    description: "Intimate and charming boutique accommodation celebrating authentic Indian warmth, comfortable guest rooms, and wholesome culinary offerings.",
    amenities: ["Boutique Ambiance", "Pure Veg Options", "24/7 Front Desk", "Travel Desk", "Free Parking"],
    startingPrice: "₹ 2,499",
  },
  {
    id: "imperial-tamanna",
    slug: "best-hotels-chikhali-pune",
    name: "Imperial Tamanna",
    tagline: "Urban Elegance, Convenience & Leisure Combined",
    image: "/images/gallery_imperial.jpg",
    location: "Spine Road, Chikhali, Chinchwad, Pune",
    rating: 4.8,
    description: "Sleek and polished accommodations providing travelers with prompt connectivity to Pune-Mumbai Expressway and prime industrial nodes.",
    amenities: ["Valet Parking", "Smart LED TVs", "Cocktail Lounge", "Conference Hall", "Doctor on Call"],
    startingPrice: "₹ 3,299",
  },
];

interface CuratedSpacesProps {
  onSelectHotel: (hotel: HotelProperty) => void;
}

export default function CuratedSpaces({ onSelectHotel }: CuratedSpacesProps) {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Premier Tamanna
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const total = HOTELS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  // Compute indices for 3D carousel
  const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
  const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;

  return (
    <section
      id="curated-spaces"
      className="relative w-full py-20 md:py-28 bg-[#07193f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching exact layout */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <h2
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[54px] uppercase tracking-wide leading-tight mb-4"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Curated Hotel Spaces{" "}
            <span className="text-[#38bdf8] font-normal">for Unforgettable Getaways</span>
          </h2>
          
          <p className="text-slate-300 font-poppins text-sm sm:text-base md:text-[15.5px] leading-relaxed max-w-3xl mx-auto font-normal">
            Our portfolio includes Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn by Tamanna and Imperial Tamanna Hotel each thoughtfully designed with refined rooms, state-of-the-art banquets, rooftop experiences, and exceptional dining.
          </p>
        </div>

        {/* 3D Panel Carousel Container */}
        <div className="relative w-full py-4 perspective-1000">
          <div className="relative w-full h-[400px] sm:h-[460px] md:h-[530px] flex items-center justify-center transform-style-3d">

            {/* LEFT CARD (tilted 3D inwards, dimmed) */}
            <div
              onClick={handlePrev}
              style={{
                transform: "translateX(-48%) scale(0.85) rotateY(24deg)",
                transformOrigin: "right center",
              }}
              className="absolute left-[8%] sm:left-[12%] md:left-[16%] w-[75%] sm:w-[55%] md:w-[46%] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out z-10 select-none group"
            >
              <div className="relative w-full h-full bg-slate-800">
                <Image
                  src={HOTELS_DATA[prevIndex].image}
                  alt={HOTELS_DATA[prevIndex].name}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors" />

                {/* Left Arrow Button */}
                <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/40 transition-transform active:scale-95 cursor-pointer shadow-lg"
                    aria-label="Previous Hotel"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-4 z-20">
                  <h3 className="text-2xl sm:text-3xl font-bold font-condensed tracking-wide text-white drop-shadow-md mb-3">
                    {HOTELS_DATA[prevIndex].name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectHotel(HOTELS_DATA[prevIndex]);
                    }}
                    className="bg-white hover:bg-sky-50 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-2 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>

            {/* ACTIVE CENTER CARD */}
            <div
              style={{
                transform: "translateX(0) scale(1) rotateY(0deg) translateZ(50px)",
              }}
              className="relative w-[85%] sm:w-[62%] md:w-[50%] h-[360px] sm:h-[430px] md:h-[490px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out z-30 select-none border-2 border-white/20 group"
            >
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={HOTELS_DATA[activeIndex].image}
                  alt={HOTELS_DATA[activeIndex].name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                  <span className="bg-[#005d9e]/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Featured Property
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
                  <div className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    From <span className="font-bold text-sky-300">{HOTELS_DATA[activeIndex].startingPrice}</span> / night
                  </div>
                </div>

                {/* Bottom Content & View More Button */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-6 z-20">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-condensed tracking-wide text-white drop-shadow-lg mb-4">
                    {HOTELS_DATA[activeIndex].name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectHotel(HOTELS_DATA[activeIndex])}
                      className="bg-white hover:bg-sky-50 active:scale-95 text-slate-900 font-bold text-sm sm:text-base px-8 py-2.5 rounded-full shadow-2xl transition-all duration-200 hover:shadow-sky-400/20 hover:scale-105 cursor-pointer"
                    >
                      View More
                    </button>
                    <Link
                      href={`/${HOTELS_DATA[activeIndex].slug}`}
                      className="bg-[#0c64ab] hover:bg-[#094c82] text-white font-bold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              onClick={handleNext}
              style={{
                transform: "translateX(48%) scale(0.85) rotateY(-24deg)",
                transformOrigin: "left center",
              }}
              className="absolute right-[8%] sm:right-[12%] md:right-[16%] w-[75%] sm:w-[55%] md:w-[46%] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out z-10 select-none group"
            >
              <div className="relative w-full h-full bg-slate-800">
                <Image
                  src={HOTELS_DATA[nextIndex].image}
                  alt={HOTELS_DATA[nextIndex].name}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors" />

                {/* Right Arrow Button */}
                <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/40 transition-transform active:scale-95 cursor-pointer shadow-lg"
                    aria-label="Next Hotel"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-4 z-20">
                  <h3 className="text-2xl sm:text-3xl font-bold font-condensed tracking-wide text-white drop-shadow-md mb-3">
                    {HOTELS_DATA[nextIndex].name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectHotel(HOTELS_DATA[nextIndex]);
                    }}
                    className="bg-white hover:bg-sky-50 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-2 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {HOTELS_DATA.map((hotel, idx) => (
              <button
                key={hotel.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 h-2.5 bg-[#38bdf8]"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to hotel ${hotel.name}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
