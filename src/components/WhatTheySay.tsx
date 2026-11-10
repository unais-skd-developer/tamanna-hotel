"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";

interface Testimonial {
  author: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Mahesh Godbole",
    text: "This is one of the best hotel in Hinjewadi. I had atleast 20/30 odd parties in their different hotels since 2006. The owner Mr. Shetty is very humble and helpful. In last week I met him after long time but still he was the same, which I really like.\nNow coming to grand tamanna, it has awesome restaurant, great rooms and mainly good big party halls.\nThe location is the best just next to Infosys phase2 circle.",
  },
  {
    author: "karthiga meenu",
    text: "We celebrated our daughter’s birthday at Grand Tamanna.. had a wonderful experience, ambience, food, arrangements every thing was awesome. Fully satisfied",
  },
  {
    author: "shweta gajalkar",
    text: "Grand Tammana’s experience was really great. We had 2 functions over there and service was good and food was really taste. All the staff was helpful and polite.",
  },
  {
    author: "Prashant Raizada",
    text: "Had been using Hotel Grand Tamanna for various purposes and have been satisfied everytime due to services provided with qualities maintained. Other than only being a bit far from city, this gem hidden deep inside Hinjewadi is perfect place for stay and family functions. Did my kid's first birthday recently. From the booking, arrangements, function, food, time flexibility, staff to closure everything has been smooth and everyone has been courteous.\nSpecial thanks to Mr. Sadanand Shetty who led the booking negotiation and arrangements and helped us in ensuring better stay and memorable family function.",
  },
  {
    author: "Khadija Tasneem",
    text: "The food in the resturant is very tasty & the hospitality of the staff is really very nice & helpful🥰 had a peaceful n wonderful stay after a tiring day of work☺️ thank you Tamana Hotel for a pleasant stay 😊",
  },
  {
    author: "Mohamed Javith",
    text: "Premier Tamanna Hotel in Pune is a great choice for business trips. Located in Hinjawadi near major IT hubs, it offers clean, comfortable rooms with good Wi-Fi, work desks, and friendly service. The on-site restaurant serves quality food, and the staff is professional and helpful. Ideal for a hassle-free business stay.",
  },
  {
    author: "Vishal Pardeshi",
    text: "Stayed at Hotel Premier Tamanna and had a great experience!\nThe rooms were clean and comfortable, and the staff was friendly. Breakfast was tasty with good variety.",
  },
  {
    author: "Abhay Ugle",
    text: "We sincerely appreciate the outstanding food, impeccable service, top-notch amenities and unwavering support by your team during our wedding ceremony. Your dedication made our special day truly memorable and seamless.",
  },
  {
    author: "mahak barjatiya",
    text: "I truly appreciate the excellent quality of the room and the top-notch service. The breakfast team was incredibly warm, polite, and friendly—they treated us to a generous spread of delicious items.\n\nA special shoutout to Raj Pawar for his outstanding hospitality. As long as he's at the helm, young guests like us are bound to have a delightful and memorable stay.",
  },
  {
    author: "Naveen Shriyan",
    text: "This is one of the best place to stay. Great room awesome food and great people. Had a very comfortable time here and it’s very comfortable for couples. Eager to come back again. Thanks for the awesome experience\nA special shoutout to Raj Pawar for his outstanding hospitality. As long as he's at the helm, young guests like us are bound to have a delightful and memorable stay.",
  },
  {
    author: "Sweta Banerjee",
    text: "The food is amazing and we have been visiting this place since the last 10 years. The service and the attendants are always smiling and well behaved. Value for money. 😊",
  },
  {
    author: "ARUN RAVEENDRAN",
    text: "The food was good. Food was warm.. varieties were available. Staff was friendly and helpful",
  },
  {
    author: "Viraj Tambekar",
    text: "The hotel is at good location near to all major IT companies. Rooms are cleaned and multiple options in breakfast and the good one. Recommended to stay here..",
  },
  {
    author: "Pusker Mohan",
    text: "Awesome service....awesome staffs....Awesome food....Really recommendable....\nThe hotel managers Vikram and Akram both are very nice , prompt and very happy with the services they provided....If you are in Hinjewadi, I would like to recommend this hotel.....Very clean and spacious rooms....Very nice staffs.....I stayed for corporate stay for around 20 days and I liked all the services.",
  },
];

