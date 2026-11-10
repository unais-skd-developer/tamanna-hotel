"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
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

const ROOMS_DATA = [
  {
    name: "EXECUTIVE ROOM",
    image: "/images/site/ITH-070.webp",
    alt: "Imperial Tamanna Executive Room",
    href: "/executive-room-chinchwad-pune",
  },
  {
    name: "SUITE ROOM",
    image: "/images/site/ITH-1072.webp",
    alt: "Imperial Tamanna Suite Room",
    href: "/suite-room-bhosari-midc",
  },
  {
    name: "DELUXE ROOM",
    image: "/images/site/ITH-0782.webp",
    alt: "Imperial Tamanna Deluxe Room",
    href: "/deluxe-room-pimpri-pune",
  },
];

const VENUES_DATA = [
  {
    name: "THE CELEBRATION LOUNGE",
    image: "/images/site/ITH-089.webp",
    alt: "The Celebration Lounge at Imperial Tamanna Hotel",
    href: "/party-lounge-chinchwad-pune",
  },
  {
    name: "THE ROYAL BANQUETS",
    image: "/images/site/Eternity-Banquet4-1-scaled.jpg",
    alt: "The Royal Banquets at Imperial Tamanna Hotel",
    href: "/banquet-hall-chinchwad-pune",
  },
];

const AMENITIES_COL_1 = [
  "33 Executive Rooms, 4 Super Deluxe Rooms & 2 Suite Rooms",
  "Air-Conditioned Rooms with Modern Furnishings",
  "Complimentary High-Speed Wi-Fi Access",
  "Television, Comfortable Bedding & Room Service",
  "Spacious Rooms with Natural Light & Relaxing Ambience",
  "Royal & Celebration Banquet Halls",
  "Conference Room Facilities",
  "Urban Platter Multi-Cuisine Restaurant & Bar",
];

const AMENITIES_COL_2 = [
  "Breakfast, Lunch & Dinner Dining Services",
  "Ample Private Parking Space",
  "Elevator Access",
  "Ideal Venue for Business Meetings & Corporate Events",
  "Suitable for Family Functions & Social Gatherings",
  "Easy Access to Chinchwad, Pimpri, Talawade & Chakan",
  "Located at Diagonal Business Centre, Raje Spine Road",
  "Clean, Spacious & Value-for-Money Hospitality",
];

const GALLERY_IMAGES = [
  { src: "/images/site/ITH-004-200x300.webp", alt: "Imperial Tamanna Hotel Exterior Entrance" },
  { src: "/images/site/ITH-010-300x200.webp", alt: "Right Hotel in Hinjawadi Pune Imperial Tamanna" },
  { src: "/images/site/ITH-002-200x300.webp", alt: "Imperial Tamanna Hotel Signboard" },
  { src: "/images/site/ITH-021-300x200.webp", alt: "Imperial Tamanna Hotel Lobby Lounge" },
  { src: "/images/site/ITH-035-300x200.webp", alt: "Urban Platter Restaurant and Bar" },
  { src: "/images/site/ITH-089-300x200.webp", alt: "Imperial Tamanna Banquet and Celebration Lounge" },
  { src: "/images/site/ITH-070-300x200.webp", alt: "Imperial Tamanna Executive Room" },
  { src: "/images/site/ITH-0381-300x200.webp", alt: "Imperial Tamanna Premium Room Setup" },
  { src: "/images/site/ITH-0772-300x200.webp", alt: "Imperial Tamanna Deluxe Bedroom" },
  { src: "/images/site/ITH-1002-300x200.webp", alt: "Imperial Tamanna Luxury Bedding" },
  { src: "/images/site/ITH-0942-300x200.webp", alt: "Imperial Tamanna Master Suite" },
  { src: "/images/site/ITH-0672-300x187.webp", alt: "Imperial Tamanna Modern Bathroom" },
  { src: "/images/site/ITH-1032-300x201.webp", alt: "Imperial Tamanna Room Living Space" },
  { src: "/images/site/ITH-0461-300x200.webp", alt: "Imperial Tamanna Hotel Guest Amenities" },
  { src: "/images/site/ITH-1052-200x300.webp", alt: "Imperial Tamanna Premium Restroom" },
];

