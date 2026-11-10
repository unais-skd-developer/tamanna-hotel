"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Award, Trophy, Medal, ShieldCheck, Globe, Star } from "lucide-react";

interface AwardItem {
  icon: React.ElementType;
  year: string;
  category: string;
  title: string;
}

const AWARDS: AwardItem[] = [
  {
    icon: Medal,
    year: "2015",
    category: "Service Excellence",
    title: "Best Canteen Award 2015 From Infosys Pune Dc",
  },
  {
    icon: Trophy,
    year: "2017",
    category: "Business Excellence",
    title: "Winner Of India's Top 100 SME In 2017",
  },
  {
    icon: Award,
    year: "2019",
    category: "Hospitality",
    title: "India MICE Award 2019 To Tamanna Hotels As Best Meetings Hotel (Western India)",
  },
  {
    icon: Globe,
    year: "2010",
    category: "Tourism",
    title: "All India Business And Community Award For Tourism Excellence 2010",
  },
  {
    icon: ShieldCheck,
    year: "2010",
    category: "Industry Recognition",
    title: "Appreciation Award From Federation Of Hotels And Restaurants Associations Of India",
  },
  {
    icon: Trophy,
    year: "2012",
    category: "Leadership",
    title: "Featured As LEADERS OF TOMORROW AWARD 2012 By English Business TV Channel ET NOW Of Times Group",
  },
];

