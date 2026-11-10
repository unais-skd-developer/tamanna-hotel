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

      {/* Hero Header Banner matching Elementor .elementor-element-8be52f8 */}
      <PageHeader
        title="offers & PROMOTIONS"
        bgImage="/images/site/grand-tamanna.webp"
        align="bottom"
        showBreadcrumbs={false}
        minHeight="h-[60vh] md:h-[70vh] min-h-[460px]"
        overlayClassName="bg-black/50"
        titleClassName="font-bebas text-[48px] sm:text-[58px] md:text-[65px] text-white tracking-[1px] leading-none uppercase drop-shadow-md select-none text-center"
      />

      {/* Offers 2-Column Creative Posters Grid matching Elementor .elementor-element-472bb25 */}
      <section className="bg-white py-10 md:py-[70px]">
        <div className="max-w-[1140px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-[12px] items-start">
            {/* Left Column matching .elementor-element-75f89cb */}
            <div className="flex flex-col gap-3 md:gap-[12px]">
              {/* Grand Tamanna Dine & Save (10% off) */}
              <div className="w-full">
                <Image
                  src="/images/site/PHOTO-2024-05-07-18-58-48.jpg"
                  alt="Grand Tamanna Hotel - Dine & save 10% off on food"
                  width={1080}
                  height={1350}
                  className="w-full h-auto block"
                  priority
                />
              </div>

              {/* Executive Tamanna Order Food Online (TAM20, 20% off) */}
              <div className="w-full">
                <Image
                  src="/images/site/Online-Discount-Coupon-Executive.jpg"
                  alt="Executive Tamanna Hotel - Order Food Online 20% off with coupon TAM20"
                  width={1064}
                  height={616}
                  className="w-full h-auto block"
                />
              </div>

              {/* Grand Tamanna Direct Booking (20% Discount) */}
              <div className="w-full">
                <Image
                  src="/images/site/WhatsApp-Image-2025-09-11-at-00.21.41-819x1024.jpeg"
                  alt="Grand Tamanna Hotel - Book directly and grab 20% Discount"
                  width={819}
                  height={1024}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Right Column matching .elementor-element-9857b95 */}
            <div className="flex flex-col gap-3 md:gap-[12px]">
              {/* Nirvana Lounge Bar (15% Discount) */}
              <div className="w-full">
                <Image
                  src="/images/site/Nirvana_banner_27_6_2024_page-0001.jpg"
                  alt="Nirvana Lounge Bar - Special Offer Alert 15% Discount"
                  width={1350}
                  height={975}
                  className="w-full h-auto block"
                  priority
                />
              </div>

              {/* Talk About & Bizz Tamanna (20% off) */}
              <div className="w-full">
                <Image
                  src="/images/site/Tamanna_standy-5x3_29_aug_2025-1.png"
                  alt="Bizz Tamanna Hotel & Talk About - Good Food, Great Drinks, Big Savings! 20% off"
                  width={600}
                  height={1000}
                  className="w-full h-auto block"
                />
              </div>

              {/* Grand Tamanna Order Food Online (TAM20, 20% off) */}
              <div className="w-full">
                <Image
                  src="/images/site/Online-Discount-Grand.jpg"
                  alt="Grand Tamanna Hotel - Order Food Online 20% off with coupon TAM20"
                  width={961}
                  height={557}
                  className="w-full h-auto block"
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
