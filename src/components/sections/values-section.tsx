import { Lightbulb, Rocket, Blocks } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Solution-First Thinking",
    description:
      "We understand the problem before writing a single line of code. Every feature serves a purpose, every decision is intentional.",
    icon: Lightbulb,
    gradient: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-400/20",
  },
  {
    number: "02",
    title: "End-to-End Delivery",
    description:
      "From strategy to deployment, we handle everything. No handoffs, no gaps - just seamless execution from idea to launch.",
    icon: Rocket,
    gradient: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-400/20",
  },
  {
    number: "03",
    title: "Scalable Architecture",
    description:
      "We build systems designed for growth. Clean code, modular design, and infrastructure that scales with your success.",
    icon: Blocks,
    gradient: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-400/20",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="py-24 md:py-32">
      <div className="padding-global">
        <div className="">
          {/* Header */}
          <div className="text-center mb-16 container-base flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow  mb-6">
              <span className="eyebrow-number">002</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>values</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build software products that eliminate complexity, reduce risk,
              and multiply your business impact.
            </p>
          </div>

          {/* Values Grid */}
          <div className="values-gird s">
            {values.map((value) => (
              <article
                key={value.number}
                className="card-white card-hover rounded-[8rem] p-8 relative group"
              >
                {/* Top Row - Icon & Number */}
                <div className="flex flex-col items-start justify-between ">
                  {/* Icon */}
                  <div className="value-card  ">
                    <div
                      className={`w-40 h-40 rounded-full bg-gradient-to-br ${value.gradient} border ${value.borderColor} flex items-center justify-center`}
                    >
                      <value.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-center text-5xl font-bold text-black/60 group-hover:text-black/80 transition-colors">
                    {value.number}
                  </span>
                </div>

                {/* Content */}
                <div className="value-card-btm">
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
