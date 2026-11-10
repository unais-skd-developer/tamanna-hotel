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
  Sparkles,
  Refrigerator,
  Bath,
  Coffee,
  Wifi,
  Apple,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SUITE_FEATURES = [
  {
    icon: Hotel,
    line1: "450 Sq Ft Well",
    line2: "Furnished Room",
  },
  {
    icon: Sparkles,
    line1: "Carpeted Flooring",
    line2: "",
  },
  {
    icon: Refrigerator,
    line1: "Mini Fridge",
    line2: "",
  },
  {
    icon: Bath,
    line1: "Bath Tub",
    line2: "",
  },
  {
    icon: Coffee,
    line1: "Complimentary",
    line2: "Breakfast",
  },
  {
    icon: Wifi,
    line1: "Free Leased Line",
    line2: "Wi-Fi",
  },
  {
    icon: Apple,
    line1: "Fruit Basket",
    line2: "",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/Suite-Room.webp",
    alt: "Suite Hotel Room near Hinjawadi Pune",
  },
  {
    src: "/images/site/Suite-Room1.webp",
    alt: "Suite Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/Suite-Room2.webp",
    alt: "Suite Room near Hinjawadi Pune",
  },
  {
    src: "/images/site/Suite-Room3-scaled.webp",
    alt: "Grand Tamanna Suite Living Area",
  },
  {
    src: "/images/site/Suite-Room4-scaled.webp",
    alt: "Grand Tamanna Suite Vanity Bathroom",
  },
  {
    src: "/images/site/Suite-Room6-scaled.webp",
    alt: "Grand Tamanna Suite Glass Shower Bathroom",
  },
  {
    src: "/images/site/Suite-Room-Bathtub.webp",
    alt: "Grand Tamanna Suite Luxury Bathtub",
  },
];

export default function SuiteRoomTemplate() {
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

      {/* 2. NAVBAR with Grand Tamanna Logo */}
      <Navbar
        logoSrc="/images/site/5-3-1.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER (min-height: 70vh matching Image 2) */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/Suite-Room-1-scaled.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* 4. MAIN CONTENT: Left Column (67%) + Right Static Card (33%) matching Image 3 */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left Column */}
            <div className="w-full lg:w-[67%] flex flex-col">
              {/* Feature Bed & Wardrobe Photo (500px height matching live site) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/Suite-Room2.webp"
                  alt="Suite Hotel Room in Hinjawadi Pune - Grand Tamanna"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: SUITE ROOM (95px Bebas Neue with dual blue color matching Image 3) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>SUITE </span>
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
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                Indulge In The Finest Hospitality With Our Premium Suite Hotel Room In Hinjawadi Pune,
                Thoughtfully Curated For Guests Who Seek Spacious Living, Refined Interiors, And Top-Tier
                Amenities. Located Within Grand Tamanna, Our Suite Offers An Elevated Experience Perfect
                For Business Executives, Couples, And Discerning Travelers. Each Suite Spans A Generous 450
                Sq. Ft., Featuring Carpeted Flooring, Elegant Lighting, And Tasteful Décor. Designed To Feel Like
                A Home Away From Home, The Suite Includes A King-Size Bed, Cozy Seating Area, Work Desk,
                Mini Fridge, And Complimentary Fruit Basket To Welcome You. The Luxurious Bathroom Is
                Equipped With A Bathtub, Premium Toiletries, And 24/7 Hot Water Service, Making Relaxation
                Effortless.
              </p>

              {/* ROOM FEATURE Heading matching Image 3 */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 7 Feature Boxes matching Image 3 (3 columns, equal height, rounded-[2px]) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {SUITE_FEATURES.map((feat, idx) => {
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

              {/* Subsequent Paragraphs matching Image 3 */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  Guests Staying In Our Suite Hotel Room In Hinjawadi Pune Enjoy Exclusive Benefits Like
                  Complimentary Breakfast And Leased-Line High-Speed Wi-Fi, Ensuring A Perfect Blend Of
                  Leisure And Business Convenience. Whether You&apos;re Preparing For Meetings Or Simply
                  Unwinding After A Long Day, Our Suite Provides The Ideal Setting For Both Productivity And
                  Peace.
                </p>
                <p>
                  Room Service Is Available 24/7, And Housekeeping Ensures Your Suite Remains Immaculate
                  Throughout Your Stay. You Also Gain Full Access To All Of Grand Tamanna&apos;s Facilities
                  Including The Rooftop Poolside Venue, Multi-Cuisine Restaurant, Gym, Business Center, Travel
                  Desk, And In-House Laundry Services.
                </p>
                <p>
                  The Suite Room Is Not Just About Comfort; It&apos;s About Creating Memorable Experiences.
                  Whether You&apos;re Celebrating A Special Occasion Or Extending A Business Trip, Our Suite Hotel
                  Room In Hinjawadi Pune Ensures That Every Moment Is Marked With Elegance, Warmth, And
                  Unmatched Hospitality.
                </p>
                <p>
                  Choose{" "}
                  <Link
                    href="/hotels-hinjawadi-pune"
                    className="text-[#0C64AB] font-medium hover:underline"
                  >
                    Grand Tamanna
                  </Link>{" "}
                  For A Stay That Exceeds Expectations. Book Your Suite Hotel Room In Hinjawadi Pune Today
                  And Experience Luxury Living With All The Comforts Of Home, Surrounded By The Vibrant Energy
                  Of Pune&apos;s Prime Business District.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching Image 3 (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="https://bookings.resavenue.com/resBooking/search?regCode=ZGZV1026"
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

            {/* Right Column: Static Booking Card matching Image 3 */}
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

      {/* 5. SEVEN-IMAGE PHOTO GALLERY on Deep Navy Background matching Image 3 */}
      <section
        className="w-full py-[70px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden shadow-xl cursor-pointer bg-neutral-900 rounded-[2px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Photo Container */}
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
            <p className="text-white/80 text-sm font-poppins mt-3 text-center">
              {GALLERY_IMAGES[activeLightboxIndex].alt} ({activeLightboxIndex + 1} of{" "}
              {GALLERY_IMAGES.length})
            </p>
          </div>
        </div>
      )}

      {/* 7. FOOTER with Grand Tamanna Logo */}
      <Footer logoSrc="/images/site/5-3-1.png" activeLink="Grand Tamanna" />

      {/* 8. BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

