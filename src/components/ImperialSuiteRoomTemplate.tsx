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
  BedDouble,
  Tv,
  Clock,
  Wifi,
  Phone,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Armchair,
} from "lucide-react";

// Living Room / Separate Area Icon matching huge-hotel-01
function LivingAreaIcon({ className = "w-6 h-6 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sofa / Lounge Seat */}
      <path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
      <path d="M4 19v2" />
      <path d="M20 19v2" />
    </svg>
  );
}

// Bathtub / Bathroom Amenities Icon matching huge-bathtub-02
function BathtubIcon({ className = "w-6 h-6 text-[#0C64AB]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z" />
      <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </svg>
  );
}

const ROOM_FEATURES = [
  {
    icon: LivingAreaIcon,
    title: "Separate Living Area",
  },
  {
    icon: BedDouble,
    title: "King Size Bed",
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
    icon: BathtubIcon,
    title: "Premium Bathroom Amenities",
  },
  {
    icon: Wifi,
    title: "Free Leased-line Wi-Fi",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/ITH-0932.webp",
    alt: "Imperial Tamanna Suite Room Living Area",
  },
  {
    src: "/images/site/ITH-1082.webp",
    alt: "Imperial Tamanna Suite Room Master Bed and Bath Entrance",
  },
  {
    src: "/images/site/ITH-1072.webp",
    alt: "Imperial Tamanna Suite Room Bedroom Suite",
  },
  {
    src: "/images/site/ITH-1062.webp",
    alt: "Imperial Tamanna Suite Room Bedroom Closet",
  },
  {
    src: "/images/site/ITH-1052.webp",
    alt: "Imperial Tamanna Suite Room Marble Bathroom Shower",
  },
  {
    src: "/images/site/ITH-1042.webp",
    alt: "Imperial Tamanna Suite Room Toilet & Modern Fittings",
  },
  {
    src: "/images/site/ITH-1032.webp",
    alt: "Imperial Tamanna Suite Room Vanity Counter & Tea Bar",
  },
  {
    src: "/images/site/ITH-1022.webp",
    alt: "Imperial Tamanna Suite Room Headboard & Curtains",
  },
  {
    src: "/images/site/ITH-1012.webp",
    alt: "Imperial Tamanna Suite Room King Bed Setup",
  },
  {
    src: "/images/site/ITH-1002.webp",
    alt: "Imperial Tamanna Suite Room Plush Bedding",
  },
  {
    src: "/images/site/ITH-0992.webp",
    alt: "Imperial Tamanna Suite Room Entertainment & Vanity Space",
  },
  {
    src: "/images/site/ITH-0982.webp",
    alt: "Imperial Tamanna Suite Room Bedroom with Bathroom View",
  },
  {
    src: "/images/site/ITH-0972.webp",
    alt: "Imperial Tamanna Suite Room Bedroom Window View",
  },
  {
    src: "/images/site/ITH-0962.webp",
    alt: "Imperial Tamanna Suite Room Wooden Wall Accent & Bed",
  },
  {
    src: "/images/site/ITH-0952.webp",
    alt: "Imperial Tamanna Suite Room Spacious Bedroom Angle",
  },
  {
    src: "/images/site/ITH-0942.webp",
    alt: "Imperial Tamanna Suite Room Suite Entrance and Bedroom",
  },
  {
    src: "/images/site/ITH-0932.webp",
    alt: "Imperial Tamanna Suite Room Open Space & Sunlight",
  },
  {
    src: "/images/site/ITH-0672.webp",
    alt: "Imperial Tamanna Suite Room Premium Shower & Washroom",
  },
];

