import {
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  Code2,
  PenTool,
  GitBranch,
  Wind,
  Atom,
} from "lucide-react";

const technologies = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Django", icon: Layers },
  { name: "Flutter", icon: Smartphone },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind", icon: Wind },
  { name: "Design", icon: PenTool },
  { name: "Git", icon: GitBranch },
];

export function LogoMarquee() {
  return (
    <section className="py-12 md:py-16  LogoMarquee-bg">
      <div className="padding-global">
        <div className="container-base">
          <div className="text-center mb-8">
            <p className="text-2xl text-black  uppercase tracking-widest ">
              Technologies We Master
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="mask-wrapper marquee-container overflow-hidden">
        <div className="flex animate-marquee">
          {/* First set */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-8 py-3 flex-shrink-0"
            >
              <tech.icon className="w-6 h-6 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
