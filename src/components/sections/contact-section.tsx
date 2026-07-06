"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Footer } from "../footer";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  message: "",
};
interface ContactSectionProps {
  selectedDate: string | null;
  selectedTime: string | null;
}
export function ContactSection({ selectedDate, selectedTime }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle", message: "",
  });

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    // 1. Determine if this is a Booking or just a standard Contact message
    const isBooking = selectedDate && selectedTime;
    const endpoint = isBooking ? "/api/bookings" : "/api/contact";

    // 2. Format the payload depending on the endpoint
    const payload = isBooking
      ? {
          date: selectedDate, // Now correctly formatted as "YYYY-MM-DD"
          timeSlot: selectedTime,
          clientName: form.name,
          clientEmail: form.email,
          company: form.company,
          message: form.message,
        }
      : {
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // 3. Handle the response (Your contact API returns `ok`, booking returns `success`)
      if (response.ok && (data.success || data.ok)) {
        setStatus({ 
          type: "success", 
          message: isBooking 
            ? "Meeting booked successfully! We will see you then." 
            : "Thanks! Your request has been received. We will get back to you shortly." 
        });
        setForm(initialForm); // Clear the form
      } else {
        setStatus({ type: "error", message: data.error ?? "Unable to submit your request." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1%2F69b0d1d271397d4fd4227e2d_Footer%20Video_mp4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-[700px] mx-auto">
          {/* Glass Card Container */}
          <div className=" form-card bg-black/50 backdrop-blur-2xl rounded-[6rem] p-8 md:p-14 border border-white/10 shadow-2xl">
            {/* Header / Top Icon */}
            <div className="flex flex-col items-center text-center mb-10">
              {/* Spinning Logo/Icon representation */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-full">
                <Sparkles className="w-6 h-6 text-white absolute z-10" />
                {/* Decorative spinning ring to mimic the "unicorn" text ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-white/40 animate-[spin_10s_linear_infinite]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight leading-tight">
                Your Competitors Are Automating.
                <br />
                Are you?
              </h2>
              <p className="text-white/70 text-sm md:text-base max-w-[360px] mx-auto">
                Stop wasting time on manual processes. Start building a
                self-running business.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full h-14 rounded-2xl bg-white/10 border border-transparent px-5 text-white placeholder:text-white/60 outline-none focus:border-white/30 focus:bg-white/15 transition-all"
                  placeholder="Your name*"
                  required
                />
              </div>

              <div>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="w-full h-14 rounded-2xl bg-white/10 border border-transparent px-5 text-white placeholder:text-white/60 outline-none focus:border-white/30 focus:bg-white/15 transition-all"
                  placeholder="Your company name*"
                  required
                />
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full h-14 rounded-2xl bg-white/10 border border-transparent px-5 text-white placeholder:text-white/60 outline-none focus:border-white/30 focus:bg-white/15 transition-all"
                  placeholder="Your business email*"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full min-h-[140px] rounded-2xl bg-white/10 border border-transparent px-5 py-4 text-white placeholder:text-white/60 outline-none focus:border-white/30 focus:bg-white/15 transition-all resize-y"
                  placeholder="Message"
                  required
                />
              </div>
{selectedDate && selectedTime && (
              <div                   className=" pt-2 w-full h-14 rounded-2xl bg-white/10 border border-transparent px-5  outline-none border-white/30 bg-white/15 transition-all"
>
                <p className="text-white text-sm font-medium"
                >Booking for:</p>
                <p className="text-white">October {selectedDate}, 2026 at {selectedTime}</p>
              </div>
            )}
     <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Confirm Appointment!"
                  )}
                </button>
              </div>

              {status.type !== "idle" && (
                <p className={`text-sm text-center mt-4 ${status.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
