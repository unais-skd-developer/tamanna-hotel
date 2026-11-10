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
  BedDouble,
  Tv,
  Clock,
  Package,
  Wifi,
  Phone,
  Hotel,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const ROOM_FEATURES = [
  {
    icon: Sparkles,
    label: "Designed In Light Hues",
  },
  {
    icon: BedDouble,
    label: "Double Bed",
  },
  {
    icon: Tv,
    label: "LED TV",
  },
  {
    icon: Clock,
    label: "24-Hour Room Service",
  },
  {
    icon: Package,
    label: "Mini Fridge",
  },
  {
    icon: Wifi,
    label: "Free Leased Line Wi-Fi",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/Executive-Room-3.jpg",
    alt: "Standard Room near Hinjawadi Pune",
  },
  {
    src: "/images/site/Executive-Room1-2.jpg",
    alt: "best Standard Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/Executive-Room2.jpg",
    alt: "top Shree Inn by Tamanna Hotel in Hinjawadi Pune",
  },
  {
    src: "/images/site/PHOTO-2022-03-24-13-23-35.webp",
    alt: "Standard Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/Executive-Room3.jpg",
    alt: "top Standard Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-32.webp",
    alt: "Executive Room Shree Inn",
  },
];

export default function ShreeInnExecutiveRoomTemplate() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const showNext = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
    );
  }, []);

  const showPrev = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. TopBar */}
      <TopBar />

      {/* 2. Navbar with Shree Inn Logo */}
      <Navbar
        logoSrc="/images/site/shree-in.jpg"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Banner matching Screenshot 2 */}
        <section
          className="relative w-full h-[360px] sm:h-[480px] md:h-[560px] lg:h-[650px] bg-cover bg-center bg-no-repeat overflow-hidden select-none"
          style={{
            backgroundImage: "url('/images/site/Executive-Room1-4-scaled.jpg')",
          }}
        >
          {/* Subtle overlay for clean contrast */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </section>

        {/* 4. Main Two-Column Room Details Section matching Screenshot 1 & 3 */}
        <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Left Column: Room Overview (approx 65% width) */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Main Room Showcase Image */}
                <div className="relative w-full h-[340px] sm:h-[440px] md:h-[490px] lg:h-[520px] overflow-hidden rounded-[4px] shadow-sm mb-6 bg-slate-100">
                  <Image
                    src="/images/site/Executive-Room3.jpg"
                    alt="Standard Room in Hinjawadi Pune - Shree Inn"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 850px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Heading: EXECUTIVE Room */}
                <h1
                  className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[75px] uppercase font-normal leading-[1.05] tracking-[-1.5px] select-none text-left"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  <span style={{ color: "#0C64AB91", fontWeight: 400 }}>EXECUTIVE </span>
                  <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
                </h1>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-1.5 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD200] text-[#FFD200]" />
                  ))}
                </div>

                {/* Intro Paragraphs */}
                <div className="font-poppins text-slate-700 text-sm sm:text-[15px] leading-relaxed space-y-4 mb-8">
                  <p>
                    If you&apos;re seeking a clean, comfortable, and budget-friendly accommodation option in the heart of Pune&apos;s IT hub, the Executive Rooms at Shree Inn by Tamanna are your perfect choice. Designed to meet the basic needs of both business and leisure travelers, these rooms offer all the essentials for a pleasant stay, making them a top-rated standard room in Hinjawadi Pune.
                  </p>
                  <p>
                    Each executive room is thoughtfully arranged with a cozy double bed, LED TV, 24-hour room service, high-speed Wi-Fi, and air-conditioning. The interiors are styled with light hues and functional furniture, creating a relaxing space to unwind after a long day of work or travel. The attached bathroom is clean, well-maintained, and equipped with 24/7 hot water to ensure your convenience throughout the day.
                  </p>
                </div>

                {/* Section Title: ROOM FEATURE */}
                <h2
                  className="font-bebas text-2xl sm:text-3xl uppercase tracking-[1px] text-[#0C64AB] font-normal mb-4"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  ROOM FEATURE
                </h2>

                {/* 6 Room Feature Boxes (3 columns on desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {ROOM_FEATURES.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="border border-[#E2E2E2] rounded px-4 py-3 flex items-center gap-3 bg-white hover:border-[#0C64AB] hover:shadow-sm transition-all"
                      >
                        <Icon className="w-5 h-5 text-[#0C64AB] shrink-0" />
                        <span className="font-poppins text-xs sm:text-[14px] text-black font-normal">
                          {feat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Description Paragraphs */}
                <div className="space-y-4 font-poppins text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-8">
                  <p>
                    Whether you&apos;re in town for a quick business meeting or a short family visit, our executive rooms provide everything you need without overcomplicating your experience. The rooms are ideal for solo travelers, couples, or professionals who prefer a standard room in Hinjawadi Pune that is simple yet efficient.
                  </p>
                  <p>
                    Guests also enjoy access to essential hotel services like elevator access, in-house laundry, shoe polish machine, private parking, and a helpful front desk. With its prime location, Shree Inn allows easy access to nearby tech parks, office spaces, and other Tamanna group properties where you can dine, relax, or host events.
                  </p>
                  <p>
                    Cleanliness, safety, and affordability are at the heart of what we offer. Guests consistently choose our executive rooms for short stays where convenience and value matter most. That&apos;s why our accommodations are recognized as a reliable option for anyone looking for a well-maintained standard room in Hinjawadi Pune.
                  </p>
                  <p className="font-medium text-slate-900 pt-2">
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="text-[#0C64AB] font-semibold underline hover:text-[#084572] transition-colors cursor-pointer mr-1.5"
                    >
                      Book your Executive Room
                    </button>
                    at Shree Inn today and experience the comfort of a peaceful stay backed by the trusted hospitality of Tamanna Hotels, where your satisfaction is our priority.
                  </p>
                </div>

                {/* Booking Call Bar Button */}
                <div className="mt-2">
                  <a
                    href="tel:02066935000"
                    className="inline-flex items-center gap-3.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left font-bebas">
                      <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-normal">
                        BOOKING OF HOTEL ROOMS :
                      </div>
                      <div className="text-sm sm:text-base tracking-[0.8px] font-medium leading-tight">
                        02066935000 / 02066539888 / 02066751900
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Getaway Card (stays at the top beside the image) */}
              <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
                <div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg py-10 px-6 sm:px-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    {/* Blue Hotel/Building SVG Icon matching Image 2 & Elementor */}
                    <div className="flex justify-center mb-3">
                      <svg
                        aria-hidden="true"
                        className="w-12 h-12 text-[#0C64AB]"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bebas text-[24px] sm:text-[26px] text-[#1A1B1A] uppercase tracking-[1px] font-normal leading-tight mb-2.5"
                      style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                    >
                      BOOK YOUR PERFECT GETAWAY NOW!
                    </h3>

                    {/* Subtitle */}
                    <p className="font-poppins text-xs sm:text-[14px] text-[#656565] leading-relaxed max-w-[280px] mx-auto mb-6">
                      Click below to check room availability and book your dream vacation today
                    </p>

                    {/* Book Now Button */}
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bebas text-[17px] tracking-[1px] uppercase transition-all duration-300 shadow hover:shadow-md active:scale-95 cursor-pointer"
                      style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Section: Our Gallery matching Screenshot 3 */}
        <section
          className="w-full py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 6 Photo Grid (3 columns x 2 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative h-60 sm:h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer shadow-lg bg-neutral-900 border border-white/10"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover "
                  />

                  {/* Light Black Hover Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer matching Screenshot 2 with Shree Inn branding */}
      <Footer
        logoSrc="/images/site/shree-in.jpg"
        customPhone="9156832283"
        customEmail="info@tamannahotels.com"
      />

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute top-5 right-5 z-50 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/70 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/70 transition-all cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Active Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] flex items-center justify-center"
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

          {/* Counter indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm font-poppins bg-black/50 px-4 py-1.5 rounded-full">
            {activeLightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

