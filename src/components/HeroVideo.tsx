"use client";

import React, { useRef } from "react";

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // YouTube Video ID: xdLrGdl_zqs
  // Continuous silent autoplay loop with no controls, no branding, no pause buttons
  const videoSrc =
    "https://www.youtube.com/embed/xdLrGdl_zqs?autoplay=1&mute=1&controls=0&loop=1&playlist=xdLrGdl_zqs&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3";

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 pointer-events-none select-none">
      {/* Aspect Ratio Container */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[82vh] max-h-[820px] min-h-[380px] overflow-hidden">
        
        {/* YouTube IFrame Embed continuously playing in background */}
        <iframe
          ref={iframeRef}
          src={videoSrc}
          title="Tamanna Hotels Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[180%] h-[180%] sm:w-[150%] sm:h-[150%] md:w-[125%] md:h-[125%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover border-0"
        />

        {/* Transparent overlay preventing any clicks or hover popups */}
        <div className="absolute inset-0 bg-transparent pointer-events-none" />
      </div>
    </section>
  );
}
