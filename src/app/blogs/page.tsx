"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* 3. Hero Banner (Rooftop Pool & Mandap with BLOGS Title) */}
      <section className="relative w-full h-[194px] sm:h-[350px] md:h-[480px] lg:h-[596px] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="/images/site/Pool-Sode-area3-1-scaled.jpg"
          alt="Tamanna Hotels Blogs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Centered BLOGS Title */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bebas text-white text-[28px] sm:text-[44px] md:text-[68px] lg:text-[84px] uppercase tracking-[2px] sm:tracking-[3px] leading-none drop-shadow-md">
            BLOGS
          </h1>
        </div>
      </section>

      {/* 4. Blog Posts Grid Section - 2 Columns on Mobile strictly matching reference */}
      <section className="py-6 sm:py-12 md:py-16 px-2.5 sm:px-4 md:px-6 lg:px-8 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
          {BLOG_POSTS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Featured Post Image */}
                <Link
                  href={`/${blog.slug}`}
                  className="relative aspect-[3/2] block w-full overflow-hidden bg-slate-100 group"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-2 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-between">
                  {/* Title */}
                  <h2 className="font-poppins text-[11px] sm:text-[14px] md:text-[17px] font-medium text-[#2A2A2A] hover:text-[#0C64AB] transition-colors leading-[1.25] sm:leading-snug line-clamp-2">
                    <Link href={`/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  {/* Author */}
                  <span className="text-[#0C64AB] font-poppins text-[9px] sm:text-[11px] md:text-[13.5px] font-normal block mt-1 mb-1 sm:mt-2 sm:mb-1.5">
                    {blog.author}
                  </span>

                  {/* Excerpt */}
                  <p className="font-poppins text-[#666666] text-[9.5px] sm:text-[11px] md:text-[13.5px] leading-[1.3] sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/${blog.slug}`}
                    className="inline-block text-[#0C64AB] hover:text-[#084572] font-poppins text-[9.5px] sm:text-[11px] md:text-[12.5px] font-medium mt-1.5 sm:mt-2.5 cursor-pointer text-left transition-colors"
                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />

      {/* Booking / Enquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
