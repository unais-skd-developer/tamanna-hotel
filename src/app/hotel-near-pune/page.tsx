"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  MapPin,
  Mail,
  Phone,
  Utensils,
  Cake,
  CheckCircle2,
} from "lucide-react";

interface LocationCard {
  title: string;
  address: string;
  mapUrl: string;
}

const LOCATION_CARDS: LocationCard[] = [
  {
    title: "GRAND TAMANNA",
    address:
      "PLOT NO.16, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Grand+Tamanna+Hotel/@18.5934246,73.7073284,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bba455555555:0xf8d77beec06403a7!5m2!4m1!1i2!8m2!3d18.5934246!4d73.7073284!16s%2Fg%2F11c1ww66hm",
  },
  {
    title: "PREMIER TAMANNA",
    address:
      "3, S.No.21 Plot No.2, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Premier+Tamanna+Hotel/data=!4m2!3m1!1s0x0:0xb0abafd86c58023c",
  },
  {
    title: "BIZZ TAMANNA",
    address:
      "Plot No.10 Opp. Infosys, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Bizz+Tamanna+Hotel/data=!4m2!3m1!1s0x0:0xf7903c0b58ea3567",
  },
  {
    title: "EXECUTIVE TAMANNA",
    address:
      "Plot No. 7, Executive Tamanna Hotel, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Executive+Tamanna+Hotel/@18.5857239,73.7349426,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bbe863f6e85b:0x8ad35ffffa7beeb2",
  },
  {
    title: "SHREE INN BY TAMANNA",
    address:
      "Sakhare Vasti Rd, near West Wind Park, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl:
      "https://www.google.com/maps/place/Shree+Inn+by+Tamanna+Hotels/@18.5883862,73.7413495,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc2bbe755155555:0xa1034de979fb9389",
  },
  {
    title: "DAILY BAKER",
    address:
      "P-7/1, Hinjawadi Phase 1 Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057",
    mapUrl: "https://maps.app.goo.gl/zvzfEvuubYLPRZdM6?g_st=ipc",
  },
  {
    title: "IMPERIAL TAMANNA",
    address:
      "Diagonal Business Centre, Plot No - 1, Sector 16, Ayush Garden, Raje Shivaji Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411019",
    mapUrl: "https://maps.app.goo.gl/g6s9ThAuqA7MYSbBA",
  },
];

