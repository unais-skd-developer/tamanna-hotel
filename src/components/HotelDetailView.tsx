"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HotelDetail,
} from "@/data/siteData";
import PageHeader from "./PageHeader";
import BookingBar from "./BookingBar";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import PreFooterContact from "./PreFooterContact";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import {
  Wifi,
  Tv,
  Coffee,
  CheckCircle2,
  Users,
  Maximize2,
  Phone,
  Mail,
  MapPin,
  Utensils,
  Calendar,
  Sparkles,
} from "lucide-react";

interface HotelDetailViewProps {
  hotel: HotelDetail;
}

export default function HotelDetailView({ hotel }: HotelDetailViewProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Bar */}
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* 2. Page Hero Header with YouTube video */}
      <PageHeader
        title={hotel.name}
        subtitle={hotel.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hotels", href: "/best-hotel-for-stay-pune" },
        ]}
        bgImage={hotel.heroImage}
        heroVideoId={hotel.heroVideoId}
      />

      {/* 3. In-page Booking Bar prefilled */}
      <BookingBar initialProperty={
        hotel.slug.includes("grand") ? "ZGZV1026" :
        hotel.slug.includes("premier") ? "VIXA0712" :
        hotel.slug.includes("bizz") ? "ICAX0619" :
        hotel.slug.includes("executive") ? "ICAV0619" :
        hotel.slug.includes("shree") ? "VAGE0325" :
        hotel.slug.includes("chikhali") || hotel.slug.includes("imperial") ? "TVRT0602" : ""
      } />

      {/* 4. Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-[#0c64ab] rounded-full text-xs font-semibold tracking-wider uppercase font-jost">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Stay Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800 leading-tight">
                Welcome To <span className="text-[#0c64ab]">{hotel.name}</span>
              </h2>

              <p className="text-slate-600 font-poppins text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {hotel.fullDesc}
              </p>

              {/* Quick Info Badges */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-jost">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#0c64ab] shrink-0" />
                  <span className="line-clamp-1">{hotel.address}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <Phone className="w-4 h-4 text-[#0c64ab] shrink-0" />
                  <span>Reservations: {hotel.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Featured Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={hotel.heroImage}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                    {hotel.name}
                  </span>
                  <p className="text-base font-semibold leading-snug mt-1">
                    {hotel.tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Rooms for Everyone Section */}
      {hotel.rooms.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                ACCOMMODATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
                Rooms For Everyone
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-poppins mt-3">
                Experience bespoke comfort with our thoughtfully furnished rooms designed for corporate productivity and restful leisure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {hotel.rooms.map((room, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col"
                >
                  <div className="relative h-64 sm:h-72 w-full">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {room.size && (
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {room.size}
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bebas uppercase tracking-wide text-[#0c64ab] mb-2">
                        {room.name}
                      </h3>
                      <p className="text-slate-600 font-poppins text-sm leading-relaxed mb-6">
                        {room.description}
                      </p>

                      <div className="border-t border-slate-100 pt-4 mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                          Room Amenities
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700">
                          {room.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="w-full py-3 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-lg tracking-wider rounded-xl transition-colors cursor-pointer uppercase shadow-md"
                      >
                        Book This Room
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Restaurants and Bars Section */}
      {hotel.dining.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                FINE DINING & BEVERAGES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
                Restaurants & Bars
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-poppins mt-3">
                Savor exquisite multi-cuisine culinary masterpieces crafted by master chefs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hotel.dining.map((dine, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col sm:flex-row"
                >
                  <div className="relative w-full sm:w-1/2 h-56 sm:h-auto min-h-[220px]">
                    <Image
                      src={dine.image}
                      alt={dine.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7 sm:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase font-semibold text-[#0c64ab] tracking-wider block mb-1">
                        {dine.cuisine || "Multi-Cuisine"}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wide text-slate-800 mb-2">
                        {dine.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {dine.description}
                      </p>
                    </div>
                    {dine.capacity && (
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2 border-t border-slate-200">
                        <Users className="w-3.5 h-3.5 text-[#0c64ab]" />
                        <span>Capacity: {dine.capacity}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Meeting & Banquet Venues */}
      {hotel.venues.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                CELEBRATIONS & SUMMITS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-white">
                Wedding & Party Venues
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-poppins mt-3">
                Magnificent banquet spaces, executive boardrooms, and poolside rooftop terraces tailored for your milestone moments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {hotel.venues.map((venue, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                    {venue.capacity && (
                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {venue.capacity}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wide text-sky-400 mb-2">
                        {venue.name}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {venue.description}
                      </p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bebas text-base tracking-wider rounded-lg transition-colors cursor-pointer uppercase inline-flex items-center justify-center text-center"
                    >
                      Enquire Venue
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Hotel Amenities List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              COMFORT & CONVENIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Hotel Amenities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-poppins mt-3">
              Comprehensive amenities curated to ensure a seamless and comfortable stay for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {hotel.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-slate-50 hover:bg-sky-50/60 rounded-xl border border-slate-200 transition-colors flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#0c64ab]/10 text-[#0c64ab] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Hotel Photo Gallery */}
      {hotel.gallery.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                PHOTO COLLECTION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
                Our Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {hotel.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGalleryImage(img)}
                  className="relative h-44 sm:h-52 rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${hotel.name} Gallery ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {activeGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[600px]">
            <Image
              src={activeGalleryImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 10. Reach Out & Pre-footer Contact */}
      <PreFooterContact />

      {/* 11. Official Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel={hotel.name}
      />
    </div>
  );
}

