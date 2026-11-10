"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/site/63.jpg",
    alt: "Daily Baker Counter Phase 1",
    title: "Daily Baker Counter Phase 1",
  },
  {
    id: 2,
    src: "/images/site/64.jpg",
    alt: "Daily Baker Counter Phase 2",
    title: "Daily Baker Counter Phase 2",
  },
  {
    id: 3,
    src: "/images/site/Daily-Baker-Brown-Bread.jpg",
    alt: "Special Brown Bread",
    title: "Daily Baker Special Brown Bread",
  },
  {
    id: 4,
    src: "/images/site/2023-06-22-264x300.webp",
    alt: "Adhiraj Birthday Cake",
    title: "Artisan Adhiraj Celebration Cake",
  },
  {
    id: 5,
    src: "/images/site/2023-06-22-1-225x300.webp",
    alt: "Superhero Comic Cake",
    title: "Custom Superhero Themed Cake",
  },
  {
    id: 6,
    src: "/images/site/2023-07-05-1-225x300.webp",
    alt: "Our Little Gymnast Cake",
    title: "Our Little Gymnast Photo Cake",
  },
  {
    id: 7,
    src: "/images/site/Daily-Baker-White-Bread.jpg",
    alt: "Special Sandwich Bread",
    title: "Daily Baker Special Sandwich Bread",
  },
  {
    id: 8,
    src: "/images/site/Daily-Baker-Pav.jpg",
    alt: "Freshly Baked Pav",
    title: "Daily Baker Freshly Baked Pav",
  },
];

export default function DailyBakerPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Navbar with Daily Baker logo & highlighted tab */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        logoSrc="/images/site/7-3-2.png"
        isDailyBaker={true}
        activeNav="Daily Baker"
      />

      {/* 3. Hero Banner (Illuminated Night Bakery Front) */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="/images/site/output-onlinetools-1.png"
          alt="Daily Baker Bread & Cake Shop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* 4. Intro Section: DAILY BAKER */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="font-bebas text-center text-[54px] sm:text-[70px] md:text-[85px] lg:text-[95px] uppercase tracking-[-1px] md:tracking-[-2px] leading-none mb-8">
          <span className="text-[#0C64AB]/55">DAILY </span>
          <span className="text-[#0C64AB]">BAKER</span>
        </h1>

        {/* Paragraphs */}
        <div className="max-w-4xl mx-auto text-center space-y-6 text-[#2A2A2A] font-poppins text-[15px] sm:text-[16px] md:text-[16.5px] leading-relaxed font-normal">
          <p>
            Welcome To Daily Baker, The In-House Bakery Brand By Tamanna Hotels. With
            Two Outlets In Hinjawadi, We Are Known As A Top Cake Shop In Hinjawadi
            Pune. At Daily Baker, We Craft Fresh Breads, Cakes, Pastries, Cookies,
            Puffs, Muffins, Donuts, And More, Using The Finest Ingredients And
            Traditional Baking Techniques To Deliver Unmatched Taste And Quality.
          </p>
          <p>
            For Years, Daily Baker Has Been The Go-To Bakery For Residents And
            Businesses In Hinjawadi. Whether It&apos;s Fresh Bread For Breakfast, A Cake
            To Celebrate A Special Occasion, Or A Sweet Treat To Brighten Your Day,
            Daily Baker Delivers It All With Unmatched Quality, Taste, And Care.
            Making Every Bite Truly Memorable!
          </p>
        </div>

        {/* Enquire Now Link/Button */}
        <div className="flex justify-center mt-6 mb-12 sm:mb-16">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 text-[#0C64AB] hover:text-[#084b80] font-bebas text-[18px] sm:text-[20px] uppercase tracking-[1px] transition-colors group cursor-pointer"
          >
            <span>ENQUIRE NOW</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Featured Storefront Night Photo */}
        <div className="max-w-[1020px] mx-auto rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/images/site/upscalemedia-transformed-3.png"
            alt="Top Cake shop in Hinjawadi Pune"
            width={1020}
            height={764}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* 5. Counters Section: DAILY BAKER PHASE 1 & PHASE 2 */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-bebas text-center text-[54px] sm:text-[70px] md:text-[85px] lg:text-[95px] uppercase tracking-[-1px] md:tracking-[-2px] leading-none mb-6 sm:mb-10">
          <span className="text-[#0C64AB]/55">DAILY </span>
          <span className="text-[#0C64AB]">BAKER</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Counter Phase 1 */}
          <Link
            href="/bakery-shop-hinjawadi-pune"
            className="group relative block overflow-hidden rounded-none shadow-sm aspect-[16/10] bg-neutral-900 cursor-pointer"
          >
            <Image
              src="/images/site/63.jpg"
              alt="Daily Baker Counter Phase 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Subtle dark overlay for crisp text readability */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />

            {/* Hover blue wash overlay */}
            <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Hover thin white inset frame */}
            <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

            {/* Centered Venue Label matching Reference 2-Line Layout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <h3
                className="font-bebas text-white text-[32px] xs:text-[36px] sm:text-4xl md:text-[42px] font-normal tracking-[1.5px] uppercase text-center leading-[0.95] drop-shadow-md flex flex-col items-center"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>DAILY BAKER COUNTER</span>
                <span>PHASE 1</span>
              </h3>
            </div>
          </Link>

          {/* Counter Phase 2 */}
          <Link
            href="/best-baker-shop-hinjawadi-pune"
            className="group relative block overflow-hidden rounded-none shadow-sm aspect-[16/10] bg-neutral-900 cursor-pointer"
          >
            <Image
              src="/images/site/64.jpg"
              alt="Daily Baker Counter Phase 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Subtle dark overlay for crisp text readability */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />

            {/* Hover blue wash overlay */}
            <div className="absolute inset-0 bg-[#0C64AB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Hover thin white inset frame */}
            <div className="absolute inset-4 border border-white pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

            {/* Centered Venue Label matching Reference 2-Line Layout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <h3
                className="font-bebas text-white text-[32px] xs:text-[36px] sm:text-4xl md:text-[42px] font-normal tracking-[1.5px] uppercase text-center leading-[0.95] drop-shadow-md flex flex-col items-center"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>DAILY BAKER COUNTER</span>
                <span>PHASE 2</span>
              </h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 6. OUR GALLERY Section with Dark Blue Curved Background */}
      <section
        className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg")',
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="font-bebas text-center text-[54px] sm:text-[70px] md:text-[85px] lg:text-[95px] uppercase tracking-[-1px] md:tracking-[-2px] leading-none mb-10 md:mb-16">
            <span className="text-white">OUR </span>
            <span className="text-[#92C9F5]">GALLERY</span>
          </h2>

          {/* 8-Item Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] bg-[#edf2f7] overflow-hidden rounded-sm shadow-md cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer with Daily Baker Logo */}
      <Footer isDailyBaker logoSrc="/images/site/7-3-2.png" />

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={GALLERY_ITEMS[selectedImageIndex].src}
                alt={GALLERY_ITEMS[selectedImageIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <p className="text-white text-center font-jost text-lg mt-3">
              {GALLERY_ITEMS[selectedImageIndex].title}
            </p>
          </div>
        </div>
      )}

      {/* Booking / Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