interface GoogleReview {
  id: string;
  name: string;
  avatar?: string;
  initial?: string;
  avatarBg?: string;
  isLocalGuide?: boolean;
  time: string;
  rating: number;
  text: string;
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "r1",
    name: "Himani",
    avatar: "/images/site/avatar_himani.jpg",
    isLocalGuide: false,
    time: "3 weeks ago",
    rating: 5,
    text: "A well maintained hotel on the main road easy approach. Medical stores, restaurants and market don't seem to be nearby.",
  },
  {
    id: "r2",
    name: "Kalyan Kulkarni",
    avatar: "/images/site/avatar_kalyan.jpg",
    isLocalGuide: true,
    time: "3 weeks ago",
    rating: 5,
    text: "Nice hotel in Hinjewadi ph2.",
  },
  {
    id: "r3",
    name: "Chinar Goyal",
    avatar: "/images/site/avatar_chinar.jpg",
    isLocalGuide: true,
    time: "3 weeks ago",
    rating: 5,
    text: "Food was good",
  },
  {
    id: "r4",
    name: "MANSI TYAGI",
    initial: "M",
    avatarBg: "bg-[#5c6bc0]",
    isLocalGuide: false,
    time: "3 weeks ago",
    rating: 5,
    text: "Everything is very good...servicing staff everything is worth coming",
  },
  {
    id: "r5",
    name: "khanindra das",
    avatar: "/images/site/avatar_khanindra.jpg",
    isLocalGuide: false,
    time: "3 weeks ago",
    rating: 5,
    text: "The service of breakfast is very encouraging and excellent. The service men are very very proactive and responsive all through. I wish all the best. Particularly, Mr Chandan , captain’s response, service and actions to the inmates are very very encouraging. My special thanks to him and wish him successful life in future .",
  },
  {
    id: "r6",
    name: "Chandrashekhar ...",
    avatar: "/images/site/avatar_chandrashekhar.jpg",
    isLocalGuide: false,
    time: "3 weeks ago",
    rating: 5,
    text: "All services are good",
  },
];

