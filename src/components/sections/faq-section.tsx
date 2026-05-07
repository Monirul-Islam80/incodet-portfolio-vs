"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of projects does Incodet handle?",
    answer:
      "We specialize in SaaS platforms, web applications, mobile apps, and custom software solutions. Whether you need an MVP, a full-featured product, or help scaling an existing system, we've got you covered. We focus on projects that solve real business problems.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, but most MVPs take 4-8 weeks from kickoff to launch. More complex projects can take 3-6 months. We provide detailed timelines during our discovery phase so you know exactly what to expect.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. Our MVP package includes 30 days of post-launch support. For ongoing maintenance, feature development, and scaling, we offer flexible retainer packages tailored to your needs.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern, battle-tested technologies: React, Next.js, and Tailwind for frontend; Node.js, Django, and Python for backend; PostgreSQL and MongoDB for databases; and AWS/Vercel for cloud deployment. We choose the best tools for each project's specific requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple! Fill out our contact form or schedule a call. We'll have a 30-minute discovery conversation to understand your needs. From there, we'll provide a proposal with scope, timeline, and investment. No commitment required for the initial consultation.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Startups benefit from our MVP expertise and efficient processes. Established businesses appreciate our ability to scale systems and integrate with existing infrastructure. What matters most is having a clear vision for what you want to build.",
  },
  {
    question: "What happens to the code after the project?",
    answer:
      "You own 100% of the code. It's yours to keep, modify, and build upon. We provide full documentation, repository access, and a handoff session to ensure your team can maintain and extend the codebase independently.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 ">
      <div className="padding-global">
        <div className="container-medium">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="eyebrow justify-center mb-6">
              <span className="eyebrow-number">010</span>
              <div className="flex items-center gap-2">
                <span className="eyebrow-dot" />
                <span>faq</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about working with us. Can&apos;t find
              the answer?{" "}
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Get in touch
              </a>
              .
            </p>
          </div>

          {/* FAQ Items */}
          <div className="card-dark rounded-3xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion-item ${index === 0 ? "border-t-0" : ""} bg-white/35 rounded-2xl px-5 py-2 m-2`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="accordion-trigger px-6 md:px-8 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-10 h-10 text-muted-foreground flex-shrink-0 bg-black p-1 rounded-full transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`accordion-content px-6 md:px-8 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                  data-state={openIndex === index ? "open" : "closed"}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
