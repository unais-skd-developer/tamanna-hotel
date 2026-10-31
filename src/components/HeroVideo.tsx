"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send command to YouTube iframe via postMessage
  const postCommand = (func: string, args: unknown[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: func,
          args: args,
        }),
        "*"
      );
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      postCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      postCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      postCommand("unMute");
      setIsMuted(false);
    } else {
      postCommand("mute");
      setIsMuted(true);
    }
  };

  // YouTube Video ID: xdLrGdl_zqs
  const videoSrc = "https://www.youtube.com/embed/xdLrGdl_zqs?autoplay=1&mute=1&controls=0&loop=1&playlist=xdLrGdl_zqs&enablejsapi=1&playsinline=1&rel=0&modestbranding=1";

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 group">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[82vh] max-h-[820px] min-h-[380px]">

        {/* YouTube IFrame Embed */}
        <iframe
          ref={iframeRef}
          src={videoSrc}
          title="Tamanna Hotels Hinjawadi Pune Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={() => setIsLoaded(true)}
          className="absolute top-1/2 left-1/2 w-[180%] h-[180%] sm:w-[150%] sm:h-[150%] md:w-[125%] md:h-[125%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover border-0"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Center Pause/Play Button Matching Image 1 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/45 hover:bg-black/65 active:scale-95 text-white flex items-center justify-center backdrop-blur-sm border-2 border-white/60 hover:border-white transition-all duration-300 shadow-2xl cursor-pointer group/btn"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5 drop-shadow" />
            )}
          </button>
        </div>

        {/* Bottom Utility Controls */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 pointer-events-auto z-10">
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-sky-400" />}
          </button>
        </div>

        {/* Bottom subtle banner tag */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pointer-events-none hidden sm:block">
          <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs tracking-wider uppercase font-semibold">
            Grand Tamanna • Hinjawadi IT Park Pune
          </div>
        </div>

      </div>
    </section>
  );
}
