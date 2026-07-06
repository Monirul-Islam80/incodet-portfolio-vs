import { Globe, Mail, GitBranch } from "lucide-react";

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years building scalable products.",
    avatar: "AT",
    gradient: "from-blue-500 to-blue-600",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Maria Santos",
    role: "Backend Engineer",
    bio: "Specializes in Django, Node.js, and database architecture.",
    avatar: "MS",
    gradient: "from-purple-500 to-purple-600",
    socials: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    bio: "React enthusiast focused on performance and accessibility.",
    avatar: "DK",
    gradient: "from-emerald-500 to-emerald-600",
    socials: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Lisa Wang",
    role: "UI/UX Designer",
    bio: "Creating user-centered designs that balance form and function.",
    avatar: "LW",
    gradient: "from-pink-500 to-pink-600",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="padding-global">
        <div className="container-base">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow justify-center mb-6">
              <span className="eyebrow-number">010</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>team</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small but mighty team of developers, designers, and
              problem-solvers.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <article
                key={member.name}
                className="card-white card-hover rounded-3xl p-6 text-center"
              >
                {/* Avatar */}
                <div
                  className={`team-avatar mx-auto mb-4 bg-gradient-to-br ${member.gradient}`}
                >
                  {member.avatar}
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-blue-400 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <GitBranch className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Globe className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Join Us CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to work with us? We&apos;re always looking for talented
              people.
            </p>
            <a
              href="mailto:careers@incodet.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              View open positions &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
