"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1%2F69b2815e8cd44081a7e9719d_Hero%20Video_2_webm.webm"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="video-overlay" />
      <div className="video-overlay-top" />
      <div className="video-overlay-bottom" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none z-10" />

      {/* Film Grain */}
      <div className="film-grain" />

      {/* Content */}
      <div className="relative z-20 padding-global w-full">
        <div className="container-base">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-muted-foreground">
                SaaS Development Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Turning Ideas Into</span>
              <br />
              <span className="text-gradient-blue">Scalable Software</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Incodet builds software that solves real problems. From
              launch-ready MVPs to enterprise-grade SaaS platforms, we help
              businesses turn concepts into products people actually use.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Stats Preview */}
            {/* <div className="mt-16 pt-8 border-t border-white/10 w-full">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    50+
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    Products Shipped
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    99.9%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    Uptime Standard
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    12
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    Countries Served
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
