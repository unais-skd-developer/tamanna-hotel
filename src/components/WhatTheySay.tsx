"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mahesh Godbole",
    rating: 5,
    text: "This is one of the best hotel in Hinjewadi. I had atleast 20/30 odd parties in their different hotels since 2006. The owner Mr. Shetty is very humble and helpful. In last week I met him after long time but still he was the same, which I really like.\n\nNow coming to grand tamanna, it has awesome restaurant, great rooms and mainly good big party halls. The location is the best just next to Infosys phase2 circle.",
  },
  {
    name: "karthiga meenu",
    rating: 5,
    text: "We celebrated our daughter’s birthday at Grand Tamanna.. had a wonderful experience, ambience, food, arrangements every thing was awesome. Fully satisfied",
  },
  {
    name: "shweta gajalkar",
    rating: 5,
    text: "Grand Tammana’s experience was really great. We had 2 functions over there and service was good and food was really taste. All the staff was helpful and polite.",
  },
];

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
    name: "Kalyan Kulkarni",
    avatarColor: "bg-[#4285F4]",
    time: "1 week ago",
    rating: 5,
    text: "Nice hotel in Hinjewadi ph2.",
  },
  {
    id: "r2",
    name: "Chinar Goyal",
    avatarColor: "bg-[#EA4335]",
    time: "1 week ago",
    rating: 5,
    text: "Food was good",
  },
  {
    id: "r3",
    name: "MANSI TYAGI",
    avatarColor: "bg-[#FBBC05]",
    time: "1 week ago",
    rating: 5,
    text: "Everything is very good…servicing staff everything is worth coming",
  },
  {
    id: "r4",
    name: "khanindra das",
    avatarColor: "bg-[#4a148c]",
    time: "2 weeks ago",
    rating: 5,
    text: "The service of breakfast is very encouraging and excellent. The service men are very very proactive and responsive all through. I wish all the best. Particularly, Mr Chandan , captain’s response, service and actions to the inmates are very very encouraging. My special thanks to him and wish him successful life in future .",
  },
  {
    id: "r5",
    name: "Chandrashekhar ...",
    avatarColor: "bg-[#00838f]",
    time: "2 weeks ago",
    rating: 5,
    text: "All services are good",
  },
  {
    id: "r6",
    name: "Himani",
    avatarColor: "bg-[#5c6bc0]",
    time: "2 weeks ago",
    rating: 5,
    text: "A well maintained hotel on the main road easy approach. Medical stores, restaurants and market don't seem to be nearby.",
  },
];

export default function WhatTheySay() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [googleIndex, setGoogleIndex] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevReview = () => {
    setGoogleIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setGoogleIndex((prev) => (prev >= GOOGLE_REVIEWS.length - 3 ? 0 : prev + 1));
  };

  const currentT = TESTIMONIALS[activeTestimonial];

  const visibleGoogleReviews = [
    GOOGLE_REVIEWS[googleIndex % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(googleIndex + 1) % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(googleIndex + 2) % GOOGLE_REVIEWS.length],
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: WHAT THEY SAY ABOUT US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 md:mb-20">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2
              className="font-bebas text-[50px] sm:text-[65px] lg:text-[95px] leading-[0.95] tracking-[-2px] sm:tracking-[-3.8px] text-[#0C64AB91] uppercase"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              What They<br />
              <span className="text-[#0C64AB] font-medium tracking-[-2px] sm:tracking-[-3.8px]">
                say about us
              </span>
            </h2>

            <p className="font-poppins text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal pt-2">
              Explore the best of comfort and hospitality with Tamanna, a name synonymous with trust among hotels in Pune. Book your stay or event now and discover why we’re consistently rated among the top hotels in Pune.
            </p>
          </div>

          {/* Right Blue Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C64AB] text-white rounded-2xl p-8 sm:p-12 lg:p-[60px] shadow-2xl relative min-h-[360px] flex flex-col justify-between">
              
              {/* Watermark Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="w-12 h-12 text-[#E2DCDC] rotate-180" fill="#E2DCDC" />
              </div>

              {/* Review Quote Body */}
              <div className="transition-opacity duration-500 ease-in-out text-center">
                <p className="font-poppins text-white text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.8] font-normal max-w-xl mx-auto mb-6 whitespace-pre-line">
                  {currentT.text}
                </p>

                {/* 5 Stars */}
                <div className="flex items-center justify-center gap-1.5 mb-4">
                  {[...Array(currentT.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fec42d] text-[#fec42d]" />
                  ))}
                </div>

                {/* Author Name */}
                <div className="font-poppins font-semibold text-base sm:text-lg tracking-wide text-white capitalize">
                  {currentT.name}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Part: Google Reviews Carousel Widget */}
        <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-[12px] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Google Overall Score Block */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center lg:border-r lg:border-slate-300 lg:pr-6">
              <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-wider">
                EXCELLENT
              </span>

              {/* 5 Stars with 4.4 rating */}
              <div className="flex items-center gap-1 my-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbb701] text-[#fbb701]" />
                ))}
                <div className="relative">
                  <Star className="w-5 h-5 fill-[#fbb701] text-[#fbb701]" />
                </div>
              </div>

              <div className="text-xs text-slate-600 mb-3 font-medium">
                Based on <strong className="font-bold text-slate-800">10835 reviews</strong>
              </div>

              {/* Google SVG Logo */}
              <div className="flex items-center justify-center gap-0.5 text-2xl font-bold mb-3 tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

              <a
                href="https://search.google.com/local/writereview?placeid=ChIJVVVVVaS7wjsRpwNkwO571_g"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-sm transition-colors"
              >
                Review us on Google
              </a>
            </div>

            {/* Carousel of Reviews */}
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
                {visibleGoogleReviews.map((rev) => (
                  <div
                    key={rev.id}
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
                        <div className="flex text-[#fbb701]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#fbb701]" />
                          ))}
                        </div>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white ml-0.5" />
                      </div>

                      {/* Review Text */}
                      <p className="text-xs text-slate-700 leading-relaxed line-clamp-4 font-poppins">
                        {rev.text}
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-400 font-medium font-poppins">
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
