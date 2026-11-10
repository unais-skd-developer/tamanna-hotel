"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  MapPin,
  Users,
  Calendar,
  Music,
  Mic,
  Monitor,
  Award,
  CircleDot,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// Facility items matching Screenshot 3 & Live Site
const FACILITIES_DATA = [
  {
    icon: Music,
    title: "DJ MUSIC SYSTEM",
    description: "Professional Sound System With DJ Setups For All Your Entertainment Needs.",
  },
  {
    icon: Mic,
    title: "MICROPHONES",
    description: "Wireless And Wired Microphone Systems For Speeches And Announcements.",
  },
  {
    icon: Monitor,
    title: "PROJECTOR & SCREEN",
    description: "High-Definition Projection Systems For Presentations And Displays.",
  },
  {
    icon: Award,
    title: "PODIUM SETUP",
    description: "Professional Podium For Speakers And Ceremony Requirements.",
  },
  {
    icon: CircleDot,
    title: "ROUND TABLES",
    description: "Elegant Round Tables With Premium Table Settings And Decorations.",
  },
  {
    icon: Sparkles,
    title: "DANCE FLOOR",
    description: "Spacious Dance Floor That Can Be Arranged According To Your Event Needs.",
  },
];

// 6 Gallery images strictly matching Image 2 in a clean 2x3 grid
const GALLERY_IMAGES = [
  {
    src: "/images/site/Eternity-Banquet7.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Central Hall & Chandelier",
  },
  {
    src: "/images/site/Eternity-Banquet6.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Buffet Arrangement",
  },
  {
    src: "/images/site/Eternity-Banquet5.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Stage & Floral Backdrop",
  },
  {
    src: "/images/site/Eternity-Banquet4.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Decorated Round Table Seating",
  },
  {
    src: "/images/site/Eternity-Banquet3-scaled.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Grand Floral Entrance Arch",
  },
  {
    src: "/images/site/Eternity-Banquet2-scaled.jpg",
    alt: "The Royal Banquets Imperial Tamanna Hotel Spacious Hall Layout",
  },
];

export default function RoyalBanquetsTemplate() {
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
    <div className="min-h-screen flex flex-col bg-white font-poppins selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar with The Royal Banquets Logo matching Screenshots */}
      <Navbar
        logoSrc="/images/site/62.png"
        activeNav="Wedding And Party Venue"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Banner Section strictly matching Image 1 */}
        <section
          className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/Eternity-Banquet4-1-scaled.jpg')",
          }}
        >
          {/* Exact 0.7 Black Overlay from Elementor CSS */}
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
            {/* Location Tag without pill frame */}
            <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base font-normal mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 text-[#8BB6DA] shrink-0" />
              <span>Located In Imperial Tamanna Hotel</span>
            </div>

            {/* Heading: THE ROYAL BANQUETS in Bebas Neue */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase font-normal leading-none lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] text-white text-center mb-3 sm:mb-4 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
            >
              THE ROYAL BANQUETS
            </h1>

            {/* Thin White Divider Line matching Screenshot 1 */}
            <div className="w-24 sm:w-28 md:w-32 h-[1px] bg-white mx-auto my-3 sm:my-4 opacity-90" />

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ECE9E9] font-normal leading-relaxed text-center mb-8 sm:mb-10 drop-shadow-md">
              An Elegant Banquet Hall Perfect For Celebrations And Corporate Events. Experience Luxury And Sophistication In Every Detail.
            </p>

            {/* 3 Frosted Glass Info Cards strictly matching Image 1 */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              {/* Card 1: CAPACITY */}
              <div className="bg-white/20 backdrop-blur-[7px] rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-1.5 items-center">
                <Users className="w-6 h-6 text-[#8BB6DA] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  CAPACITY
                </span>
                <span className="text-xs sm:text-sm text-white/90 font-light">
                  Up To 400 Persons
                </span>
              </div>

              {/* Card 2: EVENTS */}
              <div className="bg-white/20 backdrop-blur-[7px] rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-1.5 items-center">
                <Calendar className="w-6 h-6 text-[#8BB6DA] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  EVENTS
                </span>
                <span className="text-xs sm:text-sm text-white/90 font-light">
                  Celebration &amp; Corporate
                </span>
              </div>

              {/* Card 3: FULL SERVICE */}
              <div className="bg-white/20 backdrop-blur-[7px] rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-1.5 items-center">
                <Music className="w-6 h-6 text-[#8BB6DA] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  FULL SERVICE
                </span>
                <span className="text-xs sm:text-sm text-white/90 font-light">
                  Complete Event Setup
                </span>
              </div>
            </div>

            {/* Action Buttons: ENQUIRE NOW + VIEW GALLERY strictly matching Image 1 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                ENQUIRE NOW
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-black/40 border border-white/80 hover:bg-white hover:text-[#0C64AB] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: PREMIUM FACILITIES (6 Cards in 3x2 Grid) */}
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>PREMIUM </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>FACILITIES</span>
              </h2>
            </div>

            {/* 6 Facility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {FACILITIES_DATA.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-[14px] pt-9 pb-8 px-6 sm:px-7 flex flex-col items-center text-center border border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300"
                  >
                    {/* Circular Blue Ring */}
                    <div className="w-[76px] h-[76px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-[#0C64AB] flex items-center justify-center mb-5 shrink-0 bg-white">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#0C64AB]" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bebas text-[20px] sm:text-[22px] uppercase tracking-[0.5px] text-[#1E1E1E] font-normal leading-tight mb-2.5"
                      style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-[#666666] leading-[1.6] font-normal max-w-[290px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: OUR GALLERY strictly matching Image 2 */}
        <section
          id="gallery"
          className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title with exact Bebas Neue font and matching colors (#FFFFFF and #92C9F5) */}
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-6xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span className="text-white">OUR </span>
                <span style={{ color: "#92C9F5", fontWeight: 500 }}>GALLERY</span>
              </h2>
            </div>

            {/* Gallery Grid (3 columns x 2 rows, 6 images matching Image 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden rounded-none shadow-md cursor-pointer aspect-[16/10] bg-neutral-900"
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

        {/* 6. Overview Description Section */}

      </main>

      {/* 7. Footer matching Screenshots with The Royal Banquets logo */}
      <Footer
        logoSrc="/images/site/62.png"
        customTagline="Experience Exceptional Celebrations At Imperial Tamanna Hotel's Premier Event Destination."
        customPhone="70288 84375"
        customEmail="imperial@tamannahotels.com"
        customRoomBookingPhone="70288 84375"
        customBanquetBookingPhone="70288 84317 / 70288 84371"
      />

      {/* 8. Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

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

      {/* 9. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
