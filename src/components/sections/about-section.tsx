"use client";

import { useRef } from "react";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// The text we want to reveal
const revealText =
  "Incodet helps startups, SMEs & enterprises design and build software products that solve real problems and scale with their business. Not just websites. Not just apps. Complete systems that people can use, grow, and depend on.";

// --- Helper Component: Individual Letter ---
const Letter = ({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Transitions from light gray (#d1d5db) to black (#000000) as you scroll past its range
  const color = useTransform(progress, range, ["#d1d5db", "#000000"]);
  return <motion.span style={{ color }}>{char}</motion.span>;
};

// --- Main Component ---
export function AboutSection() {
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress specifically within the text container
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 85%", "end 50%"], // Starts when top of text hits 85% of screen, ends at 50%
  });

  const words = revealText.split(" ");
  let charCount = 0;
  const totalChars = revealText.length;

  // The stats array to map into our marquee
  const stats = [
    {
      value: "50+",
      label: "Products Shipped",
      icon: "✓",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
    },
    {
      value: "12",
      label: "Countries Served",
      icon: "🌍",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10",
    },
    {
      value: "99.9%",
      label: "Target Uptime",
      icon: "⚡",
      iconColor: "text-green-400",
      iconBg: "bg-green-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="pt-24 pb-0 md:pt-32 relative overflow-hidden"
    >
      {/* 1. SCROLL REVEAL TEXT SECTION */}
      <div className="padding-global mb-24 relative z-20">
        <div className="container-base flex flex-col items-center">
          <div className="eyebrow mb-8">
            <span className="eyebrow-number">001</span>
            <div className="flex items-center gap-2">
              <span className="eyebrow-dot" />
              <span>who we are</span>
            </div>
          </div>

          <div ref={textContainerRef} className="max-w-5xl text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.4] tracking-tight flex flex-wrap justify-center">
              {words.map((word, i) => {
                const isLastWord = i === words.length - 1;
                return (
                  // Grouping by words prevents weird line-breaks mid-word
                  <span key={i} className="inline-block mr-[0.25em] mb-[0.1em]">
                    {word.split("").map((char, j) => {
                      const start = charCount / totalChars;
                      const end = start + 1 / totalChars;
                      charCount++;
                      return (
                        <Letter
                          key={j}
                          char={char}
                          progress={scrollYProgress}
                          range={[start, end]}
                        />
                      );
                    })}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* --- VIDEO & MARQUEE WRAPPER --- */}
      {/* We wrap both in a relative container so they can sit on top of each other easily */}
      <div className="relative w-full py-16 md:py-24">
        {/* 2. MARQUEE STATS (BACKGROUND) */}
        {/* Absolute positioned to sit exactly in the middle of this section, behind the video */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 bg-transparent py-6 md:py-10 overflow-hidden flex ">
          <div className="flex w-max animate-marquee-ab whitespace-nowrap">
            {[...Array(2)].map((_, trackIndex) => (
              <div key={trackIndex} className="flex gap-16 px-8 items-center">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 min-w-max">
                    {/* <div
                      className={`h-16 w-16 rounded-2xl ${stat.iconBg} flex items-center justify-center shadow-inner`}
                    >
                      <span className={`${stat.iconColor} text-2xl z-10`}>
                        {stat.icon}
                      </span>
                    </div> */}
                    <div className="flex flex-col justify-center">
                      <p className="text-4xl z-10 md:text-5xl font-bold text-black tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-sm z-10 md:text-base font-medium text-slate-500 uppercase tracking-wider mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3. ELEVATED VIDEO (FOREGROUND) */}
        <div className="padding-global relative z-20 pointer-events-none">
          <div className="container-base flex justify-center">
            {/* Increased rounding to 3rem/4rem for those heavy curved edges */}
            <div className="relative w-full max-w-4xl rounded-[10rem] md:rounded-[10rem]  overflow-hidden aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 transition-transform duration-500 pointer-events-auto">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover "
              />
              {/* Play Button Overlay */}
              <div
                style={{ boxShadow: "inset 0px 0px 20px 20px gray" }}
                className="absolute rounded-[10rem] md:rounded-[10rem]   inset-0 flex items-center justify-center bg-black/20 group cursor-pointer hover:bg-black/30 transition-colors"
              >
                <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for the Marquee animation to work without tailwind.config edits */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marqueer {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-ab {
            animation: marqueer 10s linear infinite;
          }
          .animate-marquee-ab:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </section>
  );
}
