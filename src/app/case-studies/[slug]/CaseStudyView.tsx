"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  User, 
  Briefcase, 
  Layers, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { type CaseStudy } from "../../data/case-studies";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} satisfies Variants;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
} satisfies Variants;

interface CaseStudyViewProps {
  project: CaseStudy;
  nextProject?: CaseStudy;
}

export function CaseStudyView({ project, nextProject }: CaseStudyViewProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white selection:text-neutral-950 font-sans antialiased">
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-neutral-800/20 via-neutral-900/10 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">

        {/* --- HEADER & HERO --- */}
        <motion.header 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Breadcrumb / Category */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
            <span>Case Study</span>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-neutral-200">{project.client}</span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 pb-8 border-y border-neutral-800/80 backdrop-blur-sm"
          >
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5 text-neutral-400" /> Client
              </div>
              <div className="text-sm font-medium text-neutral-200">{project.client}</div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Briefcase className="w-3.5 h-3.5 text-neutral-400" /> Team
              </div>
              <div className="text-sm font-medium text-neutral-200">{project.team}</div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-neutral-400" /> Timeline
              </div>
              <div className="text-sm font-medium text-neutral-200">{project.timeline}</div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" /> Live Demo
              </div>
              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-white hover:underline inline-flex items-center gap-1 group"
                >
                  Visit Project <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span className="text-sm font-medium text-neutral-500">Internal POC</span>
              )}
            </div>
          </motion.div>
        </motion.header>

        {/* --- HERO IMAGE / PREVIEW CONTAINER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-16 group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl"
        >
          {/* Subtle Window Header Mockup Bar */}
          <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
            <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
            <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
            <span className="text-xs font-mono text-neutral-500 ml-2">
              {project.previewDomain || "preview.incodet.com"}
            </span>
          </div>

          {/* Hero Visual Mockup Container */}
          <div className="aspect-[16/9] w-full bg-neutral-900 flex flex-col items-center justify-center text-neutral-600 relative overflow-hidden group">
            {project.heroVideo ? (
              <video
                key={project.heroVideo}
                src={project.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : project.heroImage ? (
              <img 
                src={project.heroImage} 
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 z-10" />
                <p className="font-mono text-sm text-neutral-400 z-20 bg-neutral-950/80 px-4 py-2 rounded-full border border-neutral-800">
                  [ {project.title} Interactive Preview Mockup ]
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* --- IMPACT STATS GRID --- */}
        <section className="my-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {project.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md hover:border-neutral-700 transition-colors"
              >
                <div className="text-3xl font-extrabold text-white tracking-tight font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <hr className="border-neutral-800 my-16" />

        {/* --- MAIN CONTENT LAYOUT (TWO COLUMN) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDEBAR: Technical Scope */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-12 p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-md space-y-6">
              <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-white" /> Technical Scope
              </h3>
              <ul className="space-y-2">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineered with performance-first principles, ensuring smooth client interactions across modern devices.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: Challenge, Solution, Features */}
          <main className="lg:col-span-8 space-y-16">

            {/* 01 / THE CHALLENGE SECTION */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-400">
                01 / The Challenge
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {project.challenge.headline}
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-base sm:text-lg">
                {project.challenge.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* 02 / THE SOLUTION SECTION */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-400">
                02 / The Solution
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {project.solution.headline}
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {project.solution.description}
              </p>

              {/* Feature Showcase List */}
              <div className="space-y-8 pt-4">
                {project.solution.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm space-y-4 hover:border-neutral-700 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-neutral-400" />
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature Visual Container */}
                    <div className="aspect-[16/9] w-full rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500 mt-4 overflow-hidden">
                      {feature.video ? (
                        <video
                          key={feature.video}
                          src={feature.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : feature.image ? (
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                      ) : (
                        <span>[ {feature.title} Image / Visual Placeholder ]</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 03 / REFLECTION & TAKEAWAYS */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="space-y-6 pt-6 border-t border-neutral-800"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-400">
                03 / Reflection & Learnings
              </div>
              
              <ul className="space-y-4">
                {project.reflection.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>

              {project.reflection.quote && (
                <blockquote className="my-8 p-6 rounded-xl border-l-2 border-white bg-neutral-900/60 text-neutral-200 italic text-base sm:text-lg">
                  "{project.reflection.quote}"
                </blockquote>
              )}
            </motion.section>

          </main>
        </div>

        {/* --- NEXT PROJECT FOOTER CTA --- */}
        {nextProject && (
          <nav className="mt-32 pt-12 border-t border-neutral-800">
            <a 
              href={`/case-studies/${nextProject.slug}`}
              className="group block p-8 sm:p-12 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Up Next</span>
                  <h4 className="text-2xl sm:text-4xl font-bold text-white mt-1 group-hover:text-neutral-200 transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-sm text-neutral-400 mt-1">{nextProject.subtitle}</p>
                </div>

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 bg-neutral-800 text-white group-hover:bg-white group-hover:text-neutral-950 transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          </nav>
        )}

      </div>
    </div>
  );
}