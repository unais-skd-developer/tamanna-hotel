"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import BannerVideo from "@/components/BannerVideo";
import { X } from "lucide-react";

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
    src: "/images/site/Exterior.jpg",
    alt: "Bizz Tamanna Hotel near Hinjawadi Pune",
  },
  {
    src: "/images/site/MG_0356copy-300x168.webp",
    alt: "AC Hotel Rooms in Hinjawadi Pune",
  },
  {
    src: "/images/site/Lobby2-scaled.jpg",
    alt: "Bizz Tamanna Hotel Lobby",
  },
  {
    src: "/images/site/unnamed-16-300x225.webp",
    alt: "Best Hotel room for Stay in Hinjawadi Pune",
  },
  {
    src: "/images/site/Reception-scaled.jpg",
    alt: "Bizz Tamanna Reception",
  },
  {
    src: "/images/site/unnamed-17-300x225.webp",
    alt: "top Bizz Tamanna Hotel near Hinjawadi Pune",
  },
  {
    src: "/images/site/bizz-laurel-300x169.webp",
    alt: "Top Banquet Hall in Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-18-300x225.webp",
    alt: "Bizz Tamanna Executive Bedroom",
  },
  {
    src: "/images/site/highland-300x191.webp",
    alt: "highland in hinjawadi pune",
  },
  {
    src: "/images/site/unnamed-22-300x200.webp",
    alt: "Bizz Tamanna Guest Room",
  },
  {
    src: "/images/site/unnamed-21-300x225.webp",
    alt: "best AC Rooms in Hinjawadi Pune",
  },
  {
    src: "/images/site/Apartment-Room1-1-1-scaled.jpg",
    alt: "Bizz Tamanna Apartment Room",
  },
];

const AMENITIES_COL_1 = [
  "Thirty One 200 Sq Ft Executive Rooms",
  "Two Apartment Rooms With Kitchen",
  "Room Service With Liquor",
  "GYM, Business Center With Internet Connectivity",
  "PC, Printer And Fax Machine",
  "Shoe Polish Machine",
];

const AMENITIES_COL_2 = [
  "Elevator, Gift Shop, Conference Room",
  "Private Vehicle Parking Place",
  "Roof Top Party Venue",
  "In-House Laundry Services",
  "Free High Speed Wi-Fi",
  "Office Pickup & Drop",
];

