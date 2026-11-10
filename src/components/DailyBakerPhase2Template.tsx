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
  Cake,
  Coffee,
  Leaf,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// Premium Features matching Screenshot 3
const FEATURES_DATA = [
  {
    icon: Cake,
    title: "CUSTOM CAKE DESIGN STUDIO",
    description: "Create Personalized Cakes With Expert Bakers Using Premium Ingredients And Designs.",
  },
  {
    icon: Coffee,
    title: "TEMPERATURE-CONTROLLED PASTRY DISPLAY",
    description: "Keeps Pastries Fresh And Perfect With Elegant, Climate-Controlled Glass Displays.",
  },
  {
    icon: Leaf,
    title: "FRESH INGREDIENTS CORNER",
    description: "Fresh Ingredients Corner Showcasing Seasonal, Local Ingredients Used In Our Daily Baking.",
  },
];

// 6 Gallery items matching Screenshot 4
const GALLERY_IMAGES = [
  {
    src: "/images/site/63-300x225.jpg",
    alt: "Daily Baker Counter Display",
  },
  {
    src: "/images/site/2023-07-05-225x300.webp",
    alt: "Artisan Mango Pineapple Cake",
  },
  {
    src: "/images/site/2023-06-22-264x300.webp",
    alt: "Adhiraj Birthday Celebration Cake",
  },
  {
    src: "/images/site/2023-06-22-1-225x300.webp",
    alt: "Custom Superhero Themed Cake",
  },
  {
    src: "/images/site/2023-07-05-1-225x300.webp",
    alt: "Our Little Gymnast Photo Cake",
  },
  {
    src: "/images/site/2023-06-22-2-225x300.webp",
    alt: "Fresh Strawberry Celebration Cake",
  },
];

// Menu items matching the 2-column menu layout
interface MenuItem {
  name: string;
  price: number;
  note?: string;
}

const MENU_COLUMN_1: MenuItem[] = [
  { name: "BROWN BREAD", price: 55, note: "customizable" },
  { name: "GARLIC BREAD", price: 65 },
  { name: "PIZZA BREAD", price: 25 },
  { name: "LADI PAV (6 PCS) (250 GMS)", price: 30 },
  { name: "VANILLA MUFFINS", price: 30 },
  { name: "CHOCOLATE MUFFINS", price: 30 },
  { name: "CHOCOLATE PASTRY", price: 75 },
  { name: "BUTTER SCOTCH PASTRY", price: 65 },
  { name: "PINEAPPLE PASTRY", price: 65 },
  { name: "PINEAPPLE CAKE (1 POUND)", price: 380 },
  { name: "BUTTER SCOTCH CAKE (1 POUND)", price: 380 },
  { name: "BLACK FOREST CAKE (1 POUND)", price: 380 },
  { name: "MANGO CAKE (1 POUND)", price: 380 },
  { name: "WHITE FOREST CAKE (1 POUND)", price: 380 },
  { name: "CHOCOLATE TRUFFLE CAKE (1 POUND)", price: 440 },
  { name: "VEG PUFF", price: 40 },
  { name: "BLACK FOREST PASTRY", price: 65 },
  { name: "ALMOND PASTRY", price: 75 },
  { name: "VANILLA CAKE (1 POUND)", price: 380 },
  { name: "IRISH COFFEE CAKE (1 POUND)", price: 440 },
  { name: "CHOCO CHIPS CAKE (1 POUND)", price: 440 },
];

const MENU_COLUMN_2: MenuItem[] = [
  { name: "STRAWBERRY CAKE (1 POUND)", price: 380 },
  { name: "BLUEBERRY CAKE (1 POUND)", price: 430 },
  { name: "CHOCOLATE VANILLA CAKE (1 POUND)", price: 430 },
  { name: "ALMOND CAKE (1 POUND)", price: 450 },
  { name: "WALNUT CAKE (1 POUND)", price: 500 },
  { name: "MIX FRUITS CAKE (1 POUND)", price: 480 },
  { name: "RASMALAI CAKE (1 POUND)", price: 500 },
  { name: "DRY FRUITS CAKE (1 POUND)", price: 500 },
  { name: "DESIGN CAKE (1 POUND)", price: 550, note: "Minimum 4 pounds" },
  { name: "PHOTO PRINT", price: 300 },
  { name: "BROWNIE", price: 80 },
  { name: "KHARI", price: 70, note: "customizable" },
  { name: "CREAM ROLL", price: 20, note: "customizable" },
  { name: "DRY FRUIT CAKE", price: 110 },
  { name: "PLUM CAKE", price: 110 },
  { name: "BUTTER COOKIES 100GM", price: 50, note: "customizable" },
  { name: "BURGER BUN", price: 20 },
  { name: "VADA PAV", price: 30 },
  { name: "WHITE BREAD 1KG", price: 80 },
  { name: "CHOCOLATE CAKE", price: 440 },
];

