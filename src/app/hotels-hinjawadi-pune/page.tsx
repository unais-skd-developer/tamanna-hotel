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

const ROOMS_DATA = [
  {
    name: "PREMIUM ROOM",
    image: "/images/site/Premier-Room-2-scaled.jpg",
    alt: "Grand Tamanna Premium Room",
    link: "/standard-hotel-room-hinjawadi-pune",
  },
  {
    name: "SUITE ROOM",
    image: "/images/site/Suite-Room1-scaled.jpg",
    alt: "Grand Tamanna Suite Room",
    link: "/suite-hotel-room-hinjawadi-pune",
  },
];

const VENUES_DATA = [
  {
    name: "BLISS",
    image: "/images/site/15-1024x679.jpg",
    alt: "Bliss Banquet at Grand Tamanna Hotel",
    link: "/small-party-banquet-hall-hinjawadi-pune",
  },
  {
    name: "ETERNITY",
    image: "/images/site/Eternity-Banquet4-scaled.jpg",
    alt: "Eternity Banquet at Grand Tamanna Hotel",
    link: "/ac-halls-hinjawadi-pune",
  },
  {
    name: "BANQUET HALL",
    image: "/images/site/3rd-Floor-Banquet2-scaled.jpg",
    alt: "Banquet Hall at Grand Tamanna Hotel",
    link: "/best-banquet-hall-hinjawadi-pune",
  },
  {
    name: "POOL SIDE PARTY",
    image: "/images/site/pool3.webp",
    alt: "Pool Side Party at Grand Tamanna Hotel",
    link: "/hotels-with-poolside-hinjawadi-pune",
  },
];

const AMENITIES_COL_1 = [
  "Forty Six 320 Sq Ft Premium Rooms",
  "One Suite Room With Bath Tub",
  "Fine Dining Restaurant With Bar",
  "Banquet Halls",
  "Open Area Party Venue",
  "Lounge Bar",
  "GYM",
  "Roof Top Party Area With Swimming Pool",
  "Business Center With Internet Connectivity",
];

const AMENITIES_COL_2 = [
  "Rent-A-Car & Travel Desk",
  "Private Vehicle Parking Place",
  "In-House Laundry Services",
  "Elevator, Gift Shop, Conference Room",
  "PC & Printer",
  "Shoe Polish Machine",
  "Free High Speed Wi-Fi",
  "Hot Water Available 24/7",
  "Office Pickup & Drop",
];

const GALLERY_IMAGES = [
  { src: "/images/site/grand-restaurant1-scaled.avif", alt: "Around The World Restaurant Fine Dining" },
  { src: "/images/site/grand-restaurant4-scaled.avif", alt: "Best Bars in Hinjawadi Pune Grand Tamanna" },
  { src: "/images/site/grand-restaurant5-scaled.avif", alt: "Grand Tamanna Restaurant Ambience" },
  { src: "/images/site/grand-restaurant7.avif", alt: "Grand Tamanna Culinary Specialty Dish" },
  { src: "/images/site/Premier-Room-2-scaled.jpg", alt: "Grand Tamanna Premium Room Bedroom" },
  { src: "/images/site/Suite-Room-scaled.jpg", alt: "Grand Tamanna Luxury Suite Room" },
  { src: "/images/site/pool3.webp", alt: "Grand Tamanna Rooftop Swimming Pool" },
  { src: "/images/site/pool7.webp", alt: "Poolside Deck at Grand Tamanna Hotel" },
  { src: "/images/site/Nirvana-Lounge-Bar2-scaled.jpg", alt: "Nirvana Lounge Bar Outdoor Seating" },
  { src: "/images/site/Nirvana-Lounge-Bar3-scaled.jpg", alt: "Nirvana Lounge Bar Interior" },
  { src: "/images/site/15.jpg", alt: "Grand Tamanna Luxury Banquet Seating" },
  { src: "/images/site/18.jpg", alt: "Grand Tamanna Wedding Banquet Setup" },
];

