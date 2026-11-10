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
  Star,
  Building,
  Music,
  MapPin,
  Utensils,
  Wifi,
  Car,
  ShieldCheck,
  Clock,
  Mail,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const AMENITIES_DATA = [
  {
    icon: (props: { className?: string }) => <Music {...props} strokeWidth={1.8} />,
    title: "PREMIUM SOUND SYSTEM",
    description: "State-Of-The-Art DJ Equipment, Professional Mics, And Crystal-Clear Audio For Unforgettable Nights.",
  },
  {
    icon: (props: { className?: string }) => <Utensils {...props} strokeWidth={1.8} />,
    title: "GOURMET EXPERIENCES & LUXE SEATING",
    description: "Gourmet Menus And Premium Beverages, Paired With Plush Outdoor Seating And A Luxury Bar.",
  },
  {
    icon: (props: { className?: string }) => <Wifi {...props} strokeWidth={1.8} />,
    title: "HIGH-SPEED WIFI",
    description: "Stay Connected With Complimentary High-Speed Internet Throughout The Venue.",
  },
  {
    icon: (props: { className?: string }) => <Car {...props} strokeWidth={1.8} />,
    title: "VALET PARKING",
    description: "Convenient Valet Parking Service For A Hassle-Free Arrival And Departure.",
  },
  {
    icon: (props: { className?: string }) => <ShieldCheck {...props} strokeWidth={1.8} />,
    title: "SECURITY & SAFETY",
    description: "24/7 Professional Security Ensuring A Safe And Secure Environment For All Guests.",
  },
  {
    icon: (props: { className?: string }) => <Clock {...props} strokeWidth={1.8} />,
    title: "EXTENDED HOURS",
    description: "Open Late Into The Night To Keep The Party Going With Flexible Event Timings.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/site/nirvana-gal-1.webp",
    alt: "Nirvana Lounge Bar Entrance & Signboard",
    caption: "Lush Greenery Pathway to Nirvana Lounge Bar",
  },
  {
    src: "/images/site/nirvana-gal-2.webp",
    alt: "Nirvana Lounge Arched Wooden Bar Backlight",
    caption: "Arched Wooden Wine & Cocktail Bar",
  },
  {
    src: "/images/site/nirvana-gal-3.webp",
    alt: "Purple Neon Dance Floor Nirvana Lounge",
    caption: "Vibrant DJ Stage with Neon Ambient Lighting",
  },
  {
    src: "/images/site/nirvana-gal-4.webp",
    alt: "Modern Lounge Sofas with Geometric Lighting",
    caption: "Plush Velvet Sofas with Backlit Wall Accents",
  },
  {
    src: "/images/site/nirvana-gal-5.webp",
    alt: "Party Dance Floor with Spotlights",
    caption: "Spacious Dance Floor with Dynamic Lighting",
  },
  {
    src: "/images/site/nirvana-gal-6.webp",
    alt: "Warm Timber Shelves Bar Nirvana Lounge",
    caption: "Extensive Premium Spirits & Cocktail Display",
  },
  {
    src: "/images/site/nirvana-gal-7.webp",
    alt: "Industrial Brick Decor with Cocktail Tables",
    caption: "Rustic Exposed Brick Ambiance with High Tables",
  },
  {
    src: "/images/site/nirvana-gal-8.webp",
    alt: "Nirvana Lounge Graffiti Wall Lounge",
    caption: "Eclectic Urban Mural Lounge Space",
  },
  {
    src: "/images/site/nirvana-gal-9.webp",
    alt: "Lit Arched Bar Station Nirvana",
    caption: "Curved Bar Station with Premium Glassware",
  },
  {
    src: "/images/site/nirvana-gal-10.webp",
    alt: "Cozy Dining Corner with Warm Lighting",
    caption: "Intimate Seating for Conversations & Cocktails",
  },
  {
    src: "/images/site/nirvana-gal-11.webp",
    alt: "Mural Decorated Communal Table",
    caption: "Communal Table for Group Celebrations",
  },
  {
    src: "/images/site/nirvana-gal-12.webp",
    alt: "Distressed Brick Feature Wall & Plants",
    caption: "Atmospheric Brick & Foliage Wall Design",
  },
  {
    src: "/images/site/nirvana-gal-13.webp",
    alt: "Exposed Brick Wall with Warm Backlighting",
    caption: "Urban Industrial Interior Accents",
  },
  {
    src: "/images/site/nirvana-gal-14.webp",
    alt: "Artistic Dining Hall with Mosaic Flooring",
    caption: "Spacious Hall with Distinctive Mosaic Tiles",
  },
  {
    src: "/images/site/nirvana-gal-15.webp",
    alt: "Performance Stage with Overhead Rigging",
    caption: "Live Music & DJ Rig with Stage Lights",
  },
  {
    src: "/images/site/nirvana-gal-16.webp",
    alt: "Colorful Urban Graffiti Wall Section",
    caption: "Vibrant Painted Wall Art in Event Hall",
  },
  {
    src: "/images/site/nirvana-gal-17.webp",
    alt: "Live Entertainment Stage with High Chairs",
    caption: "Checkered Backdrop Stage for Performances",
  },
  {
    src: "/images/site/nirvana-gal-18.webp",
    alt: "Modern Banquette Seating with Geometric Wood",
    caption: "Modern Banquette Seating under Accent Lights",
  },
  {
    src: "/images/site/nirvana-gal-19.webp",
    alt: "Open-Air Garden Patio with Umbrella Tables",
    caption: "Relaxed Open-Air Garden Seating with Umbrellas",
  },
];

