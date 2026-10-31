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
import { AWARDS_DATA } from "@/data/siteData";
import { Award, CheckCircle2, Trophy, Clock, Building2, Users } from "lucide-react";

export default function AboutUsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        title="About Us"
        subtitle="Every Moment, A Delight — Setting benchmarks in Indian hospitality for over two decades."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      {/* Section 1: About Tamanna Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/extracted/style_journey_lobby.jpg"
                  alt="Tamanna Hotels Lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-48 sm:w-60 h-36 sm:h-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image
                  src="/images/extracted/style_journey_sign.jpg"
                  alt="Tamanna Entrance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost">
                ABOUT TAMANNA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800 leading-tight">
                Two Decades of Excellence in <span className="text-[#0c64ab]">Pune&apos;s IT Hub</span>
              </h2>

              <p className="text-slate-600 font-poppins text-sm sm:text-base leading-relaxed">
                Tamanna Hotels has grown to become one of the best hotels in Pune, offering exceptional hospitality in the heart of Hinjawadi IT Park. We were the first hotel established in Hinjawadi, redefining comfort and modern hospitality in Pune.
              </p>

              <p className="text-slate-600 font-poppins text-sm sm:text-base leading-relaxed">
                Our journey began with a vision to create a hotel brand that reflects Indian warmth, professionalism, and comfort. Value for money is our USP, and improving quality continuously is our ethos. Today, we manage 6 unique properties, multiple fine restaurants, and ten state-of-the-art event venues.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <span className="block text-3xl sm:text-4xl font-bebas text-[#0c64ab]">20+</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-jost">Years Experience</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bebas text-[#0c64ab]">6</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-jost">Properties</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bebas text-[#0c64ab]">10+</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-jost">Banquet Halls</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Awards & Recognitions */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
              HONORS & ACCOLADES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-slate-800">
              Awards & Recognitions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-poppins mt-3">
              Recognized nationally for corporate hospitality, MICE excellence, and culinary standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AWARDS_DATA.map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 bg-sky-100 text-[#0c64ab] font-bold text-xs rounded-full font-jost">
                      {award.year}
                    </span>
                    <Trophy className="w-5 h-5 text-amber-500" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wide text-slate-800 mb-1">
                    {award.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#0c64ab] font-semibold block mb-3">
                    {award.subtitle}
                  </span>
                  <p className="text-slate-600 font-poppins text-xs sm:text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Event & Banquet Philosophy */}
      <section className="py-16 bg-[#07193f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost">
            HOSPITALITY WITH PURPOSE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wide text-white">
            Hosting Celebrations That Echo For A Lifetime
          </h2>
          <p className="text-slate-300 font-poppins text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Tamanna Hotels is known for its vibrant events and banquet offerings. With ten banquet halls, rooftop venues, boardrooms, and conference spaces, we specialize in corporate summits, product launches, dream weddings, and private family galas.
          </p>
          <div className="pt-4">
            <Link
              href="/top-wedding-party-venues-pune"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0c64ab] hover:bg-sky-600 text-white font-bebas text-lg tracking-wider rounded-full transition-colors uppercase shadow-xl"
            >
              Explore Our Venues
            </Link>
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
