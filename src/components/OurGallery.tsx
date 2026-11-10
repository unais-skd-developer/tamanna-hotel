"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Tamanna Hotel Facade",
    category: "GRAND TAMANNA",
    categoryLabel: "Grand Tamanna",
    image: "/images/site/grand-tamanna.webp",
    description: "Main entrance and iconic multi-story exterior of Grand Tamanna in Hinjawadi Phase 1.",
  },
  {
    id: "g2",
    title: "Premier Tamanna Architectural Landmark",
    category: "PREMIER TAMANNA",
    categoryLabel: "Premier Tamanna",
    image: "/images/site/44646687_0.jpg",
    description: "Cutting-edge geometric design and contemporary glass facade of Premier Tamanna.",
  },
  {
    id: "g3",
    title: "Bizz Tamanna Corporate Exterior",
    category: "BIZZ TAMANNA",
    categoryLabel: "Bizz Tamanna",
    image: "/images/site/Overview.jpg",
    description: "Executive hotel property tailored specifically for tech park business professionals.",
  },
  {
    id: "g4",
    title: "Executive Tamanna Suites & Living",
    category: "EXECUTIVE TAMANNA",
    categoryLabel: "Executive Tamanna",
    image: "/images/site/12989608.jpg",
    description: "Modern extended stay corporate hotel suites with premium amenities.",
  },
  {
    id: "g5",
    title: "Shree Inn by Tamanna",
    category: "SHREE INN BY TAMANNA",
    categoryLabel: "Shree Inn",
    image: "/images/site/Exterior-1-scaled.jpg",
    description: "Charming boutique accommodations offering serene comfort and personalized care.",
  },
  {
    id: "g6",
    title: "Grand Multi-Cuisine Fine Dining",
    category: "GRAND TAMANNA",
    categoryLabel: "Grand Tamanna",
    image: "/images/site/grand-restaurant3-300x200.avif",
    description: "Signature gourmet restaurant serving Indian, Continental, and Oriental delicacies.",
  },
  {
    id: "g7",
    title: "Imperial Tamanna Urban Comfort",
    category: "IMPERIAL TAMANNA",
    categoryLabel: "Imperial Tamanna",
    image: "/images/site/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg",
    description: "Sleek hospitality spaces with convenient highway and tech park accessibility.",
  },
  {
    id: "g8",
    title: "Nirvana Lounge Bar & Ambiance",
    category: "GRAND TAMANNA",
    categoryLabel: "Grand Tamanna",
    image: "/images/site/Nirvana-Lounge-Bar2-scaled.jpg",
    description: "Vibrant nightlife, crafted cocktails, and premium spirits at Nirvana Lounge Bar.",
  },
  {
    id: "g9",
    title: "Premier Multi-Cuisine Dining",
    category: "PREMIER TAMANNA",
    categoryLabel: "Premier Tamanna",
    image: "/images/site/Premier-Restaurant1-300x200.webp",
    description: "Upscale culinary experience with curated dining and tranquil ambiance.",
  },
];

export default function OurGallery() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="our-gallery" className="relative z-10 w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Tone Title matching Reference Image 1 exactly */}
        <div data-reveal="up" className="text-center mb-8 sm:mb-10">
          <h2
            className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3px] leading-none select-none"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span className="text-[#1c6fae] font-normal">OUR </span>
            <span className="text-[#0C64AB] font-medium">GALLERY</span>
          </h2>
        </div>

        {/* Filter Tabs matching exact pattern from Reference Image */}
        <div
          data-reveal="up"
          data-delay="100"
          className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-y-3 sm:gap-y-2 gap-x-6 sm:gap-x-3 md:gap-x-4 mb-8 sm:mb-10 max-w-full sm:max-w-4xl mx-auto px-2"
        >
          
          {/* Row 1: ALL & GRAND TAMANNA */}
          <div className="flex items-center justify-center gap-6 sm:gap-3 md:gap-4 sm:contents">
            {["ALL", "GRAND TAMANNA"].map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12.5px] sm:text-[13px] md:text-[13.5px] font-medium uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer rounded-none font-poppins select-none ${
                    isActive
                      ? "bg-[#0C64AB] text-white shadow-sm"
                      : "text-[#333333] hover:text-[#0C64AB]"
                  }`}
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2: PREMIER TAMANNA & BIZZ TAMANNA */}
          <div className="flex items-center justify-center gap-6 sm:gap-3 md:gap-4 sm:contents">
            {["PREMIER TAMANNA", "BIZZ TAMANNA"].map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12.5px] sm:text-[13px] md:text-[13.5px] font-medium uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer rounded-none font-poppins select-none ${
                    isActive
                      ? "bg-[#0C64AB] text-white shadow-sm"
                      : "text-[#333333] hover:text-[#0C64AB]"
                  }`}
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3: EXECUTIVE TAMANNA & SHREE INN BY TAMANNA */}
          <div className="flex items-center justify-center gap-5 sm:gap-3 md:gap-4 sm:contents">
            {["EXECUTIVE TAMANNA", "SHREE INN BY TAMANNA"].map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12.5px] sm:text-[13px] md:text-[13.5px] font-medium uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer rounded-none font-poppins select-none ${
                    isActive
                      ? "bg-[#0C64AB] text-white shadow-sm"
                      : "text-[#333333] hover:text-[#0C64AB]"
                  }`}
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 4: IMPERIAL TAMANNA */}
          <div className="flex items-center justify-center sm:contents">
            {["IMPERIAL TAMANNA"].map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12.5px] sm:text-[13px] md:text-[13.5px] font-medium uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer rounded-none font-poppins select-none ${
                    isActive
                      ? "bg-[#0C64AB] text-white shadow-sm"
                      : "text-[#333333] hover:text-[#0C64AB]"
                  }`}
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Gallery Grid: Animated cards with pop-out and smooth hover zoom matching live site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-7 max-w-md sm:max-w-none mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.id}-${activeTab}`}
              onClick={() => openLightbox(index)}
              className="group relative h-[380px] xs:h-[420px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-none overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 cursor-pointer img-zoom-container animate-gallery-pop"
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover rounded-none group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Light Black Hover Overlay matching live site */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[82vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center max-w-xl text-white">
              <h3 className="text-xl font-bold font-condensed tracking-wide text-sky-300">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-poppins">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}