export default function DailyBakerPhase2Template() {
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

      {/* 2. Navbar with Daily Baker Logo matching Screenshot 1 */}
      <Navbar
        logoSrc="/images/site/7-3-2.png"
        isDailyBaker={true}
        activeNav="Daily Baker"
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Banner Section strictly matching Screenshot 1 & 2 */}
        <section
          className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white select-none overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/64.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
            {/* Location Tag */}
            <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base font-normal mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 text-[#8BB6DA] shrink-0" />
              <span>Located At Executive Tamanna Hotel</span>
            </div>

            {/* Heading: DAILY BAKER PHASE 2 in Bebas Neue */}
            <h1
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase font-normal leading-none lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] text-center mb-3 sm:mb-4 drop-shadow-lg"
              style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
            >
              <span className="text-white">DAILY BAKER </span>
              <span style={{ color: "#38BDF8" }}>PHASE 2</span>
            </h1>

            {/* Thin White Divider Line matching Screenshot 2 */}
            <div className="w-24 sm:w-28 md:w-32 h-[1px] bg-white mx-auto my-3 sm:my-4 opacity-90" />

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ECE9E9] font-normal leading-relaxed text-center mb-8 sm:mb-10 drop-shadow-md">
              A Premium Bakery Offering Fresh, Handcrafted Breads, Pastries, And Cakes Made Daily With Local Ingredients And Served With Artisan Coffee In A Warm, Inviting Space.
            </p>

            {/* Action Buttons: ORDER NOW + VIEW GALLERY matching Screenshot 1 & 2 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://bakery.tamannahotels.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#0C64AB] hover:bg-[#084572] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                ORDER NOW
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-black/40 border border-white/80 hover:bg-white hover:text-[#0C64AB] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </section>

        {/* 4. Section: OUR PREMIUM FEATURES matching Screenshot 3 */}
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>OUR PREMIUM </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>FEATURES</span>
              </h2>
            </div>

            {/* Features 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {FEATURES_DATA.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 p-8 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Circular Icon Outline */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#0C64AB]/40 flex items-center justify-center text-[#0C64AB] mb-6">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
                    </div>

                    <h3
                      className="font-bebas text-xl sm:text-2xl text-neutral-800 uppercase tracking-wide mb-3"
                      style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: FIND US matching Screenshot 3 */}
        <section className="w-full bg-[#F7F7F7] pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>FIND </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>US</span>
              </h2>
            </div>

            {/* Embedded Google Map (Grand Tamanna Hotel) matching Screenshot 3 */}
            <div className="w-full bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 p-3 sm:p-4 shadow-sm overflow-hidden">
              <iframe
                title="Daily Baker Phase 2 Location - Grand Tamanna Hotel"
                src="https://maps.google.com/maps?hl=en&ie=UTF8&ll=18.5934061,73.704771&spn=18.5934061,73.704771&q=Grand%20Tamanna%20Hotel&t=m&z=17&output=embed&iwloc"
                className="w-full h-[340px] sm:h-[400px] md:h-[440px] rounded-lg border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* 6. Section: OUR MENU matching user uploaded image */}
        <section id="menu" className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2
                className="font-bebas text-5xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span style={{ color: "#0C64AB91", fontWeight: 400 }}>OUR </span>
                <span style={{ color: "#0C64AB", fontWeight: 500 }}>MENU</span>
              </h2>
              <p className="text-[#0C64AB] text-lg sm:text-xl font-medium mt-3 tracking-wide">
                (Special Offers (Bakery))
              </p>
            </div>

            {/* 2-Column Menu Layout matching screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Column 1 */}
              <div className="border border-dashed border-gray-300 rounded-lg p-5 sm:p-6 bg-white">
                <div className="divide-y divide-dashed divide-gray-200">
                  {MENU_COLUMN_1.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3 flex items-center justify-between gap-3 first:pt-0 last:pb-0"
                    >
                      <div className="flex flex-col">
                        <span
                          className="font-bebas text-lg sm:text-xl text-neutral-800 tracking-wide uppercase leading-tight"
                          style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                        >
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-xs text-gray-400 font-sans mt-0.5">
                            {item.note}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                        <span className="bg-[#0C64AB] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                          ₹ {item.price}
                        </span>
                        <a
                          href="https://bakery.tamannahotels.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0C64AB] hover:bg-[#084572] text-white px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer"
                        >
                          Add +
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="border border-dashed border-gray-300 rounded-lg p-5 sm:p-6 bg-white">
                <div className="divide-y divide-dashed divide-gray-200">
                  {MENU_COLUMN_2.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3 flex items-center justify-between gap-3 first:pt-0 last:pb-0"
                    >
                      <div className="flex flex-col">
                        <span
                          className="font-bebas text-lg sm:text-xl text-neutral-800 tracking-wide uppercase leading-tight"
                          style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
                        >
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-xs text-gray-400 font-sans mt-0.5">
                            {item.note}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                        <span className="bg-[#0C64AB] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                          ₹ {item.price}
                        </span>
                        <a
                          href="https://bakery.tamannahotels.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0C64AB] hover:bg-[#084572] text-white px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer"
                        >
                          Add +
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Section: OUR GALLERY matching Screenshot 4 */}
        <section
          id="gallery"
          className="w-full relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "url('/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg')",
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                className="font-bebas text-6xl sm:text-7xl lg:text-[95px] uppercase font-normal leading-tight lg:leading-[90px] tracking-[-2px] lg:tracking-[-3.8px] select-none text-center"
                style={{ fontFamily: '"Bebas Neue", var(--font-bebas), sans-serif' }}
              >
                <span className="text-white">OUR </span>
                <span style={{ color: "#92C9F5", fontWeight: 500 }}>GALLERY</span>
              </h2>
            </div>

            {/* Gallery Grid (3 columns on lg, 6 images matching Screenshot 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden rounded-none shadow-md cursor-pointer aspect-square bg-neutral-900"
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

        {/* 8. Overview Description Section matching live site */}

      </main>

      {/* 9. Footer matching Screenshot 4 & 5 with Daily Baker logo */}
      <Footer
        logoSrc="/images/site/DAILY-BAKER.png"
        isDailyBaker={true}
        customTagline="Tamanna Hotel Offers Premium Stays, Modern Comforts, Elegant Dining, And Personalized Service For Every Guest."
        customPhone="02066751900"
        customEmail="info@tamannahotels.com"
        customRoomBookingPhone="02066935000/ 02066539888/ 02066751900"
        customBanquetBookingPhone="7507772159/ 02066935000/ 02069525400"
      />

      {/* 10. Lightbox Zoom Modal */}
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

      {/* 11. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

