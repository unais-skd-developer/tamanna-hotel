"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StyleJourney() {
  return (
    <section id="style-journey" className="w-full py-14 sm:py-16 lg:py-[70px] bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">

          {/* Left: Two Asymmetrically Staggered Photos matching exact Elementor live layout */}
          <div className="w-full lg:w-[50%] flex items-stretch gap-4 sm:gap-6">
            
            {/* Column 1 (27% of total / 54% of left container): Top-aligned landscape Reception Lobby */}
            <div className="w-[54%] flex flex-col justify-start">
              <div className="relative w-full aspect-[256/171] overflow-hidden rounded-none">
                <Image
                  src="/images/site/Reception-Lobby.jpg"
                  alt="Tamanna Hotels Reception Lobby"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 27vw"
                />
              </div>
            </div>

            {/* Column 2 (23% of total / 46% of left container): Bottom-aligned portrait Exterior Totem Signboard */}
            <div className="w-[46%] flex flex-col justify-end">
              <div className="relative w-full h-[280px] sm:h-[330px] md:h-[380px] overflow-hidden rounded-none">
                <Image
                  src="/images/site/Exterior-2.jpg"
                  alt="Tamanna Hotels Grand Entrance Sign"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 23vw"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Title, Description & READ MORE */}
          <div className="w-full lg:w-[50%] flex flex-col justify-between lg:pl-6">
            <div>
              {/* Title matching exact CSS from Elementor */}
              <h2
                className="font-bebas uppercase text-[48px] sm:text-[65px] md:text-[78px] lg:text-[95px] leading-[0.92] tracking-[-2px] lg:tracking-[-3.8px] mb-6 select-none"
                style={{
                  fontFamily: '"Bebas Neue", Sans-serif',
                  color: '#0C64AB91',
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
                className="inline-flex items-center gap-2 text-[#0c64ab] hover:text-[#084572] font-bebas text-[18px] sm:text-[20px] tracking-[0.8px] uppercase group transition-colors"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
