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
  Mic,
  Monitor,
  Projector,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const FACILITIES_DATA = [
  {
    icon: Mic,
    title: "MICROPHONE",
    description: "Clear Audio Support For Speeches, Presentations, And Interactive Sessions.",
  },
  {
    icon: Monitor,
    title: "AV SYSTEM",
    description: "High-Definition Display For Visuals, Videos, And Impactful Presentations.",
  },
  {
    icon: Projector,
    title: "PROJECTOR & SCREEN",
    description: "Crisp Projections For Conferences, Seminars, And Engaging Visual Content.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/premier-conference-100-gal-1.webp",
    alt: "Premier Tamanna Hotel Conference Hall 100 Pax Setup",
    caption: "Spacious Theatre-Style Seating for up to 100 Delegates with Integrated Presentation Screen",
  },
  {
    src: "/images/site/premier-conference-100-gal-2.webp",
    alt: "Premier Tamanna Conference Hall Stage and Podium",
    caption: "Speaker Podium and Head Table Setup for Corporate Summits and Keynotes",
  },
  {
    src: "/images/site/premier-conference-100-gal-3.webp",
    alt: "Premier Tamanna Conference Hall Central Aisle Perspective",
    caption: "Symmetrical Seating Arrangement with Ambient Lighting and Full Audio-Visual Rigging",
  },
];

export default function PremierConferenceHall100Template() {
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

      {/* 2. Navbar with Premier Tamanna Hotel Logo */}
      <Navbar
        logoSrc="/images/site/2-6-1.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section matching Image 2 & 3 */}
        <section
          className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/premier-conference-100-hero.webp')",
          }}
        >
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90 mb-4 sm:mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Located In Premier Tamanna Hotel</span>
            </div>

            {/* Heading: CONFERENCE HALL */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[100px] uppercase font-normal tracking-[3px] sm:tracking-[5px] text-white leading-none mb-4 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              CONFERENCE <span className="text-[#0071C1]">HALL</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-8 sm:mb-10 text-center drop-shadow-md">
              Host Impactful Meetings At The Conference Hall, Premier Tamanna Hotel, A Professional Space Equipped With Modern Amenities, Ideal For Corporate Events, Seminars, And Business Conferences. Where Productivity Meets Sophistication.
            </p>

            {/* 1 Centered Frosted Glass Info Card matching Image 2 & 3 */}
            <div className="w-full max-w-md mx-auto mb-10 sm:mb-12">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-center text-center shadow-xl space-y-1.5 items-center">
                <Users className="w-6 h-6 text-[#38BDF8] mb-1" />
                <span
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  CONFERENCE HALL CAPACITY
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-light">
                  Up To 100 Persons
                </span>
              </div>
            </div>

            {/* Action Buttons: ENQUIRE NOW + VIEW GALLERY */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                ENQUIRE NOW
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-transparent border-2 border-white/90 hover:bg-white hover:text-[#0C64AB] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: PREMIUM FACILITIES matching Image 4 (3-Column Grid) */}
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

            {/* 3 Facility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
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
                    <p
                      className="text-[13.5px] sm:text-[14px] text-[#666666] leading-[1.6] font-normal max-w-[290px] mx-auto"
                      style={{ fontFamily: '"Poppins", var(--font-poppins), sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: OUR GALLERY matching Image 4 (3 Images Grid) */}
        <section
          id="gallery"
          className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24 text-white overflow-hidden scroll-mt-20"
          style={{
            backgroundImage: "url('/images/site/bliss-gallery-bg.webp')",
          }}
        >
          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

          <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#FFFFFF", fontWeight: 400 }}>OUR </span>
                <span style={{ color: "#92C9F5", fontWeight: 500 }}>GALLERY</span>
              </h2>
            </div>

            {/* 3 Images 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden rounded-none shadow-xl cursor-pointer aspect-[4/3] bg-neutral-900"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* 6. Footer matching Image 4 */}
      <Footer
        logoSrc="/images/site/2-6-1.png"
        customPhone="02069525400 / 8956916914"
        customEmail="Premier@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 7. Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={GALLERY_IMAGES[activeLightboxIndex].src}
                alt={GALLERY_IMAGES[activeLightboxIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white text-sm sm:text-base font-medium">
                {GALLERY_IMAGES[activeLightboxIndex].caption}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {activeLightboxIndex + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Premier Tamanna Hotel"
      />
    </div>
  );
}

