"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function PreFooterContact() {
  return (
    <section className="relative w-full overflow-hidden mt-12">
      {/* Background Room Photo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/site/Premier-Room-6-scaled.jpg"
          alt="Tamanna Luxury Premier Room"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* Overlaid Columns */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-end min-h-[380px]">
        {/* Left 50% on desktop is transparent, showing the room image */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Middle Box: Reach Out (Phone) */}
        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#0C64ABD9] py-10 px-6 sm:px-8 text-white flex flex-col justify-center backdrop-blur-[2px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white">
              <Phone className="w-6 h-6 text-white" />
            </span>
            <h3
              className="font-jost text-xl sm:text-2xl font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: '"Jost", sans-serif' }}
            >
              Reach out
            </h3>
          </div>

          <div className="space-y-3 font-poppins">
            <div className="font-semibold text-white text-base font-jost" style={{ fontFamily: '"Jost", sans-serif' }}>
              Tel:
            </div>
            <p className="text-white text-sm sm:text-[15px] font-normal leading-relaxed">
              <a href="tel:02066935000" className="hover:underline">
                020 66935000
              </a>
              {" / "}
              <a href="tel:7507772159" className="hover:underline">
                7507772159
              </a>
            </p>
          </div>
        </div>

        {/* Right Box: Mail us (Email) */}
        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#0C64AB8C] py-10 px-6 sm:px-8 text-white flex flex-col justify-center backdrop-blur-[2px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white">
              <Mail className="w-6 h-6 text-white" />
            </span>
            <h3
              className="font-jost text-xl sm:text-2xl font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: '"Jost", sans-serif' }}
            >
              Mail us
            </h3>
          </div>

          <div className="space-y-4 font-poppins text-sm sm:text-[14.5px]">
            <div>
              <span className="font-medium text-white block text-xs sm:text-[13px] font-jost" style={{ fontFamily: '"Jost", sans-serif' }}>
                Executive/Bizz/Shree inn:
              </span>
              <a
                href="mailto:Info@tamannahotels.com"
                className="text-white hover:underline text-xs sm:text-sm font-normal"
              >
                Info@tamannahotels.com
              </a>
            </div>

            <div>
              <span className="font-medium text-white block text-xs sm:text-[13px] font-jost" style={{ fontFamily: '"Jost", sans-serif' }}>
                Grand Tamanna :
              </span>
              <a
                href="mailto:Grand@tamannahotels.com"
                className="text-white hover:underline text-xs sm:text-sm font-normal"
              >
                Grand@tamannahotels.com
              </a>
            </div>

            <div>
              <span className="font-medium text-white block text-xs sm:text-[13px] font-jost" style={{ fontFamily: '"Jost", sans-serif' }}>
                Premier Tamanna :
              </span>
              <a
                href="mailto:Premier@tamannahotels.com"
                className="text-white hover:underline text-xs sm:text-sm font-normal"
              >
                Premier@tamannahotels.com
              </a>
            </div>

            <div>
              <span className="font-medium text-white block text-xs sm:text-[13px] font-jost" style={{ fontFamily: '"Jost", sans-serif' }}>
                Imperial Tamanna :
              </span>
              <a
                href="mailto:Imperial@tamannahotels.com"
                className="text-white hover:underline text-xs sm:text-sm font-normal"
              >
                Imperial@tamannahotels.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
