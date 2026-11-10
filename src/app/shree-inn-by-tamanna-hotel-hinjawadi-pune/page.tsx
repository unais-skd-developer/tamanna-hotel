"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import BannerVideo from "@/components/BannerVideo";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Star of Life 6-pointed icon matching live Elementor markup
function StarOfLifeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 480 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z" />
    </svg>
  );
}

const GALLERY_IMAGES = [
  {
    src: "/images/site/Exterior-1.jpg",
    alt: "Shree Inn by Tamanna Hotel in Hinjawadi Pune",
  },
  {
    src: "/images/site/Reception-2.jpg",
    alt: "best Shree Inn by Tamanna Hotel in Hinjawadi Pune",
  },
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
    src: "/images/site/PHOTO-2022-03-24-13-23-35-300x225.webp",
    alt: "Standard Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/Executive-Room3.jpg",
    alt: "top Standard Room in Hinjawadi Pune",
  },
  {
    src: "/images/site/PHOTO-2022-03-24-13-23-36-300x225.webp",
    alt: "top Shree Inn by Tamanna Hotel in Hinjawadi Pune",
  },
  {
    src: "/images/site/PHOTO-2022-03-24-13-23-36-1-300x225.webp",
    alt: "top Shree Inn by Tamanna Hotel near Hinjawadi Pune",
  },
];

const AMENITIES_COL_1 = [
  "Sixteen 200 sq ft Executive Rooms",
  "Room Service",
  "PC & Printer",
  "Shoe Polish Machine",
  "Elevator",
];

const AMENITIES_COL_2 = [
  "Private Vehicle parking place",
  "Free High Speed Wi-fi",
  "Roof Top Party Venue",
  "In-House Laundry Services",
  "Free High Speed Wi-fi",
];

export default function ShreeInnPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar with Shree Inn Logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc="/images/site/shree-inn-logo.png"
      />

      {/* 3. Hero Video Banner with YouTube Video */}
      <section className="relative w-full overflow-hidden bg-black select-none">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[460px] lg:h-[580px] overflow-hidden">
          <BannerVideo
            videoId="5wLmHWC0hZ8"
            title="Shree Inn by Tamanna Hotel"
            fallbackImage="/images/site/Exterior-1.jpg"
            priority
            className="w-full h-full"
          />

          {/* Soft dark vignette */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none z-20" />
        </div>
      </section>

      {/* 4. Section: Overview (Exact match to reference image 2) */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-6">
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[95px] uppercase leading-[0.88] sm:leading-[88px] tracking-[-2.5px] sm:tracking-[-3.8px] text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                SHREE INN BY TAMANNA
                <br />
                <span className="text-[#0C64AB] tracking-[-2.5px] sm:tracking-[-3.8px]">HOTEL</span>
              </h2>
            </div>
            {/* Right Column: Description */}
            <div className="lg:col-span-6 pt-1 sm:pt-2">
              <p className="text-[#666666] text-sm sm:text-[15px] leading-[26px] sm:leading-[28px] font-normal text-left max-w-xl">
                Shree Inn By Tamanna Hotel In Hinjawadi Pune Is A Well-Planned, Value-Based Property Catering To Business Travelers, Short-Stay Guests, And Individuals Looking For Essential Comfort At An Affordable Price. Located In The Heart Of The City&apos;s Thriving IT And Commercial Hub, Shree Inn Offers A Smart Stay Option Without Compromising On Quality Or Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Hotel Amenities (Placed Above Rooms for Shree Inn) */}
      <section className="relative w-full bg-[#021b3b] text-white py-14 sm:py-20 overflow-hidden">
        {/* Subtle decorative concentric rings matching Elementor layout */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] border border-blue-400 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] sm:w-[1100px] sm:h-[550px] border border-blue-400 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] sm:w-[1400px] sm:h-[700px] border border-blue-400 rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-white text-center mb-10 sm:mb-14"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Hotel <span className="text-[#0C64AB] font-medium">AMENITIES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 sm:gap-x-16 max-w-4xl mx-auto">
            {/* Column 1 */}
            <div className="space-y-4">
              {AMENITIES_COL_1.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm sm:text-base font-medium text-gray-200">
                  <StarOfLifeIcon className="w-4 h-4 text-[#207ecc] flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {AMENITIES_COL_2.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm sm:text-base font-medium text-gray-200">
                  <StarOfLifeIcon className="w-4 h-4 text-[#207ecc] flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Rooms for Everyone (Single Centered Room Card) */}
      <section className="w-full bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-6 text-center"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Rooms for <span className="text-[#0C64AB] font-medium">Everyone</span>
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-center">
              The Hotel Features 16 Neatly Designed Executive Rooms, Equipped With A Double Bed, LED TV, 24-Hour Room Service, High-Speed Wi-Fi, And A Clean, Modern Bathroom. Each Room Is Air-Conditioned And Styled With Soothing Colors To Promote Rest And Relaxation. Whether You&apos;re Visiting Pune For A Business Trip Or A Brief Stopover, The Rooms At Shree Inn Provide The Perfect Blend Of Simplicity And Functionality.
            </p>
          </div>

          {/* Single Centered Room Card with Chico Hover Effect */}
          <div className="max-w-xl mx-auto">
            <Link
              href="/standard-room-hinjawadi-pune"
              className="group relative block overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
            >
              <Image
                src="/images/site/Executive-Room2-scaled.jpg"
                alt="EXECUTIVE ROOMS"
                fill
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Hover blue wash overlay */}
              <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Hover thin white inset frame */}
              <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

              {/* Centered Room Label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <h3
                  className="font-bebas text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-[1px] uppercase text-center drop-shadow-md"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  EXECUTIVE ROOMS
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Section: Our Gallery */}
      <section className="w-full bg-[#f4f7fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] text-center mb-8 sm:mb-12"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Our <span className="text-[#0C64AB] font-medium">Gallery</span>
          </h2>

          {/* 3x3 Grid of 9 photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden rounded-sm shadow-sm cursor-pointer aspect-[4/3] bg-neutral-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
            aria-label="Close image"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Active Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[activeLightboxIndex].src}
              alt={GALLERY_IMAGES[activeLightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* 8. Footer */}
      <Footer
        logoSrc="/images/site/shree-inn-logo.png"
        activeLink="Shree Inn By Tamanna"
        customPhone="9156832283"
        customEmail="info@tamannahotels.com"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Shree Inn by Tamanna Hotel"
      />
    </div>
  );
}
