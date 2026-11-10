"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { MapPin, Users, Sparkles, Building2 } from "lucide-react";

interface VenueCardData {
  nameLight: string;
  nameBold: string;
  hasSpace?: boolean;
  hotelTag: string;
  description: string;
  locationDetail?: string;
  capacity: string;
  address: string;
  image: string;
  link: string;
}

const VENUE_CARDS: VenueCardData[] = [
  {
    nameLight: "BLI",
    nameBold: "SS",
    hasSpace: false,
    hotelTag: "Grand Tamanna Hotel",
    description:
      "A Place Of Bliss Where Each Celebration Is Turned Into A Treasured Memory. Discover Classic Elegance And Sophisticated Luxury Everywhere, Whether It's A Formal Wedding Or A Business Event.",
    locationDetail: "Complete Event Setup",
    capacity: "Capacity 100 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/15.jpg",
    link: "/small-party-banquet-hall-hinjawadi-pune",
  },
  {
    nameLight: "ETER",
    nameBold: "NITY",
    hasSpace: false,
    hotelTag: "Grand Tamanna Hotel",
    description:
      "A Sophisticated Banquet Space Ideal For Parties And Business Gatherings. Savor Elegance And Sophistication In Every Little Detail.",
    locationDetail: "Located in Grand Tamanna Hotel",
    capacity: "Capacity 300 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Eternity-Banquet3-1-scaled.jpg",
    link: "/ac-halls-hinjawadi-pune",
  },
  {
    nameLight: "BANQUET",
    nameBold: "HALL",
    hasSpace: true,
    hotelTag: "Grand Tamanna Hotel",
    description:
      "Our Adaptable Banquet Space Can Elegantly And Sophisticatedly Host Parties Of Any Size.",
    locationDetail: "Located in Grand Tamanna Hotel",
    capacity: "Wedding Capacity 600 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/3rd-Floor-Banquet2-1-scaled.jpg",
    link: "/best-banquet-hall-hinjawadi-pune",
  },
  {
    nameLight: "POOL SIDE",
    nameBold: "PARTY",
    hasSpace: true,
    hotelTag: "Grand Tamanna Hotel",
    description:
      "Our Inviting Poolside Venues Echo The Perfect Stage For Elegant Celebrations Of Any Size.",
    locationDetail: "Located in Grand Tamanna Hotel",
    capacity: "Wedding Capacity 600 Persons",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Pool-Sode-area3-1-scaled.jpg",
    link: "/hotels-with-poolside-hinjawadi-pune",
  },
  {
    nameLight: "BOARD",
    nameBold: "ROOM",
    hasSpace: true,
    hotelTag: "Premier Tamanna Hotel",
    description:
      "Where Impact And Ideas Collide. With Its Elegant Décor And Dedicated Service For Important Moments, This Modern, Tech-Enabled Venue Is Ideal For High-Level Meetings.",
    locationDetail: "Located in Premier Tamanna Hotel",
    capacity: "Capacity Up to 10 to 12 persons",
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Board-Room1-1-scaled.jpg",
    link: "/premier-board-room",
  },
  {
    nameLight: "CONFERENCE",
    nameBold: "HALL",
    hasSpace: true,
    hotelTag: "Premier Tamanna Hotel",
    description:
      "Organize Productive Meetings At The Premier Tamanna Hotel's Conference Hall, A Polished Venue With Contemporary Conveniences Perfect For Business Conferences, Seminars, And Corporate Events.",
    locationDetail: "Located in Premier Tamanna Hotel",
    capacity: "Capacity Up to 100 to 30 persons",
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Premier-Tamanna-Hotel-meeting-hall-photo-4.webp",
    link: "/conference-hall-for-100-persons-hinjawadi-pune",
  },
  {
    nameLight: "LAU",
    nameBold: "REL",
    hasSpace: false,
    hotelTag: "Bizz Tamanna Hotel",
    description:
      "Discover Sophisticated Elegance At Laurel, The Ideal Location For Special Events, Corporate Meetings, And Weddings.",
    locationDetail: "Located on 2nd floor of Bizz Tamanna Hotel",
    capacity: "Capacity 60 Persons",
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    image: "/images/site/bizz-laurel.webp",
    link: "/top-banquet-hall-hinjawadi-pune",
  },
  {
    nameLight: "HIGH",
    nameBold: "LAND",
    hasSpace: false,
    hotelTag: "Bizz Tamanna Hotel",
    description:
      "Highland: A Place Of Elegance And Festivity Highland Combines Traditional Beauty With Contemporary Comfort For Anything From Corporate Parties To Weddings.",
    locationDetail: "Located on the terrace of Bizz Tamanna Hotel",
    capacity: "Capacity 200 Persons",
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    image: "/images/site/Highland2-1-scaled.jpg",
    link: "/top-open-air-banquet-halls-hinjawadi-pune",
  },
  {
    nameLight: "MA",
    nameBold: "PLE",
    hasSpace: false,
    hotelTag: "Executive Tamanna Hotel",
    description:
      "Welcome To Maple, A Sophisticated Venue In The Executive Tamanna Hotel That Is Perfect For Business Meetings, Milestone Celebrations, And Intimate Get-Togethers.",
    locationDetail: "Located On 1st Floor of Executive Tamanna Hotel",
    capacity: "Capacity 60 Persons",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Maple-Conference-Room-3-scaled.jpg",
    link: "/best-meeting-hall-hinjawadi-pune",
  },
  {
    nameLight: "O",
    nameBold: "AK",
    hasSpace: false,
    hotelTag: "Executive Tamanna Hotel",
    description:
      "Learn About Oak At Executive Tamanna Hotel, A Flexible Space Ideal For Special Weddings, Corporate Gatherings, And Small Parties.",
    locationDetail: "Located in Executive Tamanna Hotel",
    capacity: "Capacity 50 persons to 100 persons",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    image: "/images/site/Oak-Party-Hall-1-scaled.jpg",
    link: "/corporate-meeting-hall-hinjawadi-pune",
  },
  {
    nameLight: "THE CELEBRATION",
    nameBold: "LOUNGE",
    hasSpace: true,
    hotelTag: "Imperial Tamanna Hotel",
    description:
      "Celebrate Life's Special Moments With Elegance At The Celebration Lounge, Imperial Tamanna Hotel.",
    locationDetail: "Located in Imperial Tamanna Hotel",
    capacity: "Capacity 25 persons to 100 persons",
    address:
      "Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    image: "/images/site/ITH-084.webp",
    link: "/party-lounge-chinchwad-pune",
  },
  {
    nameLight: "THE ROYAL",
    nameBold: "BANQUETS",
    hasSpace: true,
    hotelTag: "Imperial Tamanna Hotel",
    description:
      "Experience Exceptional Celebrations At Imperial Tamanna Hotel's Premier Event Destination.",
    locationDetail: "Located in Imperial Tamanna Hotel",
    capacity: "Capacity 100 to 400 persons",
    address:
      "Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    image: "/images/site/Sammelan-Banquet-3.jpg",
    link: "/banquet-hall-chinchwad-pune",
  },
];

