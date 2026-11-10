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
  Building2,
  Sparkles,
  Landmark,
  Music,
  MapPin,
  Mic,
  Tv,
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

// Head table / VIP seating icon matching Elementor / user screenshot
function HeadTableIcon({ className = "w-8 h-8 text-[#0C64AB]" }: { className?: string }) {
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
      <rect x="4" y="11" width="16" height="7" rx="1.5" />
      <path d="M7 11V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5" />
      <path d="M12 11V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5" />
      <line x1="6" y1="18" x2="6" y2="20" />
      <line x1="18" y1="18" x2="18" y2="20" />
    </svg>
  );
}

// Dance floor icon matching Elementor / user screenshot
function DanceFloorIcon({ className = "w-8 h-8 text-[#0C64AB]" }: { className?: string }) {
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

const EXPERIENCE_DATA = [
  {
    icon: (props: { className?: string }) => <Users {...props} strokeWidth={1.8} />,
    title: "150 PERSONS CAPACITY",
    description: "Perfect For Medium To Large Gatherings",
  },
  {
    icon: (props: { className?: string }) => <Building2 {...props} strokeWidth={1.8} />,
    title: "OPEN TO SKY",
    description: "Beauty Of The Illuminating Stars Above",
  },
  {
    icon: (props: { className?: string }) => <Sparkles {...props} strokeWidth={1.8} />,
    title: "IDEAL FOR CELEBRATIONS",
    description: "Weddings, Corporate Events & Special Occasions",
  },
  {
    icon: (props: { className?: string }) => <Landmark {...props} strokeWidth={1.8} />,
    title: "BANQUET FACILITY",
    description: "Attached Banquet Facility Available",
  },
];

const FACILITIES_DATA = [
  {
    icon: (props: { className?: string }) => <Music {...props} strokeWidth={1.8} />,
    title: "DJ MUSIC SYSTEM",
    description: "Professional Sound System For Your Party",
  },
  {
    icon: (props: { className?: string }) => <Mic {...props} strokeWidth={1.8} />,
    title: "MICROPHONES",
    description: "Wireless And Wired Microphones Available",
  },
  {
    icon: (props: { className?: string }) => <Tv {...props} strokeWidth={1.8} />,
    title: "PROJECTOR & SCREEN",
    description: "High-Quality Projection For Presentations",
  },
  {
    icon: PodiumIcon,
    title: "PODIUM SETUP",
    description: "Professional Podium For Speeches",
  },
  {
    icon: HeadTableIcon,
    title: "HEAD TABLES",
    description: "Elegant Seating Arrangements",
  },
  {
    icon: DanceFloorIcon,
    title: "DANCE FLOOR",
    description: "Spacious Area For Dancing And Entertainment",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/pool-gallery-1.webp",
    alt: "Pool Side Party Venue at Grand Tamanna Hotel Hinjawadi",
    caption: "Rooftop Pool with Open Sky Lounge",
  },
  {
    src: "/images/site/pool-gallery-2.webp",
    alt: "Nighttime Illuminated Pool at Grand Tamanna Hotel",
    caption: "Illuminated Pool with Ambient Night Lighting",
  },
  {
    src: "/images/site/pool-gallery-3.webp",
    alt: "Poolside Terrace with Overhead Fabric Drapes",
    caption: "Terrace Pool with Colorful Overhead Draping",
  },
  {
    src: "/images/site/pool-gallery-4.webp",
    alt: "Overhead Pool with Wooden Deck Hinjawadi Pune",
    caption: "Rooftop Wooden Sun Deck & Pool",
  },
  {
    src: "/images/site/pool-gallery-5.webp",
    alt: "Skyline View from Pool Terrace Grand Tamanna",
    caption: "Panoramic Hills & Skyline View from Pool Terrace",
  },
  {
    src: "/images/site/pool-gallery-6.webp",
    alt: "Night Pool Party Atmosphere Grand Tamanna Hotel",
    caption: "Glass Dance Floor over Pool for Night Parties",
  },
  {
    src: "/images/site/pool-gallery-7.webp",
    alt: "Daytime Swimming Pool Hinjawadi Pune",
    caption: "Daytime Open-Air Swimming Pool",
  },
  {
    src: "/images/site/pool-gallery-8.webp",
    alt: "Stage Setup on Poolside Grand Tamanna Hotel",
    caption: "Celebration Stage Setup by the Poolside",
  },
  {
    src: "/images/site/pool-gallery-9.webp",
    alt: "Poolside Cabana with Turquoise Drapes",
    caption: "Poolside Cabana & Lounge Seating",
  },
  {
    src: "/images/site/pool-gallery-10.webp",
    alt: "Aerial View of Poolside Seating Area",
    caption: "Aerial Perspective of Poolside Terrace Seating",
  },
  {
    src: "/images/site/pool-gallery-11.webp",
    alt: "Terrace Banquet Dining Setup at Poolside",
    caption: "Terrace Banquet Chairs & Dining Setup",
  },
  {
    src: "/images/site/pool-gallery-12.webp",
    alt: "Wedding Ceremony Mandap by the Pool",
    caption: "Ceremony Mandap with Floral Arch by the Pool",
  },
];

export default function PoolSidePartyTemplate() {
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

      {/* 2. Navbar with Grand Tamanna Hotel official logo */}
      <Navbar
        logoSrc="/images/site/grand-tamanna-official-logo.png"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section matching Image 2 */}
        <section
          className="relative min-h-[650px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/pool-hero-bg.webp')",
          }}
        >
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90 mb-4 sm:mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Located On 8th Floor Of Grand Tamanna</span>
            </div>

            {/* Heading: POOL SIDE PARTY */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[100px] uppercase font-normal tracking-[3px] sm:tracking-[5px] text-white leading-none mb-5 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              POOL SIDE <span className="text-[#0071C1]">PARTY</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-10 sm:mb-12 text-center drop-shadow-md">
              Hotel Open To Sky With Beauty Of The Illuminating Stars Party Capacity Up To: 150 Persons
            </p>

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

        {/* 4. Section: Stunning Pool Side Experience matching Image 4 */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#0C64AB]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                STUNNING POOL <span className="text-[#0071C1]">SIDE EXPERIENCE</span>
              </h2>
            </div>

            {/* 4 Experience Cards (1 Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERIENCE_DATA.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-[14px] pt-9 pb-8 px-5 sm:px-6 flex flex-col items-center text-center border border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300"
                  >
                    {/* Circular Blue Ring */}
                    <div className="w-[72px] h-[72px] rounded-full border-2 border-[#0C64AB] flex items-center justify-center mb-5 shrink-0 bg-white">
                      <IconComponent className="w-8 h-8 text-[#0C64AB]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bebas text-[20px] sm:text-[22px] uppercase tracking-[0.5px] text-[#1E1E1E] font-normal leading-tight mb-2.5"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#666666] leading-[1.6] font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: Premium Facilities matching Image 4 (6 Cards 3x2) */}
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

            {/* 6 Facilities Cards in 3x2 Grid */}
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

        {/* 6. Section: Our Gallery matching Image 4 (12 Images 3x4 Grid) */}
        <section
          id="gallery"
          className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24 text-white overflow-hidden scroll-mt-20"
          style={{
            backgroundImage: "url('/images/site/bliss-gallery-bg.webp')",
          }}
        >
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-[#061727]/85 pointer-events-none" />

          <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                OUR <span className="text-[#38BDF8]">GALLERY</span>
              </h2>
              <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-3" />
            </div>

            {/* 12 Images 3-Column Grid (4 rows of 3) matching user screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5">
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

        {/* 7. Section: Detailed About / Overview */}
        <section className="w-full bg-white py-14 sm:py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              <p>
                Looking for an unforgettable venue to host your next celebration? The Poolside Party Area at Grand Tamanna Hotel is the perfect destination. Perched on the 8th floor of the hotel, this open-air rooftop venue provides a stunning view of the night sky and an invigorating ambiance that sets the mood for any celebration. It is no surprise that Grand Tamanna is among the most sought-after hotel poolside venues in Hinjawadi Pune.
              </p>
              <p>
                Ideal for birthdays, engagement parties, cocktail evenings, and corporate mixers, the poolside area can comfortably accommodate up to 150 guests. Surrounded by ambient lighting and open to the stars, it offers a luxurious yet relaxed atmosphere that elevates your events into extraordinary experiences. The venue is fully customizable with banquet arrangements, round tables, lounge seating, and elegant décor.
              </p>
              <p>
                The Poolside Party Area is supported by modern amenities such as DJ music setup, microphones, projector, screen, podium, and a dedicated service team to manage the flow of your event. Whether you prefer a casual buffet or a formal sit-down dinner, our in-house catering team delivers a delicious spread tailored to your taste and theme.
              </p>
              <p>
                What makes this space truly unique is the seamless integration of comfort and convenience. As part of Grand Tamanna, guests have access to premium accommodations, valet parking, and full-service hospitality. Our experienced event team takes care of everything, from setup to execution, so you can enjoy your celebration stress-free.
              </p>
              <p>
                With its rooftop setting, great food, and warm service, the Poolside Party Area continues to be a favorite for those seeking a memorable venue with class, comfort, and complete event support.
              </p>

              {/* Action CTA Box */}
              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">
                    Planning An Event At The Poolside?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Connect with our dedicated events team to check date availability and packages.
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="shrink-0 px-6 py-2.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer matching Image 3 */}
      <Footer
        logoSrc="/images/site/grand-tamanna-official-logo.png"
        customPhone="02066935000 / 7058688561"
        customEmail="Grand@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 9. Lightbox Zoom Modal */}
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

