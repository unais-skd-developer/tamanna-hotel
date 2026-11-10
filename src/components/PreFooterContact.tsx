"use client";

import React from "react";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";

export default function PreFooterContact() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Room Photo matching live site */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/site/Premier-Room-6-scaled.jpg"
          alt="Tamanna Luxury Premier Room"
          fill
          loading="lazy"
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* Overlaid Columns matching live site screenshot (aligned to top) */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch min-h-[400px] sm:min-h-[430px]">
        
        {/* 1. Left Column (25% on desktop): Mail Us */}
        <div
          data-reveal="up"
          data-delay="0"
          suppressHydrationWarning
          className="w-full md:w-1/2 lg:w-1/4 bg-[#0C64AB8C] pt-8 sm:pt-11 pb-8 sm:pb-10 px-5 sm:px-8 lg:px-9 text-white flex flex-col justify-start"
        >
          <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-6">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.75] shrink-0" />
            <h3
              className="text-xl sm:text-2xl md:text-[27px] font-medium text-white tracking-wide capitalize"
              style={{ fontFamily: '"Poppins", Sans-serif' }}
            >
              Mail Us
            </h3>
          </div>

          <div className="space-y-4 font-poppins text-white text-[15px] sm:text-[15.5px]">
            <div>
              <div className="font-normal text-white">
                Executive/Bizz/Shree inn:
              </div>
              <a
                href="mailto:Info@tamannahotels.com"
                className="text-white hover:underline font-normal block mt-0.5"
              >
                Info@tamannahotels.com
              </a>
            </div>

            <div>
              <div className="font-normal text-white">
                Grand Tamanna :
              </div>
              <a
                href="mailto:Grand@tamannahotels.com"
                className="text-white hover:underline font-normal block mt-0.5"
              >
                Grand@tamannahotels.com
              </a>
            </div>

            <div>
              <div className="font-normal text-white">
                Premier Tamanna :
              </div>
              <a
                href="mailto:Premier@tamannahotels.com"
                className="text-white hover:underline font-normal block mt-0.5"
              >
                Premier@tamannahotels.com
              </a>
            </div>

            <div>
              <div className="font-normal text-white">
                Imperial Tamanna :
              </div>
              <a
                href="mailto:Imperial@tamannahotels.com"
                className="text-white hover:underline font-normal block mt-0.5"
              >
                Imperial@tamannahotels.com
              </a>
            </div>
          </div>
        </div>

        {/* 2. Middle Column (25% on desktop): Reach Out */}
        <div
          data-reveal="up"
          data-delay="120"
          suppressHydrationWarning
          className="w-full md:w-1/2 lg:w-1/4 bg-[#0C64ABD9] pt-8 sm:pt-11 pb-8 sm:pb-10 px-5 sm:px-8 lg:px-9 text-white flex flex-col justify-start"
        >
          <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-6">
            <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.75] shrink-0" />
            <h3
              className="text-xl sm:text-2xl md:text-[27px] font-medium text-white tracking-wide capitalize"
              style={{ fontFamily: '"Poppins", Sans-serif' }}
            >
              Reach Out
            </h3>
          </div>

          <div className="space-y-1.5 font-poppins text-white text-[15px] sm:text-[15.5px]">
            <div className="font-normal text-white">
              Tel:
            </div>
            <p className="text-white font-normal leading-relaxed">
              <a href="tel:02066935000" className="hover:underline">
                020 66935000
              </a>
              {"/"}
              <a href="tel:7507772159" className="hover:underline">
                7507772159
              </a>
            </p>
          </div>
        </div>

        {/* 3. Right 50% on desktop: Purely transparent showing the luxurious bedroom image */}
        <div className="hidden lg:block lg:w-1/2" />

      </div>
    </section>
  );
}
