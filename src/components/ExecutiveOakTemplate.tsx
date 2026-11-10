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
  Presentation,
  Briefcase,
  Building2,
  Cake,
  HeartHandshake,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const FACILITIES_DATA = [
  {
    icon: Users,
    title: "CORPORATE GET TOGETHER",
    description: "A Professional Yet Relaxed Space For Team Bonding And Networking Events.",
  },
  {
    icon: Briefcase,
    title: "ANNUAL MEETINGS",
    description: "Fully Equipped Venue For Focused, Productive, And Seamless Yearly Reviews.",
  },
  {
    icon: Presentation,
    title: "CONFERENCE HALL",
    description: "Modern Hall With AV Support, Perfect For Seminars And Presentations.",
  },
  {
    icon: Building2,
    title: "BANQUET HALL",
    description: "Elegant Setting Ideal For Grand Celebrations And Social Gatherings.",
  },
  {
    icon: Cake,
    title: "BIRTHDAY CELEBRATION",
    description: "Celebrate Special Moments In A Stylish And Fun-Filled Atmosphere.",
  },
  {
    icon: HeartHandshake,
    title: "ENGAGEMENTS",
    description: "Create Lasting Memories In An Intimate, Beautifully Decorated Venue.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/Oak-Party-Hall-1-scaled.jpg",
    alt: "Corporate Meeting Hall in Hinjawadi Pune - Oak Executive Tamanna",
    caption: "Spacious party hall arrangement with white linen chair covers and ambient ceiling lighting",
  },
  {
    src: "/images/site/Oak-Party-Hall1-scaled.jpg",
    alt: "Oak Party Hall Executive Tamanna Hotel",
    caption: "Full banquet view with decorative balloon accents and versatile seating options",
  },
];

export default function ExecutiveOakTemplate() {
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

      {/* 2. Navbar with Executive Tamanna Hotel Logo */}
      <Navbar
        logoSrc="/images/site/4-3-2.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section matching Elementor / Live Site */}
        <section
          className="relative min-h-[720px] lg:min-h-[820px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden py-16 sm:py-24"
          style={{
            backgroundImage: "url('/images/site/Oak-Party-Hall1-1-scaled.jpg')",
          }}
        >
          {/* Dark overlay: 0.65 opacity black */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* Location Tag */}
            <div className="flex items-center justify-center gap-2 text-white font-poppins text-sm sm:text-base font-normal mb-2 sm:mb-3">
              <MapPin className="w-[18px] h-[18px] text-[#8BB6DA] shrink-0" />
              <span>Located In Executive Tamanna Hotel</span>
            </div>

            {/* Heading: OAK */}
            <h1
              className="font-bebas text-6xl sm:text-8xl lg:text-[95px] uppercase font-normal leading-none lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] text-[#FFFFFFF5] mb-2 sm:mb-3 drop-shadow-md"
              style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
            >
              OAK
            </h1>

            {/* Thin White Divider */}
            <div className="w-[120px] sm:w-[130px] h-[1px] bg-white mx-auto my-3 sm:my-4" />

            {/* Subtitle */}
            <p className="max-w-[760px] mx-auto text-[14px] sm:text-[16px] text-[#ECE9E9] font-poppins font-normal leading-[1.8] mb-8 sm:mb-10 text-center">
              Discover Oak At Executive Tamanna Hotel A Versatile Venue Designed For Memorable Weddings, Business Events, And Intimate Celebrations. With Contemporary Charm And Impeccable Hospitality, Every Event Is Elevated With Style And Ease.
            </p>

            {/* 3 Frosted Glass Info Cards */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {/* Card 1: BANQUET HALLS CAPACITY */}
              <div className="bg-white/[0.21] backdrop-blur-[6.9px] border border-white/20 rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-2 items-center">
                <Users className="w-8 h-8 text-[#8BB6DA] mb-1" />
                <h3
                  className="font-bebas text-xl sm:text-[22px] uppercase tracking-[0.5px] text-white font-normal leading-tight"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  BANQUET HALLS CAPACITY
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] text-white font-normal">
                  50 Persons To 100 Persons
                </p>
              </div>

              {/* Card 2: SITTING CAPACITY */}
              <div className="bg-white/[0.21] backdrop-blur-[6.9px] border border-white/20 rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-2 items-center">
                <Users className="w-8 h-8 text-[#8BB6DA] mb-1" />
                <h3
                  className="font-bebas text-xl sm:text-[22px] uppercase tracking-[0.5px] text-white font-normal leading-tight"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  SITTING CAPACITY
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] text-white font-normal">
                  Up To 80 Persons
                </p>
              </div>

              {/* Card 3: MARRIAGE FUNCTION CAPACITY */}
              <div className="bg-white/[0.21] backdrop-blur-[6.9px] border border-white/20 rounded-[10px] p-6 sm:p-7 flex flex-col justify-center text-center shadow-lg space-y-2 items-center">
                <Presentation className="w-8 h-8 text-[#8BB6DA] mb-1" />
                <h3
                  className="font-bebas text-xl sm:text-[22px] uppercase tracking-[0.5px] text-white font-normal leading-tight"
                  style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                >
                  MARRIAGE FUNCTION CAPACITY
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] text-white font-normal">
                  Up To 100 Persons
                </p>
              </div>
            </div>

            {/* Action Buttons: ENQUIRE NOW + VIEW GALLERY */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-[50px] bg-[#0C64AB] hover:bg-[#084572] text-white font-bebas text-[18px] font-medium tracking-[0.8px] uppercase shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                ENQUIRE NOW
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-[50px] bg-transparent hover:bg-[#0C64AB] text-white border border-white font-bebas text-[18px] font-medium tracking-[0.8px] uppercase shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: ELEGANCE MEETS CELEBRATION matching Screenshot 2 (6 Cards Grid) */}
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>ELEGANCE MEETS </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>CELEBRATION</span>
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

        {/* 5. Section: OUR GALLERY matching Screenshot 2 (2 Images Grid) */}
        <section
          id="gallery"
          className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24 text-white overflow-hidden scroll-mt-20"
          style={{
            backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
          }}
        >
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

            {/* Gallery Image Grid matching Screenshot 2 (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-[1000px] mx-auto">
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

      {/* 6. Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Photo Container */}
          <div
            className="relative max-w-[90vw] max-h-[82vh] w-full h-[70vh] flex items-center justify-center"
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

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter badge */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-poppins bg-black/50 px-4 py-1.5 rounded-full">
            {activeLightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <Footer
        logoSrc="/images/site/4-3-2.png"
        activeLink="Executive Tamanna"
        customPhone="02066751900 / 9156828482"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 8. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Executive Tamanna Hotel"
      />
    </div>
  );
}

