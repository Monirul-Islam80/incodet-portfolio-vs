import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Incodet transformed our rough product idea into a polished, scalable SaaS platform. Their clarity in communication and technical expertise made all the difference.",
    name: "Sarah Mitchell",
    role: "Founder, CloudSync",
    avatar: "SM",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    quote:
      "Working with Incodet felt like having an extension of our own team. They delivered two quarters ahead of schedule without cutting corners.",
    name: "James Rodriguez",
    role: "CTO, DataFlow",
    avatar: "JR",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    quote:
      "From design system to backend services, execution quality stayed consistently high. They genuinely care about building things that work.",
    name: "Emily Chen",
    role: "VP Product, Nextera",
    avatar: "EC",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="padding-global">
        <div className="container-base">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow mb-6">
              <span className="eyebrow-number">007</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>testimonials</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Trusted by Fast-Moving Teams
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="card-glass rounded-3xl card-hover  p-8 flex flex-col"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-white/10 mb-6" />

                {/* Quote Text */}
                <blockquote className="text-foreground/90 leading-relaxed mb-8 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
