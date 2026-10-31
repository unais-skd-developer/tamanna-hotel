"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    image: "/images/extracted/curated_executive.png",
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
    image: "/images/extracted/curated_shree.png",
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
    image: "/images/extracted/curated_imperial.png",
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
    image: "/images/extracted/curated_dailybaker.png",
    location: "Hinjawadi Phase 1 & Phase 2, Pune",
    rating: 4.9,
    description: "Artisanal bakery and cake shop offering fresh bakes, pastries, designer cakes, and confections daily.",
    amenities: ["Fresh Daily Baking", "Egg & Eggless Options", "Online Delivery", "Custom Theme Cakes"],
    startingPrice: "₹ 199",
  },
];

interface CuratedSpacesProps {
  onSelectHotel: (hotel: HotelProperty) => void;
}

export default function CuratedSpaces({ onSelectHotel }: CuratedSpacesProps) {
  // Start on Bizz Tamanna (index 2) as in the user's first screenshot
  const [activeIndex, setActiveIndex] = useState(2);
  const touchStartX = useRef<number | null>(null);

  const total = HOTELS_DATA.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  // Compute 3 visible slides: Prev, Active, Next
  const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
  const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;

  const prevHotel = HOTELS_DATA[prevIndex];
  const activeHotel = HOTELS_DATA[activeIndex];
  const nextHotel = HOTELS_DATA[nextIndex];

  return (
    <section
      id="curated-spaces"
      className="relative w-full py-20 md:py-28 bg-[#001232] text-white overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Concentric Ripple Background Pattern matching the user's screenshots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          className="w-[1800px] h-[1800px] shrink-0 opacity-20"
          viewBox="0 0 1000 1000"
        >
          {[70, 140, 210, 280, 350, 420, 490, 560, 630, 700, 770, 840, 910, 980].map((r) => (
            <circle
              key={r}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.2"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[52px] uppercase tracking-wide leading-tight mb-4"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Curated Hotel Spaces{" "}
            <span className="text-[#38bdf8] font-normal">for Unforgettable Getaways</span>
          </h2>
          
          <p className="text-slate-300 font-poppins text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto font-normal">
            Our portfolio includes Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn by Tamanna and Imperial Tamanna Hotel each thoughtfully designed to suit different travel needs. Whether you&apos;re visiting for a corporate assignment, a family celebration, or a weekend getaway, Tamanna Hotels ensures every stay is memorable.
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative w-full py-2"
          style={{ perspective: "1300px" }}
        >
          <div
            className="relative w-full h-[360px] sm:h-[420px] md:h-[470px] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* LEFT CARD (tilted 3D inwards, recessed into background) */}
            <div
              onClick={handlePrev}
              style={{
                transform: "translateX(-52%) scale(0.86) rotateY(26deg)",
                transformOrigin: "right center",
              }}
              className="absolute left-[6%] sm:left-[10%] md:left-[14%] w-[80%] sm:w-[58%] md:w-[42%] lg:w-[35%] h-[340px] sm:h-[400px] md:h-[450px] overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out z-10 group"
            >
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={prevHotel.image}
                  alt={prevHotel.name}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />

                {/* Subtle dark tint */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Bare White Left Arrow on the inner side */}
                <div className="absolute top-1/2 right-6 sm:right-8 -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
                </div>

                {/* Card Title & View More Button */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-4 z-20">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-3">
                    {prevHotel.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectHotel(prevHotel);
                    }}
                    className="bg-[#E2E8F0] hover:bg-white text-[#1e293b] hover:text-[#0C64AB] font-semibold text-xs sm:text-sm px-6 py-2 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer font-poppins"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>

            {/* ACTIVE CENTER CARD (flat, front-facing, full clarity) */}
            <div
              style={{
                transform: "translateX(0) scale(1) rotateY(0deg) translateZ(40px)",
              }}
              className="relative w-[85%] sm:w-[60%] md:w-[45%] lg:w-[38%] h-[360px] sm:h-[420px] md:h-[470px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out z-30 group"
            >
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={activeHotel.image}
                  alt={activeHotel.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                />

                {/* Gradient overlay at bottom for high text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Card Title & View More Button */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-6 z-20">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mb-3">
                    {activeHotel.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectHotel(activeHotel)}
                      className="bg-white hover:bg-slate-100 text-[#0C64AB] font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer font-poppins"
                    >
                      View More
                    </button>
                    <Link
                      href={`/${activeHotel.slug}`}
                      className="bg-[#0C64AB]/90 hover:bg-[#0C64AB] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105 font-poppins"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD (tilted 3D inwards, recessed into background) */}
            <div
              onClick={handleNext}
              style={{
                transform: "translateX(52%) scale(0.86) rotateY(-26deg)",
                transformOrigin: "left center",
              }}
              className="absolute right-[6%] sm:right-[10%] md:right-[14%] w-[80%] sm:w-[58%] md:w-[42%] lg:w-[35%] h-[340px] sm:h-[400px] md:h-[450px] overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out z-10 group"
            >
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={nextHotel.image}
                  alt={nextHotel.name}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />

                {/* Subtle dark tint */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Bare White Right Arrow on the inner side */}
                <div className="absolute top-1/2 left-6 sm:left-8 -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </div>

                {/* Card Title & View More Button */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-center px-4 z-20">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-3">
                    {nextHotel.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectHotel(nextHotel);
                    }}
                    className="bg-[#E2E8F0] hover:bg-white text-[#1e293b] hover:text-[#0C64AB] font-semibold text-xs sm:text-sm px-6 py-2 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer font-poppins"
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
                    ? "w-8 h-2 bg-[#38bdf8]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to ${hotel.name}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
