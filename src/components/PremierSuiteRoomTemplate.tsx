"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  Star,
  Building2,
  Bath,
  Sparkles,
  BedDouble,
  Tv,
  Clock,
  Refrigerator,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const ROOM_FEATURES = [
  {
    icon: Building2,
    title: "480 Sq Ft Luxurious Room",
  },
  {
    icon: Bath,
    title: "Bath Tub",
  },
  {
    icon: Sparkles,
    title: "Theme-Based Rooms",
  },
  {
    icon: BedDouble,
    title: "Double Bed",
  },
  {
    icon: Tv,
    title: "LED TV",
  },
  {
    icon: Clock,
    title: "24-Hour Room Service",
  },
  {
    icon: Refrigerator,
    title: "Mini Fridge",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/premier-suite-gal-1.webp",
    alt: "Top Suite Hotel Room in Hinjawadi Pune",
    caption: "Theme-Based Master Suite with Spacious Lounge Seating",
  },
  {
    src: "/images/site/premier-suite-gal-2.webp",
    alt: "Best Suite Room in Hinjawadi Pune",
    caption: "Romantic Round Bed Suite with Warm Ambient Backlighting",
  },
  {
    src: "/images/site/premier-suite-gal-3.webp",
    alt: "Top Suite Room Bathroom in Hinjawadi Pune",
    caption: "Luxury En-Suite Bathroom with Deep Soaking Bathtub",
  },
  {
    src: "/images/site/premier-suite-gal-4.webp",
    alt: "Premier Tamanna Suite Living Area",
    caption: "Modern Living Lounge with Plush Sofas and Entertainment Center",
  },
  {
    src: "/images/site/premier-suite-gal-5.webp",
    alt: "Premier Tamanna Suite Modern Vanity",
    caption: "Double Vanity Basin with Backlit LED Mirror",
  },
  {
    src: "/images/site/premier-suite-gal-6.webp",
    alt: "Premier Tamanna Suite Glass Shower Cubicle",
    caption: "Frameless Glass Shower Enclosure with Rain Showerhead",
  },
  {
    src: "/images/site/premier-suite-gal-7.webp",
    alt: "Best Suite Hotel Room in Hinjawadi Pune",
    caption: "Elegant Walk-in Closet and Luxury Dressing Area",
  },
  {
    src: "/images/site/premier-suite-gal-8.webp",
    alt: "Premier Tamanna Suite Round Bed Evening Setup",
    caption: "Heart-Shaped Floral Swans on Round Luxury Bed",
  },
  {
    src: "/images/site/premier-suite-gal-9.webp",
    alt: "Premier Tamanna Hotel Guest Floor Hallway",
    caption: "Well-Lit Guest Corridor with Premium Carpeting",
  },
];

