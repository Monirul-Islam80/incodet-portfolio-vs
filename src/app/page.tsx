import { Navbar } from "@/components/navbar";
import { Preloader } from "@/components/preloader";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ValuesSection } from "@/components/sections/values-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TeamSection } from "@/components/sections/team-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BookingSection } from "@/components/sections/BookingSection";
import { ClientPortalSection } from "@/components/sections/ClientPortalSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <ClientPortalSection />
        <PricingSection />
        <TeamSection />
        <FAQSection />
        <BookingSection />
        <ContactSection />
      </main>
    </div>
  );
}
