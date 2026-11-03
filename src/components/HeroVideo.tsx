"use client";

import React, { useRef } from "react";

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // YouTube Video ID: xdLrGdl_zqs
  // Continuous silent autoplay loop with no controls, no branding, full bleed cover
  const videoSrc =
    "https://www.youtube.com/embed/xdLrGdl_zqs?autoplay=1&mute=1&controls=0&loop=1&playlist=xdLrGdl_zqs&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3";

  return (
    <section className="relative w-full overflow-hidden bg-black pointer-events-none select-none">
      {/* Full-width container matching live site min-height (570px) */}
      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[570px] lg:h-[620px] overflow-hidden">
        
        {/* Full-bleed YouTube background iframe with zero black bars on any aspect ratio */}
        <iframe
          ref={iframeRef}
          src={videoSrc}
          title="Tamanna Hotels Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
          style={{
            width: "max(120vw, 215vh)",
            height: "max(67.5vw, 120vh)",
            minWidth: "120%",
            minHeight: "120%",
          }}
        />

        {/* Transparent overlay preventing clicks or hover popups */}
        <div className="absolute inset-0 bg-transparent pointer-events-none" />
      </div>
    </section>
  );
}
