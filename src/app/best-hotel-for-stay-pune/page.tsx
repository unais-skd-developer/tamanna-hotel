"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { HOTELS_MAP } from "@/data/siteData";
import { Star, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function HotelsOverviewPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<string | undefined>(undefined);

  const hotelsList = Object.values(HOTELS_MAP).filter((h) => h.slug !== "top-cake-shop-hinjawadi-pune");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Our Hotels"
        subtitle="Explore our portfolio of six distinguished hotel destinations across Hinjawadi and Pune."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              DISCOVER LUXURY & COMFORT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Hotels In Pune
            </h2>
            <p className="text-slate-600 font-poppins text-sm sm:text-base mt-3">
              Whether you require corporate apartment suites, luxury hotel rooms, conference facilities, or grand banquets, Tamanna Hotels provides the premier choice.
            </p>
          </div>

          <div className="space-y-12">
            {hotelsList.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Hotel Image */}
                <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-auto min-h-[280px]">
                  <Image
                    src={hotel.heroImage}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0c64ab] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {hotel.name}
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-700 ml-1">
                        {hotel.rating} / 5.0
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bebas uppercase tracking-wide text-slate-800 mb-1">
                      {hotel.name}
                    </h3>

                    <span className="text-xs uppercase tracking-wider font-semibold text-[#0c64ab] block mb-3">
                      {hotel.tagline}
                    </span>

                    <p className="text-slate-600 font-poppins text-xs sm:text-sm leading-relaxed mb-4">
                      {hotel.shortDesc}
                    </p>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-6">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{hotel.address}</span>
                    </p>

                    {/* Amenities Pill Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                      {hotel.amenities.slice(0, 6).map((am, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0c64ab] shrink-0" />
                          <span className="truncate">{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/${hotel.slug}`}
                      className="px-6 py-2.5 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-base tracking-wider rounded-lg transition-colors uppercase inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Explore Hotel</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => {
                        setSelectedHotel(hotel.name);
                        setIsBookingModalOpen(true);
                      }}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bebas text-base tracking-wider rounded-lg transition-colors uppercase cursor-pointer"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <PreFooterContact />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel={selectedHotel}
      />
    </div>
  );
}

