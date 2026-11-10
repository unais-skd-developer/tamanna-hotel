"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostTemplateProps {
  post: BlogPost;
}

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorWebsite, setAuthorWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommentSubmitted(true);
    setCommentText("");
    setAuthorName("");
    setAuthorEmail("");
    setAuthorWebsite("");
    setTimeout(() => setCommentSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#0C64AB] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* 3. Main Content Container */}
      <main className="flex-grow pt-[30px] sm:pt-[50px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-[1140px] mx-auto">
          {/* Post Title */}
          <h1
            className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-[#000000] leading-[1.4] mb-8 sm:mb-10 text-left capitalize tracking-normal"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            {post.title}
          </h1>

          {/* Featured Image - 100% Exact Container Width */}
          {post.featuredImage && (
            <div className="w-full mb-8 sm:mb-10 overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto block rounded-none"
                loading="eager"
              />
            </div>
          )}

          {/* Post Body Content */}
          <div
            className="blog-content text-[16px] leading-[1.65] text-[#000000] capitalize"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Leave a Comment Section - Exactly Matching Provided Layout */}
          <section className="mt-10 sm:mt-16 pt-4">
            <h3
              className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-[#111827] mb-1.5"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Leave a Comment
            </h3>
            <p
              className="text-[12px] sm:text-[13.5px] text-[#4B5563] mb-4 sm:mb-5 leading-normal max-w-sm sm:max-w-none"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Your email address will not be published. Required fields are marked *
            </p>

            <form onSubmit={handleCommentSubmit} className="space-y-3 sm:space-y-4">
              {/* Type here.. Textarea */}
              <div className="w-full">
                <textarea
                  required
                  rows={7}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Type here.."
                  className="w-full min-h-[175px] p-3 sm:p-3.5 border border-[#B0B7C3] rounded-[1px] sm:rounded-[2px] text-[#111827] placeholder-[#8C9BA5] text-[13px] sm:text-[14px] focus:outline-none focus:border-[#0066CC] resize-y transition-colors"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  }}
                />
              </div>

              {/* 3 Inputs Grid: Stacked on mobile, 3-cols on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Name*"
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-3.5 border border-[#B0B7C3] rounded-[1px] sm:rounded-[2px] text-[#111827] placeholder-[#8C9BA5] text-[13px] sm:text-[14px] focus:outline-none focus:border-[#0066CC] transition-colors"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    placeholder="Email*"
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-3.5 border border-[#B0B7C3] rounded-[1px] sm:rounded-[2px] text-[#111827] placeholder-[#8C9BA5] text-[13px] sm:text-[14px] focus:outline-none focus:border-[#0066CC] transition-colors"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={authorWebsite}
                    onChange={(e) => setAuthorWebsite(e.target.value)}
                    placeholder="Website"
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-3.5 border border-[#B0B7C3] rounded-[1px] sm:rounded-[2px] text-[#111827] placeholder-[#8C9BA5] text-[13px] sm:text-[14px] focus:outline-none focus:border-[#0066CC] transition-colors"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    }}
                  />
                </div>
              </div>

              {/* Cookie Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="save-comment-info"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="mt-0.5 w-3.5 h-3.5 rounded-[2px] border-[#B0B7C3] text-[#0066CC] focus:ring-[#0066CC] cursor-pointer shrink-0"
                />
                <label
                  htmlFor="save-comment-info"
                  className="text-[12px] sm:text-[12.5px] text-[#374151] cursor-pointer select-none leading-snug"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-medium text-[13px] sm:text-[14px] px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-[2px] transition-colors cursor-pointer active:scale-[0.99] inline-block"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Post Comment
                </button>
              </div>

              {/* Success Notification */}
              {commentSubmitted && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[2px] text-sm">
                  Thank you! Your comment has been submitted and is awaiting moderation.
                </div>
              )}
            </form>
          </section>
        </article>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Custom Styles for Extracted Blog Content matching reference images */}
      <style jsx global>{`
        .blog-content {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          color: #000000;
          font-size: 16px;
          line-height: 1.65;
        }
        .blog-content p {
          margin-bottom: 1.15rem;
          color: #000000;
          line-height: 1.65;
          font-size: 16px;
        }
        .blog-content h2,
        .blog-content .p3 b,
        .blog-content strong.heading {
          display: block;
          color: #000000;
          font-weight: 700;
          font-size: 18px;
          margin-top: 1.75rem;
          margin-bottom: 0.85rem;
          line-height: 1.45;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
        .blog-content h3 {
          display: block;
          color: #000000;
          font-weight: 700;
          font-size: 17px;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.25rem;
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .blog-content li {
          margin-bottom: 1rem;
          color: #000000;
          line-height: 1.65;
          font-size: 16px;
        }
        .blog-content li b,
        .blog-content li strong {
          color: #000000;
          font-weight: 700;
        }
        .blog-content a {
          color: #0c64ab;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #084572;
        }
        .blog-content b,
        .blog-content strong {
          color: #000000;
          font-weight: 700;
        }
        .blog-content svg,
        .blog-content .comments-area,
        .blog-content #comments,
        .blog-content #respond,
        .blog-content .elementor-social-icons-wrapper {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

