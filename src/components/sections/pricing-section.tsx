import { Check, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "Full product discovery & roadmap",
  "UI/UX design with interactive prototypes",
  "Full-stack development (frontend + backend)",
  "Database design & API development",
  "Cloud deployment & CI/CD setup",
  "30 days post-launch support",
  "Documentation & handoff",
  "Weekly progress demos",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="padding-global">
        <div className="container-medium">
          {/* Header */}
          <div className="ttext-center mb-16 md:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow justify-center mb-6">
              <span className="eyebrow-number">008</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>pricing</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One package, everything included. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="pricing-card card-dark rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Features */}
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">MVP Package</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Launch Your Product
                </h3>
                <p className="text-muted-foreground mb-8">
                  Everything you need to go from idea to live product. Perfect
                  for startups and businesses ready to build.
                </p>

                {/* Features List */}
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - CTA */}
              <div className="bg-gradient-to-br from-blue-800/5 via-purple-800/5 to-blue-800/5 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-2">
                    Starting at
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl lg:text-5xl font-bold text-gradient">
                      Let&apos;s Talk
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Custom pricing based on your project scope
                  </p>
                </div>

                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Free consultation. No commitment required.
                </p>

                {/* Trust indicators */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gradient">
                        2-4
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Weeks to MVP
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">
                        100%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Code Ownership
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Need ongoing development or maintenance? Ask about our retainer
            packages.
          </p>
        </div>
      </div>
    </section>
  );
}
