"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Key,
  ArrowRight,
  ShieldCheck,
  Activity,
  CreditCard,
  FileText,
  Lock,
} from "lucide-react";

export function ClientPortalSection() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // 1. Refs to track the section and the video wrapper for performance
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  // 2. High-performance scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoWrapperRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only animate if the section is currently visible on the screen
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate scroll position relative to the section
        const totalScrollArea = viewportHeight + rect.height;
        const currentScrollProgress = viewportHeight - rect.top;
        const progressPercentage = currentScrollProgress / totalScrollArea;

        // Tweak the multiplier (e.g., 120) to make the parallax speed faster or slower
        const translateY = (progressPercentage - 0.5) * 120;

        // Apply direct DOM update with translate3d for GPU acceleration
        videoWrapperRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token.trim()) {
      setError("Please enter your access token");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (token === "letmein") {
        router.push("/dashboard");
      } else {
        setError("Invalid token. Please check your invitation email.");
      }
    }, 1500);
  };

  return (
    // ADDED: `relative overflow-hidden` to the section container
    <section ref={sectionRef} id="portal" className="py-24 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* 3. PARALLAX VIDEO BACKGROUND LAYER */}
      <div
        ref={videoWrapperRef}
        className="absolute -top-[15%] left-0 w-full h-[130%] z-0 pointer-events-none will-change-transform"
      >
        <video
          src="\bg_clinetportal2.mp4" // 👈 Drop your 20s video file into your /public folder and reference it here
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.12] mix-blend-lighten"
        />
        {/* Subtle dark gradient overlay to make sure the background video blends into the page endings flawlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      </div>

      {/* ADDED: `relative z-10` to keep all UI safely above the video layer */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
            <span className="text-xs font-mono text-gray-400">008</span>
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="uppercase tracking-wider text-xs text-gray-300">
              client portal
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Access Your Project
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Enter your unique client token to view real-time progress, manage
            invoices, and access your deliverables.
          </p>
        </div>

        {/* Portal Interface */}
        <div className="max-w-5xl mx-auto">
          <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Left Column - Information */}
            <div className="w-full lg:w-5/12 bg-white/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center mb-8">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Secure Dashboard
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                We believe in complete transparency. Your dedicated dashboard
                keeps you in the loop at every stage of the development cycle.
              </p>

              <div className="space-y-6 mt-auto">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">
                      Live Progress Tracking
                    </h4>
                    <p className="text-xs text-gray-500">
                      Monitor milestones and daily updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">
                      Deliverables & Assets
                    </h4>
                    <p className="text-xs text-gray-500">
                      Download designs, code, and documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">
                      Simplified Billing
                    </h4>
                    <p className="text-xs text-gray-500">
                      View and pay invoices securely via Stripe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="max-w-md w-full mx-auto">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
                  <Lock className="w-7 h-7 text-gray-300" />
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Enter your token
                  </h3>
                  <p className="text-sm text-gray-500">
                    Check your email for the magic link or access code provided
                    during onboarding.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label
                      htmlFor="token"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Access Token
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Key className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        className={`block w-full pl-12 pr-4 py-4 bg-[#0a0a0f] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all sm:text-sm ${
                          error
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/10 focus:border-blue-500/50"
                        }`}
                        placeholder="e.g., INCODET-8F92-A1B4"
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-red-400 animate-in slide-in-from-top-1">
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Access Dashboard
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500">
                    Lost your token?{" "}
                    <a
                      href="#contact"
                      className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      Contact support
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}