"use client";

import React from "react";
import BannerVideo from "./BannerVideo";

export default function HeroVideo() {
  return (
    <section className="relative w-full bg-white select-none px-4 sm:px-[20px] py-0">
      {/* Primary Accessible Heading for SEO & Screen Readers */}
      <h1 className="sr-only">
        Tamanna Hotels | Best Hotels &amp; Banquets in Hinjawadi Pune
      </h1>

      {/* Video Container with exact 20px white side margins matching live site .elementor-element-ed5f106 */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[460px] lg:h-[570px] overflow-hidden bg-black rounded-none">
        <BannerVideo
          videoId="xdLrGdl_zqs"
          title="Tamanna Hotels Hinjawadi Pune Overview"
          fallbackImage="/images/site/Exterior-1.jpg"
          priority
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
