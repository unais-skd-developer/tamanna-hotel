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
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  bgImage = "/images/site/Exterior.jpg",
  heroVideoId,
}: PageHeaderProps) {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white">
      {/* If YouTube video provided, render video iframe like hotel pages */}
      {heroVideoId ? (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[68vh] min-h-[360px] max-h-[640px] overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[180%] h-[180%] sm:w-[150%] sm:h-[150%] md:w-[130%] md:h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover border-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 z-10">
            {/* Breadcrumb */}
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
        <div className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[300px] md:min-h-[380px]">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Breadcrumb */}
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-white">
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
