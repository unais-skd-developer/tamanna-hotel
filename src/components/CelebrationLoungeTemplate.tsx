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

// Facility items matching Screenshot 3
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

// 6 Gallery images matching Screenshot 3
const GALLERY_IMAGES = [
  {
    src: "/images/site/ITH-092.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Seating View",
  },
  {
    src: "/images/site/ITH-090.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Side Angle",
  },
  {
    src: "/images/site/ITH-089.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Hall Layout",
  },
  {
    src: "/images/site/ITH-087.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Stage Area",
  },
  {
    src: "/images/site/ITH-086.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Conference Setup",
  },
  {
    src: "/images/site/ITH-085.webp",
    alt: "The Celebration Lounge Imperial Tamanna Hotel Evening Lighting",
  },
];

export default function CelebrationLoungeTemplate() {
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

      {/* 2. Navbar with The Celebration Lounge Logo matching Screenshot 1 */}
      <Navbar
        logoSrc="/images/site/63.png"
        activeNav="Wedding And Party Venue"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section matching Screenshot 1 & 2 */}
        <section
          className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/ITH-084.webp')",
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90 mb-4 sm:mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Located In Imperial Tamanna Hotel</span>
            </div>

            {/* Heading: THE CELEBRATION LOUNGE: */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase font-normal leading-none lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] text-white mb-4 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
            >
              THE CELEBRATION LOUNGE:
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-8 sm:mb-10 text-center drop-shadow-md">
              Bliss Where Every Celebration Becomes A Cherished Memory. Whether It&apos;s A Grand Wedding Or A Professional Gathering, Experience Timeless Elegance And Refined Luxury In Every Corner.
            </p>

            {/* 3 Frosted Glass Info Cards matching Screenshot 1 & 2 */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              {/* Card 1: CAPACITY */}
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-center text-center shadow-xl space-y-1.5 items-center">
                <Users className="w-6 h-6 text-[#38BDF8] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  CAPACITY
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-light">
                  Up To 100 Persons
                </span>
              </div>

              {/* Card 2: EVENTS */}
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-center text-center shadow-xl space-y-1.5 items-center">
                <Calendar className="w-6 h-6 text-[#38BDF8] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  EVENTS
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-light">
                  Conference &amp; Board Rooms And Corporate Events
                </span>
              </div>

              {/* Card 3: FULL SERVICE */}
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-center text-center shadow-xl space-y-1.5 items-center">
                <Music className="w-6 h-6 text-[#38BDF8] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  FULL SERVICE
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-light">
                  Complete Event Setup
                </span>
              </div>
            </div>

            {/* Action Buttons: ENQUIRE NOW + VIEW GALLERY matching Screenshot 2 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                ENQUIRE NOW
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-transparent border-2 border-white/90 hover:bg-white hover:text-[#0C64AB] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: PREMIUM FACILITIES matching Screenshot 3 (6 Cards in 3x2 Grid) */}
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

        {/* 5. Section: OUR GALLERY matching Screenshot 3 */}
        <section
          id="gallery"
          className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
          }}
        >
          {/* Navy Dark Overlay */}
          <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span className="text-white">OUR </span>
                <span className="text-[#48a0dc]">GALLERY</span>
              </h2>
            </div>

            {/* Gallery Grid (3 columns, 6 images) */}
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
        <section className="w-full bg-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            <h3
              className="font-bebas text-3xl sm:text-4xl text-[#0C64AB] uppercase tracking-wide text-center"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              The Celebration Lounge
            </h3>
            <p>
              The Celebration Lounge at Imperial Tamanna Hotel is a stylish and versatile venue designed to host intimate gatherings, social events, and corporate functions with elegance and comfort. With a seating capacity ranging from 25 to 100 guests, the lounge provides the perfect setting for birthday celebrations, anniversaries, engagement ceremonies, family get-togethers, corporate meetings, training sessions, and other special occasions.
            </p>
            <p>
              Featuring modern interiors, comfortable seating arrangements, and a welcoming ambiance, The Celebration Lounge creates an ideal environment for memorable events. The well-planned layout offers flexibility to accommodate different event formats, whether it is a formal business presentation, a private celebration, or a casual gathering among friends and family.
            </p>
            <p>
              Supported by professional hospitality services, customizable seating arrangements, and quality food and beverage options, the venue ensures a seamless experience for hosts and guests alike. Its elegant décor and comfortable atmosphere make every occasion special, while the dedicated event support team assists in planning and executing events with attention to detail.
            </p>
          </div>
        </section>
      </main>

      {/* 7. Footer matching Screenshot 4 with The Celebration Lounge logo */}
      <Footer
        logoSrc="/images/site/63.png"
        customTagline="Celebrate Life's Special Moments With Elegance At The Celebration Lounge, Imperial Tamanna Hotel."
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