export default function NirvanaLoungeTemplate() {
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

      {/* 2. Navbar with Nirvana Lounge Bar official cocktail logo */}
      <Navbar
        logoSrc="/images/site/nirvana-lounge-logo.png"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Video Banner with YouTube Video matching live site */}
        <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center text-white select-none overflow-hidden bg-black banner-video-container">
          {/* Fallback poster image */}
          <Image
            src="/images/site/Nirvana-Lounge-Bar5-1-scaled.jpg"
            alt="Nirvana Lounge Bar"
            fill
            priority
            className="object-cover object-center pointer-events-none"
          />

          {/* Full-bleed YouTube background video iframe */}
          <iframe
            src="https://www.youtube-nocookie.com/embed/7jT78N-HlD0?autoplay=1&mute=1&controls=0&loop=1&playlist=7jT78N-HlD0&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3"
            title="Nirvana Lounge Bar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
            aria-hidden="true"
            className="banner-video-frame pointer-events-none select-none border-0"
          />

          {/* Solid click and touch shield */}
          <div className="absolute inset-0 z-10 pointer-events-auto bg-transparent select-none cursor-default" />

          {/* Clear, subtle dark overlay matching live site screenshot */}
          <div className="absolute inset-0 z-10 bg-black/35 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center flex flex-col items-center">

            {/* Location Tag */}
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-normal text-white/95 mb-2.5 tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-white/80" />
              <span>Grand Tamanna Hotel</span>
            </div>

            {/* Heading: NIRVANA LOUNGE */}
            <h1
              className="font-bebas text-[54px] sm:text-7xl md:text-8xl lg:text-[95px] uppercase font-normal tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.8px] text-white leading-none mb-3 drop-shadow-md select-none"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              <span>NIRVANA </span><span className="text-[#0C64AB] font-medium">LOUNGE</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-[17px] text-white/95 font-light leading-relaxed mb-6 sm:mb-8 text-center drop-shadow-md">
              Here Luxury Meets Entertainment In The Heart Of Grand Tamanna Hotel
            </p>

            {/* 2 Frosted Glass Info Cards matching reference screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 w-full max-w-4xl mx-auto mb-8 sm:mb-10">

              {/* Left Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 flex flex-col justify-center text-left shadow-lg space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-white/95">
                    Located In Grand Tamanna Hotel
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Star className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 fill-[#38BDF8]" />
                  <span className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed">
                    Party Capacity Up To: 150 Persons Ideal For Celebrations And Corporate Events.
                  </span>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 flex flex-col justify-center text-left shadow-lg space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-white/95">
                    Private/ Corporate Parties
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Music className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed">
                    DJ Music, Mics, Projector, Screen, Podium, Round Tables Dance Floor Can Be Arranged.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: ENQUIRE NOW + VIEW GALLERY */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                ENQUIRE NOW
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-2.5 sm:py-3 rounded-full bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: Premium Amenities matching Image 1 */}
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-[54px] sm:text-7xl md:text-8xl lg:text-[95px] uppercase tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-none text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>PREMIUM </span><span className="text-[#0C64AB] font-medium">AMENITIES</span>
              </h2>
            </div>

            {/* 6 Amenities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {AMENITIES_DATA.map((item, idx) => {
                const IconComponent = item.icon;
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
                      className="font-bebas text-[20px] sm:text-[22px] uppercase tracking-[0.5px] text-[#1E1E1E] font-normal leading-tight mb-2.5"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[13.5px] sm:text-[14px] text-[#7A7A7A] leading-[1.6] font-normal max-w-[290px] mx-auto capitalize"
                      style={{ fontFamily: '"Poppins", Sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: Find Us matching Image 2 */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-[54px] sm:text-7xl md:text-8xl lg:text-[95px] uppercase tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-none text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>FIND </span><span className="text-[#0C64AB] font-medium">US</span>
              </h2>
            </div>

            {/* 2-Column Grid: Map (Left) + Booking Info (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Embedded Map Card */}
              <div className="lg:col-span-7 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col min-h-[340px]">
                <iframe
                  src="https://maps.google.com/maps?hl=en&ie=UTF8&ll=18.5934061,73.704771&spn=18.5934061,73.704771&q=Nirvana%20Lounge%20Bar&t=m&z=17&output=embed&iwloc"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nirvana Lounge Bar Location"
                  className="w-full h-full"
                />
              </div>

              {/* Right Column: Booking Contact Card matching Image 2 */}
              <div className="lg:col-span-5 bg-[#F9F9FC] rounded-xl border border-gray-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#0C64AB]">
                    <Mail className="w-5 h-5 text-[#0C64AB]" />
                    <span
                      className="font-bebas text-[26px] tracking-normal uppercase text-[#0C64AB] leading-none"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      BOOKING
                    </span>
                  </div>

                  <h3
                    className="font-bebas text-[20px] sm:text-[22px] text-[#494949] uppercase tracking-normal font-normal leading-none"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    NIRVANA LOUNGE BAR
                  </h3>

                  <div className="space-y-3 pt-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-[#0C64AB] shrink-0 mt-1" />
                      <a
                        href="mailto:Grand@tamannahotels.com"
                        className="text-[#0C64AB] hover:underline transition-colors break-all text-[15px]"
                      >
                        grand@tamannahotels.com
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#0C64AB] shrink-0 mt-1" />
                      <a
                        href="tel:02066935000"
                        className="text-[#0C64AB] hover:underline transition-colors font-normal text-[15px]"
                      >
                        020 66935000 / 7507772159
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section: Our Gallery matching Image 2 */}
        <section
          id="gallery"
          className="relative w-full bg-[#061727] py-16 sm:py-20 lg:py-24 text-white overflow-hidden scroll-mt-20"
        >
          <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-[54px] sm:text-7xl md:text-8xl lg:text-[95px] uppercase tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-none text-white select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>OUR </span><span className="text-[#92C9F5] font-medium">GALLERY</span>
              </h2>
            </div>

            {/* 19 Images 3-Column Grid matching user screenshot */}
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

      </main>

      {/* 8. Footer matching Image 4 */}
      <Footer
        logoSrc="/images/site/nirvana-lounge-logo.png"
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

