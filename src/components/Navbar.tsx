"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

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
    <header className="relative z-40 w-full bg-white shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-32 sm:w-40 md:w-48 h-12 md:h-16 flex items-center">
              <Image
                src="/images/site/logo.png"
                alt="Tamanna Hotels"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

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
              className="hover:text-[#0C64AB] transition-colors cursor-pointer whitespace-nowrap py-1"
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

          {/* Mobile Menu & Book Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#0C64AB] text-white font-bebas text-sm tracking-wider px-4 py-2 rounded-full uppercase"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0C64AB] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 font-jost text-base shadow-xl">
          <Link
            href="/best-hotel-for-stay-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Hotels
          </Link>
          <Link
            href="/restaurant-in-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Restaurants
          </Link>
          <Link
            href="/top-wedding-party-venues-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Wedding and Party venue
          </Link>
          <Link
            href="/offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Offers
          </Link>
          <Link
            href="/top-cake-shop-hinjawadi-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Daily Baker
          </Link>
          <Link
            href="/best-hotels-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            About Us
          </Link>
          <Link
            href="/hotel-near-pune"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Contact Us
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB] border-b border-slate-100"
          >
            Gallery
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0C64AB]"
          >
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}
