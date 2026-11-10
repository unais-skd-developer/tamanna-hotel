"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  Users,
  Calendar,
  Music,
  MapPin,
  Mic,
  Tv,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// Podium icon matching Elementor / user screenshot
function PodiumIcon({ className = "w-8 h-8 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6h14" />
      <path d="M7 6v3a5 5 0 0 0 10 0V6" />
      <path d="M12 14v5" />
      <path d="M8 19h8" />
    </svg>
  );
}

// Round table icon matching Elementor / user screenshot
function RoundTableIcon({ className = "w-8 h-8 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="8" rx="8" ry="3" />
      <line x1="12" y1="11" x2="12" y2="19" />
      <line x1="8" y1="19" x2="16" y2="19" />
    </svg>
  );
}

interface BlissBanquetTemplateProps {
  pageTitle?: string;
}

const FACILITIES_DATA = [
  {
    icon: (props: { className?: string }) => <Music {...props} strokeWidth={1.8} />,
    title: "DJ MUSIC SYSTEM",
    description: "Professional Sound System With DJ Setup For All Your Entertainment Needs",
  },
  {
    icon: (props: { className?: string }) => <Mic {...props} strokeWidth={1.8} />,
    title: "MICROPHONES",
    description: "Wireless And Wired Microphone Systems For Speeches And Announcements",
  },
  {
    icon: (props: { className?: string }) => <Tv {...props} strokeWidth={1.8} />,
    title: "PROJECTOR & SCREEN",
    description: "High-Definition Projection System For Presentations And Displays",
  },
  {
    icon: PodiumIcon,
    title: "PODIUM SETUP",
    description: "Professional Podium For Speakers And Ceremony Requirements",
  },
  {
    icon: RoundTableIcon,
    title: "ROUND TABLES",
    description: "Elegant Round Tables With Premium Table Settings And Decorations",
  },
  {
    icon: (props: { className?: string }) => <Camera {...props} strokeWidth={1.8} />,
    title: "DANCE FLOOR",
    description: "Spacious Dance Floor That Can Be Arranged According To Your Event Needs",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/bliss-conference-3.webp",
    alt: "Best Corporate Meeting Halls in Hinjewadi Pune",
    caption: "Corporate Presentation & Meeting Space",
  },
  {
    src: "/images/site/bliss-conference-2.webp",
    alt: "Small Party Banquet Hall near Hinjawadi Pune",
    caption: "Lounge & Reception Area",
  },
  {
    src: "/images/site/bliss-conference-1.webp",
    alt: "Small Party Banquet Hall in Hinjawadi Pune",
    caption: "Conference & Banquet Setup with Round Tables",
  },
];

export default function BlissBanquetTemplate({
  pageTitle = "Small Party Banquet Hall in Hinjawadi | Tamanna Hotels",
}: BlissBanquetTemplateProps) {
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

      {/* 2. Navbar with Bliss Banquet Hall logo */}
      <Navbar
        logoSrc="/images/site/bliss-banquet-logo.png"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <section
          className="relative min-h-[650px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/bliss-hero-bg.webp')",
          }}
        >
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">

            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90 mb-4 sm:mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Located In Grand Tamanna Hotel</span>
            </div>

            {/* Heading: BLISS */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[100px] uppercase font-normal tracking-[3px] sm:tracking-[5px] text-white leading-none mb-5 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              BLISS
            </h1>

            {/* Description Subtitle */}
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-10 sm:mb-12 text-center drop-shadow-md">
              Bliss Where Every Celebration Becomes A Cherished Memory. Whether It&apos;s A Grand Wedding Or A Professional Gathering, Experience Timeless Elegance And Refined Luxury In Every Corner.
            </p>

            {/* 3 Frosted Glass Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-4xl mx-auto mb-10 sm:mb-12">

              {/* Card 1: Capacity */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xl hover:bg-white/15 transition-all duration-300">
                <Users className="w-8 h-8 text-[#38BDF8] mb-3" />
                <h3
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal mb-1.5"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  CAPACITY
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light">
                  Up To 100 Persons
                </p>
              </div>

              {/* Card 2: Events */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xl hover:bg-white/15 transition-all duration-300">
                <Calendar className="w-8 h-8 text-[#38BDF8] mb-3" />
                <h3
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal mb-1.5"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  EVENTS
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light">
                  Conference &amp; Board Rooms And Corporate Events
                </p>
              </div>

              {/* Card 3: Full Service */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xl hover:bg-white/15 transition-all duration-300">
                <Music className="w-8 h-8 text-[#38BDF8] mb-3" />
                <h3
                  className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-white font-normal mb-1.5"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  FULL SERVICE
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light">
                  Complete Event Setup
                </p>
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

        {/* 4. Section: Premium Facilities */}
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#0C64AB]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                PREMIUM FACILITIES
              </h2>
            </div>

            {/* 6 Facilities Cards matching exact image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {FACILITIES_DATA.map((facility, idx) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-[14px] pt-9 pb-8 px-6 sm:px-7 flex flex-col items-center text-center border border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300"
                  >
                    {/* Circular Blue Ring */}
                    <div className="w-[76px] h-[76px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-[#0C64AB] flex items-center justify-center mb-5 shrink-0 bg-white">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#0C64AB]" />
                    </div>
                    {/* Title */}
                    <h3
                      className="font-bebas text-[22px] sm:text-[24px] uppercase tracking-[0.5px] text-[#1E1E1E] font-normal leading-tight mb-2.5"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {facility.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-[#666666] leading-[1.6] font-normal max-w-[290px] mx-auto">
                      {facility.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: Our Gallery */}
        <section
          id="gallery"
          className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24 text-white overflow-hidden scroll-mt-20"
          style={{
            backgroundImage: "url('/images/site/bliss-gallery-bg.webp')",
          }}
        >
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                OUR <span className="text-[#38BDF8]">GALLERY</span>
              </h2>
              <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-3" />
            </div>

            {/* 2-Column Grid matching user's layout: 2 in top row, 1 in bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden rounded-none shadow-xl cursor-pointer aspect-[16/10] bg-neutral-900"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* 7. Footer */}
      <Footer
        logoSrc="/images/site/bliss-banquet-logo.png"
        customPhone="02066935000 / 7058688561"
        customEmail="Grand@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 8. Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
      />
    </div>
  );
}

