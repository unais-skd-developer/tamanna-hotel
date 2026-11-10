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
  UtensilsCrossed,
  BedDouble,
  Tv,
  Clock,
  Apple,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const ROOM_FEATURES = [
  {
    icon: Hotel,
    title: "Well Furnished Rooms",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Equipment's",
  },
  {
    icon: BedDouble,
    title: "Double Bed",
  },
  {
    icon: Tv,
    title: "LED TV",
  },
  {
    icon: Clock,
    title: "24-Hour Room Service",
  },
  {
    icon: Apple,
    title: "Fruit Basket",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/bizz-apartment-gal-1.webp",
    alt: "Bizz Tamanna Apartment Room with Work Table and Swan Towels",
    caption: "Spacious Double Bed with Contemporary Wooden Headboard, Table, and Chairs",
  },
  {
    src: "/images/site/bizz-apartment-gal-2.webp",
    alt: "Bizz Tamanna Apartment Room Overhead Window Perspective",
    caption: "High Angle View of Apartment Room with Workspace, AC, and Natural Lighting",
  },
  {
    src: "/images/site/bizz-apartment-gal-3.webp",
    alt: "Bizz Tamanna Apartment Room Fully Equipped Kitchenette",
    caption: "Modern In-Room Kitchenette with Sleek Countertop, Induction, Microwave, and Cabinetry",
  },
];

export default function BizzApartmentRoomTemplate() {
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

      {/* 2. NAVBAR with Bizz Tamanna Hotel Logo matching Image 2 */}
      <Navbar
        logoSrc="/images/site/9-2-1.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER matching Image 2 */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-[center_bottom] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/bizz-apartment-hero.webp')",
        }}
      />

      {/* 4. MAIN CONTENT: Left Column (60%) + Right Non-Sticky Card (40%) matching Image 3 & 4 */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            
            {/* Left Column (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col">
              
              {/* Feature Bed Photo matching Image 3 & 4 (500px height) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/bizz-apartment-overview.webp"
                  alt="Best Hotel room for Stay near Hinjawadi Pune - Bizz Apartment Room"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: APARTMENT ROOM (Bebas Neue with dual blue color matching Image 3) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>APARTMENT </span>
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
                For Guests Who Value Space, Independence, And Home-Like Convenience, The Apartment Rooms With Kitchen At Bizz Tamanna Are The Perfect Solution. Thoughtfully Designed For Long Stays, Families, And Corporate Travelers, These Rooms Offer Everything You Need For A Relaxed And Self-Sufficient Experience. It&apos;s No Surprise They&apos;re Considered Among The Best Hotel Room For Stay In Hinjawadi Pune.
              </p>

              {/* Paragraph 2 matching Image 3 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                Each Apartment Room Features A Well-Furnished Bedroom With A Double Bed, LED Television, Air-Conditioning, And Ample Storage Space. What Truly Sets These Rooms Apart Is The Fully Equipped Kitchenette, Complete With Essential Kitchen Equipment For Preparing Meals At Your Own Pace. Whether You&apos;re Staying For A Week Or A Month, You&apos;ll Enjoy The Comfort Of Cooking Your Favorite Dishes Just The Way You Like Them.
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
                      className="bg-white border border-[#E2E2E2] rounded-[2px] px-5 sm:px-6 py-4 flex items-center gap-4 h-[84px] sm:h-[88px] transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[#0C64AB] shrink-0" strokeWidth={1.75} />
                      <div className="font-poppins text-[15px] sm:text-[16px] text-[#1A1B1A] font-medium leading-[1.3]">
                        {feat.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subsequent Paragraphs matching Image 3 & 4 */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  Guests Also Receive Added Amenities Such As 24-Hour Room Service, Complimentary Wi-Fi, Daily Housekeeping, And Laundry Services, Making The Stay Effortless And Convenient. A Fruit Basket Is Provided As A Welcome Gesture, And Round-The-Clock Staff Support Ensures All Your Needs Are Taken Care Of.
                </p>
                <p>
                  The Apartment Rooms Are Part Of Bizz Tamanna, Strategically Located In The Hinjawadi IT Hub, Close To Major Tech Parks, Offices, And Dining Spots. This Makes It Ideal For Professionals Working On Long Projects Or Families Visiting Pune For Extended Durations. With Additional Access To Conference Halls, Banquet Venues, And Rooftop Event Spaces, Guests Can Also Combine Work And Social Functions With Ease.
                </p>
                <p>
                  Staying In A Hotel Doesn&apos;t Have To Feel Temporary. Our Apartment-Style Accommodations Offer Privacy, Functionality, And Warmth, Redefining What A Hotel Stay Can Be. These Rooms Are A Top Choice For Anyone Seeking The Best Hotel Room For Stay In Hinjawadi Pune That Blends The Freedom Of Home With The Luxury Of Hotel Services.
                </p>
                <p>
                  <strong className="text-[#0C64AB] font-bold">Book Now</strong> And Enjoy The Best Hotel Room For Stay In Hinjawadi Pune, Where Flexibility, Comfort, And Value Come Together Under One Roof.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching Image 3 & 4 (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="tel:02066935000"
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

            {/* Right Column: Non-Sticky Booking Card fixed beside the image matching Image 3 & 4 */}
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

      {/* 5. GALLERY SECTION matching Image 4 (3 Images on Navy Wave Background) */}
      <section
        className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/bliss-gallery-bg.webp')",
        }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid (3 columns, 3 images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
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
        logoSrc="/images/site/9-2-1.png"
        customPhone="02066539888 / 7058688563"
        customEmail="info@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
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
                priority
              />
            </div>
            <div className="mt-4 text-center text-white/90">
              <p className="text-sm sm:text-base font-medium">
                {GALLERY_IMAGES[activeLightboxIndex].caption}
              </p>
              <p className="text-xs text-white/60 mt-1">
                {activeLightboxIndex + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
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

