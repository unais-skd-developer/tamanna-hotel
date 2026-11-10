"use client";

import React from "react";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full bg-[#0C64AB] text-white font-jost font-normal normal-case text-[12.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-2.5 gap-y-0.5 sm:gap-y-1 text-center font-normal tracking-normal leading-tight sm:leading-normal">
        <span className="whitespace-nowrap">Tamanna Hotels |</span>

        <div className="flex items-center gap-1 flex-wrap justify-center">
          <span>Reservations:</span>
          <a
            href="tel:02066935000"
            className="hover:underline transition-colors font-normal"
          >
            02066935000
          </a>
          <span>/</span>
          <a
            href="tel:02066539888"
            className="hover:underline transition-colors font-normal"
          >
            02066539888
          </a>
          <span>/</span>
          <a
            href="tel:02066751900"
            className="hover:underline transition-colors font-normal"
          >
            02066751900
          </a>
          <span className="ml-1">|</span>
        </div>

        <div className="flex items-center gap-1.5 justify-center">
          <span>Email :</span>
          <a
            href="mailto:info@tamannahotels.com"
            className="hover:underline transition-colors font-normal"
          >
            info@tamannahotels.com
          </a>
        </div>
      </div>
    </div>
  );
}
