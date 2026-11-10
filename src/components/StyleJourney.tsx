"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StyleJourney() {
  return (
    <section id="style-journey" className="w-full py-14 sm:py-16 lg:py-[70px] bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">

          {/* Left: Two Photos - Animated fadeInLeft matching live site */}
          <div
            data-reveal="left"
            suppressHydrationWarning
            className="w-full lg:w-[50%] flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-6"
          >
            {/* Photo 1: Reception Lobby */}
            <div className="w-full lg:w-[54%] flex flex-col justify-start">
              <div className="relative w-full h-[500px] lg:h-auto lg:aspect-[256/171] overflow-hidden rounded-none group img-zoom-container">
                <Image
                  src="/images/site/Reception-Lobby.jpg"
                  alt="Tamanna Hotels Reception Lobby"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 27vw"
                />
              </div>
            </div>

            {/* Photo 2: Portrait Exterior Totem Signboard */}
            <div className="w-full lg:w-[46%] flex flex-col items-center lg:items-start justify-end">
              <div className="relative w-[78%] sm:w-[68%] lg:w-full h-[320px] sm:h-[360px] md:h-[380px] overflow-hidden rounded-none group img-zoom-container">
                <Image
                  src="/images/site/Exterior-2.jpg"
                  alt="Tamanna Hotels Grand Entrance Sign"
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 80vw, 23vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Description & READ MORE - Animated fadeInUp matching live site */}
          <div
            data-reveal="up"
            data-delay="100"
            suppressHydrationWarning
            className="w-full lg:w-[50%] flex flex-col justify-between lg:pl-6"
          >
            <div>
              {/* Title matching exact CSS from Elementor */}
              <h2
                className="font-bebas uppercase text-[48px] sm:text-[65px] md:text-[78px] lg:text-[95px] leading-[0.92] tracking-[-2px] lg:tracking-[-3.8px] mb-6 select-none"
                style={{
                  fontFamily: '"Bebas Neue", Sans-serif',
                  color: '#1c6fae',
                  fontWeight: 400,
                }}
              >
                STYLE YOUR
                <br />
                <span
                  style={{
                    color: '#0C64AB',
                    fontWeight: 500,
                  }}
                >
                  OWN JOURNEY
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-slate-600 font-poppins text-sm sm:text-base leading-[1.8] font-normal mb-8">
                Tamanna Hotels{" "}
                <a
                  href="https://www.google.com/search?kgmid=%2Fg%2F11c1ww66hm&hl=en-IN&q=Grand%20Tamanna%20Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tamanna Hotels Google Profile"
                  className="text-slate-800 font-medium hover:text-[#0c64ab] underline decoration-slate-300"
                >
                  holds
                </a>{" "}
                the distinction of being the First hotel established in Hinjawadi IT Park and is redefining comfort and modern hospitality in Pune. It has been setting new standards of excellence in the hospitality industry for more than two decades. Located in the heart of Pune’s bustling Hinjawadi IT Park, we offer an unmatched blend of comfort, convenience, and luxury. With Six unique hotel properties, multiple award-winning dining experiences, and state-of-the-art event venues, we take pride in being among the most preferred hotels in Pune for both business and leisure travellers.
              </p>
            </div>

            {/* READ MORE → Button */}
            <div>
              <Link
                href="/best-hotels-pune"
                aria-label="Read more about Tamanna Hotels"
                className="inline-flex items-center gap-2 text-[#0c64ab] hover:text-[#084572] font-bebas text-[18px] sm:text-[20px] tracking-[0.8px] uppercase group transition-colors"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>READ MORE</span>
                <span className="text-[18px] font-normal transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
