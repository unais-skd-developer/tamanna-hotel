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
  Sparkles,
  Bed,
  Tv,
  Clock,
  Wifi,
  Apple,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ROOM_FEATURES = [
  {
    icon: Sparkles,
    line1: "Lavish &",
    line2: "Well Spread",
  },
  {
    icon: Bed,
    line1: "King Size Bed",
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
    icon: Wifi,
    line1: "Free Wi-Fi",
    line2: "",
  },
  {
    icon: Apple,
    line1: "Fruit Basket",
    line2: "",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/Exec.webp",
    alt: "Executive Tamanna Hotel Luxury Room",
  },
  {
    src: "/images/site/unnamed-23.webp",
    alt: "Top Hotel with Luxury Rooms in Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-24.webp",
    alt: "Executive Tamanna Hotel near Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-25.webp",
    alt: "Luxury Room Interior Executive Tamanna",
  },
  {
    src: "/images/site/unnamed-26.webp",
    alt: "Best Hotel Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-27.webp",
    alt: "Luxury Room Bedding Executive Tamanna",
  },
  {
    src: "/images/site/unnamed-28.webp",
    alt: "Executive Tamanna Luxury Room Setup",
  },
  {
    src: "/images/site/unnamed-29.webp",
    alt: "Executive Tamanna Guest Room",
  },
  {
    src: "/images/site/unnamed-30.webp",
    alt: "Executive Tamanna Modern Suite",
  },
];

export default function ExecutiveLuxuryRoomTemplate() {
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

      {/* 3. HERO IMAGE BANNER */}
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
                  src="/images/site/unnamed-23.webp"
                  alt="Top Hotel with Luxury Rooms in Hinjawadi Pune - Executive Tamanna Hotel"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: LUXURY ROOM */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>LUXURY </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
              </h1>

              {/* 5-Star Rating */}
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
                  Step into a world of refined elegance and elevated comfort with the Luxury Rooms at Executive Tamanna,
                  designed for guests who appreciate the finer things in life. These rooms offer more than just a place to
                  stay, they provide an experience of calm sophistication, making Executive Tamanna a top hotel with luxury
                  rooms in Hinjawadi Pune.
                </p>
                <p>
                  Each luxury room is generously spaced and thoughtfully designed with plush interiors, a king-size bed,
                  ambient lighting, and tasteful decor that creates a serene environment for rest and relaxation. The rooms
                  feature premium amenities, including an LED TV, air conditioning, complimentary high-speed Wi-Fi, and
                  24-hour room service. As an added gesture of hospitality, guests are welcomed with a fruit basket on arrival.
                </p>
              </div>

              {/* ROOM FEATURE Heading */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 6 Feature Boxes (3 columns, equal height) */}
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
                  Perfect for both business and leisure travelers, the Luxury Rooms combine functionality and indulgence.
                  Whether you’re attending meetings or enjoying a weekend escape, this space offers the ideal balance of
                  comfort and convenience. The bathroom is equipped with modern fittings, continuous hot water, and a clean,
                  refreshing ambiance that enhances your stay.
                </p>
                <p>
                  Located in one of Pune’s most connected neighborhoods, Executive Tamanna is recognized as a top hotel with
                  luxury rooms in Hinjawadi Pune for its consistent quality and customer satisfaction. The hotel also provides
                  easy access to a multi-cuisine restaurant, a South Indian café, and the Daily Baker outlet for a range of
                  dining experiences.
                </p>
                <p>
                  For events and gatherings, guests can make use of the in-house Maple and Oak banquet halls, making Executive
                  Tamanna a complete hospitality destination. Additional conveniences like in-house laundry, elevator access,
                  a travel desk, and private parking enhance the overall guest experience.
                </p>
                <p>
                  If you’re looking for a blend of luxury, convenience, and warm hospitality, the Luxury Rooms at Executive
                  Tamanna stand out as the perfect choice.{" "}
                  <a
                    href="https://bookings.resavenue.com/resBooking/search?regCode=ICAV0619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0C64AB] font-medium hover:underline"
                  >
                    Discover why
                  </a>{" "}
                  guests consider it a top hotel with luxury rooms in Hinjawadi Pune, where every stay is wrapped in comfort
                  and care.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching screenshot */}
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

            {/* Right Column: Static Booking Card */}
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

      {/* 5. NINE-IMAGE PHOTO GALLERY on Deep Navy Background matching Image 3 */}
      <section
        className="w-full py-[70px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden shadow-xl cursor-pointer bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, 33vw"
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