export default function PremierSuiteRoomTemplate() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const showNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [activeLightboxIndex]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-poppins selection:bg-[#0C64AB] selection:text-white">
      {/* 1. TOP BAR */}
      <TopBar />

      {/* 2. NAVBAR with Premier Tamanna Hotel Logo matching Image 2 */}
      <Navbar
        logoSrc="/images/site/2-6-1.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER matching Image 2 */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/premier-suite-hero.webp')",
        }}
      />

      {/* 4. MAIN CONTENT: Left Column (60%) + Right Non-Sticky Card (40%) matching Image 3 */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            
            {/* Left Column (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col">
              
              {/* Feature Bed Photo matching Image 3 (500px height) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/premier-suite-overview.webp"
                  alt="Premier Tamanna Hotel Theme-Based Suite Room"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: SUITE ROOM (Bebas Neue with dual blue color matching Image 3) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>SUITE </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
              </h1>

              {/* 5-Star Rating matching Image 3 */}
              <div className="flex items-center gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Paragraph 1 matching Image 3 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5">
                Step Into A World Of Elegance, Imagination, And Comfort With The Theme-Based Suite Rooms At Premier Tamanna. Designed To Offer A Unique Experience To Every Guest, These Suites Blend Premium Hospitality With Artistic Flair, Making Them The Top Choice For Those Seeking The Best Suite Hotel Room In Hinjawadi Pune.
              </p>

              {/* Paragraph 2 matching Image 3 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                Each Suite Is Spread Across 480 Sq. Ft. And Reflects A Distinctive Theme, From Calming Pastels To Vibrant Modern Designs, Catering To Diverse Moods And Preferences. Whether You&apos;re Traveling For Business, On A Romantic Getaway, Or Celebrating A Special Occasion, These Thoughtfully Designed Spaces Offer An Extraordinary Stay That Feels Personal And Memorable.
              </p>

              {/* ROOM FEATURE Heading matching Image 3 */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 7 Feature Boxes matching Image 3 (3 columns, rounded-[2px], border) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {ROOM_FEATURES.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2E2E2] rounded-[2px] px-5 sm:px-6 py-4 flex items-center gap-4 h-[84px] sm:h-[88px] transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[#0C64AB] shrink-0" strokeWidth={1.75} />
                      <div className="font-poppins text-[15px] sm:text-[16px] text-[#1A1B1A] font-medium leading-[1.3]">
                        {feat.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subsequent Paragraphs matching Image 3 */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  The Suite Features A Plush Double Bed, Luxurious Bath With A Bathtub, LED Television, Mini Fridge, And Dedicated Workspaces. From Comfortable Lighting To Cozy Interiors, Every Detail Is Curated To Offer Relaxation And Indulgence. High-Speed Leased-Line Wi-Fi And 24-Hour Room Service Ensure You&apos;re Always Connected And Cared For.
                </p>
                <p>
                  Guests Staying In Our Theme-Based Suites Also Enjoy Access To All Premier Tamanna Amenities, Including A Multi-Cuisine Restaurant And Bar, Business Center, Conference Rooms, And Ample Parking. In-House Laundry Services, Elevator Access, And Private Vehicle Facilities Add To The Ease Of Your Stay.
                </p>
                <p>
                  Located In The Heart Of The City&apos;s Tech Hub, Premier Tamanna Is Ideal For Professionals, Couples, And Families Looking For The Best Suite Hotel Room In Hinjawadi Pune. Its Proximity To Major Business Parks And Entertainment Zones Ensures Convenience While A Peaceful Environment Guarantees Rest.
                </p>
                <p>
                  What Makes These Suites Truly Special Is Their Ability To Transform A Simple Stay Into An Immersive Experience. Whether You&apos;re Working Or Unwinding, You&apos;ll Feel Inspired By The Theme And Comfort Offered.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching Image 3 (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="tel:02066935000"
                  className="inline-flex items-center gap-4 bg-[#0C64AB] hover:bg-[#084572] text-white py-3.5 px-6 sm:px-8 rounded-l-[93px] rounded-r-none transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div
                    className="font-bebas text-[18px] sm:text-[20px] uppercase tracking-[1px] leading-tight text-white text-left"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    <div>BOOKING OF HOTEL ROOMS :</div>
                    <div className="font-normal text-white">02066935000/02066539888/02066751900</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Non-Sticky Booking Card fixed beside the image matching Image 3 */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-[#F3F4F8] p-8 sm:p-10 md:h-[500px] text-center rounded-[4px] flex flex-col items-center justify-center">
                {/* Blue Hotel Icon */}
                <div className="text-[#0C64AB] mb-4">
                  <Building2 className="w-12 h-12 text-[#0C64AB]" strokeWidth={1.5} />
                </div>

                {/* Card Title */}
                <h3
                  className="font-bebas text-[22px] sm:text-[24px] uppercase tracking-[1px] text-[#1A1B1A] font-normal mb-2"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  BOOK YOUR PERFECT GETAWAY NOW!
                </h3>

                {/* Subtitle */}
                <p className="font-poppins text-slate-500 text-[14px] leading-relaxed mb-6 font-normal max-w-[280px]">
                  Click below to check room availability and book your dream vacation today
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="py-3 px-8 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bebas text-[16px] uppercase tracking-[1px] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 9-IMAGE PHOTO GALLERY on Navy Wave Texture Background matching Image 3 */}
      <section
        className="w-full py-16 sm:py-20 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/bliss-gallery-bg.webp')",
        }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] overflow-hidden rounded-none shadow-xl cursor-pointer bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Light Black Hover Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX ZOOM MODAL */}
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
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
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
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Photo Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh]">
              <Image
                src={GALLERY_IMAGES[activeLightboxIndex].src}
                alt={GALLERY_IMAGES[activeLightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-sm sm:text-base font-medium mt-3 text-center">
              {GALLERY_IMAGES[activeLightboxIndex].caption}
            </p>
            <p className="text-white/60 text-xs mt-1">
              {activeLightboxIndex + 1} of {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}

      {/* 7. FOOTER matching Image 4 */}
      <Footer
        logoSrc="/images/site/2-6-1.png"
        customPhone="02069525400 / 8956916914"
        customEmail="Premier@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 8. BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel="Premier Tamanna Hotel"
      />
    </div>
  );
}

