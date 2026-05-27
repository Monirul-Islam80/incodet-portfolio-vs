"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

// Augmented the services data with stats to match the provided design
const services = [
  {
    title: "SaaS Platforms",
    description:
      "Subscription-ready, multi-tenant platforms with authentication, billing, analytics, and admin dashboards built in.",
    icon: LayoutDashboard,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "+40%", label: "Demo Booking" },
      { value: "+25%", label: "Closing Rate" },
      { value: "3x", label: "Engagement" },
    ],
  },
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with modern frameworks, optimized performance, and seamless user experiences.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "2x", label: "Faster Load" },
      { value: "99%", label: "Uptime" },
      { value: "+50%", label: "Conversion" },
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with native performance and intuitive interfaces.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "4.8", label: "App Store" },
      { value: "60fps", label: "Performance" },
      { value: "40%", label: "Retention" },
    ],
  },
  {
    title: "AI Integration",
    description:
      "Embed intelligent features into your products - from chatbots to predictive analytics.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "80%", label: "Automation" },
      { value: "24/7", label: "Availability" },
      { value: "-30%", label: "Costs" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable infrastructure, CI/CD pipelines, monitoring, and production-ready deployments.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "10x", label: "Deploy Speed" },
      { value: "Zero", label: "Downtime" },
      { value: "Secured", label: "Infrastructure" },
    ],
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length,
    );
  };

  const currentService = services[currentIndex];
  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header (Optional, kept from original but adapted) */}
        <div className="text-center mb-16 flex flex-col items-center">
    <div className="eyebrow  mb-6">
              <span className="eyebrow-number">003</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>capabilities</span>
              </div>
            </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What We Build
          </h2>
        </div>

        {/* Slider Area */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center group">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 lg:-left-12 z-20 w-12 h-12 bg-[#1a1a1a] hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Card */}
          <div className="w-full bg-[#f6f6f6] rounded-[40px] p-2 md:p-4 flex flex-col md:flex-row gap-8 shadow-2xl relative z-10 transition-all duration-500 ease-in-out">
            {/* Left Image Area */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative rounded-[32px] overflow-hidden bg-[#121212]">
              {/* Fallback pattern/gradient if image fails, matching the dark vibe */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black mix-blend-multiply opacity-50 z-10" />
              <img
                key={currentService.image} // Force re-render on change for simple animation
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover object-center z-0 animate-in fade-in duration-700"
              />
            </div>

            {/* Right Content Area */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:px-10 lg:px-14">
              {/* Brand / Logo */}
              <div className="flex items-center gap-3 mb-8">
                <CurrentIcon className="w-7 h-7 text-black" strokeWidth={1.5} />
                <span className="text-xl font-bold tracking-widest text-black">
                  INCODET
                </span>
              </div>

              {/* Title & Description */}
              <div className="min-h-[160px]">
                <h3 className="text-3xl md:text-4xl font-medium text-black leading-[1.1] mb-5 tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  {currentService.description}
                </p>
              </div>

              {/* Read More Button */}
              <div className="mb-12 mt-4">
                <button className="flex items-center gap-3 text-sm font-semibold text-black hover:opacity-70 transition-opacity group/btn">
                  Read More
                  <div className="w-6 h-6 rounded-full bg-[#cecece] flex items-center justify-center group-hover/btn:bg-gray-400 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center gap-8 md:gap-12 mt-auto">
                {currentService.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-medium text-black mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 lg:-right-12 z-20 w-12 h-12 bg-[#1a1a1a] hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
