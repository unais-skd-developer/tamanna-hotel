"use client";

import React from "react";

interface EnjoyStayProps {
  onOpenBooking: () => void;
}

export default function EnjoyStay({ onOpenBooking }: EnjoyStayProps) {
  return (
    <section
      id="enjoy-stay"
      className="relative z-0 w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[63vh] flex items-center justify-center bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-white select-none"
      style={{
        backgroundImage: "url('/images/site/Suite-Room-Black-2-scaled.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay: 50% opacity black as on the live site */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Subtitle */}
        <p
          className="font-bebas text-base sm:text-[18px] text-white uppercase tracking-[1.5px] sm:tracking-[2px] mb-2 sm:mb-4 text-center font-normal"
          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
        >
          ENJOY YOUR STAY AT OUR HOTEL
        </p>

        {/* Main Headline */}
        <h2
          className="font-bebas text-[24px] sm:text-[34px] md:text-[42px] lg:text-[45px] text-white uppercase tracking-normal leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6 text-center font-normal"
          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
        >
          EXPERIENCE A COMFORTABLE AND RELAXING HOLIDAY AT TAMANNA HOTEL, NESTLED IN THE HEART OF IT HUB OF HINJAWADI PUNE.
        </h2>

        {/* Description Paragraph */}
        <p className="font-poppins text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] sm:leading-[1.8] max-w-[1000px] lg:max-w-[70%] mx-auto mb-6 sm:mb-10 text-center font-normal">
          Tamanna Hotels has earned accolades such as the India’s Top 100 SME Award and the India MICE Award for Best Meetings Hotel. These recognitions reflect our commitment to delivering value-driven service with integrity, ethics, and quality.
        </p>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="bg-[#0C64AB] hover:bg-[#094d84] text-white font-bebas text-base sm:text-[18px] font-medium tracking-[0.8px] px-8 sm:px-10 py-3 sm:py-3.5 rounded-[50px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer uppercase"
          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
        >
          Book Now
        </button>

      </div>
    </section>
  );
}
