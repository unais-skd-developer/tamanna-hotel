"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PreFooterContact from "@/components/PreFooterContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactUsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "Grand Tamanna Hotel",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        property: "Grand Tamanna Hotel",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const propertiesList = [
    {
      name: "Grand Tamanna Hotel",
      address: "Hinjawadi Phase 1, Rajiv Gandhi Infotech Park, Pune 411057",
      phone: "020 66935000 / 7058688561",
      email: "Grand@tamannahotels.com",
    },
    {
      name: "Premier Tamanna Hotel",
      address: "Hinjawadi Phase 1, Near Embassy TechZone, Pune 411057",
      phone: "020 66751900 / 020 66935000",
      email: "Premier@tamannahotels.com",
    },
    {
      name: "Bizz Tamanna Hotel",
      address: "Hinjawadi Phase 1, Opposite IT Park, Pune 411057",
      phone: "020 66539888 / 020 66935000",
      email: "Info@tamannahotels.com",
    },
    {
      name: "Executive Tamanna Hotel",
      address: "Hinjawadi Phase 2, IT Corridor, Pune 411057",
      phone: "020 66935000 / 7507772159",
      email: "Info@tamannahotels.com",
    },
    {
      name: "Shree Inn by Tamanna",
      address: "Hinjawadi Main Road, Phase 1, Pune 411057",
      phone: "020 66935000 / 020 66751900",
      email: "Info@tamannahotels.com",
    },
    {
      name: "Imperial Tamanna Hotel",
      address: "Spine Road, Chikhali, Chinchwad, Pune 411062",
      phone: "020 66935000 / 7507772159",
      email: "Imperial@tamannahotels.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      <PageHeader
        title="Contact Us"
        subtitle="Whether you're traveling for business, leisure, or planning a special event, our team is here to assist you."
        breadcrumbs={[{ label: "Home", href: "/" }]}
        bgImage="/images/site/Exterior.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bebas uppercase tracking-wide text-slate-800 mb-6">
                Send Us A Message
              </h2>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for reaching out. Our reservations team will respond promptly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-poppins">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Select Property
                      </label>
                      <select
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                      >
                        <option>Grand Tamanna Hotel</option>
                        <option>Premier Tamanna Hotel</option>
                        <option>Bizz Tamanna Hotel</option>
                        <option>Executive Tamanna Hotel</option>
                        <option>Shree Inn by Tamanna</option>
                        <option>Imperial Tamanna Hotel</option>
                        <option>Daily Baker</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Room Reservation / Banquet Query / Feedback"
                      className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your requirements..."
                      className="w-full p-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c64ab]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0c64ab] hover:bg-[#094c82] active:scale-95 text-white font-bebas text-lg tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 uppercase shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Central Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                  DIRECT CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-bebas uppercase tracking-wide text-slate-800 mb-4">
                  Reservations & Inquiries
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-poppins">
                  Our central reservation desks and banquet coordinators are available round-the-clock to manage your stays and events.
                </p>
              </div>

              <div className="space-y-4 pt-2 font-jost">
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#0c64ab] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm uppercase">Hotel Room Bookings</h4>
                    <div className="text-slate-600 text-xs sm:text-sm mt-0.5 space-x-1.5">
                      <a href="tel:02066935000" className="hover:text-[#0c64ab]">02066935000</a>
                      <span>/</span>
                      <a href="tel:02066539888" className="hover:text-[#0c64ab]">02066539888</a>
                      <span>/</span>
                      <a href="tel:02066751900" className="hover:text-[#0c64ab]">02066751900</a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#0c64ab] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm uppercase">Banquets & Event Halls</h4>
                    <div className="text-slate-600 text-xs sm:text-sm mt-0.5 space-x-1.5">
                      <a href="tel:7507772159" className="hover:text-[#0c64ab]">7507772159</a>
                      <span>/</span>
                      <a href="tel:02066935000" className="hover:text-[#0c64ab]">02066935000</a>
                      <span>/</span>
                      <a href="tel:02069525400" className="hover:text-[#0c64ab]">02069525400</a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#0c64ab] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm uppercase">Email Inquiries</h4>
                    <a href="mailto:info@tamannahotels.com" className="text-slate-600 text-xs sm:text-sm mt-0.5 block hover:text-[#0c64ab]">
                      Info@tamannahotels.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Property Addresses Grid */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#0c64ab] text-xs sm:text-sm font-semibold uppercase tracking-widest block font-jost mb-2">
                OUR LOCATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bebas uppercase tracking-wide text-slate-800">
                Property Directory
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {propertiesList.map((prop, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bebas uppercase tracking-wide text-[#0c64ab] mb-2">
                      {prop.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{prop.address}</span>
                    </p>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0c64ab]" />
                      <span>{prop.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0c64ab]" />
                      <a href={`mailto:${prop.email}`} className="hover:text-[#0c64ab]">{prop.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <PreFooterContact />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

