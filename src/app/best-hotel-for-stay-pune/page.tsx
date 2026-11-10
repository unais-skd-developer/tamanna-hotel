"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BedDouble, Wine, Sparkles, MapPin } from "lucide-react";

interface HotelCardFeature {
  type: "room" | "dine" | "venue";
  label: string;
  count: string;
}

interface HotelCardData {
  nameLight: string;
  nameBold: string;
  image: string;
  description: string;
  features: HotelCardFeature[];
  address: string;
  mapUrl: string;
  hotelUrl: string;
  bookUrl: string;
}

const HOTEL_CARDS: HotelCardData[] = [
  {
    nameLight: "GRAND",
    nameBold: "TAMANNA",
    image: "/images/site/Grand-Tamanna-Exterior-1-scaled.png",
    description:
      "Grand Tamanna Hotel Blends Luxury, Fine Dining, And Event Spaces With Exceptional Personalized Hospitality Experiences.",
    features: [
      { type: "room", label: "Premium Room & Suite Room", count: "47" },
      { type: "dine", label: "Restaurants and bars", count: "02" },
      { type: "venue", label: "Wedding & Party venue", count: "06" },
    ],
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Grand+Tamanna+Hotel/@18.5934246,73.7073284,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bba455555555:0xf8d77beec06403a7!5m2!4m1!1i2!8m2!3d18.5934246!4d73.7073284!16s%2Fg%2F11c1ww66hm",
    hotelUrl: "/hotels-hinjawadi-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=ZGZV1026",
  },
  {
    nameLight: "PREMIER",
    nameBold: "TAMANNA",
    image: "/images/site/2023-06-30.webp",
    description:
      "Premier Tamanna Hotel Offers Modern Comfort, Multi-Cuisine Dining, And Elegant Event Spaces For Unforgettable Stays.",
    features: [
      { type: "room", label: "Premium Room & Suite Room", count: "51" },
      { type: "dine", label: "Restaurants and bars", count: "01" },
      { type: "venue", label: "Wedding & Party venue", count: "03" },
    ],
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Premier+Tamanna+Hotel/@18.5910506,73.7481854,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bb97ea46bd07:0xb0abafd86c58023c!5m2!4m1!1i2!8m2!3d18.5910506!4d73.7481854!16s%2Fg%2F11svwyc4yw",
    hotelUrl: "/premier-tamanna-hotel-hinjawadi-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=VIXA0712",
  },
  {
    nameLight: "BIZZ",
    nameBold: "TAMANNA",
    image: "/images/site/bt.webp",
    description:
      "Bizz Tamanna Hotel Delivers Business-Class Stays, Vibrant Dining, And Functional Spaces Tailored For Corporate Travelers.",
    features: [
      { type: "room", label: "Executive Room & Apartment Room", count: "33" },
      { type: "dine", label: "Restaurants and bars", count: "01" },
      { type: "venue", label: "Wedding & Party venue", count: "02" },
    ],
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Bizz+Tamanna+Hotel/@18.5862949,73.7366679,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bbe7d8161fc7:0xf7903c0b58ea3567!5m2!4m1!1i2!8m2!3d18.5862949!4d73.7366679!16s%2Fg%2F1v9gsxhw",
    hotelUrl: "/bizz-tamanna-hotel-hinjawadi-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=ICAX0619",
  },
  {
    nameLight: "EXECUTIVE",
    nameBold: "TAMANNA",
    image: "/images/site/Executive-Tamanna-Exterior-1-scaled.jpg",
    description:
      "Executive Tamanna Hotel provides budget-friendly stays, cozy rooms, and efficient service for comfortable business or leisure trips.",
    features: [
      { type: "room", label: "Executive Room & Luxury Room", count: "12" },
      { type: "dine", label: "Restaurants and bars", count: "02" },
      { type: "venue", label: "Wedding & Party venue", count: "02" },
    ],
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Executive+Tamanna+Hotel/@18.5857239,73.7349426,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bbe863f6e85b:0x8ad35ffffa7beeb2!5m2!4m1!1i2!8m2!3d18.5857239!4d73.7349426!16s%2Fg%2F11fxx6dg3f",
    hotelUrl: "/executive-tamanna-hotel-hinjawadi-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=ICAV0619",
  },
  {
    nameLight: "SHREE INN BY",
    nameBold: "TAMANNA",
    image: "/images/site/Shree-Inn-by-Tamanna.avif",
    description:
      "Shree Inn by Tamanna combines affordable stays, warm hospitality, and simple elegance for everyday traveler needs.",
    features: [
      { type: "room", label: "Executive Room", count: "16" },
    ],
    address:
      "Sakhare Vasti Rd, near West Wind Park, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Shree+Inn+by+Tamanna+Hotels/data=!4m2!3m1!1s0x0:0xa1034de979fb9389?sa=X&ved=1t:2428&ictx=111",
    hotelUrl: "/shree-inn-by-tamanna-hotel-hinjawadi-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=VAGE0325",
  },
  {
    nameLight: "IMPERIAL",
    nameBold: "TAMANNA",
    image: "/images/site/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg",
    description:
      "The Imperial Tamanna Hotel enjoys a strategic location suave in the center of one of Pune's most important industrial and commercial corridors.",
    features: [
      { type: "room", label: "Executive Room, Deluxe Room & Suite Room", count: "39" },
      { type: "dine", label: "Restaurants and bars", count: "01" },
      { type: "venue", label: "Wedding & Party venue", count: "02" },
    ],
    address:
      "Imperial Tamanna Hotel, Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    mapUrl: "https://maps.app.goo.gl/eCeapCu1RaU9EtbU6",
    hotelUrl: "/best-hotels-chikhali-pune",
    bookUrl: "https://bookings.resavenue.com/resBooking/availsearch?regCode=TVRT0602",
  },
];

