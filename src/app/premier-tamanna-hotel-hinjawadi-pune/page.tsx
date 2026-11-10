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
    src: "/images/site/Reception-1.jpg",
    alt: "Premier Tamanna Hotel near Hinjawadi Pune",
  },
  {
    src: "/images/site/Lobby-1.jpg",
    alt: "best Premier Tamanna Hotel in Hinjawadi Pune",
  },
  {
    src: "/images/site/Lobby3.jpg",
    alt: "top Premier Tamanna Hotel in Hinjawadi Pune",
  },
  {
    src: "/images/site/Lobby2-1-scaled.jpg",
    alt: "Premier Tamanna Hotel Lobby",
  },
  {
    src: "/images/site/Lobby1-1-scaled.jpg",
    alt: "Premier Tamanna Hotel Reception",
  },
  {
    src: "/images/site/Premier-Restaurant1.webp",
    alt: "Best Multi-Cuisine Restaurant in Hinjawadi Pune",
  },
  {
    src: "/images/site/Premier-restaurant2.webp",
    alt: "Best Multi-Cuisine Restaurant near Hinjawadi Pune",
  },
  {
    src: "/images/site/Premier-Tamanna-Hotel-Board-room-photo-2.webp",
    alt: "Premier Tamanna board room in Hinjawadi Pune",
  },
  {
    src: "/images/site/unnamed-14.webp",
    alt: "Premier Tamanna Hotel Bedroom",
  },
];

const AMENITIES_COL_1 = [
  "Forty Eight 280 Sq Ft Premium Rooms",
  "Three Suite Rooms With Bath Tub",
  "Fine Dining Restaurant With Bar",
  "Conference Rooms",
  "Business Center With Internet Connectivity",
  "PC & Printer",
  "Shoe Polish Machine",
];

const AMENITIES_COL_2 = [
  "Elevator",
  "In-House Laundry Services",
  "Private Vehicle Parking Place",
  "Free High Speed Wi-Fi",
  "Hot Water Available 24/7",
  "Office Pickup & Drop",
];

