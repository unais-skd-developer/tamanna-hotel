"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BLOGS_DATA } from "@/data/siteData";
import { Calendar, ArrowRight, Tag, BookOpen, X } from "lucide-react";

export default function BlogsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<(typeof BLOGS_DATA)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = BLOGS_DATA.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Blogs & Guides"
        subtitle="Travel tips, hotel guides, culinary stories, and event planning advice for Hinjawadi Pune."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, hotel, or cuisine..."
                className="w-full h-12 px-5 pr-10 bg-white border border-slate-300 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c64ab] shadow-sm font-poppins"
              />
            </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c64ab] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-jost">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-xl font-bebas uppercase tracking-wide text-slate-800 line-clamp-2 mb-2 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-slate-600 font-poppins text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-[#0c64ab] hover:text-white text-[#0c64ab] font-bebas text-base tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 uppercase cursor-pointer border border-slate-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>

            <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-jost">
              <span className="px-3 py-1 bg-sky-100 text-[#0c64ab] rounded-full font-semibold">
                {selectedBlog.category}
              </span>
              <span>{selectedBlog.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bebas uppercase tracking-wide text-slate-800 mb-4 leading-tight">
              {selectedBlog.title}
            </h2>

            <div className="prose text-slate-700 font-poppins text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-medium text-slate-800">
                {selectedBlog.excerpt}
              </p>
              <p>
                {selectedBlog.content}
              </p>
              <p>
                Whether you are traveling on corporate assignment to Hinjawadi IT Park or celebrating a special family milestone, Tamanna Hotels provides unmatched value, comfort, and personalized attention across Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn, and Imperial Tamanna.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedBlog(null);
                  setIsBookingModalOpen(true);
                }}
                className="px-6 py-2.5 bg-[#0c64ab] hover:bg-[#094c82] text-white font-bebas text-base tracking-wider rounded-lg uppercase cursor-pointer"
              >
                Book Your Stay
              </button>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-xs text-slate-500 hover:text-slate-800 uppercase font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <PreFooterContact />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

