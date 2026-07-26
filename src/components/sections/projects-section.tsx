"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
{
    title: "Cipher Shield",
    type: "Security Advisory Platform",
    description:
      "Empowering businesses with expert security advisory and innovative solutions, ensuring protection, compliance, and resilience in today's evolving threat landscape.",
    image: "/works/ciphershield.png",
    tags: ["Django", "Flutter", "PostgreSQL", "REST API"],
    github: "https://ciphershield.au/",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "BRHEX Studio",
    type: "Real Estate Visualization",
    description:
      "Transform properties into immersive 360° virtual tours and professional floor plans. Showcasing real estate like never before with ultra HD, interactive views.",
    image: "/works/brhex.png",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive"],
    github: "/case-studies/brhex-virtual-tour",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "KI Training & Assessing",
    type: "Educational & Training Platform",
    description:
      "A comprehensive portal for Nationally Recognised Training and Verification of Competency (VOC), upholding industry-leading standards for safety and operational excellence.",
    image: "/works/kitraining.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "/case-studies/kita-training",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "HealthTrack Pro",
    type: "Healthcare Dashboard",
    description:
      "A secure, HIPAA-compliant patient management system for modern clinics. Features real-time vitals monitoring.",
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
    github: "#",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "EcoShop",
    type: "E-Commerce Platform",
    description:
      "Sustainable products marketplace with integrated carbon footprint tracking for every purchase and delivery.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    github: "#",
    color: "from-green-500/20 to-lime-500/20",
  },
  {
    title: "CryptoSight",
    type: "FinTech Analytics",
    description:
      "Real-time cryptocurrency portfolio tracker and market analysis tool using advanced charting libraries.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vue", "TypeScript", "D3.js", "Firebase"],
    github: "#",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check the window size to determine the number of visible cards
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // true if screen width is under 1024px (Tailwind lg)
    };
    
    handleResize(); // Run on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute dynamic slider limits based on device types
  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = projects.length - visibleCards;

  // Make sure current slide isn't orphaned or out-of-bounds if a screen transitions from mobile to desktop orientation
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
            <span className="text-xs font-mono text-gray-400">005</span>
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="uppercase tracking-wider text-xs text-gray-300">
              portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
             Case Studies 
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real projects, real outcomes. Here are some of the products
            we&apos;ve built.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto group/slider">
          
          {/* Navigation Controls - Hidden on mobile viewports to prevent clipping and layout breaks */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10 opacity-0 group-hover/slider:opacity-100 max-lg:hidden"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10 opacity-0 group-hover/slider:opacity-100 max-lg:hidden"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Track Window */}
          <div className="overflow-hidden rounded-3xl -mx-4 px-4 py-4">
            {/* Sliding Track - Shifts perfectly depending on card space assignment */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {projects.map((project, idx) => (
                <div
                  key={`${project.title}-${idx}`}
                  /* 
                    CARD WIDTH FIX: 
                    - `max-lg:w-full` sets card width to 100% on mobile screens.
                    - `lg:w-[33.333333%]` maintains your 3-column layout on desktop monitors.
                  */
                  className="w-full lg:w-[33.333333%] flex-none px-3 lg:px-4"
                >
             <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="h-full flex flex-col group card-glass bg-[#121215] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors cursor-pointer"
>
  {/* Image Container */}
  <div className="relative h-48 md:h-56 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/40 to-transparent" />

    {/* Floating Tag */}
    <div
      className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} backdrop-blur-sm border border-white/10 text-xs font-medium text-white`}
    >
      {project.type}
    </div>

    {/* GitHub Icon Indicator */}
    <div
      /* Made icons consistently visible on touch viewports so users can access project links */
      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-black/60 text-white"
    >
      <GitBranch className="w-5 h-5" />
    </div>
  </div>

  {/* Content Section */}
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
      {project.description}
    </p>

    {/* Stack Badges Tags */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md bg-white/5 border border-white/5 text-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</a>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Overlay Arrows - Rendered centrally below the card track on small devices */}
          <div className="hidden max-lg:flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/5 active:bg-white/10 border border-white/10 text-white rounded-full flex items-center justify-center shadow-md backdrop-blur-sm"
              aria-label="Previous project slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/5 active:bg-white/10 border border-white/10 text-white rounded-full flex items-center justify-center shadow-md backdrop-blur-sm"
              aria-label="Next project slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Progress Track Indicators (Pagination Track) */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>

        {/* View More External Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/ryangsling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}