"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, User, Phone, Mail, Hotel, CheckCircle, Sparkles, BedDouble } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHotel?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialHotel,
}: BookingModalProps) {
  const [hotel, setHotel] = useState("Grand Tamanna Hotel");
  const [roomType, setRoomType] = useState("Executive Deluxe AC");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialHotel) {
      setHotel(initialHotel);
    }
  }, [initialHotel]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#005d9e] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sky-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reservation Desk</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-condensed tracking-wide">
            BOOK YOUR STAY WITH TAMANNA HOTELS
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 mt-1">
            Best rate guarantee • Complimentary Wi-Fi • Express Check-in
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-condensed tracking-wide text-slate-800">
                Reservation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{name || "Valued Guest"}</strong>. Our reservation team at <strong>{hotel}</strong> will contact you shortly at <span className="text-[#005d9e] font-semibold">{phone || "your phone"}</span> to confirm your stay details and booking voucher.
              </p>

              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <div><strong>Hotel:</strong> {hotel}</div>
                <div><strong>Room:</strong> {roomType}</div>
                {checkIn && <div><strong>Check-in:</strong> {checkIn}</div>}
                <div><strong>Guests:</strong> {guests} Adults, {rooms} Room</div>
                <div><strong>Direct Helpline:</strong> 02066935000 / 02066539888</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#1068a8] hover:bg-[#0c5387] text-white font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-full shadow cursor-pointer transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Hotel */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-[#005d9e]" />
                    Select Property *
                  </label>
                  <select
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#005d9e] focus:outline-none cursor-pointer"
                  >
                    <option value="Grand Tamanna Hotel">Grand Tamanna Hotel</option>
                    <option value="Premier Tamanna Hotel">Premier Tamanna Hotel</option>
                    <option value="Bizz Tamanna Hotel">Bizz Tamanna Hotel</option>
                    <option value="Executive Tamanna Hotel">Executive Tamanna Hotel</option>
                    <option value="Shree Inn by Tamanna">Shree Inn by Tamanna</option>
                    <option value="Imperial Tamanna Hotel">Imperial Tamanna Hotel</option>
                  </select>
                </div>

                {/* Room Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-[#005d9e]" />
                    Room Category
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-[#005d9e] focus:outline-none cursor-pointer"
                  >
                    <option value="Executive Deluxe AC">Executive Deluxe AC</option>
                    <option value="Premium Club Room">Premium Club Room</option>
                    <option value="Luxury Suite">Luxury Suite</option>
                    <option value="Presidential Suite">Presidential Suite</option>
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#005d9e]" />
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#005d9e]" />
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests and Rooms */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4+">4+ Adults</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Rooms</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4+">4+ Rooms</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#005d9e]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#005d9e]" />
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#005d9e]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none"
                />
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Special Requests / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Airport pickup, early check-in, dietary preferences..."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-[#005d9e] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#1068a8] hover:bg-[#0c5387] active:scale-98 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
                >
                  CONFIRM RESERVATION REQUEST
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

