"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Smartphone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 sm:w-52 h-16 sm:h-20">
                <Image
                  src="/images/site/logo.png"
                  alt="Tamanna Hotels Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm font-poppins">
              Tamanna Hotel offers premium stays, modern comforts, elegant dining, and personalized service for every guest.
            </p>
          </div>

          {/* Column 2: REACH OUT */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-bebas uppercase tracking-wider text-[#0C64AB] inline-block pb-1 border-b-2 border-[#0C64AB]">
                REACH OUT
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-jost">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-[#0C64AB] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-wrap gap-x-1.5 leading-relaxed font-medium">
                  <a href="tel:02066751900" className="hover:text-[#0C64AB] transition-colors">02066751900</a>
                  <span>/</span>
                  <a href="tel:02066935000" className="hover:text-[#0C64AB] transition-colors">02066935000</a>
                  <span>/</span>
                  <a href="tel:02066539888" className="hover:text-[#0C64AB] transition-colors">02066539888</a>
                  <span>/</span>
                  <a href="tel:7507772159" className="hover:text-[#0C64AB] transition-colors">7507772159</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <div className="text-[#0C64AB] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:Info@tamannahotels.com"
                  className="hover:text-[#0C64AB] font-medium transition-colors"
                >
                  Info@tamannahotels.com
                </a>
              </div>

              {/* Order Food Online */}
              <div className="flex items-start gap-2.5 pt-1">
                <div className="mt-0.5 text-[#0C64AB] shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block">Order Food Online :</span>
                  <div className="space-y-0.5 text-slate-600 pt-0.5 font-medium">
                    <div>
                      <a href="https://orders.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB]">
                        Orders.tamannahotels.com /
                      </a>
                    </div>
                    <div>
                      <a href="https://grand.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB]">
                        Grand.tamannahotels.com/
                      </a>
                    </div>
                    <div>
                      <a href="https://imperial.tamannahotels.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C64AB]">
                        imperial.tamannahotels.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 3: QUICK LINKS */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-bebas uppercase tracking-wider text-[#0C64AB] inline-block pb-1 border-b-2 border-[#0C64AB]">
                QUICK LINKS
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-[13.5px] text-slate-700 font-medium font-jost">
              {/* Left Sub-Column */}
              <div className="space-y-2.5">
                <div>
                  <Link href="/" className="hover:text-[#0C64AB] transition-colors">Home</Link>
                </div>
                <div>
                  <Link href="/best-hotels-pune" className="hover:text-[#0C64AB] transition-colors">About Us</Link>
                </div>
                <div>
                  <Link href="/bizz-tamanna-hotel-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Bizz Tamanna</Link>
                </div>
                <div>
                  <Link href="/hotels-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Grand Tamanna</Link>
                </div>
                <div>
                  <Link href="/premier-tamanna-hotel-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Premier Tamanna</Link>
                </div>
              </div>

              {/* Right Sub-Column */}
              <div className="space-y-2.5">
                <div>
                  <Link href="/executive-tamanna-hotel-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Executive Tamanna</Link>
                </div>
                <div>
                  <Link href="/shree-inn-by-tamanna-hotel-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Shree Inn By Tamanna</Link>
                </div>
                <div>
                  <Link href="/best-hotels-chikhali-pune" className="hover:text-[#0C64AB] transition-colors">Imperial Tamanna</Link>
                </div>
                <div>
                  <Link href="/top-cake-shop-hinjawadi-pune" className="hover:text-[#0C64AB] transition-colors">Daily Baker</Link>
                </div>
                <div>
                  <Link href="/hotel-near-pune" className="hover:text-[#0C64AB] transition-colors">Contact Us</Link>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Middle Row: Direct Booking Lines */}
        <div className="border-t border-slate-200 py-6 my-2 font-jost">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-[13px] text-slate-700">
            
            {/* Box 1: Hotel Rooms */}
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#0C64AB] mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800 block">Bookings Of Hotel Rooms:</span>
                <span className="text-slate-600">02066935000/ 02066539888/ 02066751900</span>
              </div>
            </div>

            {/* Box 2: Banquet Halls & Restaurants */}
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#0C64AB] mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800 block">Bookings Of Banquet Halls & Restaurants:</span>
                <span className="text-slate-600">7507772159/ 02066935000/ 02069525400</span>
              </div>
            </div>

            {/* Box 3: Website */}
            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-[#0C64AB] mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800 block">Visit our Website:</span>
                <a
                  href="https://www.tamannahotels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#0C64AB] transition-colors"
                >
                  www.tamannahotels.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Row: Copyright & Social Icons */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-poppins">
          <div>
            Copyright © 2026 Tamanna Hotels | Powered By Shree Krishna Digital Marketing
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/tamannahotels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white flex items-center justify-center transition-colors shadow-sm"
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
              className="w-8 h-8 rounded-full bg-[#cd201f] hover:bg-[#b01c1b] text-white flex items-center justify-center transition-colors shadow-sm"
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
              className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#111111] text-white flex items-center justify-center transition-colors shadow-sm"
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
