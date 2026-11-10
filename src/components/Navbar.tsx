"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  logoSrc?: string;
  isBadgeLogo?: boolean;
  isDailyBaker?: boolean;
  isEternityLogo?: boolean;
  activeNav?: string;
  logoContainerClassName?: string;
}

export default function Navbar({
  onOpenBooking,
  logoSrc,
  isBadgeLogo: explicitBadge,
  isDailyBaker,
  isEternityLogo: explicitEternity,
  activeNav,
  logoContainerClassName,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const isBadgeLogo = explicitBadge || logoSrc?.includes("63.png") || logoSrc?.includes("62.png");
  const isEternityLogo = explicitEternity || logoSrc?.includes("6-3-1.png");
  const isDailyBakerLogo = isDailyBaker || logoSrc?.includes("7-3-2.png") || logoSrc?.includes("DAILY-BAKER");

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-40 w-full bg-white shadow-sm py-1 sm:py-2">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between transition-all duration-200 ${
            isBadgeLogo || isEternityLogo || isDailyBakerLogo ? "h-20 sm:h-24 md:h-32" : "h-[74px] sm:h-20 md:h-24"
          }`}
        >
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-1">
            <div
              className={
                logoContainerClassName ||
                (isDailyBakerLogo
                  ? "relative w-36 sm:w-44 md:w-56 h-14 sm:h-20 md:h-[105px] flex items-center"
                  : isBadgeLogo
                  ? "relative w-16 sm:w-24 md:w-[130px] h-16 sm:h-24 md:h-[130px] flex items-center"
                  : isEternityLogo
                  ? "relative w-44 sm:w-56 md:w-72 h-16 sm:h-20 md:h-[95px] flex items-center"
                  : "relative w-[104px] sm:w-40 md:w-56 h-[62px] sm:h-16 md:h-20 flex items-center")
              }
            >
              <Image
                src={logoSrc || "/images/site/logo.png"}
                alt={logoSrc ? "Daily Baker" : "Tamanna Hotels"}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Mobile Exact Center: Book Now Pill */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex lg:hidden items-center justify-center z-10">
            <button
              onClick={onOpenBooking}
              className="bg-[#0C64AB] hover:bg-[#094c82] active:scale-95 text-white font-bebas tracking-[0.6px] w-[112px] sm:w-[124px] h-[48px] sm:h-[50px] rounded-full flex flex-col items-center justify-center shrink-0 shadow-sm leading-[1.0] select-none transition-transform cursor-pointer"
              aria-label="Book Now"
            >
              <span className="text-[16px] sm:text-[17px] font-normal leading-none tracking-wider">BOOK</span>
              <span className="text-[16px] sm:text-[17px] font-normal leading-none tracking-wider mt-[1px]">NOW</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[16px] font-jost font-medium text-[#2A2A2A]">
            
            {/* 1. Hotels */}
            <Link
              href="/best-hotel-for-stay-pune"
              className="hover:text-[#0C64AB] transition-colors cursor-pointer py-1"
            >
              Hotels
            </Link>

            {/* 2. Restaurants */}
            <Link
              href="/restaurant-in-pune"
              className="hover:text-[#0C64AB] transition-colors cursor-pointer py-1"
            >
              Restaurants
            </Link>

            {/* 3. Wedding and Party Venue */}
            <Link
              href="/top-wedding-party-venues-pune"
              className="hover:text-[#0C64AB] transition-colors cursor-pointer whitespace-nowrap py-1"
            >
              Wedding and Party venue
            </Link>

            {/* 4. Offers */}
            <Link
              href="/offers"
              className="hover:text-[#0C64AB] transition-colors cursor-pointer py-1"
            >
              Offers
            </Link>

            {/* 5. Daily Baker */}
            <Link
              href="/top-cake-shop-hinjawadi-pune"
              className={`hover:text-[#0C64AB] transition-colors cursor-pointer whitespace-nowrap py-1 ${
                activeNav === "Daily Baker" ? "text-[#0C64AB] font-semibold" : ""
              }`}
            >
              Daily Baker
            </Link>

            {/* 6. More Dropdown */}
            <div
              ref={moreRef}
              className="relative py-2 group"
              onMouseEnter={() => setMoreDropdown(true)}
              onMouseLeave={() => setMoreDropdown(false)}
            >
              <button
                onClick={() => setMoreDropdown(!moreDropdown)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer group-hover:text-[#0C64AB] ${
                  moreDropdown ? "text-[#0C64AB]" : "text-[#2A2A2A]"
                }`}
                aria-expanded={moreDropdown}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#0C64AB] ${
                    moreDropdown ? "rotate-180 text-[#0C64AB]" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full right-0 w-52 bg-white rounded-none border border-slate-200 shadow-xl py-0 z-50 transition-all duration-200 ${
                  moreDropdown ? "block opacity-100 visible" : "hidden group-hover:block"
                }`}
              >
                <Link
                  href="/best-hotels-pune"
                  onClick={() => setMoreDropdown(false)}
                  className="block px-6 py-3.5 text-[14.5px] font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0C64AB] transition-colors border-b border-slate-200"
                >
                  About Us
                </Link>
                <Link
                  href="/hotel-near-pune"
                  onClick={() => setMoreDropdown(false)}
                  className="block px-6 py-3.5 text-[14.5px] font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0C64AB] transition-colors border-b border-slate-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMoreDropdown(false)}
                  className="block px-6 py-3.5 text-[14.5px] font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0C64AB] transition-colors border-b border-slate-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMoreDropdown(false)}
                  className="block px-6 py-3.5 text-[14.5px] font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0C64AB] transition-colors"
                >
                  Blogs
                </Link>
              </div>
            </div>

          </nav>

          {/* Book Now Button Desktop */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#0C64AB] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-[18px] font-medium tracking-[0.8px] px-8 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md uppercase"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center justify-end shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-black hover:text-[#0C64AB] transition-colors cursor-pointer shrink-0 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                /* Square with X window-close icon matching image */
                <svg
                  className="w-6 h-6 fill-current text-black"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z" />
                </svg>
              ) : (
                /* 4-bar horizontal menu icon matching image */
                <svg
                  className="w-6 h-6 fill-current text-black"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer strictly matching uploaded image */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#e5e7eb] font-jost shadow-2xl select-none z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
          style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
        >
          {/* 1. Hotels */}
          <Link
            href="/best-hotel-for-stay-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 sm:px-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
            style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
          >
            Hotels
          </Link>

          {/* 2. Restaurants */}
          <Link
            href="/restaurant-in-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 sm:px-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
            style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
          >
            Restaurants
          </Link>

          {/* 3. Wedding And Party Venue */}
          <Link
            href="/top-wedding-party-venues-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 sm:px-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
            style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
          >
            Wedding And Party Venue
          </Link>

          {/* 4. Offers */}
          <Link
            href="/offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 sm:px-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
            style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
          >
            Offers
          </Link>

          {/* 5. Daily Baker */}
          <Link
            href="/top-cake-shop-hinjawadi-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 sm:px-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
            style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
          >
            Daily Baker
          </Link>

          {/* 6. More (Expandable Accordion) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              aria-expanded={mobileMoreOpen}
              className={`w-full flex items-center justify-between px-4 sm:px-6 py-3.5 text-[16px] font-medium border-b border-[#e5e7eb] transition-colors cursor-pointer select-none ${
                mobileMoreOpen ? "text-[#0C64AB]" : "text-[#2A2A2A] hover:text-[#0C64AB]"
              }`}
              style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
            >
              <span>More</span>
              {mobileMoreOpen ? (
                <ChevronUp className="w-5 h-5 text-[#0C64AB]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#2A2A2A]" />
              )}
            </button>

            {/* Submenu Items (Indented) */}
            {mobileMoreOpen && (
              <div className="bg-white">
                <Link
                  href="/best-hotels-pune"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-9 sm:pl-11 pr-4 sm:pr-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
                  style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
                >
                  About Us
                </Link>
                <Link
                  href="/hotel-near-pune"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-9 sm:pl-11 pr-4 sm:pr-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
                  style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-9 sm:pl-11 pr-4 sm:pr-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
                  style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
                >
                  Gallery
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-9 sm:pl-11 pr-4 sm:pr-6 py-3.5 text-[16px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] border-b border-[#e5e7eb] transition-colors"
                  style={{ fontFamily: '"Jost", var(--font-jost), sans-serif' }}
                >
                  Blogs
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