export default function ContactUsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        branch: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* 3. Hero Banner (Lobby with Reception & Seating + CONTACT US Title) */}
      <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[460px] flex flex-col justify-end items-center pb-8 sm:pb-12 overflow-hidden bg-slate-900">
        <Image
          src="/images/site/Lobby1-4-scaled.jpg"
          alt="Contact Tamanna Hotels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Bottom-aligned CONTACT US Title */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="font-bebas text-white text-[65px] lg:text-[95px] uppercase tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3.8px] leading-none drop-shadow-md"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            CONTACT US
          </h1>
        </div>
      </section>

      {/* 4. Section: GET IN TOUCH (Contact Form on Light Lavender Background) */}
      <section className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EDEDF7] w-full">
        <div className="max-w-4xl mx-auto w-full">
          {/* Title */}
          <h2
            className="font-bebas text-center text-[65px] lg:text-[95px] uppercase tracking-[-2.2px] lg:tracking-[-3.8px] leading-[64px] lg:leading-[1em] mb-3 text-[#0C64AB91]"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span>GET IN </span>
            <span className="text-[#0C64AB] font-medium">TOUCH</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-center text-[#7A7A7A] font-poppins text-xs sm:text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed font-normal capitalize"
            style={{ fontFamily: '"Poppins", Sans-serif' }}
          >
            Thank You For Choosing Tamanna Hotels Your Trusted Destination For
            Comfort, Convenience, And Quality Hospitality.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Row 1: Name & Email (2 columns even on mobile) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#2A2A2A] uppercase tracking-wider mb-1.5 sm:mb-2 font-poppins">
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter name"
                  className="w-full h-11 sm:h-[50px] px-3 sm:px-4 bg-white border border-[#D6D6D6] rounded-[4px] text-[#2A2A2A] placeholder-[#9CA3AF] text-[13px] sm:text-sm focus:outline-none focus:border-[#0C64AB] font-poppins shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#2A2A2A] uppercase tracking-wider mb-1.5 sm:mb-2 font-poppins">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full h-11 sm:h-[50px] px-3 sm:px-4 bg-white border border-[#D6D6D6] rounded-[4px] text-[#2A2A2A] placeholder-[#9CA3AF] text-[13px] sm:text-sm focus:outline-none focus:border-[#0C64AB] font-poppins shadow-2xs"
                />
              </div>
            </div>

            {/* Row 2: Phone & Select Branch (2 columns even on mobile) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#2A2A2A] uppercase tracking-wider mb-1.5 sm:mb-2 font-poppins">
                  PHONE
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your mobile"
                  className="w-full h-11 sm:h-[50px] px-3 sm:px-4 bg-white border border-[#D6D6D6] rounded-[4px] text-[#2A2A2A] placeholder-[#9CA3AF] text-[13px] sm:text-sm focus:outline-none focus:border-[#0C64AB] font-poppins shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#2A2A2A] uppercase tracking-wider mb-1.5 sm:mb-2 font-poppins truncate">
                  SELECT OUR BRANCHES
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({ ...formData, branch: e.target.value })
                  }
                  className="w-full h-11 sm:h-[50px] px-2.5 sm:px-4 bg-white border border-[#D6D6D6] rounded-[4px] text-[#2A2A2A] text-[13px] sm:text-sm focus:outline-none focus:border-[#0C64AB] font-poppins cursor-pointer shadow-2xs truncate"
                >
                  <option value="">Select Our Branches</option>
                  <option value="Grand Tamanna">Grand Tamanna</option>
                  <option value="Premier Tamanna">Premier Tamanna</option>
                  <option value="Bizz Tamanna">Bizz Tamanna</option>
                  <option value="Executive Tamanna">Executive Tamanna</option>
                  <option value="Shree Inn By Tamanna">Shree Inn By Tamanna</option>
                  <option value="Daily Baker">Daily Baker</option>
                  <option value="Imperial Tamanna Hotel">
                    Imperial Tamanna Hotel
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block text-[12px] sm:text-[14px] font-semibold text-[#2A2A2A] uppercase tracking-wider mb-1.5 sm:mb-2 font-poppins">
                MESSAGE
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Message"
                className="w-full p-3 sm:p-4 bg-white border border-[#D6D6D6] rounded-[4px] text-[#2A2A2A] placeholder-[#9CA3AF] text-[13px] sm:text-sm focus:outline-none focus:border-[#0C64AB] font-poppins resize-y shadow-2xs"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-white text-[#0C64AB] border-2 border-[#0C64AB] hover:bg-[#0C64AB] hover:text-white font-poppins text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider px-7 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
              >
                ENQUIRE NOW
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm font-poppins flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>
                  Thank you! Your message has been sent successfully. Our team will
                  get back to you shortly.
                </span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 5. Section: CONTACT US (7 Branch Location Cards on White Background) */}
      <section className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="max-w-[1300px] mx-auto w-full">
          {/* Title */}
          <h2
            className="font-bebas text-center text-[65px] lg:text-[95px] uppercase tracking-[-2.2px] lg:tracking-[-3.8px] leading-[64px] lg:leading-[1em] mb-12 sm:mb-16 text-[#0C64AB91]"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span>CONTACT </span>
            <span className="text-[#0C64AB] font-medium">US</span>
          </h2>

          {/* 7 Location Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {LOCATION_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0C64AB] rounded-[10px] p-8 sm:p-10 flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Clean Blue Outline Pin Icon */}
                  <MapPin className="w-10 h-10 text-[#0C64AB] mb-4" strokeWidth={1.5} />

                  {/* Title */}
                  <h3
                    className="font-bebas text-[27px] uppercase tracking-[0.5px] text-[#000000] mb-3 leading-tight"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    {card.title}
                  </h3>

                  {/* Address */}
                  <p
                    className="font-poppins text-[14px] text-[#656565] leading-relaxed mb-6"
                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                  >
                    {card.address}
                  </p>
                </div>

                {/* Location Link with Underline */}
                <a
                  href={card.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#0C64AB] font-bebas text-[17px] tracking-[1px] uppercase border-b border-[#0C64AB] pb-0.5 hover:text-[#084572] hover:border-[#084572] transition-colors cursor-pointer group"
                  style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0C64AB]" strokeWidth={2} />
                  <span>LOCATION</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: CONTACT INFORMATION (Cards on Light Lavender Background) */}
      <section className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EDEDF7] w-full">
        <div className="max-w-[1300px] mx-auto">
          {/* Title */}
          <h2
            className="font-bebas text-center text-[65px] lg:text-[95px] uppercase tracking-[-2.2px] lg:tracking-[-3.8px] leading-[0.95] lg:leading-[1em] mb-12 sm:mb-16 text-[#0C64AB91]"
            style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
          >
            <span>CONTACT </span>
            <br className="sm:hidden" />
            <span className="text-[#0C64AB] font-medium">INFORMATION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: BOOKING THROUGH EMAIL */}
            <div className="bg-white rounded-[10px] shadow-xs border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#0C64AB] mb-1">
                  <Mail className="w-5 h-5 text-[#0C64AB]" />
                  <h3
                    className="font-bebas text-[24px] sm:text-[27px] uppercase tracking-[0.5px] text-[#0C64AB] leading-tight"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    BOOKING THROUGH EMAIL
                  </h3>
                </div>
                <p
                  className="font-poppins text-xs sm:text-[13px] text-[#7A7A7A] mb-6 capitalize"
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  Email Reservations For Different Properties
                </p>

                <div className="space-y-4 font-poppins text-[13.5px]">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      EMAIL IDS: EXECUTIVE/BIZZ/SHREE INN
                    </h4>
                    <a
                      href="mailto:info@tamannahotels.com"
                      className="inline-flex items-center gap-2 text-[#0C64AB] underline hover:text-[#084b80]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <span>info@tamannahotels.com</span>
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      GRAND TAMANNA
                    </h4>
                    <a
                      href="mailto:Grand@tamannahotels.com"
                      className="inline-flex items-center gap-2 text-[#0C64AB] underline hover:text-[#084b80]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <span>Grand@tamannahotels.com</span>
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      PREMIER TAMANNA
                    </h4>
                    <a
                      href="mailto:Premier@tamannahotels.com"
                      className="inline-flex items-center gap-2 text-[#0C64AB] underline hover:text-[#084b80]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <span>Premier@tamannahotels.com</span>
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      IMPERIAL TAMANNA
                    </h4>
                    <a
                      href="mailto:Imperial@tamannahotels.com"
                      className="inline-flex items-center gap-2 text-[#0C64AB] underline hover:text-[#084b80]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <span>Imperial@tamannahotels.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: BOOKING OF HOTEL ROOMS */}
            <div className="bg-white rounded-[10px] shadow-xs border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#0C64AB] mb-1">
                  <Phone className="w-5 h-5 text-[#0C64AB]" />
                  <h3
                    className="font-bebas text-[24px] sm:text-[27px] uppercase tracking-[0.5px] text-[#0C64AB] leading-tight"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    BOOKING OF HOTEL ROOMS
                  </h3>
                </div>
                <p
                  className="font-poppins text-xs sm:text-[13px] text-[#7A7A7A] mb-6 capitalize"
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  Direct Phone Bookings For Accommodations
                </p>

                <div className="space-y-3.5 font-poppins text-[13.5px]">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      GRAND TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066935000"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66935000
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7058688561"
                        className="underline hover:text-[#084b80]"
                      >
                        7058688561
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      PREMIER TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02069525400"
                        className="underline hover:text-[#084b80]"
                      >
                        020 69525400
                      </a>
                      <span>/</span>
                      <a
                        href="tel:8956916914"
                        className="underline hover:text-[#084b80]"
                      >
                        8956916914
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      BIZZ TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066539888"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66539888
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7058688563"
                        className="underline hover:text-[#084b80]"
                      >
                        7058688563
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      EXECUTIVE TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066751900"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66751900
                      </a>
                      <span>/</span>
                      <a
                        href="tel:9156828482"
                        className="underline hover:text-[#084b80]"
                      >
                        9156828482
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      SHREE INN
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:9156832283"
                        className="underline hover:text-[#084b80]"
                      >
                        9156832283
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-0.5">
                      IMPERIAL TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:7028884375"
                        className="underline hover:text-[#084b80]"
                      >
                        70288 84375
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: BOOKING OF BANQUET HALLS AND RESTAURANTS */}
            <div className="bg-white rounded-[10px] shadow-xs border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#0C64AB] mb-1">
                  <Utensils className="w-5 h-5 text-[#0C64AB]" />
                  <h3
                    className="font-bebas text-[24px] sm:text-[27px] uppercase tracking-[0.5px] text-[#0C64AB] leading-tight"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    BOOKING OF BANQUET HALLS AND RESTAURANTS
                  </h3>
                </div>
                <p
                  className="font-poppins text-xs sm:text-[13px] text-[#7A7A7A] mb-6 capitalize"
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  Direct Phone Booking For Booking &amp; Reservations For Different
                  Properties
                </p>

                <div className="space-y-4 font-poppins text-[13.5px]">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      GRAND TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066935000"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66935000
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7507772159"
                        className="underline hover:text-[#084b80]"
                      >
                        7507772159
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      PREMIER TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02069525400"
                        className="underline hover:text-[#084b80]"
                      >
                        020 69525400
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7507772162"
                        className="underline hover:text-[#084b80]"
                      >
                        7507772162
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      BIZZ TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066539888"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66539888
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7507039775"
                        className="underline hover:text-[#084b80]"
                      >
                        7507039775
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      EXECUTIVE TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066751900"
                        className="underline hover:text-[#084b80]"
                      >
                        020 66751900
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7507039775"
                        className="underline hover:text-[#084b80]"
                      >
                        7507039775
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      IMPERIAL TAMANNA
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:7028884317"
                        className="underline hover:text-[#084b80]"
                      >
                        70288 84317
                      </a>
                      <span>/</span>
                      <a
                        href="tel:7028884371"
                        className="underline hover:text-[#084b80]"
                      >
                        70288 84371
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: DAILY BAKER */}
            <div className="bg-white rounded-[10px] shadow-xs border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#0C64AB] mb-1">
                  <Cake className="w-5 h-5 text-[#0C64AB]" />
                  <h3
                    className="font-bebas text-[24px] sm:text-[27px] uppercase tracking-[0.5px] text-[#0C64AB] leading-tight"
                    style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
                  >
                    DAILY BAKER
                  </h3>
                </div>
                <p
                  className="font-poppins text-xs sm:text-[13px] text-[#7A7A7A] mb-6 capitalize"
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                >
                  Fresh Bakery Services
                </p>

                <div className="space-y-5 font-poppins text-[13.5px]">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      EMAIL
                    </h4>
                    <a
                      href="mailto:Bakery@tamannahotels.com"
                      className="inline-flex items-center gap-2 text-[#0C64AB] underline hover:text-[#084b80]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <span>Bakery@tamannahotels.com</span>
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#2A2A2A] mb-1">
                      TEL.
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-[#0C64AB]">
                      <Phone className="w-3.5 h-3.5 text-[#0C64AB]" />
                      <a
                        href="tel:02066751900"
                        className="underline hover:text-[#084b80]"
                      >
                        020-66751900
                      </a>
                      <span>/</span>
                      <a
                        href="tel:9156828482"
                        className="underline hover:text-[#084b80]"
                      >
                        9156828482
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
