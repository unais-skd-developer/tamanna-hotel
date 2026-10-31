"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#005d9e] text-white font-jost font-normal normal-case text-[13px] sm:text-[13.5px] md:text-[14px] py-2 px-4 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-normal tracking-normal">
        <span className="whitespace-nowrap">Tamanna Hotels</span>
        <span className="hidden sm:inline text-white/60">|</span>
        
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <Phone className="w-3.5 h-3.5 opacity-90 hidden sm:inline" />
          <span>Reservations:</span>
          <a
            href="tel:02066935000"
            className="hover:underline hover:text-sky-200 transition-colors font-normal"
          >
            02066935000
          </a>
          <span>/</span>
          <a
            href="tel:02066539888"
            className="hover:underline hover:text-sky-200 transition-colors font-normal"
          >
            02066539888
          </a>
          <span>/</span>
          <a
            href="tel:02066751900"
            className="hover:underline hover:text-sky-200 transition-colors font-normal"
          >
            02066751900
          </a>
        </div>

        <span className="hidden md:inline text-white/60">|</span>

        <div className="flex items-center gap-1.5 justify-center">
          <Mail className="w-3.5 h-3.5 opacity-90 hidden sm:inline" />
          <span>Email :</span>
          <a
            href="mailto:info@tamannahotels.com"
            className="hover:underline hover:text-sky-200 transition-colors font-normal"
          >
            info@tamannahotels.com
          </a>
        </div>
      </div>
    </div>
  );
}
