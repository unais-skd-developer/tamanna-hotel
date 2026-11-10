"use client";

import React, { useState } from "react";
import { Calendar, ChevronDown, ChevronRight } from "lucide-react";

interface BookingBarProps {
  initialProperty?: string;
  className?: string;
}

const getInitialDates = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d: Date) => {
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return {
    checkIn: formatDate(today),
    checkOut: formatDate(tomorrow),
  };
};

export default function BookingBar({ initialProperty = "", className = "" }: BookingBarProps) {
  const [selectedProperty, setSelectedProperty] = useState(initialProperty);
  const [checkIn, setCheckIn] = useState(() => getInitialDates().checkIn);
  const [checkOut, setCheckOut] = useState(() => getInitialDates().checkOut);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert YYYY-MM-DD to DD/MM/YYYY as required by ResAvenue
    const formatToDMY = (dateStr: string) => {
      if (!dateStr) return "";
      const [y, m, d] = dateStr.split("-");
      return `${d}/${m}/${y}`;
    };

    const arrDate = formatToDMY(checkIn);
    const depDate = formatToDMY(checkOut);
    const regCode = selectedProperty || "ZGZV1026"; // Default to Grand Tamanna

    const url = `https://bookings.resavenue.com/resBooking4/searchRooms?targetTemplate=4&curr=INR&regCode=${regCode}&arrDate=${arrDate}&depDate=${depDate}`;
    window.open(url, "_blank");
  };

  return (
    <div id="enquire" className={`w-full py-8 px-4 sm:px-6 bg-[#f7f8fa] border-y border-slate-200 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-slate-200 p-5 md:p-6 lg:p-7 flex flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-6"
        >
          {/* Title on the left */}
          <div className="shrink-0 flex items-center gap-2 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 lg:pr-6">
            <div>
              <span className="text-[#0c64ab] text-xs font-semibold uppercase tracking-wider block font-jost">
                Secured Online Booking
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-bebas uppercase tracking-wide text-slate-800 leading-tight">
                Book Your <span className="text-[#0c64ab]">Ideal Stay</span>
              </h2>
            </div>
            <ChevronRight className="w-5 h-5 text-[#0c64ab] hidden sm:block" />
          </div>

          {/* Form Fields Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Property Selector */}
            <div className="relative">
              <label className="block text-xs font-medium text-slate-600 mb-1 font-jost">
                Property
              </label>
              <div className="relative">
                <select
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="w-full h-11 px-3.5 pr-8 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab] focus:border-transparent font-jost appearance-none cursor-pointer"
                >
                  <option value="">Select Property</option>
                  <option value="ZGZV1026">Grand Tamanna Hotel</option>
                  <option value="ICAX0619">Bizz Tamanna Hotel</option>
                  <option value="ICAV0619">Executive Tamanna Hotel</option>
                  <option value="VAGE0325">Shree Inn by Tamanna Hotels</option>
                  <option value="VIXA0712">Premier Tamanna Hotel</option>
                  <option value="TVRT0602">Imperial Tamanna Hotel</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1 font-jost">
                Check-in
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full h-11 px-3.5 pr-8 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab] focus:border-transparent font-jost cursor-pointer"
                />
                <Calendar className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1 font-jost">
                Check-out
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full h-11 px-3.5 pr-8 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab] focus:border-transparent font-jost cursor-pointer"
                />
                <Calendar className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Book Now Button */}
          <div className="shrink-0 flex items-end">
            <button
              type="submit"
              className="w-full sm:w-auto h-11 px-8 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-lg tracking-wider rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer uppercase"
            >
              <span>Book Now</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
