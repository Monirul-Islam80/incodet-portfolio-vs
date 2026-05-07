"use client";

import { useState } from "react";
import {
  ExternalLink,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Extended the array to 6 items so the slider functionality is visible
const projects = [
  {
    title: "Animal Rescue Platform",
    type: "Full-Stack Application",
    description:
      "A comprehensive platform connecting animal rescuers with potential adopters. Built with Django backend and Flutter mobile app.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80",
    tags: ["Django", "Flutter", "PostgreSQL", "REST API"],
    github: "https://github.com/ryangsling/Animal_Rescue_Backend_-django-",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "PawSwipes",
    type: "Pet Adoption Platform",
    description:
      "Tinder-style pet adoption application that matches potential pet owners with animals in need of homes. Swipe right to save a life.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive"],
    github: "https://github.com/ryangsling/PawSwipes",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Cholo Jai",
    type: "Travel & Booking Platform",
    description:
      "A travel companion website designed for exploring destinations and planning trips. Clean UI focused on user experience.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/ryangsling/Cholo-Jai",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "HealthTrack Pro",
    type: "Healthcare Dashboard",
    description:
      "A secure, HIPAA-compliant patient management system for modern clinics. Features real-time vitals monitoring.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?auto=format&fit=crop&w=1200&q=80",
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

  // We are strictly displaying 3 items on the screen.
  // The max index before we hit the end of the array is (total length - 3).
  const maxIndex = projects.length - 3;

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
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real projects, real outcomes. Here are some of the products
            we&apos;ve built.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto group/slider">
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-white/10 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Track Window */}
          <div className="overflow-hidden rounded-3xl -mx-4 px-4 py-4">
            {/* Sliding Track - Shifts by exactly 33.333% per index to keep 3 items visible */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {projects.map((project, idx) => (
                // Each item is strictly 33.333% of the container width to keep 3 on screen
                <div
                  key={`${project.title}-${idx}`}
                  className="w-[33.333333%] flex-none px-3 lg:px-4"
                >
                  <article className="h-full flex flex-col group card-glass bg-[#121215] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors">
                    {/* Image */}
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

                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 text-white"
                      >
                        <GitBranch className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Tags */}
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
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Link */}
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
