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
  BedDouble,
  Tv,
  Coffee,
  Sparkles,
  Wifi,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Laptop,
} from "lucide-react";

// Study Desk SVG Icon matching huge-study-desk
function WorkDeskIcon({ className = "w-6 h-6 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Desk top */}
      <path d="M3 8h18" />
      {/* Desk surface slab */}
      <rect x="3" y="8" width="18" height="3" rx="0.5" />
      {/* Left leg */}
      <path d="M5 11v9" />
      {/* Right leg */}
      <path d="M19 11v9" />
      {/* Drawers on right */}
      <path d="M14 11v9" />
      <path d="M14 15h5" />
      {/* Laptop / Monitor on desk */}
      <path d="M8 8V5h5v3" />
    </svg>
  );
}

// Cup Coffee Icon matching hm-cup-coffee
function CoffeeCupIcon({ className = "w-6 h-6 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

// Bathtub Toiletries Icon matching huge-bathtub-02
function ToiletriesIcon({ className = "w-6 h-6 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z" />
      <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </svg>
  );
}

const ROOM_FEATURES = [
  {
    icon: WorkDeskIcon,
    title: "Work Desk",
  },
  {
    icon: BedDouble,
    title: "King / Twin Bed",
  },
  {
    icon: Tv,
    title: "LED TV",
  },
  {
    icon: CoffeeCupIcon,
    title: "Tea & Coffee Maker",
  },
  {
    icon: ToiletriesIcon,
    title: "Premium Toiletries",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/ITH-0371.webp",
    alt: "Imperial Tamanna Executive Room Modern Bathroom",
  },
  {
    src: "/images/site/ITH-0381.webp",
    alt: "Imperial Tamanna Executive Room Bedroom View",
  },
  {
    src: "/images/site/ITH-0401.webp",
    alt: "Imperial Tamanna Executive Room Double Bed",
  },
  {
    src: "/images/site/ITH-0411.webp",
    alt: "Imperial Tamanna Executive Room Crisp Bedding",
  },
  {
    src: "/images/site/ITH-0421.webp",
    alt: "Imperial Tamanna Executive Room Bed and Window",
  },
  {
    src: "/images/site/ITH-0431.webp",
    alt: "Imperial Tamanna Executive Room Vanity Table and Mirror",
  },
  {
    src: "/images/site/ITH-0441.webp",
    alt: "Imperial Tamanna Executive Room Hallway and Wardrobe",
  },
  {
    src: "/images/site/ITH-0451.webp",
    alt: "Imperial Tamanna Executive Room Attached Bathroom",
  },
  {
    src: "/images/site/ITH-0461.webp",
    alt: "Imperial Tamanna Executive Room Luxury Guest Toiletries",
  },
  {
    src: "/images/site/ITH-0521.webp",
    alt: "Imperial Tamanna Executive Room In-Room Mini Fridge",
  },
  {
    src: "/images/site/ITH-070.webp",
    alt: "Imperial Tamanna Executive Room Twin Beds Setup",
  },
  {
    src: "/images/site/ITH-057.webp",
    alt: "Imperial Tamanna Executive Room Tea and Coffee Station",
  },
  {
    src: "/images/site/ITH-058.webp",
    alt: "Imperial Tamanna Executive Room Twin Beds Daytime",
  },
  {
    src: "/images/site/ITH-060.webp",
    alt: "Imperial Tamanna Executive Room Twin Bed Comfort",
  },
  {
    src: "/images/site/ITH-062.webp",
    alt: "Imperial Tamanna Executive Room Work Desk and Lamp",
  },
  {
    src: "/images/site/ITH-063.webp",
    alt: "Imperial Tamanna Executive Room Contemporary Bathroom",
  },
  {
    src: "/images/site/ITH-069.webp",
    alt: "Imperial Tamanna Executive Room Shower Area",
  },
];

export default function ImperialExecutiveRoomTemplate() {
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

      {/* 2. NAVBAR with Imperial Tamanna Hotel Logo matching Screenshot */}
      <Navbar
        logoSrc="/images/site/61.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER matching Image 2 */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/ITH-060.webp')",
        }}
      />

      {/* 4. MAIN CONTENT: Left Column (60%) + Right Non-Sticky Card (40%) matching Image 3 */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left Column (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col">
              {/* Feature Bed Photo matching Image 3 (500px height) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/ITH-0391.webp"
                  alt="Imperial Tamanna Hotel Executive Room"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: EXECUTIVE ROOM (Bebas Neue with dual blue color matching Image 3) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>EXECUTIVE </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
              </h1>

              {/* 5-Star Rating matching Image 3 */}
              <div className="flex items-center gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Paragraph 1 matching Image 3 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5">
                Experience A Perfect Combination Of Comfort, Style, And Convenience In Our Thoughtfully Designed Executive Rooms. Created To Cater To The Needs Of Both Business And Leisure Travelers, These Rooms Offer A Welcoming Atmosphere Where Guests Can Relax, Work, And Enjoy A Comfortable Stay. With Contemporary Interiors, Elegant Furnishings, And Modern Amenities, The Executive Room Provides An Ideal Setting For Travelers Seeking Quality Accommodation And Exceptional Value.
              </p>

              {/* Paragraph 2 matching Image 3 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                Designed With Attention To Detail, The Room Features A Spacious Layout That Maximizes Comfort And Functionality. The Tasteful Décor, Soothing Color Palette, And Carefully Selected Furnishings Create A Warm And Inviting Ambience, Allowing Guests To Unwind After A Busy Day Of Meetings, Sightseeing, Or Travel. Large Windows Allow Ample Natural Light To Brighten The Room, Creating A Refreshing And Pleasant Environment Throughout The Day.
              </p>

              {/* ROOM FEATURE Heading matching Image 3 */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 6 Feature Boxes matching Image 3 (3 columns, rounded-[2px], border) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {ROOM_FEATURES.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2E2E2] rounded-[2px] px-5 sm:px-6 py-4 flex items-center gap-4 h-[72px] sm:h-[76px] transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[#0C64AB] shrink-0" />
                      <div className="font-poppins text-[15px] sm:text-[16px] text-[#1A1B1A] font-medium leading-[1.3]">
                        {feat.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subsequent Paragraphs matching Image 3 */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  The Executive Room Is Furnished With A Comfortable King-Size Or Twin Bed, Complete With Premium Bedding And Soft Linens To Ensure A Restful Night&apos;s Sleep. Whether You Are Staying For A Single Night Or An Extended Visit, The Room Is Designed To Provide The Comfort And Relaxation Needed For A Rejuvenating Experience. A Dedicated Work Desk And Ergonomic Seating Area Make It Easy For Business Travelers To Stay Productive, Attend Virtual Meetings, Or Complete Important Tasks In A Comfortable Setting.
                </p>
                <p>
                  Modern Conveniences Are Seamlessly Integrated Into The Room To Enhance The Guest Experience. Complimentary High-Speed Wi-Fi Allows Guests To Remain Connected At All Times, While The LED Television Offers A Variety Of Entertainment Options For Relaxation During Leisure Hours. Tea And Coffee-Making Facilities Are Thoughtfully Provided, Enabling Guests To Enjoy A Refreshing Beverage Whenever They Desire. Efficient Air-Conditioning Ensures A Comfortable Temperature Throughout The Year, Regardless Of The Season.
                </p>
                <p>
                  The Attached Bathroom Is Elegantly Designed With Modern Fittings And Quality Amenities To Provide Maximum Comfort And Convenience. Guests Can Enjoy A Refreshing Shower, Premium Toiletries, Fresh Towels, And A Continuous Supply Of Hot And Cold Water. The Bathroom&apos;s Clean And Contemporary Design Complements The Overall Sophistication Of The Room.
                </p>
                <p>
                  Our Executive Rooms Are Ideal For Corporate Travelers Attending Meetings In Pune&apos;s Industrial And Business Hubs, As Well As Families And Leisure Guests Looking For A Comfortable And Convenient Stay. Combined With The Hotel&apos;s Excellent Hospitality, Room Service Dining Facilities, And Strategic Location, The Executive Room Offers Everything Required For A Memorable Visit.
                </p>
                <p>
                  Whether You Are Travelling For Business, Attending An Event, Or Enjoying A Short Getaway, Our Executive Rooms Provide The Perfect Balance Of Luxury, Practicality, And Affordability. Every Element Has Been Carefully Considered To Ensure Guests Enjoy A Relaxing, Productive, And Enjoyable Stay Experience From Check-In To Departure.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching Image 3 (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="tel:7028884375"
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
                    <div className="font-normal text-white">70288 84375</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Non-Sticky Booking Card fixed beside the image matching Image 3 */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-[#F8F9FA] p-8 sm:p-10 text-center rounded-[4px] flex flex-col items-center justify-center border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
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

                {/* Action Button */}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center justify-center bg-[#0C64AB] hover:bg-[#084572] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION matching Image 4 (17 Images on Navy Wave Background) */}
      <section
        className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
        }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid (3 columns, 17 images matching Image 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden rounded-none shadow-md cursor-pointer aspect-[4/3] bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center "
                />

                {/* Light Black Hover Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER matching Image 5 */}
      <Footer
        logoSrc="/images/site/61.png"
        customTagline="The Imperial Tamanna Hotel Enjoys A Strategic Location Placing Guests In The Center Of One Of Pune Most Important Industrial And Commercial Corridors."
        customPhone="70288 84375"
        customEmail="imperial@tamannahotels.com"
        customRoomBookingPhone="70288 84375"
        customBanquetBookingPhone="70288 84317 / 70288 84371"
      />

      {/* 7. Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={GALLERY_IMAGES[activeLightboxIndex].src}
                alt={GALLERY_IMAGES[activeLightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-white/90 text-sm font-poppins text-center">
              {GALLERY_IMAGES[activeLightboxIndex].alt}
            </p>
          </div>
        </div>
      )}

      {/* 8. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

