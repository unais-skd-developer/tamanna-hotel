"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Maximize2, X } from "lucide-react";

interface GalleryPhoto {
  src: string;
  category: string;
  title: string;
}

const ALL_GALLERY_PHOTOS: GalleryPhoto[] = [
  { src: "/images/site/Exterior.jpg", category: "GRAND TAMANNA", title: "Grand Tamanna Exterior & Entrance" },
  { src: "/images/site/Lobby2-scaled.jpg", category: "GRAND TAMANNA", title: "Grand Tamanna Main Lobby & Chandelier" },
  { src: "/images/site/Executive-Room-scaled.jpg", category: "GRAND TAMANNA", title: "Premium Guest Room" },
  { src: "/images/site/Premier-Room-6-scaled.jpg", category: "PREMIER TAMANNA", title: "Premier Designer Suite" },
  { src: "/images/site/Bizz-Tamanna-Reception-1-1024x601.jpg", category: "PREMIER TAMANNA", title: "Premier Reception & Lounge" },
  { src: "/images/site/bizz-r.webp", category: "BIZZ TAMANNA", title: "Bizz Tamanna Facade" },
  { src: "/images/site/Apartment-Room1-1-scaled.jpg", category: "BIZZ TAMANNA", title: "Bizz Apartment Suite" },
  { src: "/images/site/Reception-scaled.jpg", category: "SHREE INN", title: "Shree Inn Reception" },
  { src: "/images/site/pool2.webp", category: "DINING & BANQUETS", title: "Nirvana Lounge & Rooftop Pool" },
  { src: "/images/site/highland.webp", category: "DINING & BANQUETS", title: "Highland & Around The World Dining" },
  { src: "/images/site/LAUREL-1.webp", category: "DINING & BANQUETS", title: "Laurel & Bliss Banquet Hall" },
  { src: "/images/site/bizz-laurel-300x169.webp", category: "DINING & BANQUETS", title: "Eternity Banquet Hall" },
  { src: "/images/daily_baker.jpg", category: "DINING & BANQUETS", title: "Daily Baker Cake & Confectionery" },
  { src: "/images/site/Exterior.jpg", category: "IMPERIAL TAMANNA", title: "Imperial Tamanna Landmark" },
  { src: "/images/gallery_dining.jpg", category: "DINING & BANQUETS", title: "Around The World Multi-Cuisine" },
  { src: "/images/gallery_banquet.jpg", category: "DINING & BANQUETS", title: "Banquets & Celebrations" },
];

const CATEGORIES = [
  "ALL",
  "GRAND TAMANNA",
  "PREMIER TAMANNA",
  "BIZZ TAMANNA",
  "SHREE INN",
  "IMPERIAL TAMANNA",
  "DINING & BANQUETS",
];

export default function GalleryPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos =
    activeCategory === "ALL"
      ? ALL_GALLERY_PHOTOS
      : ALL_GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Gallery"
        subtitle="A visual walkthrough across our luxury hotels, gourmet dining spaces, banquet halls, and suites."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0c64ab] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative h-64 rounded-2xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[11px] uppercase tracking-wider text-sky-300 font-semibold">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug mt-0.5">
                    {photo.title}
                  </h3>
                  <div className="mt-2 text-white/80 flex items-center gap-1 text-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl w-full h-[70vh] sm:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center text-white mt-4">
            <h3 className="text-lg font-semibold">{selectedPhoto.title}</h3>
            <span className="text-xs text-sky-400 uppercase tracking-wider">
              {selectedPhoto.category}
            </span>
          </div>
        </div>
      )}

      <PreFooterContact />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