export default function PremierTamannaPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar with Premier Tamanna Hotel Logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc="/images/site/2-6-1.png"
      />

      {/* 3. Hero Video Banner with Building and Orange Title Box */}
      <section className="relative w-full overflow-hidden bg-black select-none">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[460px] lg:h-[580px] overflow-hidden">
          <BannerVideo
            videoId="tqUky4DlAxw"
            title="Premier Tamanna Hotel"
            fallbackImage="/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg"
            priority
            className="w-full h-full"
          />

          {/* Soft vignette side shadows */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-black/35 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-black/35 to-transparent pointer-events-none z-20" />
        </div>
      </section>

      {/* 4. Section 1: Overview - PREMIER TAMANNA HOTEL */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading */}
            <div>
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Premier Tamanna<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">Hotel</span>
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div>
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal">
                Welcome To Premier Tamanna Hotel In Hinjawadi Pune, A Perfect Blend Of Elegance, Comfort, And Functionality. Strategically Located In The IT Hub Of Pune, This Hotel Caters To Business Travelers, Families, And Long-Stay Guests Looking For Premium Hospitality And Excellent Service. With Its Stylish Interiors, Modern Amenities, And Warm Ambiance,{" "}
                <Link
                  href="/premier-tamanna-hotel-hinjawadi-pune"
                  className="text-[#0C64AB] font-normal hover:underline"
                >
                  Premier Tamanna
                </Link>{" "}
                Promises An Experience Beyond Expectations.
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
                src="/images/site/Restauranr1.jpg"
                alt="Premier Tamanna Hotel in Hinjawadi Pune"
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
                Dining At Premier Tamanna Is An Experience In Itself. The Hotel Houses A Multi-Cuisine Restaurant And Bar With A Seating Capacity Of Up To 100 Guests. Whether You&apos;re Celebrating A Birthday, Organizing A Casual Get-Together, Or Simply Enjoying A Peaceful Meal, The Restaurant Offers A Welcoming Environment Paired With A Variety Of Indian And Global Dishes.
              </p>

              <Link
                href="/best-multi-cuisine-restaurant-hinjawadi-pune"
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
              The Hotel Features 48 Spacious Premium Rooms And 3 Luxurious Suites, Thoughtfully Designed To Ensure Maximum Comfort. Each Room Is Equipped With A Double Bed, LED TV, Mini Fridge, 24-Hour Room Service, And Free Leased-Line Wi-Fi, Making It An Ideal Choice For Both Short And Extended Stays. Our Suite Rooms Offer Theme-Based Décor, Extra Space, And Added Luxuries Like A Bathtub For Truly Indulgent Stay.
            </p>
          </div>

          {/* Two Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: PREMIUM ROOM */}
            <Link
              href="/premium-hotel-room-hinjawadi-pune-2"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/Premier-Room-5-scaled.jpg"
                alt="PREMIUM ROOM"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle contrast for text readability when unhovered */}
              <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
              {/* Blue overlay on hover */}
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Thin white border frame (ha-effect-chico) - visible ONLY on hover */}
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              {/* Title centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-5xl uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  PREMIUM ROOM
                </h3>
              </div>
            </Link>

            {/* Card 2: SUITE ROOM */}
            <Link
              href="/premier-suite-room-pune"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/Suite-Room-Black-scaled.jpg"
                alt="SUITE ROOM"
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
                  SUITE ROOM
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Section 4: BOARD ROOM AT 2ND FLOOR */}
      <section className="py-14 sm:py-[70px] bg-[#F7F8FA]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div>
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-5 sm:mb-6"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Board Room<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">at 2nd Floor</span>
              </h2>

              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                The Board Room At Tamanna Hotels Offers A Professional, Air-Conditioned Space Ideal For Corporate Meetings, Presentations, And Team Discussions. Equipped With A Projector, Screen, Wi-Fi, And Comfortable Seating For Up To 15 Guests, It&apos;s Perfect For Focused Business Sessions In The Heart Of Hinjawadi&apos;s Corporate District.
              </p>

              <Link
                href="/small-meeting-hall-hinjawadi-pune"
                className="inline-flex items-center gap-2 text-[#0C64AB] font-bebas text-2xl tracking-[2px] uppercase hover:gap-3 transition-all cursor-pointer"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>VIEW MORE</span>
                <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] overflow-hidden shadow-sm">
              <Image
                src="/images/site/Premier-Tamanna-Hotel-Board-room-photo-2.webp"
                alt="Premier Tamanna board room in Hinjawadi Pune"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 5: CONFERENCE HALLS */}
      <section className="py-14 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-[980px] mx-auto mb-12 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-6"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Conference <span className="text-[#0C64AB] font-medium">Halls</span>
            </h2>

            <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal">
              The Conference Hall At Tamanna Hotels Is A Spacious, Fully Equipped Venue Ideal For Seminars, Workshops, And Corporate Events. With Seating For Up To 100 Guests, It Features High-Speed Wi-Fi, Projectors, Microphones, And Customizable Layouts, Making It A Perfect Choice For Professional Gatherings In Hinjawadi&apos;s Dynamic Business Environment.
            </p>
          </div>

          {/* Two Conference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: CONFERENCE HALLS (100 PAX) */}
            <Link
              href="/conference-hall-for-100-persons-hinjawadi-pune"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/confrence-hall-1.webp"
                alt="CONFERENCE HALLS (100 PAX)"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-[40px] uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  CONFERENCE HALLS (100 PAX)
                </h3>
              </div>
            </Link>

            {/* Card 2: CONFERENCE HALLS (30 PAX) */}
            <Link
              href="/conference-hall-for-30-persons-hinjawadi-pune"
              className="group relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden cursor-pointer shadow-sm block"
            >
              <Image
                src="/images/site/Conference-Room-scaled.jpg"
                alt="CONFERENCE HALLS (30 PAX)"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#0C64AB]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-5 sm:inset-7 border border-white opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-bebas text-3xl sm:text-4xl md:text-[40px] uppercase tracking-[2px] text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  CONFERENCE HALLS (30 PAX)
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Section 5: HOTEL AMENITIES */}
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

      {/* 9. Section 6: OUR GALLERY */}
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

          {/* 3x3 Photo Grid */}
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

      {/* 10. Footer */}
      <Footer
        logoSrc="/images/site/2-6-1.png"
        activeLink="Premier Tamanna"
        customPhone="02066935000 / 9168691554"
        customEmail="Premier@tamannahotels.com"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Premier Tamanna Hotel"
      />
    </div>
  );
}
