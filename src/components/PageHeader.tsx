"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
  heroVideoId?: string;
  showBreadcrumbs?: boolean;
  minHeight?: string;
  align?: "center" | "bottom";
  overlayClassName?: string;
  titleClassName?: string;
  imageClassName?: string;
  bgPosition?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  bgImage = "/images/site/Exterior.jpg",
  heroVideoId,
  showBreadcrumbs = true,
  minHeight,
  align = "center",
  overlayClassName,
  titleClassName,
  imageClassName,
  bgPosition,
}: PageHeaderProps) {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white">
      {/* If YouTube video provided, render video iframe like hotel pages */}
      {heroVideoId ? (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[68vh] min-h-[360px] max-h-[640px] overflow-hidden banner-video-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
            aria-hidden="true"
            className="banner-video-frame pointer-events-none border-0"
          />
          {/* Interaction shield */}
          <div className="absolute inset-0 z-10 pointer-events-auto bg-transparent select-none cursor-default" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 z-10">
            {/* Breadcrumb */}
            {showBreadcrumbs && (
              <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 mb-3 font-jost">
                {breadcrumbs.map((b, idx) => (
                  <React.Fragment key={idx}>
                    {b.href ? (
                      <Link href={b.href} className="hover:text-white transition-colors">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{b.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </React.Fragment>
                ))}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-white font-semibold">{title}</span>
              </nav>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-white drop-shadow-md">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-poppins max-w-2xl mt-2 drop-shadow">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* Static banner with image background */
        <div
          className={`relative w-full px-4 sm:px-6 lg:px-8 flex ${
            align === "bottom"
              ? "flex-col justify-end items-center pb-1.5 sm:pb-3 md:pb-6 pt-16"
              : "items-center justify-center py-16 sm:py-20 md:py-28"
          } ${minHeight || "min-h-[300px] md:min-h-[380px]"}`}
        >
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className={`object-cover ${imageClassName || (bgPosition ? "" : "object-center")}`}
            style={bgPosition ? { objectPosition: bgPosition } : undefined}
          />
          <div
            className={`absolute inset-0 ${
              overlayClassName ||
              "bg-gradient-to-r from-black/80 via-black/60 to-black/75"
            }`}
          />

          <div
            data-reveal="up"
            suppressHydrationWarning
            className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center"
          >
            {/* Breadcrumb */}
            {showBreadcrumbs && (
              <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 mb-4 font-jost">
                {breadcrumbs.map((b, idx) => (
                  <React.Fragment key={idx}>
                    {b.href ? (
                      <Link href={b.href} className="hover:text-white transition-colors">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{b.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </React.Fragment>
                ))}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-sky-300 font-semibold">{title}</span>
              </nav>
            )}

            <h1
              className={
                titleClassName ||
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-white drop-shadow-md"
              }
              style={{ fontFamily: '"Bebas Neue", Sans-serif' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-poppins max-w-2xl mt-3 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
