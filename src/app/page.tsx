"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import StyleJourney from "@/components/StyleJourney";
import CuratedSpaces, { HotelProperty } from "@/components/CuratedSpaces";
import OurGallery from "@/components/OurGallery";
import EnjoyStay from "@/components/EnjoyStay";
import WhatTheySay from "@/components/WhatTheySay";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import HotelDetailModal from "@/components/HotelDetailModal";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedHotelForBooking, setSelectedHotelForBooking] = useState<string | undefined>(undefined);
  const [activeHotelDetail, setActiveHotelDetail] = useState<HotelProperty | null>(null);

  const handleOpenBooking = (prefill?: { hotel?: string }) => {
    setSelectedHotelForBooking(prefill?.hotel);
    setIsBookingOpen(true);
  };

  const handleSelectHotelDetail = (hotel: HotelProperty) => {
    setActiveHotelDetail(hotel);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 3. Hero Video Section */}
      <HeroVideo />

      {/* 4. Style Your Own Journey Section */}
      <StyleJourney />

      {/* 6. Curated Hotel Spaces (3D Card Carousel) */}
      <CuratedSpaces onSelectHotel={handleSelectHotelDetail} />

      {/* 7. Our Gallery Section */}
      <OurGallery />

      {/* 8. Enjoy Your Stay At Our Hotel Section */}
      <EnjoyStay onOpenBooking={() => handleOpenBooking()} />

      {/* 9. What They Say About Us & Google Reviews */}
      <WhatTheySay />

      {/* 10. Reach Out Pre-Footer Banner */}
      <PreFooterContact />

      {/* 11. Official Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HotelDetailModal
        hotel={activeHotelDetail}
        onClose={() => setActiveHotelDetail(null)}
        onBookHotel={(hotelName) => {
          setActiveHotelDetail(null);
          handleOpenBooking({ hotel: hotelName });
        }}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialHotel={selectedHotelForBooking}
      />
    </main>
  );
}
