"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BannerVideoProps {
  videoId: string;
  title: string;
  fallbackImage?: string;
  className?: string;
  priority?: boolean;
}

export default function BannerVideo({
  videoId,
  title,
  fallbackImage,
  className = "",
  priority = false,
}: BannerVideoProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Defer YouTube iframe to ensure optimal FCP, LCP, and zero initial TBT
    if ("requestIdleCallback" in window) {
      const win = window as unknown as {
        requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback: (id: number) => void;
      };
      const idleId = win.requestIdleCallback(() => setShouldLoadVideo(true), { timeout: 1200 });
      return () => win.cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(() => setShouldLoadVideo(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Construct clean YouTube embed URL:
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3`;

  return (
    <div className={`banner-video-container select-none ${className}`}>
      {/* Fallback image behind iframe - optimized for instant LCP */}
      {fallbackImage && (
        <Image
          src={fallbackImage}
          alt={title}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
      )}

      {/* Embedded video iframe (loaded after initial paint to prevent thread blocking) */}
      {shouldLoadVideo && (
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
          aria-hidden="true"
          className="banner-video-frame pointer-events-none border-0"
        />
      )}

      {/* Solid click and touch shield: completely blocks pointer/touch events from ever reaching the iframe */}
      <div className="absolute inset-0 z-10 pointer-events-auto bg-transparent select-none cursor-default" />
    </div>
  );
}

