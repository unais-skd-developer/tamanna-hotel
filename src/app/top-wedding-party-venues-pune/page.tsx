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
import { VENUES_DATA } from "@/data/siteData";
import { Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function WeddingPartyVenuesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Wedding & Party Venue"
        subtitle="Unforgettable celebrations begin here — 10+ banquet halls, poolside rooftops, and executive boardrooms."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/gallery_banquet.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              HOST YOUR OCCASION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Wedding & Event Venues in Pune
            </h2>
            <p className="text-slate-600 font-poppins text-sm sm:text-base mt-3">
              When it comes to celebrating life&apos;s most cherished moments, the right venue makes all the difference. Tamanna Hotels offers a perfect blend of elegance, comfort, and modern amenities across Hinjawadi and Chikhali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VENUES_DATA.map((venue, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c64ab] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {venue.hotel}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-sky-400" />
                      <span>{venue.capacity}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wide text-slate-800 mb-2">
                      {venue.name}
                    </h3>

                    <p className="text-slate-600 font-poppins text-xs sm:text-sm leading-relaxed mb-4">
                      {venue.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <h4 className="text-xs uppercase font-semibold text-slate-400 mb-2">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-poppins">
                        {venue.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full py-2.5 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-base tracking-wider rounded-xl transition-colors uppercase cursor-pointer shadow-sm"
                  >
                    Enquire This Venue
                  </button>
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
      />
    </div>
  );
}

