"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  Video,
  Globe,
  ArrowRight,
} from "lucide-react";

// Mock data for available time slots
const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "11:00 AM",
  "01:30 PM",
  "02:00 PM",
  "03:30 PM",
  "04:00 PM",
];

// Mock calendar generation (for a standard 30-day month)
const generateDays = () => {
  const days = [];
  // Add some empty slots for the offset of the first day of the month
  for (let i = 0; i < 3; i++) {
    days.push({ day: null, inactive: true });
  }
  // Add actual days
  for (let i = 1; i <= 30; i++) {
    days.push({ day: i, inactive: false, isToday: i === 15 });
  }
  return days;
};

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const calendarDays = generateDays();

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
            <span className="text-xs font-mono text-gray-400">006</span>
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="uppercase tracking-wider text-xs text-gray-300">
              scheduling
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            {`  Let's Talk About Your Project`}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {`          Book a free 30-minute discovery call. We'll discuss your goals,
            technical requirements, and how we can help.`}
          </p>
        </div>

        {/* Booking Interface */}
        <div className="max-w-5xl mx-auto">
          <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Left Column - Meeting Details */}
            <div className="w-full lg:w-1/3 bg-white/5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-8">
                <Video className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {`    A brief chat to understand your needs, evaluate if we're a good
                fit, and outline the next steps for your product.`}
              </p>

              <div className="space-y-5 mt-auto">
                <div className="flex items-center gap-4 text-gray-300">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">30 Minutes</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Video className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">Google Meet</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">
                    EST (New York) Time
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Calendar & Times */}
            <div className="w-full lg:w-2/3 p-8 md:p-10 flex flex-col md:flex-row gap-10">
              {/* Calendar Area */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-medium text-white flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-400" />
                    October 2026
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Days of week */}
                <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((item, idx) => (
                    <button
                      key={idx}
                      disabled={
                        item.inactive || (item.day !== null && item.day < 15)
                      }
                      onClick={() => item.day && setSelectedDate(item.day)}
                      className={`
                        aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                        ${item.inactive ? "opacity-0 cursor-default" : ""}
                        ${item.day !== null && item.day < 15 ? "text-gray-700 cursor-not-allowed" : ""}
                        ${item.day !== null && item.day >= 15 && selectedDate !== item.day ? "text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer border border-transparent" : ""}
                        ${selectedDate === item.day ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : ""}
                        ${item.isToday && selectedDate !== item.day ? "border-blue-500/30 text-blue-400" : ""}
                      `}
                    >
                      {item.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots Area (Shows when date is selected) */}
              <div
                className={`w-full md:w-[200px] transition-all duration-500 ${selectedDate ? "opacity-100" : "opacity-50 pointer-events-none"}`}
              >
                <h4 className="text-sm font-medium text-gray-400 mb-6 pb-2 border-b border-white/10">
                  {selectedDate
                    ? `Available on Oct ${selectedDate}`
                    : "Select a date"}
                </h4>

                <div className="flex flex-col gap-3 h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full py-3 px-4 rounded-xl text-sm font-medium transition-all border
                        ${
                          selectedTime === time
                            ? "bg-white text-black border-white"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/10"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div
            className={`mt-8 flex justify-end transition-all duration-500 ${selectedDate && selectedTime ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
          >
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
              Confirm Booking for {selectedTime}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Global CSS for scrollbar to put in your globals.css or keep here as a jsx style block */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
