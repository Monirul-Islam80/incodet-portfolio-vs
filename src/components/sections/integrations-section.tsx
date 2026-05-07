import {
  Atom,
  Globe,
  Server,
  Database,
  Smartphone,
  Wind,
  Layers,
  Cloud,
  PenTool,
  GitBranch,
  Code2,
  Blocks,
  Terminal,
  Workflow,
  Shield,
  Zap,
} from "lucide-react";

type Tool = {
  name: string;
  icon: typeof Atom;
};

// Splitting the skills into 3 distinct rows for the marquees
const row1 = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: Wind },
  { name: "TypeScript", icon: Code2 },
  { name: "Figma", icon: PenTool },
  { name: "Git", icon: GitBranch },
];

const row2 = [
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "Django", icon: Layers },
  { name: "Express", icon: Workflow },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
];

const row3 = [
  { name: "Redis", icon: Zap },
  { name: "Supabase", icon: Shield },
  { name: "Flutter", icon: Smartphone },
  { name: "AWS", icon: Cloud },
  { name: "Vercel", icon: Blocks },
  { name: "Docker", icon: Blocks },
];

// Helper component for a single skill capsule
function SkillCapsule({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm group cursor-default shadow-lg shadow-black/5">
      <tool.icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
      <span className="text-sm font-medium text-slate-800 tracking-wide whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 md:py-32 overflow-hidden">
      <div className="padding-global">
        <div className="container-base">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow justify-center mb-6">
              <span className="eyebrow-number">006</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>integrations</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build reliable
              software that scales.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      {/* The mask-image creates the smooth fade effect on the left and right edges */}
      <div className="relative w-full flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* ROW 1: Normal Marquee */}
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-6 px-3 items-center min-w-max"
            >
              {/* We map the row twice inside each track half to ensure it's long enough for ultra-wide screens */}
              {[...row1, ...row1].map((tool, i) => (
                <SkillCapsule key={`${tool.name}-${i}`} tool={tool} />
              ))}
            </div>
          ))}
        </div>

        {/* ROW 2: Reverse Marquee */}
        <div className="flex w-max animate-marquee-reverse ml-[-50vw]">
          {[...Array(2)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-6 px-3 items-center min-w-max"
            >
              {[...row2, ...row2].map((tool, i) => (
                <SkillCapsule key={`${tool.name}-${i}`} tool={tool} />
              ))}
            </div>
          ))}
        </div>

        {/* ROW 3: Normal Marquee */}
        <div className="flex w-max animate-marquee ml-[-15vw]">
          {[...Array(2)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-6 px-3 items-center min-w-max"
            >
              {[...row3, ...row3].map((tool, i) => (
                <SkillCapsule key={`${tool.name}-${i}`} tool={tool} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Card underneath */}
      <div className="padding-global mt-20">
        <div className="container-base flex justify-center">
          <div className="card-glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between max-w-3xl w-full gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Need something specific?
              </h3>
              <p className="text-muted-foreground text-sm max-w-md">
                {`      We're always exploring new technologies. If you have a specific
                stack requirement or legacy system, let's talk about it.`}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              Discuss your requirements &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Inline styles for Marquee Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
          }
          
          /* Pause on hover */
          .animate-marquee:hover,
          .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </section>
  );
}
