"use client";

import React from "react";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";

export default function PreFooterContact() {
  return (
    <section className="w-full bg-[#0f67a8] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px]">
        
        {/* Left Side: Contact Information matching Image 4 */}
        <div className="lg:col-span-6 bg-[#1068a8] py-10 px-6 sm:px-10 md:px-14 flex items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
            
            {/* Column 1: Mail Us */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-condensed tracking-wide text-white">
                  Mail Us
                </h3>
              </div>

              <div className="space-y-2.5 text-xs sm:text-[13px] text-white/90">
                <div>
                  <div className="text-white/70 text-[11px] font-medium">Executive/Bizz/Shree inn:</div>
                  <a
                    href="mailto:Info@tamannahotels.com"
                    className="hover:underline hover:text-sky-200 transition-colors font-medium"
                  >
                    Info@tamannahotels.com
                  </a>
                </div>

                <div>
                  <div className="text-white/70 text-[11px] font-medium">Grand Tamanna :</div>
                  <a
                    href="mailto:Grand@tamannahotels.com"
                    className="hover:underline hover:text-sky-200 transition-colors font-medium"
                  >
                    Grand@tamannahotels.com
                  </a>
                </div>

                <div>
                  <div className="text-white/70 text-[11px] font-medium">Premier Tamanna :</div>
                  <a
                    href="mailto:Premier@tamannahotels.com"
                    className="hover:underline hover:text-sky-200 transition-colors font-medium"
                  >
                    Premier@tamannahotels.com
                  </a>
                </div>

                <div>
                  <div className="text-white/70 text-[11px] font-medium">Imperial Tamanna :</div>
                  <a
                    href="mailto:Imperial@tamannahotels.com"
                    className="hover:underline hover:text-sky-200 transition-colors font-medium"
                  >
                    Imperial@tamannahotels.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Reach Out */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-condensed tracking-wide text-white">
                  Reach Out
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-[13.5px] text-white/90">
                <div className="text-white/70 text-[11px] font-medium">Tel:</div>
                <div className="space-y-1">
                  <a
                    href="tel:02066935000"
                    className="block hover:underline hover:text-sky-200 transition-colors font-semibold"
                  >
                    020 66935000
                  </a>
                  <a
                    href="tel:7507772159"
                    className="block hover:underline hover:text-sky-200 transition-colors font-semibold"
                  >
                    7507772159
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Luxury Suite Photo matching Image 4 */}
        <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-full">
          <Image
            src="/images/extracted/prefooter_bedroom.jpg"
            alt="Tamanna Hotels Luxury Suite Bed with Swan Towels"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}