export default function ImperialSuiteRoomTemplate() {
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

      {/* 2. NAVBAR with Imperial Tamanna Hotel Logo matching Screenshot */}
      <Navbar
        logoSrc="/images/site/61.png"
        activeNav="Hotels"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* 3. HERO IMAGE BANNER matching Image 1 */}
      <section
        className="w-full relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/ITH-0982.webp')",
        }}
      />

      {/* 4. MAIN CONTENT: Left Column (60%) + Right Non-Sticky Card (40%) matching Image 2 */}
      <section className="py-12 sm:py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left Column (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col">
              {/* Feature Photo matching Image 2 (500px height) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src="/images/site/ITH-0942.webp"
                  alt="Imperial Tamanna Hotel Suite Room"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Title: SUITE ROOM (Bebas Neue with dual blue color matching Image 2) */}
              <h1
                className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.92] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mt-8 mb-3 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>SUITE </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>ROOM</span>
              </h1>

              {/* 5-Star Rating matching Image 2 */}
              <div className="flex items-center gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Paragraph 1 matching Image 2 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5">
                Experience The Highest Level Of Comfort, Space, And Sophistication In Our Elegantly Designed Suite Rooms. Thoughtfully Crafted To Meet The Expectations Of Modern Business And Leisure Travelers, Offering A Perfect Blend Of Luxury, Privacy, And Functionality. These Suites Provide An Inviting Retreat Where Guests Can Relax, Work, And Unwind In Complete Comfort. Whether You Are Visiting Pune For A Corporate Engagement, A Family Vacation, A Special Occasion, Or An Extended Stay, Our Suite Rooms Are Designed To Deliver A Premium Hospitality Experience.
              </p>

              {/* Paragraph 2 matching Image 2 */}
              <p className="font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                The Suite Room Features A Spacious Layout With A Separate Living Area And Bedroom, Creating A Distinct Sense Of Exclusivity And Convenience. The Well-Appointed Living Space Offers Comfortable Seating, Making It An Ideal Setting For Informal Meetings, Entertaining Visitors, Or Simply Enjoying Quiet Moments After A Busy Day. The Elegantly Furnished Bedroom Is Designed To Promote Relaxation And Restful Sleep, Featuring A Plush King-Size Bed With Premium Linens And Soft Furnishings That Create A Warm And Welcoming Ambience.
              </p>

              {/* ROOM FEATURE Heading matching Image 2 */}
              <h2
                className="font-bebas text-3xl sm:text-[36px] uppercase tracking-[0.5px] text-[#0C64AB] mb-5 font-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                ROOM FEATURE
              </h2>

              {/* 6 Feature Boxes matching Image 2 (3 columns, rounded-[2px], border) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                {ROOM_FEATURES.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2E2E2] rounded-[2px] px-5 sm:px-6 py-4 flex items-center gap-4 h-[72px] sm:h-[76px] transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[#0C64AB] shrink-0" />
                      <div className="font-poppins text-[15px] sm:text-[16px] text-[#1A1B1A] font-medium leading-[1.3]">
                        {feat.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subsequent Paragraphs matching Image 2 */}
              <div className="space-y-6 font-poppins text-[#54595F] text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-8">
                <p>
                  Every Suite Room Is Equipped With A Range Of Modern Amenities To Ensure A Seamless And Enjoyable Stay. Guests Can Enjoy Complimentary High-Speed Wi-Fi Connectivity, Allowing Them To Stay Connected With Work, Family, And Friends Throughout Their Visit. An LED Television With A Variety Of Entertainment Channels Provides In-Room Entertainment, While The Dedicated Work Desk Offers A Comfortable And Productive Workspace For Business Travelers. Tea And Coffee-Making Facilities Are Also Provided, Enabling Guests To Enjoy A Refreshing Beverage At Their Convenience.
                </p>
                <p>
                  The Attached Bathroom Is Thoughtfully Designed With Premium Fittings And Quality Amenities, Offering Both Comfort And Convenience. With Ample Space, Modern Fixtures, Fresh Towels, And A Continuous Hot And Cold Water Supply, Guests Can Enjoy A Refreshing And Relaxing Experience Throughout Their Stay. The Suite&apos;s Elegant Interiors, Contemporary Décor, And Carefully Selected Furnishings Further Enhance The Overall Atmosphere, Creating A Refined Environment That Reflects Both Style And Comfort.
                </p>
                <p>
                  Large Windows Allow Natural Light To Flow Into The Room, Creating A Bright And Refreshing Ambience While Offering Pleasant Views Of The Surrounding Area. Combined With Efficient Air Conditioning And Attentive Room Service, The Suite Room Ensures A Comfortable Stay In Every Season. Guests Also Benefit From Access To The Hotel&apos;s Various Facilities, Including Dining Options, Banquet And Conference Facilities, Parking, And Personalized Hospitality Services.
                </p>
                <p>
                  Whether You Are Preparing For An Important Business Meeting, Celebrating A Special Occasion, Or Simply Seeking A Relaxing Getaway, Our Suite Rooms Provide The Perfect Balance Of Luxury, Convenience, And Personalized Comfort. With Spacious Interiors, Premium Amenities, And Exceptional Service, The Suite Room Promises A Memorable And Rewarding Stay Experience That Exceeds Expectations.
                </p>
              </div>

              {/* Booking Phone Badge Pill Button matching Image 2 (rounded-l-full rounded-r-none) */}
              <div className="pt-2 flex justify-start">
                <a
                  href="tel:7028884375"
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
                    <div className="font-normal text-white">70288 84375</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Non-Sticky Booking Card fixed beside the image matching Image 2 */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-[#F8F9FA] p-8 sm:p-10 text-center rounded-[4px] flex flex-col items-center justify-center border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
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

                {/* Action Button */}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center justify-center bg-[#0C64AB] hover:bg-[#084572] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION matching Image 3 (18 Images on Navy Wave Background) */}
      <section
        className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
        }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid (3 columns, 18 images matching Image 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden rounded-none shadow-md cursor-pointer aspect-[4/3] bg-neutral-900"
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

      {/* 6. FOOTER matching Image 4 */}
      <Footer
        logoSrc="/images/site/61.png"
        customTagline="The Imperial Tamanna Hotel Enjoys A Strategic Location Placing Guests In The Center Of One Of Pune Most Important Industrial And Commercial Corridors."
        customPhone="70288 84375"
        customEmail="imperial@tamannahotels.com"
        customRoomBookingPhone="70288 84375"
        customBanquetBookingPhone="70288 84317 / 70288 84371"
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
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
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

          {/* Active Image Container */}
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

      {/* 8. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

