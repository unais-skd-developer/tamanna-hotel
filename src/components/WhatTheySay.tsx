"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface GoogleReview {
  id: string;
  name: string;
  avatarColor: string;
  time: string;
  rating: number;
  text: string;
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "r1",
    name: "khanindra das",
    avatarColor: "bg-[#4a148c]", // Purple as in image
    time: "2 weeks ago",
    rating: 5,
    text: "The service of breakfast is very encouraging and excellent. The service men are very very proactive and responsive all through. I wish all the best. Particularly, Mr Chandan ,...",
  },
  {
    id: "r2",
    name: "Chandrashekhar ...",
    avatarColor: "bg-[#00838f]", // Teal as in image
    time: "2 weeks ago",
    rating: 5,
    text: "All services are good",
  },
  {
    id: "r3",
    name: "Himani",
    avatarColor: "bg-[#5c6bc0]", // Indigo
    time: "2 weeks ago",
    rating: 5,
    text: "A well maintained hotel on the main road easy approach. Medical stores, restaurants and market don't seem to be nearby.",
  },
  {
    id: "r4",
    name: "Rahul Verma",
    avatarColor: "bg-[#e65100]", // Orange
    time: "3 weeks ago",
    rating: 5,
    text: "Great business hotel right in Hinjawadi Phase 1. High speed internet, quiet rooms, and very courteous staff.",
  },
  {
    id: "r5",
    name: "Sneha Patil",
    avatarColor: "bg-[#2e7d32]", // Green
    time: "1 month ago",
    rating: 5,
    text: "Around The World restaurant has great multi-cuisine options. We had a wonderful family dinner with warm hospitality.",
  },
];

export default function WhatTheySay() {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev >= GOOGLE_REVIEWS.length - 3 ? 0 : prev + 1));
  };

  const visibleReviews = [
    GOOGLE_REVIEWS[startIndex % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(startIndex + 1) % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(startIndex + 2) % GOOGLE_REVIEWS.length],
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: WHAT THEY SAY ABOUT US matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#4182b6] leading-[1.05] font-condensed">
              WHAT THEY<br />
              SAY ABOUT US
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md pt-2">
              Explore the best of comfort and hospitality with Tamanna, a name synonymous with trust among hotels in Pune. Book your stay or event now and discover why we&apos;re consistently rated among the top hotels in Pune.
            </p>
          </div>

          {/* Right Blue Testimonial Card matching Image 2 */}
          <div className="lg:col-span-7">
            <div className="bg-[#1068a8] text-white rounded-xl sm:rounded-2xl p-7 sm:p-10 shadow-2xl relative">
              
              {/* Large Quote Mark */}
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>

              {/* Review Quote Body */}
              <p className="text-center text-white text-sm sm:text-base md:text-[16px] leading-relaxed max-w-xl mx-auto mb-6 font-normal">
                Premier Tamanna Hotel in Pune is a great choice for business trips. Located in Hinjawadi near major IT hubs, it offers clean, comfortable rooms with good Wi-Fi, work desks, and friendly service. The on-site restaurant serves quality food, and the staff is professional and helpful. Ideal for a hassle-free business stay.
              </p>

              {/* 5 Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                ))}
              </div>

              {/* Author */}
              <div className="text-center font-bold text-base sm:text-lg tracking-wide">
                Mohamed Javith
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Part: Google Reviews Carousel Widget matching Image 3 */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Google Overall Score Block matching Image 3 left */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center lg:border-r lg:border-slate-200 lg:pr-6">
              <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-wider">
                EXCELLENT
              </span>

              {/* 5 Stars with partial 5th star */}
              <div className="flex items-center gap-1 my-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <div className="relative">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
              </div>

              <div className="text-xs text-slate-600 mb-3 font-medium">
                Based on <strong className="font-bold text-slate-800">10835 reviews</strong>
              </div>

              {/* Google colored logo */}
              <div className="flex items-center justify-center gap-0.5 text-2xl font-bold mb-3 tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

              <a
                href="https://www.google.com/search?q=tamanna+hotels+hinjawadi+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-sm transition-colors"
              >
                Review us on Google
              </a>
            </div>

            {/* Carousel of Reviews matching Image 3 right */}
            <div className="lg:col-span-9 relative">
              
              {/* Prev Button */}
              <button
                onClick={prevReview}
                className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center z-20 cursor-pointer"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextReview}
                className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center z-20 cursor-pointer"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 sm:px-4">
                {visibleReviews.map((rev, index) => (
                  <div
                    key={rev.id + index}
                    className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/90 flex flex-col justify-between h-[210px] sm:h-[220px]"
                  >
                    <div>
                      {/* Author Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-full ${rev.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase`}
                          >
                            {rev.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800 line-clamp-1">
                              {rev.name}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {rev.time}
                            </div>
                          </div>
                        </div>

                        {/* Google tiny G icon */}
                        <div className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-[#4285F4]">
                          G
                        </div>
                      </div>

                      {/* Stars + Verified Badge */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white ml-0.5" />
                      </div>

                      {/* Review Text */}
                      <p className="text-xs text-slate-700 leading-relaxed line-clamp-4">
                        {rev.text}
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-400 font-medium">
                      Read more
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

