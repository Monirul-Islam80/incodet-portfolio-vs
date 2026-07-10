"use client";

import { Sparkles, ArrowRight, Phone } from "lucide-react";
import bgimg from '../../../public/bgimg.png'
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
        poster={bgimg.src}
      >
        <source
          src="/bgvideo.mp4" 
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
      <div className="relative z-20  padding-global w-full">
        <div className="container-base">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-muted-foreground">
                SaaS Development Partner
              </span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Turning Ideas Into</span>
              <br />
              <span className="text-gradient-blue">Scalable Software</span>
            </h1>

            {/* Subheading text color white*/}

            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed  text-white ">
We help startups launch production-ready SaaS products in weeks, not months.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Book a Call</span>
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span>View Our Work</span>
              </a>
            </div>

           
          </div>
        </div>
      </div>


    </section>
  );
}
