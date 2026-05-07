"use client";

import { useRef } from "react";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "purple" | "emerald" | "amber";
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We dive deep into understanding your business, users, and goals. This phase defines the roadmap for everything that follows.",
    icon: Search,
    color: "blue",
  },
  {
    number: "02",
    title: "Automation Blueprint",
    description:
      "System architecture, user flows, and visual design come together. We validate ideas before writing production code.",
    icon: Palette,
    color: "purple",
  },
  {
    number: "03",
    title: "Build & Integration",
    description:
      "Agile development with regular demos and feedback loops. You see progress weekly, not monthly.",
    icon: Code2,
    color: "emerald",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "Deployment, monitoring, and iteration. We stay with you post-launch to optimize and scale.",
    icon: Rocket,
    color: "amber",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
    dot: "bg-blue-500",
    shadow: "shadow-blue-500/30",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-500",
    dot: "bg-purple-500",
    shadow: "shadow-purple-500/30",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
    dot: "bg-emerald-500",
    shadow: "shadow-emerald-500/30",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    dot: "bg-amber-500",
    shadow: "shadow-amber-500/30",
  },
};

// --- Individual Step Component ---
function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Triggers when the element crosses the middle of the screen
  const isInView = useInView(ref, {
    margin: "100% 0px -50% 0px",
  });

  const colors = colorClasses[step.color as keyof typeof colorClasses];
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-between w-full"
    >
      {/* Central/Left Dot */}
      <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div
          className={`w-8 h-8 rounded-full border-4 transition-all duration-700 flex items-center justify-center bg-white dark:bg-zinc-950 ${
            isInView
              ? `${colors.border} ${colors.shadow} scale-110`
              : "border-slate-200 dark:border-slate-800 scale-100"
          }`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${
              isInView ? colors.dot : "bg-slate-300 dark:bg-slate-700"
            }`}
          />
        </div>
      </div>

      {/* --- Mobile Layout (All stacked to the right) --- */}
      <div className="w-full pl-24 md:hidden flex flex-col gap-4 py-8">
        <div
          className={`flex items-center gap-4 transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-4"}`}
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isInView ? `${colors.bg} ${colors.border}` : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 grayscale"}`}
          >
            <step.icon
              className={`w-6 h-6 transition-all duration-500 ${isInView ? colors.text : "text-slate-400"}`}
            />
          </div>
          <span
            className={`text-xl font-bold transition-all duration-500 ${isInView ? colors.text : "text-slate-300"}`}
          >
            {step.number}
          </span>
        </div>
        <div
          className={`transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"}`}
        >
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      </div>

      {/* --- Desktop Layout (Alternating left/right) --- */}

      {/* Left Column */}
      <div className="hidden md:flex w-1/2 pr-16 lg:pr-24 justify-end items-center text-right py-12">
        {isEven ? (
          // Even: Icon Box and Number
          <div
            className={`flex items-center gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-8"}`}
          >
            <div
              className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center border transition-all duration-700 ${isInView ? `${colors.bg} ${colors.border} shadow-lg` : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 grayscale"}`}
            >
              <step.icon
                className={`w-10 h-10 transition-all duration-700 ${isInView ? colors.text : "text-slate-400"}`}
              />
            </div>
            <span
              className={`text-2xl font-bold transition-all duration-700 ${isInView ? colors.text : "text-slate-300"}`}
            >
              {step.number}
            </span>
          </div>
        ) : (
          // Odd: Text block
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-8"}`}
          >
            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground max-w-sm ml-auto">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="hidden md:flex w-1/2 pl-16 lg:pl-24 justify-start items-center text-left py-12">
        {isEven ? (
          // Even: Text block
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-30 translate-x-8"}`}
          >
            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground max-w-sm">{step.description}</p>
          </div>
        ) : (
          // Odd: Number and Icon Box
          <div
            className={`flex items-center gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-40 translate-x-8"}`}
          >
            <span
              className={`text-2xl font-bold transition-all duration-700 ${isInView ? colors.text : "text-slate-300"}`}
            >
              {step.number}
            </span>
            <div
              className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center border transition-all duration-700 ${isInView ? `${colors.bg} ${colors.border} shadow-lg` : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 grayscale"}`}
            >
              <step.icon
                className={`w-10 h-10 transition-all duration-700 ${isInView ? colors.text : "text-slate-400"}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main Process Section ---
export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll position of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start center" maps to when the top of the container hits the middle of the screen
    // "end center" maps to when the bottom hits the middle.
    // This perfectly syncs the line tip with the center of the screen!
    offset: ["start center", "end center"],
  });

  // Apply a slight spring effect so the line grows smoothly instead of rigidly locking to the scroll wheel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="py-24 md:py-32 overflow-hidden">
      <div className="padding-global">
        <div className="container-base">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <div className="eyebrow mb-6">
              <span className="eyebrow-number">004</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>process</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A proven methodology that delivers results. From first call to
              production launch in weeks, not months.
            </p>
          </div>

          {/* Timeline Container */}
          <div ref={containerRef} className="relative max-w-5xl mx-auto">
            {/* 1. Background static line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

            {/* 2. Animated colored line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-amber-500 origin-top -translate-x-1/2 z-10"
              style={{ scaleY, height: "100%" }}
            />

            {/* 3. Render Steps */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <StepRow key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
