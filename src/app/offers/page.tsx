"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function OffersPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Header Banner */}
      <PageHeader
        title="OFFERS & PROMOTIONS"
        bgImage="/images/site/grand-tamanna.webp"
        align="bottom"
        showBreadcrumbs={false}
        minHeight="min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh]"
        titleClassName="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-[95px] text-white tracking-[2px] leading-none uppercase drop-shadow-md select-none"
      />

      {/* Offers 2-Column Creative Posters Grid */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {/* Grand Tamanna Dine & Save (10% off) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/PHOTO-2024-05-07-18-58-48.jpg"
                  alt="Grand Tamanna Hotel - Dine & save 10% off on food"
                  width={1080}
                  height={1350}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Executive Tamanna Order Food Online (TAM20, 20% off) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/Online-Discount-Coupon-Executive.jpg"
                  alt="Executive Tamanna Hotel - Order Food Online 20% off with coupon TAM20"
                  width={1064}
                  height={616}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Grand Tamanna Direct Booking (20% Discount) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/WhatsApp-Image-2025-09-11-at-00.21.41-819x1024.jpeg"
                  alt="Grand Tamanna Hotel - Book directly and grab 20% Discount"
                  width={819}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {/* Nirvana Lounge Bar (15% Discount) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/Nirvana_banner_27_6_2024_page-0001.jpg"
                  alt="Nirvana Lounge Bar - Special Offer Alert 15% Discount"
                  width={1350}
                  height={975}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Talk About & Bizz Tamanna (20% off) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/Tamanna_standy-5x3_29_aug_2025-1.png"
                  alt="Bizz Tamanna Hotel & Talk About - Good Food, Great Drinks, Big Savings! 20% off"
                  width={600}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Grand Tamanna Order Food Online (TAM20, 20% off) */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/site/Online-Discount-Grand.jpg"
                  alt="Grand Tamanna Hotel - Order Food Online 20% off with coupon TAM20"
                  width={961}
                  height={557}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
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