export default function WhatTheySay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [googleIndex, setGoogleIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  useEffect(() => {
    if (currentIndex === total) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, total]);

  const prevReview = () => {
    setGoogleIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setGoogleIndex((prev) => (prev >= GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const visibleGoogleReviews = [
    GOOGLE_REVIEWS[googleIndex % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(googleIndex + 1) % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(googleIndex + 2) % GOOGLE_REVIEWS.length],
  ];

  const slides = [...TESTIMONIALS, TESTIMONIALS[0]];

  return (
    <section className="relative z-10 w-full pt-[70px] pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Top Part: WHAT THEY SAY ABOUT US - 40% Left, 60% Right */}
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 mb-16 md:mb-20">
          
          {/* Left Text: 40% width */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center space-y-4 pr-0 lg:pr-4">
            <h2
              className="font-bebas text-[50px] sm:text-[65px] lg:text-[95px] leading-[0.95] tracking-[-2px] sm:tracking-[-3.8px] text-[#1c6fae] uppercase"
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

          {/* Right Blue Testimonial Slider: 60% width */}
          <div
            className="w-full lg:w-[60%] overflow-hidden relative shadow-[0_15px_35px_-5px_rgba(0,0,0,0.18)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Sliding Track */}
            <div
              className="flex"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 15px)))`,
                transition: isTransitioning
                  ? "transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
                gap: "15px",
              }}
            >
              {slides.map((item, idx) => (
                <div
                  key={`${item.author}-${idx}`}
                  className="min-w-full w-full shrink-0 bg-[#0C64AB] text-white pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-[70px] lg:pb-[70px] px-4 sm:px-8 lg:px-[50px] flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[490px] select-none text-center"
                >
                  {/* Watermark Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#E2DCDC] stroke-[1.5] fill-none" />
                  </div>

                  {/* Review Text Body */}
                  <div className="my-auto px-1 sm:px-2">
                    <p className="font-poppins text-white text-[14.5px] sm:text-[16px] md:text-[18px] leading-[1.7] sm:leading-[1.8] font-normal max-w-[540px] mx-auto whitespace-pre-line">
                      {item.text}
                    </p>

                    {/* 5 Stars */}
                    <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-4 sm:mt-6 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#fec42d] text-[#fec42d]" />
                      ))}
                    </div>
                  </div>

                  {/* Author Name */}
                  <div
                    className="font-poppins font-bold text-sm sm:text-[16px] tracking-wider text-white uppercase text-center mt-4 sm:mt-6"
                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                  >
                    {item.author}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Part: Google Reviews Slider Widget (Exact match to uploaded image) */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10 pt-4">
          
          {/* Google Overall Score Block */}
          <div className="w-full lg:w-[220px] shrink-0 flex flex-col items-center justify-center text-center">
            <span className="text-[22px] font-bold text-black tracking-wide font-sans mb-1">
              EXCELLENT
            </span>

            {/* 4.4 Stars (4 full gold stars + partial 5th) */}
            <div className="flex items-center gap-1 my-1.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#fbb701] text-[#fbb701]" />
              ))}
              <div className="relative w-6 h-6">
                <Star className="w-6 h-6 fill-[#e0e0e0] text-[#e0e0e0]" />
                <div className="absolute inset-0 overflow-hidden w-[40%]">
                  <Star className="w-6 h-6 fill-[#fbb701] text-[#fbb701]" />
                </div>
              </div>
            </div>

            <div className="text-[13px] text-[#555] mb-3 font-normal">
              Based on <strong className="font-bold text-black">10835 reviews</strong>
            </div>

            {/* Official Google SVG Logo */}
            <div className="relative w-[130px] h-[26px] mb-3 flex items-center justify-center">
              <Image
                src="/images/site/google-logo.svg"
                alt="Google"
                width={130}
                height={26}
                className="object-contain"
              />
            </div>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJVVVVVaS7wjsRpwNkwO571_g"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-[13px] font-medium px-4 py-2 rounded-[4px] shadow-sm transition-colors text-center font-sans inline-block"
            >
              Review us on Google
            </a>
          </div>

          {/* Carousel Container matching Image 5 */}
          <div className="w-full flex-1 relative max-w-[360px] sm:max-w-[420px] md:max-w-none mx-auto">
            
            {/* Left Nav Arrow Button */}
            <button
              onClick={prevReview}
              className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 hover:text-black flex items-center justify-center z-20 cursor-pointer transition-all"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={nextReview}
              className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 hover:text-black flex items-center justify-center z-20 cursor-pointer transition-all"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Review Cards: 1 on mobile, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
              {visibleGoogleReviews.map((rev, idx) => (
                <div
                  key={rev.id}
                  className={`bg-[#f8f9fa] border border-[#f0f0f0] rounded-[12px] p-5 flex-col justify-between min-h-[165px] transition-all shadow-xs ${
                    idx > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div>
                    {/* Header: Avatar, Name, Date, Google Icon */}
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="relative">
                          {rev.avatar ? (
                            <div className="w-10 h-10 rounded-full overflow-hidden relative">
                              <Image
                                src={rev.avatar}
                                alt={rev.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-10 h-10 rounded-full ${rev.avatarBg || "bg-[#5c6bc0]"} text-white font-medium text-sm flex items-center justify-center uppercase`}
                            >
                              {rev.initial || rev.name.charAt(0)}
                            </div>
                          )}

                          {/* Local Guide badge overlay if applicable */}
                          {rev.isLocalGuide && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#fbb701] text-[8px] text-white flex items-center justify-center font-bold">
                                ★
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Name & Time */}
                        <div>
                          <div className="text-[13.5px] font-bold text-[#202124] leading-tight">
                            {rev.name}
                          </div>
                          <div className="text-[11.5px] text-[#5f6368] mt-0.5">
                            {rev.time}
                          </div>
                        </div>
                      </div>

                      {/* Google G Icon */}
                      <div className="w-5 h-5 relative shrink-0">
                        <Image
                          src="/images/site/Google_icon.svg"
                          alt="Google"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Stars + Verified Icon */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-[#fbb701] gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#fbb701]" />
                        ))}
                      </div>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1a73e8] fill-[#1a73e8] text-white ml-0.5" />
                    </div>

                    {/* Review Body */}
                    <p className="text-[13px] text-[#3c4043] leading-relaxed line-clamp-3 font-sans">
                      {rev.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
