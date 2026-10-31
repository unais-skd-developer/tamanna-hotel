"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MapPin, Star, Wifi, CheckCircle2, Calendar, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { HotelProperty } from "./CuratedSpaces";

interface HotelDetailModalProps {
  hotel: HotelProperty | null;
  onClose: () => void;
  onBookHotel: (hotelName: string) => void;
}

export default function HotelDetailModal({
  hotel,
  onClose,
  onBookHotel,
}: HotelDetailModalProps) {
  if (!hotel) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative w-full h-64 sm:h-80 bg-slate-900">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 right-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#005d9e] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Tamanna Hotels Group
              </span>
              <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{hotel.rating}</span>
                <span className="text-white/60 text-[10px]">(Verified)</span>
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold font-condensed tracking-wide drop-shadow-md">
              {hotel.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{hotel.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              About This Property
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {hotel.description}
            </p>
          </div>

          {/* Key Amenities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Amenities & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {hotel.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-sky-50/60 p-2.5 rounded-lg border border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-[#005d9e] shrink-0" />
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Booking Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Standard Room Starting From</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-[#005d9e] font-condensed">
                  {hotel.startingPrice}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ night + taxes</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {hotel.slug && (
                <Link
                  href={`/${hotel.slug}`}
                  onClick={onClose}
                  className="px-4 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Hotel Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}

              <button
                onClick={() => {
                  onClose();
                  onBookHotel(hotel.name);
                }}
                className="flex-1 sm:flex-none bg-[#1068a8] hover:bg-[#0b548a] active:scale-95 text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK THIS HOTEL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