export default function GrandTamannaPage() {
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

      {/* 2. Navbar with Grand Tamanna Logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc="/images/site/grand-tamanna-official-logo.png"
      />

      {/* 3. Hero Video Banner with YouTube Video */}
      <section className="relative w-full overflow-hidden bg-black select-none">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[460px] lg:h-[580px] overflow-hidden">
          <BannerVideo
            videoId="SRm0n8tPhAk"
            title="Grand Tamanna Hotel"
            fallbackImage="/images/site/grand-tamanna.webp"
            priority
            className="w-full h-full"
          />

          {/* Soft dark vignette */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none z-20" />
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
                Grand Tamanna
                <br />
                <span className="text-[#0C64AB] tracking-[-2.5px] sm:tracking-[-3.8px]">Hotel</span>
              </h2>
            </div>
            {/* Right Column: Description */}
            <div className="lg:col-span-6 pt-1 sm:pt-2">
              <p className="text-[#666666] text-sm sm:text-[15px] leading-[26px] sm:leading-[28px] font-normal text-left">
                Grand Tamanna stands as a flagship property of Tamanna Hotels and is one of the most sought-after hotels in Hinjawadi Pune. Perfectly located in the heart of the IT hub, Grand Tamanna blends premium hospitality with thoughtful amenities, making it an ideal choice for both corporate travelers and leisure guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Restaurants and Bars (Collage of 3 images on left) */}
      <section className="w-full bg-[#f4f7fb] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: 3-Image Collage (6 cols) */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              {/* Top Row: 2 images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-neutral-200">
                  <Image
                    src="/images/site/Restaurant1.jpg"
                    alt="Grand Tamanna Restaurant Reception"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-neutral-200">
                  <Image
                    src="/images/site/Restaurant2.jpg"
                    alt="Around The World Dining Area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Bottom Row: 1 full-width wide image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-sm bg-neutral-200">
                <Image
                  src="/images/site/Nirvana-Lounge-Bar4.jpg"
                  alt="Nirvana Lounge Bar at Grand Tamanna Hotel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Text content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] mb-5 sm:mb-6"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                Restaurants<br />
                <span className="text-[#0C64AB] font-medium tracking-[-3.8px]">and bars</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Guests can enjoy fine dining at &apos;Around The World&apos;, a multi-cuisine restaurant with a capacity of up to 110 guests. For more intimate gatherings, the Nirvana Lounge is ideal to unwind with ambient lighting and a well-stocked bar. The property also offers banquet spaces like The Sky, suitable for up to 300 guests, and a grand banquet hall accommodating up to 800 people for weddings, corporate events, and social functions.
              </p>
              <div>
                <Link
                  href="/best-restaurants-bars-hinjawadi-pune"
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
              The hotel features 46 spacious premium rooms and 1 luxurious suite, each designed with elegant interiors, a king-size bed, mini-fridge, LED TV, and complimentary high-speed leased-line Wi-Fi. The suite room offers 460 sq. ft. of space with imported flooring, a bathtub, 1 set lounger, and complimentary breakfast, making it perfect for an indulgent stay.
            </p>
          </div>

          {/* 2 Room Cards with Chico Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ROOMS_DATA.map((room, idx) => {
              const cardContent = (
                <div
                  className="group relative overflow-hidden rounded-sm shadow-md cursor-pointer aspect-[16/10] bg-neutral-900 w-full"
                  onClick={() => {
                    if (!room.link) setIsBookingModalOpen(true);
                  }}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                </div>
              );

              return room.link ? (
                <Link key={idx} href={room.link} className="block w-full">
                  {cardContent}
                </Link>
              ) : (
                <div key={idx} className="block w-full">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Section: Nirvana Lounge (Fixed parallax background matching the home page EnjoyStay pattern) */}
      <section
        id="nirvana-lounge"
        className="relative z-0 w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 text-white select-none"
        style={{
          backgroundImage: "url('/images/site/nirvana-lounge-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark translucent wash for readability: 50% opacity */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase tracking-[-2px] sm:tracking-[-3px] text-white leading-none mb-6"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            NIRVANA <span className="text-[#64b5f6]">LOUNGE</span>
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 text-center drop-shadow-sm font-normal">
            The Premium Party Venue Offers Refined Banquet Facilities With The Exclusive Nirvana Lounge Party Area, Designed To Host Corporate Events And Gatherings Of Up To 100 Guests. With A Professional Ambiance, Tailored Menus, And Seamless Service, It Provides The Perfect Setting For Business Celebrations, Networking Events, And Company Parties. Guests Can Also Enjoy A Premium Bar With Outdoor Seating, Creating A Relaxed Yet Sophisticated Atmosphere For Socializing.
          </p>

          {/* Action Buttons matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/best-lounge-bar-hinjawadi-pune"
              className="bg-[#0C64AB] hover:bg-[#094e85] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full transition-colors shadow-lg cursor-pointer inline-flex items-center justify-center"
            >
              KNOW MORE
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full transition-colors shadow-lg cursor-pointer inline-flex items-center justify-center"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Section: Wedding & Party Venue (4 cards) */}
      <section className="w-full bg-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] text-center mb-8 sm:mb-12"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Wedding &amp; <span className="text-[#0C64AB] font-medium">Party Venue</span>
          </h2>

          {/* 4 Cards Grid with Chico Hover Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VENUES_DATA.map((venue, idx) => {
              const cardContent = (
                <div
                  onClick={() => {
                    if (!venue.link) setIsBookingModalOpen(true);
                  }}
                  className="group relative overflow-hidden rounded-none cursor-pointer aspect-square bg-neutral-900 w-full"
                >
                  <Image
                    src={venue.image}
                    alt={venue.alt || venue.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Hover blue wash overlay */}
                  <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover thin white inset frame */}
                  <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

                  {/* Centered Venue Label (Revealed on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3
                      className="font-bebas text-white text-2xl sm:text-3xl font-normal tracking-[1px] uppercase text-center drop-shadow-md"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {venue.name}
                    </h3>
                  </div>
                </div>
              );

              return venue.link ? (
                <Link key={idx} href={venue.link} className="block w-full">
                  {cardContent}
                </Link>
              ) : (
                <div key={idx} className="block w-full">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Section: Hotel Amenities (Using grand-section-bg.jpg background) */}
      <section className="relative w-full text-white py-14 sm:py-20 overflow-hidden bg-[#021b3b]">
        {/* Background image 9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg */}
        <div className="absolute inset-0">
          <Image
            src="/images/site/grand-section-bg.jpg"
            alt="Hotel Amenities Background"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#021b3b]/85" />
        </div>

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

      {/* 10. Section: Our Gallery */}
      <section className="w-full bg-[#f4f7fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-3.8px] text-[#0C64AB91] text-center mb-8 sm:mb-12"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            Our <span className="text-[#0C64AB] font-medium">Gallery</span>
          </h2>

          {/* 3-column Grid of 12 photos */}
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

      {/* 11. Footer */}
      <Footer
        logoSrc="/images/site/grand-tamanna-official-logo.png"
        activeLink="Grand Tamanna"
        customPhone="02066935000 / 7058688561"
        customEmail="Grand@tamannahotels.com"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Grand Tamanna Hotel"
      />
    </div>
  );
}
