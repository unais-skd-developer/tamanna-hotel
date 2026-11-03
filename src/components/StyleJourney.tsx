"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StyleJourney() {
  return (
    <section id="style-journey" className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left: Two Photos (Tall 500px Reception-Lobby + 380px bottom-aligned Exterior-2) */}
          <div className="lg:col-span-6 flex items-end justify-center lg:justify-start gap-4 sm:gap-6">
            
            {/* Image 1: Tall 500px Reception Lobby */}
            <div className="relative w-[54%] sm:w-[50%] h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden rounded-sm shadow-md shrink-0">
              <Image
                src="/images/site/Reception-Lobby.jpg"
                alt="Tamanna Hotels Reception Lobby"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 27vw"
              />
            </div>

            {/* Image 2: 380px Bottom-aligned Exterior-2 */}
            <div className="relative w-[44%] sm:w-[42%] h-[280px] sm:h-[330px] md:h-[380px] overflow-hidden rounded-sm shadow-md shrink-0 hidden sm:block">
              <Image
                src="/images/site/Exterior-2.jpg"
                alt="Tamanna Hotels Exterior"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 40vw, 23vw"
              />
            </div>

          </div>

          {/* Right Column: Title, Description & READ MORE */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">

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