export default function ImperialTamannaPage() {
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

      {/* 2. Navbar with Imperial Tamanna Logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc="/images/site/61.png"
      />

      {/* 3. Hero Image Banner */}
      <section className="relative w-full overflow-hidden select-none bg-neutral-100">
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[640px] overflow-hidden">
          <Image
            src="/images/site/imperial-banner.jpg"
            alt="Imperial Tamanna Hotel Entrance"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 4. Section: Overview */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-6">
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[95px] uppercase leading-[0.88] sm:leading-[88px] tracking-[-2.5px] sm:tracking-[-3.8px] text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Imperial Tamanna
                <br />
                <span className="text-[#0C64AB] tracking-[-2.5px] sm:tracking-[-3.8px]">Hotel</span>
              </h2>
            </div>
            {/* Right Column: Description */}
            <div className="lg:col-span-6 pt-1 sm:pt-2">
              <p className="text-[#666666] text-sm sm:text-[15px] leading-[26px] sm:leading-[28px] font-normal text-left">
                Located In Pune&apos;s Rapidly Growing Chikhali–Pradhikaran Area, Imperial Tamanna Hotel Offers A Perfect Blend Of Comfort, Convenience, And Modern Hospitality For Both Business And Leisure Travelers. The Hotel Features Well-Appointed Rooms, Contemporary Amenities, Banquet And Conference Facilities, And The Urban Platter Multi-Cuisine Restaurant &amp; Bar. Its Strategic Location Provides Easy Access To Major Industrial Hubs, Including Chinchwad, Pimpri, Talawade, And Chakan. With Spacious Interiors, Professional Service, And Excellent Value For Money, Imperial Tamanna Hotel Is An Ideal Choice For Stays, Corporate Events, And Social Gatherings In Pune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Restaurants and Bars */}
      <section className="w-full bg-[#f4f7fb] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm shadow-md bg-neutral-200">
              <Image
                src="/images/site/ITH-033.webp"
                alt="Urban Platter Multi-Cuisine Restaurant & Bar"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col justify-center">
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-5 sm:mb-6"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Restaurants<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">and bars</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                The Urban Platter Multi-Cuisine Restaurant &amp; Bar At Imperial Tamanna Hotel Offers A Delightful Dining Experience With A Wide Selection Of Indian, Chinese, And Continental Cuisines. Designed With A Warm And Inviting Ambience, It Is An Ideal Venue For Business Lunches, Family Dinners, And Casual Gatherings. Guests Can Enjoy Expertly Prepared Dishes, Refreshing Beverages, And Attentive Service, Making Every Meal A Memorable Experience. Whether For Breakfast, Lunch, Dinner, Or Evening Drinks, The Restaurant And Bar Provide The Perfect Setting To Relax And Unwind.
              </p>
              <div>
                <Link
                  href="/multi-cuisine-restaurant-chinchwad-pune"
                  className="inline-flex items-center gap-2 text-[#0C64AB] hover:text-[#084572] font-bebas text-[18px] tracking-[0.8px] uppercase group transition-colors"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  <span>VIEW MORE</span>
                  <span className="text-[18px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Rooms for Everyone */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-6"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              Rooms for <span className="text-[#0C64AB] font-medium">Everyone</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-center">
              Imperial Tamanna Hotel Offers A Range Of Spacious And Elegantly Designed Accommodations, Including Executive Rooms, Deluxe Rooms, And Suites, Catering To The Needs Of Both Business And Leisure Travelers. Each Room Is Thoughtfully Furnished With Modern Amenities Such As Air-Conditioning, Complimentary Wi-Fi, Television, Comfortable Bedding, And Room Service To Ensure A Relaxing Stay. With Well-Lit Interiors, Contemporary Décor, And A Peaceful Ambience, The Rooms Provide The Perfect Balance Of Comfort, Convenience, And Functionality For Short And Extended Stays.
            </p>
          </div>

          {/* 3 Room Cards with Chico Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS_DATA.map((room, idx) => {
              const CardContent = (
                <>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Hover blue wash overlay */}
                  <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover thin white inset frame */}
                  <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

                  {/* Centered Room Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                    <h3
                      className="font-bebas text-white text-2xl sm:text-3xl md:text-4xl font-normal tracking-[1px] uppercase text-center drop-shadow-md"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {room.name}
                    </h3>
                  </div>
                </>
              );

              return room.href ? (
                <Link
                  key={idx}
                  href={room.href}
                  className="group relative block overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={idx}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="group relative overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Section: Hotel Amenities */}
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

      {/* 8. Section: Celebrate in Style */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] text-center mb-10 sm:mb-14"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Celebrate in <span className="text-[#0C64AB] font-medium">Style</span>
          </h2>

          {/* 2 Banquet / Venue Cards with Chico Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VENUES_DATA.map((venue, idx) => {
              const VenueCardContent = (
                <>
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Hover blue wash overlay */}
                  <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover thin white inset frame */}
                  <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

                  {/* Centered Venue Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                    <h3
                      className="font-bebas text-white text-2xl sm:text-3xl md:text-4xl font-normal tracking-[1px] uppercase text-center drop-shadow-md"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {venue.name}
                    </h3>
                  </div>
                </>
              );

              return venue.href ? (
                <Link
                  key={idx}
                  href={venue.href}
                  className="group relative block overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
                >
                  {VenueCardContent}
                </Link>
              ) : (
                <div
                  key={idx}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="group relative overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
                >
                  {VenueCardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Section: Our Gallery */}
      <section className="w-full bg-[#f4f7fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] text-center mb-8 sm:mb-12"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Our <span className="text-[#0C64AB] font-medium">Gallery</span>
          </h2>

          {/* 3-column Grid of 15 photos */}
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

      {/* 10. Footer */}
      <Footer
        logoSrc="/images/site/61.png"
        activeLink="Imperial Tamanna"
        customPhone="70288 84375"
        customEmail="imperial@tamannahotels.com"
        customTagline="The Imperial Tamanna Hotel Enjoys A Strategic Location Placing Guests In The Center Of One Of Pune Most Important Industrial And Commercial Corridors."
        customRoomBookingPhone="70288 84375"
        customBanquetBookingPhone="70288 84317 / 70288 84371"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Imperial Tamanna Hotel"
      />
    </div>
  );
}
