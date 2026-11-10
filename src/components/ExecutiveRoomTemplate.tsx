"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  Star,
  Hotel,
  Bed,
  Tv,
  Clock,
  Refrigerator,
  Wifi,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ROOM_FEATURES = [
  {
    icon: Hotel,
    line1: "Designed In",
    line2: "Light Hues",
  },
  {
    icon: Bed,
    line1: "Double Bed",
    line2: "",
  },
  {
    icon: Tv,
    line1: "LED TV",
    line2: "",
  },
  {
    icon: Clock,
    line1: "24-Hour Room",
    line2: "Service",
  },
  {
    icon: Refrigerator,
    line1: "Mini Fridge",
    line2: "",
  },
  {
    icon: Wifi,
    line1: "Free Leased Line",
    line2: "Wi-Fi",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/Executive-Room-1-2-scaled.jpg",
    alt: "Best Hotel Room in Hinjawadi Pune - Executive Tamanna",
  },
  {
    src: "/images/site/Executive-Room1-1-scaled.jpg",
    alt: "Executive Tamanna Hotel Room with Swan Towel Decor",
  },
];

export default function ExecutiveRoomTemplate() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const showNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [activeLightboxIndex]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-poppins selection:bg-[#0C64AB] selection:text-white">
      {/* 1. TOP BAR */}
      <TopBar />

      {/* 2. NAVBAR with Executive Tamanna Hotel Logo */}
      <Navbar
        logoSrc="/images/site/4-3-2.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER (Executive Room wide shot) */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/Executive-Room-7-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* 4. MAIN CONTENT: Left Column (67%) + Right Sticky Card (33%) */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left Column */}
            <div className="w-full lg:w-[67%] flex flex-col">
              {/* Feature Bed Photo */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/unnamed-26.webp"
                  alt="Best Hotel Room in Hinjawadi Pune - Executive Tamanna Hotel"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: EXECUTIVE ROOM (95px Bebas Neue with dual blue color matching screenshot) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>EXECUTIVE </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
              </h1>

              {/* 5-Star Rating matching screenshot */}
              <div className="flex items-center gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Intro Paragraphs */}
              <div className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8 space-y-4">
                <p>
                  Discover The Perfect Combination Of Functionality And Comfort With The Executive Rooms At Executive Tamanna,
                  Thoughtfully Designed To Cater To Both Business And Leisure Travelers. Located In Pune&apos;s Thriving IT Hub,
                  These Rooms Offer Convenience, Essential Amenities, And A Peaceful Environment, Everything You Expect
                  From The Best Hotel Room In Hinjawadi Pune.
                </p>
                <p>
                  Each Executive Room Is Furnished With A Cozy Double Bed, LED Television, Air Conditioning, 24-Hour Room Service,
                  And Complimentary High-Speed Wi-Fi. The Room Interiors Are Styled In Soft, Welcoming Tones That Create A
                  Relaxing Atmosphere For Short Or Extended Stays. Whether You&apos;re In Town For Meetings Or Simply Passing
                  Through, These Rooms Are Ideal For A Restful And Productive Visit.
                </p>
              </div>

              {/* ROOM FEATURE Heading */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 6 Feature Boxes (3 columns, equal height, rounded-[2px]) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {ROOM_FEATURES.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2E2E2] rounded-[2px] px-5 sm:px-6 py-4 flex items-center gap-4 h-[84px] sm:h-[88px] transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[#0C64AB] shrink-0" strokeWidth={1.75} />
                      <div className="font-poppins text-[15px] sm:text-[16px] text-[#1A1B1A] font-medium leading-[1.3]">
                        <div>{feat.line1}</div>
                        {feat.line2 ? <div>{feat.line2}</div> : null}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subsequent Paragraphs */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  In Addition To Comfort, Guests Benefit From Easy Access To Executive Tamanna&apos;s In-House Facilities,
                  Including A Multi-Cuisine Restaurant And Bar That Serves Delicious Meals Throughout The Day. For Lighter
                  Fare, The Hotel&apos;s South Indian Caf&eacute; Offers Freshly Made Snacks And Beverages, Perfect For
                  Breakfast Or Evening Tea.
                </p>
                <p>
                  Executive Tamanna Also Offers Two Flexible Banquet And Event Spaces, Maple And Oak, Suitable For Small
                  Gatherings, Training Sessions, Or Private Celebrations. Equipped With Microphones, Projectors, Screens,
                  And Sound Systems, These Venues Provide Everything You Need For A Smooth Event Experience.
                </p>
                <p>
                  Additional Amenities Include Elevator Access, In-House Laundry Services, Private Parking, A Travel Desk,
                  PC And Printer Access, And The Popular Daily Baker Outlet Serving Fresh Bakery Items.
                </p>
                <p>
                  Conveniently Located In Hinjawadi&apos;s Leading IT Parks And Commercial Centers, Executive Tamanna Is
                  An Ideal Choice For Professionals, Solo Travelers, And Families. Its Balance Of Affordability,
                  Cleanliness, And Friendly Service Makes It Stand Out Among Hospitality Options In The Area.
                </p>
                <p>
                  If You&apos;re Searching For The Best Hotel Room In Hinjawadi Pune That Delivers Comfort, Value, And
                  Location, Look No Further Than Executive Tamanna.{" "}
                  <a
                    href="https://bookings.resavenue.com/resBooking/search?regCode=ICAV0619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0C64AB] font-medium hover:underline"
                  >
                    Book Your Stay
                  </a>{" "}
                  Now And Experience Why So Many Guests Consider It The Best Hotel Room In Hinjawadi Pune For Their
                  Travel Needs.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching screenshot (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="https://bookings.resavenue.com/resBooking/search?regCode=ICAV0619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#0C64AB] hover:bg-[#084572] text-white py-3.5 px-6 sm:px-8 rounded-l-[93px] rounded-r-none transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div
                    className="font-bebas text-[18px] sm:text-[20px] uppercase tracking-[1px] leading-tight text-white text-left"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    <div>BOOKING OF HOTEL ROOMS :</div>
                    <div className="font-normal text-white">02066935000/02066539888/02066751900</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Static Booking Card matching user request */}
            <div className="w-full lg:w-[33%]">
              <div className="bg-[#F3F4F8] p-8 text-center rounded-[4px] flex flex-col items-center">
                {/* Blue Hotel Icon */}
                <div className="text-[#0C64AB] mb-4">
                  <Building2 className="w-12 h-12 text-[#0C64AB]" strokeWidth={1.5} />
                </div>

                {/* Card Title */}
                <h3
                  className="font-bebas text-[22px] sm:text-[24px] uppercase tracking-[1px] text-[#1A1B1A] font-normal mb-2"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  BOOK YOUR PERFECT GETAWAY NOW!
                </h3>

                {/* Subtitle */}
                <p className="font-poppins text-slate-500 text-[14px] leading-relaxed mb-6 font-normal max-w-[280px]">
                  Click below to check room availability and book your dream vacation today
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="py-3 px-8 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bebas text-[16px] uppercase tracking-[1px] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TWO-IMAGE PHOTO GALLERY on Deep Navy Background matching Image 3 */}
      <section
        className="w-full py-[70px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden shadow-xl cursor-pointer bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark blue overlay on hover with no text */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX ZOOM MODAL */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Lightbox Image */}
          <div
            className="relative max-w-[90vw] max-h-[82vh] w-full h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[activeLightboxIndex].src}
              alt={GALLERY_IMAGES[activeLightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter badge */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-poppins bg-black/50 px-4 py-1.5 rounded-full">
            {activeLightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}

      {/* 7. FOOTER */}
      <Footer
        logoSrc="/images/site/4-3-2.png"
        activeLink="Executive Tamanna"
        customPhone="02066751900 / 9156828482"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 8. BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Executive Tamanna Hotel"
      />
    </div>
  );
}