export default function HotelsOverviewPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Page Hero Banner */}
      <PageHeader
        title="OUR HOTELS"
        bgImage="/images/site/Lobby1-5-scaled.jpg"
        showBreadcrumbs={false}
        align="bottom"
        minHeight="h-[70vh] sm:h-[70vh] md:h-[70vh] min-h-[560px]"
        overlayClassName="bg-black/35"
        titleClassName="text-[82px] xs:text-[95px] md:text-[95px] lg:text-[95px] font-bebas uppercase tracking-[1px] text-white leading-none drop-shadow-sm select-none whitespace-nowrap"
      />

      {/* Hotels Listing Section matching live Elementor cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          {HOTEL_CARDS.map((hotel, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col lg:flex-row items-stretch"
            >
              {/* Left Column: Full-Height Exterior Photo */}
              <div className="w-full lg:w-1/2 relative min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] lg:min-h-[750px] xl:min-h-[780px] overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={`${hotel.nameLight} ${hotel.nameBold}`}
                  fill
                  priority={idx < 2}
                  className="object-cover object-top sm:object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right Column: Outer #EDEDF7C9 Frame + Overlapping White Card */}
              <div className="w-full lg:w-1/2 bg-[#EDEDF7C9] flex items-stretch p-3.5 sm:p-5 lg:py-7 lg:pr-7 lg:pl-0">
                <div className="w-full bg-white -mt-10 sm:-mt-12 lg:mt-0 lg:-ml-5 relative z-10 shadow-sm flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    {/* Two-tone Title */}
                    <h2
                      className="font-bebas text-[34px] xs:text-[38px] sm:text-4xl lg:text-[42px] leading-tight tracking-[1px] uppercase mb-3.5 select-none"
                      style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                    >
                      <span style={{ color: "#0C64AB91", fontWeight: 400 }}>
                        {hotel.nameLight}{" "}
                      </span>
                      <span style={{ color: "#0C64AB", fontWeight: 500 }}>
                        {hotel.nameBold}
                      </span>
                    </h2>

                    {/* Description Paragraph */}
                    <p className="font-poppins text-[14.5px] xs:text-[15px] leading-[26px] text-[#666666] mb-6">
                      {hotel.description}
                    </p>

                    {/* Feature Outline Boxes with Dashed / Dotted Count */}
                    <div className="space-y-3.5 mb-6">
                      {hotel.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="border-[1.5px] border-[#183654] px-4 py-3 sm:px-4.5 sm:py-3.5 flex items-center justify-between bg-white"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {feat.type === "room" && (
                              <BedDouble className="w-4 h-4 text-[#0C64AB] shrink-0" />
                            )}
                            {feat.type === "dine" && (
                              <Wine className="w-4 h-4 text-[#0C64AB] shrink-0" />
                            )}
                            {feat.type === "venue" && (
                              <Sparkles className="w-4 h-4 text-[#0C64AB] shrink-0" />
                            )}
                            <span className="font-poppins text-xs sm:text-[13.5px] font-medium text-slate-800 truncate">
                              {feat.label}
                            </span>
                          </div>
                          <span className="font-poppins text-xs sm:text-[13.5px] font-semibold text-slate-700 shrink-0 ml-3 tracking-wider">
                            ---- {feat.count}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Address with MapPin */}
                    <div className="flex items-start gap-2.5 text-slate-600 font-poppins text-xs sm:text-[13px] leading-snug">
                      <MapPin className="w-4 h-4 text-[#0C64AB] shrink-0 mt-0.5" />
                      <span>{hotel.address}</span>
                    </div>

                    {/* VIEW MAP Link */}
                    <div className="mt-2.5 pl-6 sm:pl-7">
                      <a
                        href={hotel.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium inline-block"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        VIEW MAP
                      </a>
                    </div>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-[#E0DDDD] my-4 sm:my-6" />

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4 pt-1 pb-1">
                      <div className="flex items-center gap-4 xs:gap-6 sm:gap-5">
                        <Link
                          href={hotel.hotelUrl}
                          className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          VIEW HOTEL
                        </Link>

                        <Link
                          href="/gallery"
                          className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium"
                          style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                        >
                          VIEW GALLERY
                        </Link>
                      </div>

                      <a
                        href={hotel.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#0C64AB] text-[#0C64AB] hover:bg-[#0C64AB] hover:text-white rounded-full px-5 sm:px-8 py-2 sm:py-2.5 font-bebas text-[15px] sm:text-[18px] tracking-[0.8px] uppercase font-medium transition-colors duration-200 shrink-0"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        BOOK NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
