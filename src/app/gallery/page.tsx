"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const INITIAL_VISIBLE_COUNT = 15;
const LOAD_MORE_INCREMENT = 12;

export default function GalleryPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loadedBatchStartIndex, setLoadedBatchStartIndex] = useState<number>(0);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // Filter items based on active category
  const filteredItems =
    activeCategory === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setLoadedBatchStartIndex(0);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setLoadedBatchStartIndex(visibleCount);
    setVisibleCount((prev) => prev + LOAD_MORE_INCREMENT);
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 400);
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % displayedItems.length);
    }
  };

  const showPrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + displayedItems.length) % displayedItems.length
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* 3. Hero Banner (Bar Counter with Bottles & Glasses + GALLERY Title at the bottom) */}
      <section className="relative w-full min-h-[58vh] sm:min-h-[60vh] h-[480px] sm:h-[520px] md:h-[580px] lg:h-[620px] flex flex-col justify-end items-center overflow-hidden bg-slate-900 pb-8 sm:pb-12 md:pb-14">
        <Image
          src="/images/site/Nirvana-Lounge-Bar5-1-scaled.jpg"
          alt="Tamanna Hotels Gallery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* GALLERY Title - Exactly matching 65px mobile, 95px desktop with flex-end positioning */}
        <div className="relative z-10 text-center px-4 w-full">
          <h1
            className="text-white text-[65px] sm:text-[80px] md:text-[95px] uppercase leading-none tracking-[1px] md:tracking-[-3.8px] font-normal drop-shadow-md select-none"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            GALLERY
          </h1>
        </div>
      </section>

      {/* 4. Filter Tabs & Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-2.5 sm:px-6 lg:px-8 max-w-[1300px] mx-auto w-full">
        {/* Category Filter Tabs - Matching Mobile Reference Exactly */}
        <div className="max-w-[340px] sm:max-w-none mx-auto flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-2.5 sm:gap-y-3.5 mb-8 sm:mb-12 text-center">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[11px] sm:text-[13px] md:text-[14px] font-medium uppercase tracking-[0.5px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0C64AB] text-white px-3.5 sm:px-5 py-1.5 sm:py-2 shadow-xs"
                    : "bg-transparent text-[#444444] hover:text-[#0C64AB] px-2 sm:px-3.5 py-1.5 sm:py-2"
                }`}
                style={{ fontFamily: '"Outfit", "Poppins", Sans-serif' }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-Column on Mobile, 3-Column on Desktop Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-5 md:gap-6 lg:gap-8">
          {displayedItems.map((item, index) => {
            const isNewlyLoaded = index >= loadedBatchStartIndex;
            const staggerIndex = isNewlyLoaded ? index - loadedBatchStartIndex : 0;
            return (
              <div
                key={`${item.id}-${activeCategory}`}
                onClick={() => openLightbox(index)}
                className={`group relative aspect-[4/3] bg-slate-100 overflow-hidden shadow-xs cursor-pointer border border-slate-100 img-zoom-container ${
                  isNewlyLoaded ? "animate-gallery-pop" : ""
                }`}
                style={
                  isNewlyLoaded
                    ? {
                        animationDelay: `${Math.min(staggerIndex, 12) * 55}ms`,
                      }
                    : undefined
                }
              >
                <Image
                  src={item.thumbnail}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />
                {/* Light Black Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* LOAD MORE Button */}
        {hasMore && (
          <div className="flex justify-center mt-12 sm:mt-16">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="bg-[#0C64AB] hover:bg-[#084b80] text-white font-bebas text-[18px] sm:text-[20px] uppercase tracking-[1px] px-8 sm:px-10 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2.5 disabled:opacity-85 select-none"
            >
              {isLoadingMore ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>LOADING...</span>
                </>
              ) : (
                <span>LOAD MORE</span>
              )}
            </button>
          </div>
        )}
      </section>

      {/* 5. Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && displayedItems[selectedPhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrevPhoto}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNextPhoto}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Full Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[72vh]">
              <Image
                src={
                  displayedItems[selectedPhotoIndex].fullImage ||
                  displayedItems[selectedPhotoIndex].thumbnail
                }
                alt={displayedItems[selectedPhotoIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
            <p className="text-white text-center font-jost text-base sm:text-lg mt-3">
              {displayedItems[selectedPhotoIndex].alt}
            </p>
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