export default function WeddingPartyVenuesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Header Banner */}
      <PageHeader
        title="WEDDING & PARTY VENUE"
        bgImage="/images/site/Eternity-Banquet5-1-scaled.jpg"
        bgPosition="bottom center"
        imageClassName="object-bottom"
        align="bottom"
        showBreadcrumbs={false}
        minHeight="h-[65vh] sm:h-[70vh] min-h-[480px]"
        overlayClassName="bg-black/35"
        titleClassName="font-bebas text-[48px] xs:text-[54px] sm:text-6xl md:text-7xl lg:text-[95px] text-white tracking-[1px] leading-[0.92] uppercase drop-shadow-md select-none text-center"
      />

      {/* Venues Architectural Cards List */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {VENUE_CARDS.map((venue, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col lg:flex-row items-stretch min-h-[440px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[620px]"
            >
              {/* Left Column: Full-Height Venue Photo */}
              <Link
                href={venue.link}
                className="w-full lg:w-1/2 relative min-h-[300px] xs:min-h-[340px] sm:min-h-[440px] lg:min-h-[600px] xl:min-h-[620px] overflow-hidden group block cursor-pointer"
              >
                <Image
                  src={venue.image}
                  alt={`${venue.nameLight}${venue.hasSpace ? " " : ""}${venue.nameBold}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </Link>

              {/* Right Column: Outer #EDEDF7C9 Frame + Overlapping White Card */}
              <div className="w-full lg:w-1/2 bg-[#EDEDF7C9] flex items-stretch p-3.5 sm:p-5 lg:py-7 lg:pr-7 lg:pl-0">
                <div className="w-full bg-white -mt-10 sm:-mt-12 lg:mt-0 lg:-ml-5 relative z-10 shadow-sm flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    {/* Hotel Tag */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-[#0C64AB] font-medium font-poppins mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{venue.hotelTag}</span>
                    </div>

                    {/* Two-tone Title */}
                    <Link href={venue.link} className="block group cursor-pointer">
                      <h2
                        className="font-bebas text-[32px] xs:text-[36px] sm:text-4xl lg:text-[40px] leading-[0.98] tracking-[1px] uppercase mb-3.5 select-none group-hover:opacity-85 transition-opacity"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        <span style={{ color: "#0C64AB91", fontWeight: 400 }}>
                          {venue.nameLight}
                        </span>
                        {venue.hasSpace && " "}
                        <span style={{ color: "#0C64AB", fontWeight: 700 }}>
                          {venue.nameBold}
                        </span>
                      </h2>
                    </Link>

                    {/* Description Paragraph */}
                    <p className="font-poppins text-xs sm:text-[14px] leading-relaxed text-slate-600 mb-6">
                      {venue.description}
                    </p>

                    {/* Location Detail & Capacity Info Badges */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13.5px] text-slate-700 font-poppins mb-5">
                      {venue.locationDetail && (
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#0C64AB] shrink-0" />
                          <span>{venue.locationDetail}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0C64AB] shrink-0" />
                        <span>{venue.capacity}</span>
                      </div>
                    </div>

                    {/* Address with MapPin */}
                    <div className="flex items-start gap-2 text-slate-600 font-poppins text-xs sm:text-[13px] leading-snug">
                      <MapPin className="w-4 h-4 text-[#0C64AB] shrink-0 mt-0.5" />
                      <span>{venue.address}</span>
                    </div>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-[#E0DDDD] my-4 sm:my-6" />

                    {/* Action Buttons Row */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <Link
                        href={venue.link}
                        className="font-bebas text-[15px] sm:text-[18px] text-[#0C64AB] hover:text-[#084572] underline tracking-[0.8px] uppercase font-medium transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        VIEW MORE
                      </Link>

                      <Link
                        href="/contact-us"
                        className="bg-[#0C64AB] hover:bg-[#094c82] text-white rounded-full px-5 sm:px-8 py-2 sm:py-2.5 font-bebas text-[15px] sm:text-[18px] tracking-[0.8px] uppercase font-medium transition-colors duration-200 shrink-0 cursor-pointer shadow-sm inline-flex items-center justify-center"
                        style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                      >
                        ENQUIRE NOW
                      </Link>
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
