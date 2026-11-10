"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { RestaurantDetail } from "@/data/restaurantDetails";
import {
  MapPin,
  Users,
  Star,
  Utensils,
  Wine,
  Clock,
  Award,
  Mail,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface RestaurantDetailTemplateProps {
  data: RestaurantDetail;
}

export default function RestaurantDetailTemplate({ data }: RestaurantDetailTemplateProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + data.gallery.images.length) % data.gallery.images.length
      );
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % data.gallery.images.length);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "utensils":
        return Utensils;
      case "wine":
        return Wine;
      case "users":
        return Users;
      case "clock":
        return Clock;
      case "mapPin":
        return MapPin;
      case "star":
      default:
        return Award;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar with dynamic hotel logo */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
        logoSrc={data.navbarLogo}
        activeNav="Restaurants"
      />

      {/* 3. Hero / Banner with Glassy Blurred Card */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black select-none">
        {/* Full-bleed background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src={data.banner.bgImage}
            alt={data.hotelName}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content Container (max-width: 1300px, padding: 70px top/bottom, 44px left/right) */}
        <div className="relative w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[44px] py-[70px] z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            {/* Left Column (70% width) */}
            <div className="w-full lg:w-[68%] text-white">
              {/* Hotel Location Badge */}
              <div className="inline-flex items-center gap-2 text-white font-poppins text-[15px] sm:text-[16px] font-normal mb-2">
                <MapPin className="w-[18px] h-[18px] text-[#8BB6DA] shrink-0" />
                <span>{data.banner.tag}</span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-[0.95] sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mb-5 select-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                <span className="text-white font-normal">{data.banner.titleLight}</span>
                <span className="text-[#0C64AB] font-medium">{data.banner.titleBold}</span>
              </h1>

              {/* Description Paragraph */}
              <p className="font-poppins text-white/90 text-[15px] sm:text-[16px] leading-[1.8] font-normal max-w-[620px] mb-7">
                {data.banner.description}
              </p>

              {/* Inline Icon List */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-white font-poppins text-[15px] sm:text-[16px] font-normal mb-8">
                <div className="flex items-center gap-2.5">
                  <Users className="w-[18px] h-[18px] text-[#8BB6DA] shrink-0" />
                  <span>{data.banner.capacity}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Star className="w-[18px] h-[18px] text-[#8BB6DA] fill-[#8BB6DA] shrink-0" />
                  <span>{data.banner.cuisine}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="rounded-[50px] bg-[#0C64AB] hover:bg-[#084572] text-white font-bebas text-[18px] font-medium tracking-[0.8px] px-10 py-3.5 uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center text-center"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  ENQUIRE NOW
                </Link>
                <a
                  href="#gallery"
                  className="rounded-[50px] bg-transparent hover:bg-[#0C64AB] hover:border-[#0C64AB] text-white border border-white font-bebas text-[18px] font-medium tracking-[0.8px] px-10 py-3.5 uppercase transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  VIEW GALLERY
                </a>
              </div>
            </div>

            {/* Right Column: Glassy Blurred Restaurant Info Card */}
            <div
              className="w-full sm:w-[420px] lg:w-[380px] xl:w-[410px] shrink-0 rounded-[10px] p-[24px] sm:p-[30px] sm:px-[25px] text-white shadow-2xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.21)",
                backdropFilter: "blur(6.9px)",
                WebkitBackdropFilter: "blur(6.9px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              {/* Card Title */}
              <h2
                className="font-bebas text-[33px] font-normal tracking-[1px] uppercase text-white mb-3"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                RESTAURANT INFO
              </h2>

              {/* 5 Rows with dividers */}
              <div className="divide-y divide-[#9E9E9E]/50 font-poppins text-[15px] sm:text-[16px]">
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-[#D1D5DB] font-normal">Location</span>
                  <span className="font-normal text-white text-right">{data.restaurantInfo.location}</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-[#D1D5DB] font-normal">Capacity</span>
                  <span className="font-normal text-white text-right">{data.restaurantInfo.capacity}</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-[#D1D5DB] font-normal">Cuisine Type</span>
                  <span className="font-normal text-white text-right">{data.restaurantInfo.cuisineType}</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-[#D1D5DB] font-normal">Service</span>
                  <span className="font-normal text-white text-right">{data.restaurantInfo.service}</span>
                </div>
                <div className="flex items-center justify-between py-3.5 border-b border-[#9E9E9E]/50">
                  <span className="text-[#D1D5DB] font-normal">Hours</span>
                  <span className="font-normal text-white text-right">{data.restaurantInfo.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US Section */}
      <section className="py-[70px] bg-[#F7F7F7]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[44px]">
          {/* Section Heading: Why Choose us (Big 95px font) */}
          <h2
            className="text-center font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-none sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mb-10 sm:mb-14 select-none"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span style={{ color: "#0C64AB91", fontWeight: 400 }}>WHY CHOOSE </span>
            <span style={{ color: "#0C64AB", fontWeight: 500 }}>US</span>
          </h2>

          {/* 6 Feature Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {data.whyChoose.items.map((item, idx) => {
              const IconComponent = getIcon(item.iconType);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[10px] py-10 px-6 sm:px-8 flex flex-col items-center text-center transition-all duration-300"
                  style={{
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Circular Framed Blue Icon */}
                  <div className="w-[72px] h-[72px] rounded-full border-2 border-[#0C64AB] flex items-center justify-center text-[#0C64AB] mb-4 shrink-0">
                    <IconComponent className="w-8 h-8 text-[#0C64AB]" strokeWidth={1.8} />
                  </div>

                  {/* Title in Bebas Neue */}
                  <h3
                    className="font-bebas text-[24px] text-black tracking-[0.5px] uppercase mb-2"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description in Poppins */}
                  <p className="font-poppins text-[#6B7280] text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-[340px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FIND US Section */}
      <section className="py-[70px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[44px]">
          {/* Section Heading: Find us */}
          <h2
            className="text-center font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-none sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mb-10 select-none"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span style={{ color: "#0C64AB91", fontWeight: 400 }}>FIND </span>
            <span style={{ color: "#0C64AB", fontWeight: 500 }}>US</span>
          </h2>

          {/* Two Distinct Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] items-stretch">
            {/* Left Box: Google Map Frame */}
            <div
              className="bg-[#F7F7F7] rounded-[10px] p-[20px] flex flex-col justify-center h-full min-h-[340px] sm:min-h-[360px]"
              style={{
                boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="relative w-full h-[300px] sm:h-[320px] overflow-hidden">
                <iframe
                  src={data.findUs.mapIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${data.hotelName} Google Map`}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right Box: Booking Card */}
            <div
              className="bg-[#F7F7F7] rounded-[10px] p-[20px] sm:p-[25px] flex flex-col justify-start h-full min-h-[340px] sm:min-h-[360px]"
              style={{
                boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Header: Envelope Icon + BOOKING */}
              <div className="flex items-center gap-2.5 text-[#0C64AB] mb-3 font-bebas text-[28px] tracking-[1px] uppercase">
                <Mail className="w-[23px] h-[23px] text-[#0C64AB]" strokeWidth={2} />
                <span>{data.findUs.bookingTitle}</span>
              </div>

              {/* Subheading */}
              <h3
                className="font-bebas text-[20px] text-[#494949] tracking-[1px] uppercase mb-4 leading-normal"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                {data.findUs.restaurantName}
              </h3>

              {/* Email Link */}
              <div className="flex items-center gap-2.5 mb-3">
                <Mail className="w-[16px] h-[16px] text-[#0C64AB] shrink-0" strokeWidth={2} />
                <a
                  href={`mailto:${data.findUs.email}`}
                  className="text-[#0C64AB] underline hover:text-[#084572] font-poppins text-[15px] font-normal"
                >
                  {data.findUs.email}
                </a>
              </div>

              {/* Phone Link */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-[16px] h-[16px] text-[#0C64AB] shrink-0" strokeWidth={2} />
                <a
                  href={`tel:${data.findUs.phone.split("/")[0].trim().replace(/\s+/g, "")}`}
                  className="text-[#0C64AB] underline hover:text-[#084572] font-poppins text-[15px] font-normal"
                >
                  {data.findUs.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR MENU FOR ONLINE ORDER Section (when data.menu is provided) */}
      {data.menu && data.menu.categories.length > 0 && (
        <section className="py-[70px] bg-white border-t border-gray-100">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[44px]">
            {/* Section Heading */}
            <h2
              className="text-center font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-none sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mb-12 select-none"
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              <span style={{ color: "#0C64AB91", fontWeight: 400 }}>{data.menu.titleLight}</span>
              <span style={{ color: "#0C64AB", fontWeight: 500 }}>{data.menu.titleBold}</span>
            </h2>

            {/* Categories and Item Boxes - Layout matching user screenshot */}
            <div className="space-y-14 sm:space-y-16">
              {data.menu.categories.map((cat, catIdx) => {
                const mid = Math.ceil(cat.items.length / 2);
                const leftItems = cat.items.slice(0, mid);
                const rightItems = cat.items.slice(mid);

                return (
                  <div key={catIdx}>
                    {/* Category Title: centered in parentheses with blue text */}
                    <h3 className="text-center font-poppins text-[#0C64AB] text-[18px] sm:text-[20px] font-semibold mb-6 tracking-wide">
                      {cat.category}
                    </h3>

                    {/* 2 Separate Rounded Dotted Cards with equal height matching Image 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
                      {/* Left Box */}
                      <div className="border border-dotted border-[#CBD5E1] rounded-[8px] p-5 sm:p-6 bg-white flex flex-col justify-start h-full">
                        {leftItems.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start justify-between gap-4 border-b border-dotted border-[#D1D5DB] pb-3.5 mb-3.5"
                          >
                            <div className="flex-1 pr-2">
                              <h4
                                className="font-bebas text-[18px] sm:text-[20px] text-[#2b2b2b] tracking-[0.5px] uppercase leading-tight font-medium"
                                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                              >
                                {item.name}
                              </h4>
                              {item.desc && (
                                <p className="font-poppins text-[#666] text-[12px] sm:text-[13px] leading-relaxed mt-1 font-normal">
                                  {item.desc}
                                </p>
                              )}
                            </div>

                            <div className="flex items-center gap-2 shrink-0 pt-0.5">
                              {/* Pill shaped price tag */}
                              <span className="bg-[#0C64AB] text-white text-[12px] sm:text-[13px] font-medium px-3 py-0.5 rounded-full select-none">
                                ₹ {item.price}
                              </span>
                              {/* Rounded button Add + */}
                              <a
                                href={item.addUrl || "https://orders.tamannahotels.com/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0C64AB] hover:bg-[#084572] text-white text-[12px] sm:text-[13px] font-bold px-3 py-0.5 rounded-[4px] flex items-center justify-center transition-colors cursor-pointer select-none"
                              >
                                Add +
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Box (renders if rightItems has items) */}
                      {rightItems.length > 0 && (
                        <div className="border border-dotted border-[#CBD5E1] rounded-[8px] p-5 sm:p-6 bg-white flex flex-col justify-start h-full">
                          {rightItems.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex items-start justify-between gap-4 border-b border-dotted border-[#D1D5DB] pb-3.5 mb-3.5"
                            >
                              <div className="flex-1 pr-2">
                                <h4
                                  className="font-bebas text-[18px] sm:text-[20px] text-[#2b2b2b] tracking-[0.5px] uppercase leading-tight font-medium"
                                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                                >
                                  {item.name}
                                </h4>
                                {item.desc && (
                                  <p className="font-poppins text-[#666] text-[12px] sm:text-[13px] leading-relaxed mt-1 font-normal">
                                    {item.desc}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center gap-2 shrink-0 pt-0.5">
                                {/* Pill shaped price tag */}
                                <span className="bg-[#0C64AB] text-white text-[12px] sm:text-[13px] font-medium px-3 py-0.5 rounded-full select-none">
                                  ₹ {item.price}
                                </span>
                                {/* Rounded button Add + */}
                                <a
                                  href={item.addUrl || "https://orders.tamannahotels.com/"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-[#0C64AB] hover:bg-[#084572] text-white text-[12px] sm:text-[13px] font-bold px-3 py-0.5 rounded-[4px] flex items-center justify-center transition-colors cursor-pointer select-none"
                                >
                                  Add +
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. OUR GALLERY Section */}
      <section
        id="gallery"
        className="py-[70px] text-white relative select-none"
        style={{
          backgroundImage: 'url("/images/site/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg")',
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[44px]">
          {/* Section Heading */}
          <h2
            className="text-center font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[95px] uppercase leading-none sm:leading-[90px] tracking-[-2px] sm:tracking-[-3.8px] mb-12 select-none"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span className="text-white font-normal">{data.gallery.titleLight}</span>
            <span style={{ color: "#92C9F5", fontWeight: 500 }}>{data.gallery.titleBold}</span>
          </h2>

          {/* Images Grid */}
          <div
            className={`grid grid-cols-1 ${
              data.gallery.images.length === 2
                ? "md:grid-cols-2 max-w-[1050px] mx-auto gap-6 sm:gap-8"
                : "sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
            }`}
          >
            {data.gallery.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden cursor-pointer shadow-md bg-slate-900 border border-white/10 ${
                  data.gallery.images.length === 2
                    ? "h-[260px] sm:h-[320px] md:h-[360px]"
                    : "h-[220px] sm:h-[240px] md:h-[260px]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/90 hover:text-white p-2 cursor-pointer z-50 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-3 cursor-pointer z-50 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-3 cursor-pointer z-50 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[650px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={data.gallery.images[activeLightboxIndex].src}
              alt={data.gallery.images[activeLightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 8. Footer with dynamic branding */}
      <Footer
        logoSrc={data.footer.logoSrc}
        activeLink={data.footer.activeLink}
        customPhone={data.footer.phone}
        customEmail={data.footer.email}
        customTagline={data.footer.tagline}
        customRoomBookingPhone={data.footer.roomBookingPhone}
        customBanquetBookingPhone={data.footer.banquetBookingPhone}
      />

      {/* 9. Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialHotel={data.hotelName}
      />
    </div>
  );
}

