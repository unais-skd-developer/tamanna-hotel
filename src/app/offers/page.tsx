"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { OFFERS_DATA } from "@/data/siteData";
import { Tag, Sparkles, CheckCircle2 } from "lucide-react";

export default function OffersPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Offers & Promotions"
        subtitle="Exclusive discounts, special weekend getaway packages, and corporate deals across Tamanna Hotels."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              SPECIAL PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Limited-Time Offers
            </h2>
            <p className="text-slate-600 font-poppins text-sm sm:text-base mt-3">
              Take advantage of exclusive seasonal offers when reserving directly with Tamanna Hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {OFFERS_DATA.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full bg-slate-100">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{offer.badge}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-xs uppercase font-semibold text-[#0c64ab] tracking-wider block mb-1">
                      {offer.hotel}
                    </span>
                    <h3 className="text-2xl font-bebas uppercase tracking-wide text-slate-800 mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-slate-600 font-poppins text-sm leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full py-3 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-lg tracking-wider rounded-xl transition-colors cursor-pointer uppercase shadow-md"
                  >
                    Claim Offer & Book
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
