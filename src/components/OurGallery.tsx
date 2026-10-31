"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
    image: "/images/extracted/gallery_1.png",
    description: "Main entrance and iconic multi-story exterior of Grand Tamanna in Hinjawadi Phase 1.",
  },
  {
    id: "g2",
    title: "Premier Tamanna Architectural Landmark",
    category: "PREMIER TAMANNA",
    categoryLabel: "Premier Tamanna",
    image: "/images/extracted/gallery_2.png",
    description: "Cutting-edge geometric design and contemporary glass facade of Premier Tamanna.",
  },
  {
    id: "g3",
    title: "Bizz Tamanna Corporate Exterior",
    category: "BIZZ TAMANNA",
    categoryLabel: "Bizz Tamanna",
    image: "/images/extracted/gallery_3.png",
    description: "Executive hotel property tailored specifically for tech park business professionals.",
  },
  {
    id: "g4",
    title: "Executive Tamanna Suites & Living",
    category: "EXECUTIVE TAMANNA",
    categoryLabel: "Executive Tamanna",
    image: "/images/gallery_executive.jpg",
    description: "Modern extended stay corporate hotel suites with premium amenities.",
  },
  {
    id: "g5",
    title: "Shree Inn by Tamanna",
    category: "SHREE INN BY TAMANNA",
    categoryLabel: "Shree Inn",
    image: "/images/gallery_shree.jpg",
    description: "Charming boutique accommodations offering serene comfort and personalized care.",
  },
  {
    id: "g6",
    title: "Imperial Tamanna Urban Comfort",
    category: "IMPERIAL TAMANNA",
    categoryLabel: "Imperial Tamanna",
    image: "/images/gallery_imperial.jpg",
    description: "Sleek hospitality spaces with convenient highway and tech park accessibility.",
  },
  {
    id: "g7",
    title: "Around The World Multi-Cuisine Dining",
    category: "GRAND TAMANNA",
    categoryLabel: "Grand Tamanna",
    image: "/images/gallery_dining.jpg",
    description: "Signature gourmet restaurants serving Indian, Continental, and Oriental delicacies.",
  },
  {
    id: "g8",
    title: "Eternity Banquet & Conference Hall",
    category: "GRAND TAMANNA",
    categoryLabel: "Grand Tamanna",
    image: "/images/gallery_banquet.jpg",
    description: "Opulent banquet venues configured for corporate summits, weddings, and celebrations.",
  },
  {
    id: "g9",
    title: "Premier Deluxe Guest Rooms",
    category: "PREMIER TAMANNA",
    categoryLabel: "Premier Tamanna",
    image: "/images/gallery_room.jpg",
    description: "Spacious guest bedrooms equipped with ergonomic workstations and plush bedding.",
  },
];

const CATEGORIES = [
  "ALL",
  "GRAND TAMANNA",
  "PREMIER TAMANNA",
  "BIZZ TAMANNA",
  "EXECUTIVE TAMANNA",
  "SHREE INN BY TAMANNA",
  "IMPERIAL TAMANNA",
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
    <section id="our-gallery" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 5 */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#4182b6] font-condensed">
            OUR GALLERY
          </h2>
        </div>

        {/* Filter Tabs matching Image 5 */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-4 mb-10 border-b border-slate-100 sm:border-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#005d9e] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#005d9e] hover:bg-sky-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="text-lg font-bold font-condensed leading-snug drop-shadow-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-200 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-sky-200 font-medium">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to view full photo</span>
                </div>
              </div>
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
              <p className="text-xs text-slate-300 mt-1">
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