export default function AboutUsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Banner with Lobby Background and Bottom-Anchored ABOUT US */}
      <PageHeader
        title="ABOUT US"
        bgImage="/images/site/Lobby2-2-scaled.jpg"
        align="bottom"
        showBreadcrumbs={false}
        minHeight="h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[460px]"
        overlayClassName="bg-black/35"
        titleClassName="font-bebas text-[65px] sm:text-7xl md:text-8xl lg:text-[95px] text-white tracking-[1px] leading-none uppercase drop-shadow-md select-none text-center"
      />

      {/* Section 1: EVERY MOMENT, A DELIGHT */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#EDEDF7]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column (40% width): Massive Heading, Right-aligned on desktop, Left on mobile */}
            <div className="lg:col-span-5 pt-1 lg:text-right text-left">
              <h2
                className="font-bebas text-[82px] xs:text-[95px] sm:text-8xl md:text-9xl lg:text-[146px] uppercase leading-[0.88] tracking-[-2px] lg:tracking-[-3.8px] text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>EVERY</span>
                <br />
                <span>MOMENT,</span>
                <br />
                <span className="text-[#0C64AB] font-medium">A DELIGHT</span>
              </h2>
            </div>

            {/* Right Column (60% width): Text & Lounge Image */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <p
                className="text-[#7A7A7A] font-poppins text-[15px] sm:text-[16px] leading-[26px] capitalize"
                style={{ fontFamily: '"Poppins", Sans-serif' }}
              >
                <Link
                  href="https://www.google.com/search?kgmid=%2Fg%2F11c1ww66hm&hl=en-IN&q=Grand%20Tamanna%20Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0C64AB] font-medium hover:underline capitalize"
                >
                  Tamanna Hotels
                </Link>{" "}
                Has Grown To Become One Of The Best Hotels In Pune, Offering Exceptional Hospitality In The Heart Of Hinjawadi IT Park. We Were The First Hotel In Hinjawadi, Redefining Comfort And Modern Hospitality. With Over Two Decades Of Experience, We Take Pride In Delivering Quality Service, Modern Amenities, And A Home-Like Atmosphere To Guests From Around The World.
              </p>

              {/* Lounge Image - Flat edges matching exact reference */}
              <div className="relative w-full aspect-[1024/601] rounded-none overflow-hidden shadow-sm">
                <Image
                  src="/images/site/Bizz-Tamanna-Reception-1-1024x601.jpg"
                  alt="Tamanna Hotels Reception & Lounge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: ABOUT TAMANNA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Side: 2 Images (Totem Banner + Pool) - Stacked on mobile, 2-cols on desktop */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-end">
                {/* Tall Totem Banner Image */}
                <div className="relative w-full h-[360px] xs:h-[380px] sm:h-[420px] md:h-[480px] rounded-none overflow-hidden shadow-xs">
                  <Image
                    src="/images/site/Exterior-3-scaled.jpg"
                    alt="Grand Tamanna Hotel Exterior"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Night Swimming Pool Image - Aligned to bottom on desktop, stacked below on mobile */}
                <div className="relative w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[275px] rounded-none overflow-hidden shadow-xs">
                  <Image
                    src="/images/site/pool2.webp"
                    alt="Tamanna Hotels Swimming Pool"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Heading, Paragraph & Enquire Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 pt-2 sm:pt-0">
              <h2
                className="font-bebas text-[52px] xs:text-[58px] sm:text-[65px] md:text-7xl lg:text-[95px] uppercase tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-none text-[#0C64AB91]"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span>ABOUT </span>
                <span className="text-[#0C64AB] font-medium">TAMANNA</span>
              </h2>

              <p
                className="text-[#7A7A7A] font-poppins text-[13.5px] sm:text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] capitalize"
                style={{ fontFamily: '"Poppins", Sans-serif' }}
              >
                Our Journey Began With A Vision To Create A Hotel Brand That Reflects Indian Warmth, Professionalism, And Comfort. Value For Money Is Our USP And Improving Quality Of Life Is Our Mission. Today, Tamanna Hotels Operates Six Distinguished Properties-Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn By Tamanna And Imperial Tamanna Hotel. Each Hotel Caters To Different Segments Of Travelers, From Business Executives And Families To Long-Stay Guests And Event Organizers. What Sets Us Apart Is Our Commitment To Customer Satisfaction. We Provide More Than 159 Well-Furnished Rooms, Including Suites And Serviced Apartments, Supported By High-Speed Internet, 24/7 Service, And Elegant Interiors. Our In-House Facilities Include Multi-Cuisine Restaurants, A South Indian Café, Event Venues, Fitness Centers, Business Lounges, And More.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 font-bebas text-[18px] sm:text-[20px] tracking-[1px] text-[#0C64AB] hover:text-[#084572] transition-colors uppercase font-medium group cursor-pointer"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  <span className="group-hover:underline">ENQUIRE NOW</span>
                  <span className="text-[19px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: AWARDS & RECOGNITIONS */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#EDEDF7]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14">
            <h2
              className="font-bebas text-[65px] md:text-8xl lg:text-[95px] uppercase tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-[1.05] text-[#0C64AB91] mb-4"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              <span>AWARDS & </span>
              <br className="sm:hidden" />
              <span className="text-[#0C64AB] font-medium">RECOGNITIONS</span>
            </h2>
            <p
              className="text-[#7A7A7A] font-poppins text-xs sm:text-[14.5px] sm:text-[15px] leading-relaxed capitalize max-w-[800px] mx-auto"
              style={{ fontFamily: '"Poppins", Sans-serif' }}
            >
              Our Efforts Have Been Recognized With Several Awards, Including India&apos;s Top 100 SME Award, The India MICE Award For Best Meetings Hotel, And Multiple Community Accolades For Tourism Excellence. These Recognitions Reinforce Our Place Among The Best Hotels In Pune.
            </p>
          </div>

          {/* 6 Award Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {AWARDS.map((award, idx) => {
              const IconComp = award.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[10px] p-6 sm:p-[30px] border border-slate-200/80 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Circular Icon on Left, Year & Category on Right */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#0C64AB] text-white flex items-center justify-center shrink-0">
                        <IconComp className="w-[26px] h-[26px] text-white" />
                      </div>
                      <div className="text-right">
                        <span
                          className="block font-bebas text-[28px] text-[#1A1B1A] leading-none"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          {award.year}
                        </span>
                        <span
                          className="block font-poppins text-xs sm:text-[14px] text-[#7A7A7A] capitalize leading-none mt-1"
                          style={{ fontFamily: '"Poppins", Sans-serif' }}
                        >
                          {award.category}
                        </span>
                      </div>
                    </div>

                    {/* Award Title */}
                    <h3
                      className="font-poppins text-[15px] sm:text-[17px] text-[#1A1B1A] capitalize leading-[1.35em] font-normal"
                      style={{ fontFamily: '"Poppins", Sans-serif' }}
                    >
                      {award.title}
                    </h3>
                  </div>

                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-[4px] text-[#FFD200] mt-5 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-[16px] h-[16px] fill-[#FFD200] text-[#FFD200]" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer with About Us highlighted */}
      <Footer activeLink="About Us" />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
