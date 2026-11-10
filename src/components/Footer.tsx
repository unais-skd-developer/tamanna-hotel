"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Smartphone, Globe } from "lucide-react";

interface FooterProps {
  logoSrc?: string;
  isDailyBaker?: boolean;
  activeLink?: string;
  customPhone?: string;
  customEmail?: string;
  customTagline?: string;
  customRoomBookingPhone?: string;
  customBanquetBookingPhone?: string;
  logoContainerClassName?: string;
}

export default function Footer({
  logoSrc,
  isDailyBaker,
  activeLink,
  customPhone,
  customEmail,
  customTagline,
  customRoomBookingPhone,
  customBanquetBookingPhone,
  logoContainerClassName,
}: FooterProps = {}) {
  const isBadgeLogo = logoSrc?.includes("63.png") || logoSrc?.includes("62.png");
  const isEternityLogo = logoSrc?.includes("6-3-1.png");
  const isDailyBakerLogo = isDailyBaker || logoSrc?.includes("DAILY-BAKER") || logoSrc?.includes("7-3-2.png");
  return (
    <footer
      id="footer"
      className="w-full bg-white text-black font-poppins mb-10 pt-14 sm:pt-16 md:pt-20 pb-8 border-t border-slate-100"
    >
      <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Logo (Left) + REACH OUT (Middle) + QUICK LINKS (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 pb-12 lg:pb-16 items-start">

          {/* Column 1: Logo & Tagline (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start space-y-3">
            <Link href="/" className="inline-block">
              {isDailyBakerLogo ? (
                <div
                  className={
                    logoContainerClassName ||
                    "relative w-56 sm:w-64 md:w-[270px] h-36 sm:h-44 md:h-[175px] flex items-center mb-1"
                  }
                >
                  <Image
                    src={logoSrc || "/images/site/DAILY-BAKER.png"}
                    alt="Daily Baker Logo"
                    fill
                    loading="lazy"
                    className="object-contain object-left"
                  />
                </div>
              ) : isBadgeLogo ? (
                <div
                  className={
                    logoContainerClassName ||
                    "relative w-[220px] sm:w-[250px] md:w-[266px] h-[220px] sm:h-[250px] md:h-[266px] flex items-center mb-1"
                  }
                >
                  <Image
                    src={logoSrc || "/images/site/63.png"}
                    alt="Venue Logo"
                    fill
                    loading="lazy"
                    className="object-contain object-left"
                  />
                </div>
              ) : isEternityLogo ? (
                <div
                  className={
                    logoContainerClassName ||
                    "relative w-72 sm:w-80 md:w-[340px] h-28 sm:h-36 md:h-40 flex items-center mb-3"
                  }
                >
                  <Image
                    src={logoSrc || "/images/site/6-3-1.png"}
                    alt="Eternity Banquet Hall Logo"
                    fill
                    loading="lazy"
                    className="object-contain object-left"
                  />
                </div>
              ) : logoSrc ? (
                <div
                  className={
                    logoContainerClassName ||
                    "relative w-[220px] sm:w-[250px] md:w-[280px] lg:w-[290px] h-[133px] sm:h-[151px] md:h-[169px] lg:h-[175px] flex items-center"
                  }
                >
                  <Image
                    src={logoSrc}
                    alt="Tamanna Hotel Logo"
                    fill
                    loading="lazy"
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <div className="relative w-[220px] sm:w-[250px] md:w-[280px] lg:w-[290px] h-[133px] sm:h-[151px] md:h-[169px] lg:h-[175px] flex items-center">
                  <Image
                    src="/images/site/logo.png"
                    alt="Tamanna Hotels Logo"
                    fill
                    loading="lazy"
                    className="object-contain object-left"
                  />
                </div>
              )}
            </Link>
            <p className="text-[14px] sm:text-[14.5px] text-black leading-[1.65] max-w-[340px] font-normal pt-3 font-poppins">
              {customTagline || "Tamanna Hotel Offers Premium Stays, Modern Comforts, Elegant Dining, And Personalized Service For Every Guest."}
            </p>
          </div>

          {/* Column 2: REACH OUT (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4 pt-1">
            <div className="w-full">
              <h3
                className="font-bebas text-[34px] sm:text-[38px] md:text-[40px] uppercase text-[#0C64AB] tracking-normal leading-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                REACH OUT
              </h3>
              <div className="w-24 sm:w-28 h-[2px] bg-[#0C64AB] mt-2 mb-6" />
            </div>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-black font-normal w-full font-poppins">
              {/* Telephone */}
              <div className="flex items-start gap-3">
                <div className="mt-1 text-[#0C64AB] shrink-0">
                  <Phone className="w-[18px] h-[18px] text-[#0C64AB]" />
                </div>
                <div className="leading-relaxed">
                  {customPhone ? (
                    <div>{customPhone}</div>
                  ) : isDailyBaker ? (
                    <div>02066751900</div>
                  ) : (
                    <>
                      <div>02066751900 / 02066935000 /</div>
                      <div>02066539888 / 7507772159</div>
                    </>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="text-[#0C64AB] shrink-0">
                  <Mail className="w-[18px] h-[18px] text-[#0C64AB]" />
                </div>
                <a
                  href={`mailto:${customEmail || "info@tamannahotels.com"}`}
                  className="text-black hover:text-[#0C64AB] transition-colors"
                >
                  {customEmail || "info@tamannahotels.com"}
                </a>
              </div>

              {/* Order Food Online */}
              <div className="flex items-start gap-3 pt-0.5">
                <div className="mt-1 text-[#0C64AB] shrink-0">
                  <Smartphone className="w-[18px] h-[18px] text-[#0C64AB]" />
                </div>
                <div className="leading-relaxed">
                  <span className="font-normal text-black block mb-0.5">Order Food Online :</span>
                  <div>
                    <a href="https://orders.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB] transition-colors">
                      Orders.tamannahotels.com /
                    </a>
                  </div>
                  <div>
                    <a href="https://grand.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB] transition-colors">
                      Grand.tamannahotels.com/
                    </a>
                  </div>
                  <div>
                    <a href="https://imperial.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB] transition-colors">
                      imperial.tamannahotels.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 3: QUICK LINKS (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4 pt-1">
            <div className="w-full">
              <h3
                className="font-bebas text-[34px] sm:text-[38px] md:text-[40px] uppercase text-[#0C64AB] tracking-normal leading-none"
                style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
              >
                QUICK LINKS
              </h3>
              <div className="w-14 sm:w-16 h-[2px] bg-[#0C64AB] mt-2 mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 md:gap-y-0 gap-x-4 sm:gap-x-8 md:gap-x-10 text-[14.5px] sm:text-[15px] md:text-[16px] text-black w-full font-poppins">
              {/* Left Sub-Column */}
              <div className="space-y-3 sm:space-y-3.5">
                <div>
                  <Link
                    href="/"
                    className={
                      activeLink === "Home" || !activeLink
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href="/best-hotels-pune"
                    className={
                      activeLink === "About Us"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    href="/bizz-tamanna-hotel-hinjawadi-pune"
                    className={
                      activeLink === "Bizz Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Bizz Tamanna
                  </Link>
                </div>
                <div>
                  <Link
                    href="/hotels-hinjawadi-pune"
                    className={
                      activeLink === "Grand Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Grand Tamanna
                  </Link>
                </div>
                <div>
                  <Link
                    href="/premier-tamanna-hotel-hinjawadi-pune"
                    className={
                      activeLink === "Premier Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Premier Tamanna
                  </Link>
                </div>
              </div>

              {/* Right Sub-Column */}
              <div className="space-y-3 sm:space-y-3.5">
                <div>
                  <Link
                    href="/executive-tamanna-hotel-hinjawadi-pune"
                    className={
                      activeLink === "Executive Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Executive Tamanna
                  </Link>
                </div>
                <div>
                  <Link
                    href="/shree-inn-by-tamanna-hotel-hinjawadi-pune"
                    className={
                      activeLink === "Shree Inn By Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Shree Inn By Tamanna
                  </Link>
                </div>
                <div>
                  <Link
                    href="/best-hotels-chikhali-pune"
                    className={
                      activeLink === "Imperial Tamanna"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Imperial Tamanna
                  </Link>
                </div>
                <div>
                  <Link
                    href="/top-cake-shop-hinjawadi-pune"
                    className={
                      isDailyBaker || activeLink === "Daily Baker"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Daily Baker
                  </Link>
                </div>
                <div>
                  <Link
                    href="/hotel-near-pune"
                    className={
                      activeLink === "Contact Us"
                        ? "text-[#0C64AB] hover:underline"
                        : "text-black hover:text-[#0C64AB] transition-colors"
                    }
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Middle Section: Direct Booking Lines */}
        <div className="border-t border-gray-200 border-b border-gray-200 py-5 sm:py-7 my-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-[14px] sm:text-[15px] md:text-[16px] text-black font-poppins">

            {/* Box 1: Hotel Rooms */}
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#0C64AB] mt-1 shrink-0" />
              <div className="leading-relaxed">
                <span className="text-black font-normal block">Bookings Of Hotel Rooms:</span>
                <span className="text-black font-normal">{customRoomBookingPhone || "02066935000/ 02066539888/ 02066751900"}</span>
              </div>
            </div>

            {/* Box 2: Banquet Halls & Restaurants */}
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#0C64AB] mt-1 shrink-0" />
              <div className="leading-relaxed">
                <span className="text-black font-normal block">Bookings Of Banquet Halls & Restaurants:</span>
                <span className="text-black font-normal">{customBanquetBookingPhone || "7507772159/ 02066935000/ 02069525400"}</span>
              </div>
            </div>

            {/* Box 3: Website */}
            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-[#0C64AB] mt-1 shrink-0" />
              <div className="leading-relaxed">
                <span className="text-black font-normal block">Visit our Website:</span>
                <a
                  href="https://www.tamannahotels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0C64AB] transition-colors"
                >
                  www.tamannahotels.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright in Blue & Circle Social Icons */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-poppins">
          <div className="text-[14px] sm:text-[15px] text-[#0C64AB] font-normal">
            Copyright © 2026 Tamanna Hotels | Powered By Shree Krishna Digital Marketing
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/tamannahotels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#3b5998] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCNH53YUnyU8n8QoaRHuyyug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-[#cd201f] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tamannahotelspune/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#262626] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
