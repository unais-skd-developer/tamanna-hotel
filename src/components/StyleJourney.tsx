"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StyleJourney() {
  return (
    <section id="style-journey" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Two Staggered Photos */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[490px] h-[360px] sm:h-[420px] md:h-[450px]">

              {/* Upper Left Inset Image: Lobby Chandelier */}
              <div className="absolute top-0 left-0 w-[60%] sm:w-[62%] h-[48%] sm:h-[50%] overflow-hidden shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/extracted/style_journey_lobby.jpg"
                    alt="Tamanna Hotels Reception & Chandelier"
                    fill
                    sizes="(max-width: 768px) 60vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Lower Right Overlapping Image: Outdoor Entrance Totem */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 w-[43%] sm:w-[45%] h-[72%] sm:h-[75%] overflow-hidden shadow-xl z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/extracted/style_journey_sign.jpg"
                    alt="Grand Tamanna Hotel Entrance & Totem Board"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title, Description & READ MORE */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Title with exact CSS matching user inspector screenshot */}
            <h2
              className="font-bebas uppercase text-[52px] sm:text-[72px] md:text-[84px] lg:text-[95px] leading-[0.95] lg:leading-[90px] mb-6"
              style={{
                fontFamily: '"Bebas Neue", Sans-serif',
                color: '#0C64AB91',
                letterSpacing: '-3.8px',
                fontWeight: 400,
              }}
            >
              STYLE YOUR
              <br />
              <span
                style={{
                  color: '#0C64AB',
                  fontWeight: 500,
                  letterSpacing: '-3.8px',
                }}
              >
                OWN JOURNEY
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#64748b] font-poppins text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal mb-8">
              Tamanna Hotels <strong className="font-semibold text-slate-800">holds</strong> the distinction of being the First hotel established in Hinjawadi IT Park and is redefining comfort and modern hospitality in Pune. It has been setting new standards of excellence in the hospitality industry for more than two decades. Located in the heart of Pune’s bustling Hinjawadi IT Park, we offer an unmatched blend of comfort, convenience, and luxury. With Six unique hotel properties, multiple award-winning dining experiences, and state-of-the-art event venues, we take pride in being among the most preferred hotels in Pune for both business and leisure travellers.
            </p>

            {/* READ MORE → Link */}
            <div>
              <Link
                href="/best-hotels-pune"
                style={{
                  fontFamily: '"Bebas Neue", Sans-serif',
                  letterSpacing: '0.8px',
                }}
                className="inline-flex items-center gap-2 text-[#0c64ab] hover:text-[#084572] text-[20px] sm:text-[22px] uppercase group transition-colors"
              >
                <span>READ MORE</span>
                <span className="text-[20px] transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
