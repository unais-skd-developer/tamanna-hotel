"use client";

import React from "react";
import Image from "next/image";

interface EnjoyStayProps {
  onOpenBooking: () => void;
}

export default function EnjoyStay({ onOpenBooking }: EnjoyStayProps) {
  return (
    <section id="enjoy-stay" className="relative w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Image Container */}
      <div className="relative w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 min-h-[460px] flex items-center justify-center">
        
        {/* Background Image matching Image 1 */}
        <Image
          src="/images/stay_banner.jpg"
          alt="Enjoy Your Stay at Tamanna Hotel"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Darkening overlay for high text legibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 backdrop-blur-[0.5px]" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Subtitle */}
          <span className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            ENJOY YOUR STAY AT OUR HOTEL
          </span>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold uppercase tracking-tight font-condensed leading-snug sm:leading-tight max-w-4xl text-white mb-6">
            EXPERIENCE A COMFORTABLE AND RELAXING HOLIDAY AT TAMANNA HOTEL, NESTLED IN THE HEART OF IT HUB OF HINJAWADI PUNE.
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-200 text-sm sm:text-base md:text-[15.5px] leading-relaxed max-w-3xl mb-8 font-normal">
            Tamanna Hotels has earned accolades such as the India&apos;s Top 100 SME Award and the India MICE Award for Best Meetings Hotel. These recognitions reflect our commitment to delivering value-driven service with integrity, ethics, and quality.
          </p>

          {/* BOOK NOW Button matching Image 1 */}
          <button
            onClick={onOpenBooking}
            className="bg-[#1068a8] hover:bg-[#0c5387] active:scale-95 text-white font-bold text-sm sm:text-base uppercase tracking-wider px-9 py-3 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer"
          >
            BOOK NOW
          </button>

        </div>
      </div>
    </section>
  );
}