export default function BizzTamannaPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar with Bizz Tamanna Hotel Logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc="/images/site/9-2-1.png"
      />

      {/* 3. Hero Video Banner with Building video */}
      <section className="relative w-full overflow-hidden bg-black select-none">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[460px] lg:h-[580px] overflow-hidden">
          <BannerVideo
            videoId="mYhQOwZbsdo"
            title="Bizz Tamanna Hotel"
            fallbackImage="/images/site/bizz-r.webp"
            priority
            className="w-full h-full"
          />

          {/* Soft vignette side shadows */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-black/35 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-black/35 to-transparent pointer-events-none z-20" />
        </div>
      </section>

      {/* 4. Section 1: Overview - BIZZ TAMANNA HOTEL */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading */}
            <div>
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Bizz Tamanna<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">Hotel</span>
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div>
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal">
                Welcome To{" "}
                <Link
                  href="/bizz-tamanna-hotel-hinjawadi-pune"
                  className="text-[#0C64AB] font-normal hover:underline"
                >
                  Bizz Tamanna
                </Link>{" "}
                Hotel In Hinjawadi Pune, A Contemporary Hotel Designed To Meet The Evolving Needs Of Today&apos;s Corporate And Long-Stay Guests. Located In The Heart Of Pune&apos;s IT Corridor, Bizz Tamanna Offers A Perfect Balance Of Convenience, Functionality, And Warm Hospitality, Making It An Ideal Stay For Business Professionals And Extended-Stay Visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 2: RESTAURANTS AND BARS */}
      <section className="py-14 sm:py-[70px] bg-[#F7F8FA]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Column: Image */}
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] overflow-hidden shadow-sm">
              <Image
                src="/images/site/bizz-r.webp"
                alt="Bizz Tamanna Hotel in Hinjawadi Pune"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right Column: Content */}
            <div>
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-5 sm:mb-6"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Restaurants<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">and bars</span>
              </h2>

              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                At Bizz Tamanna Hotel, Dining Is An Experience Of Taste And Ambiance. Our Restaurants Serve Flavorful Multi-Cuisine Delights Crafted By Expert Chefs, While The Bar Offers Refreshing Cocktails And Premium Spirits In A Stylish Setting. Perfect For Casual Dinners, Business Meals, Or Relaxed Evenings, We Bring Together Great Food, Warm Service, And Inviting Vibes.
              </p>

              <Link
                href="/best-restaurants-hinjawadi-pune"
                className="inline-flex items-center gap-2 text-[#0C64AB] font-bebas text-2xl tracking-[2px] uppercase hover:gap-3 transition-all cursor-pointer"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>VIEW MORE</span>
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 3: ROOMS FOR EVERYONE */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-[980px] mx-auto mb-12 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-6"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Rooms for <span className="text-[#0C64AB] font-medium">Everyone</span>
            </h2>

            <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal">
              The Hotel Features 31 Executive Rooms And 2 Fully-Furnished Apartment Rooms Equipped With Essential Amenities. Each Room Comes With A Double Bed, LED TV, 24-Hour Room Service, Free Wi-Fi, And Air-Conditioning. The Apartment Rooms Include Kitchenettes, Making Them Perfect For Long Stays Or Families Who Seek Added Comfort And Independence During Their Visit.
            </p>
          </div>

          {/* Two Room Cards matching exact height & aspect ratio in reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {/* Card 1: EXECUTIVE ROOM */}
            <Link
              href="/ac-hotel-rooms-hinjawadi-pune"
              className="group relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden cursor-pointer shadow-md bg-slate-900 block"
            >
              <Image
                src="/images/site/Executive-Room-scaled.jpg"
                alt="EXECUTIVE ROOM"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[42px] uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  EXECUTIVE ROOM
                </h3>
              </div>
            </Link>

            {/* Card 2: APARTMENT ROOM */}
            <Link
              href="/best-hotel-room-for-stay-hinjawadi-pune"
              className="group relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden cursor-pointer shadow-md bg-slate-900 block"
            >
              <Image
                src="/images/site/Apartment-Room1-1-scaled.jpg"
                alt="APARTMENT ROOM"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[42px] uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  APARTMENT ROOM
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Section 4: HOTEL AMENITIES */}
      <section className="relative py-16 sm:py-[70px] bg-[#021b3b] overflow-hidden text-white">
        {/* Subtle radial concentric rings background matching screenshot */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="65%" fill="none" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="80%" fill="none" stroke="#38bdf8" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-white"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Hotel <span className="text-[#0C64AB] font-medium">AMENITIES</span>
            </h2>
          </div>

          {/* Two-Column Amenities List Centered */}
          <div className="max-w-[850px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-4 sm:gap-y-5">
            {/* Column 1 */}
            <div className="space-y-4 sm:space-y-4.5">
              {AMENITIES_COL_1.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <StarOfLifeIcon className="w-4 h-4 text-[#8BB6DA] shrink-0 mt-1" />
                  <span className="font-poppins text-white text-[15px] sm:text-[16px] font-normal leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4 sm:space-y-4.5">
              {AMENITIES_COL_2.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <StarOfLifeIcon className="w-4 h-4 text-[#8BB6DA] shrink-0 mt-1" />
                  <span className="font-poppins text-white text-[15px] sm:text-[16px] font-normal leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 5: CELEBRATE IN STYLE */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-[980px] mx-auto mb-12 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91]"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Celebrate in <span className="text-[#0C64AB] font-medium">Style</span>
            </h2>
          </div>

          {/* Two Venue Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: LAUREL */}
            <Link
              href="/top-banquet-hall-hinjawadi-pune"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/LAUREL-1.webp"
                alt="LAUREL"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-5xl uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  LAUREL
                </h3>
              </div>
            </Link>

            {/* Card 2: HIGHLAND */}
            <Link
              href="/top-open-air-banquet-halls-hinjawadi-pune"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/highland.webp"
                alt="HIGHLAND"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-5xl uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  HIGHLAND
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Section 6: OUR GALLERY (12 Photos) */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center mb-12 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91]"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Our <span className="text-[#0C64AB] font-medium">Gallery</span>
            </h2>
          </div>

          {/* 4x3 Photo Grid (12 images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img.src)}
                className="group relative h-[240px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer shadow-sm bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-sky-300 transition-colors p-2 cursor-pointer z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeLightboxImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 10. Footer with Bizz Tamanna Hotel Branding */}
      <Footer
        logoSrc="/images/site/9-2-1.png"
        activeLink="Bizz Tamanna"
        customPhone="02066539888 / 7058688563"
        customEmail="info@tamannahotels.com"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Bizz Tamanna Hotel"
      />
    </div>
  );
}
