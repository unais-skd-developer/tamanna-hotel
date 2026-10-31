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
import { RESTAURANTS_DATA } from "@/data/siteData";
import { Utensils, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function RestaurantsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Restaurants"
        subtitle="Savor a world of authentic flavors, upscale lounge bars, and artisan pastries in Hinjawadi Pune."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/gallery_dining.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              CULINARY EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Restaurants & Bars In Pune
            </h2>
            <p className="text-slate-600 font-poppins text-sm sm:text-base mt-3">
              Dining is an essential part of every travel experience, and at Tamanna Hotels, we make it unforgettable. Our restaurants are designed to delight food lovers with taste, ambiance, and impeccable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESTAURANTS_DATA.map((rest, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src={rest.image}
                      alt={rest.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {rest.hotel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wide text-[#0c64ab] mb-2">
                      {rest.name}
                    </h3>
                    
                    <p className="text-slate-600 font-poppins text-xs sm:text-sm leading-relaxed mb-4">
                      {rest.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-500 font-jost pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#0c64ab]" />
                        <span>Timings: {rest.timing}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#0c64ab]" />
                        <span>Capacity: {rest.capacity}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
                        {rest.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${rest.slug}`}
                    className="w-full py-2.5 bg-slate-100 hover:bg-[#0c64ab] hover:text-white text-slate-800 font-bebas text-base tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 uppercase cursor-pointer"
                  >
                    <span>View Venue</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
