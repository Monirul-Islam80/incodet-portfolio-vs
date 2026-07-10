import { ExternalLink, Globe, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import logo from "../../public/incodet_banner_pro.png";

const footerLinks = {
  sections: [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ],
  socials: [
    {
      href: "#",
      label: "GitHub",
      icon: ExternalLink,
    },
    { href: "https://www.linkedin.com/company/incodet/", label: "LinkedIn", icon: Globe },
    { href: "mailto:hello@incodet.com", label: "Twitter", icon: Mail },
  ],
};

export function Footer() {
  return (
    <div className="padding-global py-12 md:py-16 z-[230] relative bg-[#0a0a0a]">
      <div className="container-base">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* Brand & Booking Card Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <a href="#" className="relative block h-8 w-32 mb-4 rounded overflow-hidden">
                <Image
                  src={logo}
                  fill={false}
                  style={{ height: "100%", width: 'auto' }}
                  alt="logo of incodet"
                  priority
                />
              </a>
              <p className="text-white text-sm max-w-xs mb-6">
                Building software that solves real problems. From idea to launch,
                we help businesses turn concepts into products.
              </p>

              {/* Social Links (The 3 icons) */}
              <div className="flex gap-3">
                {footerLinks.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Booking Card - Inserted directly under the 3 icons */}
            <div className="relative bg-gradient-to-br from-[#f8fbfa] to-[#e5f4f2] rounded-[2rem] p-6 md:p-8 border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-md">
   
              <div className="relative z-10 flex flex-col items-start">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" 
                    alt="Incodet Expert" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <h3 className="text-2xl font-semibold text-black mb-2 tracking-tight">
                  Book an Intro Call
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-xs">
                  Let's talk through your goals, your timeline, and how Incodet can support your team.
                </p>

                {/* Action Blocks Container */}
                <div className="flex flex-col gap-5 w-full">
                  
                  {/* Pill Button */}
                  <a 
                    href="#booking" 
                    className="group flex items-center justify-between bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-all shadow-[0_8px_16px_rgba(0,0,0,0.15)] self-start"
                  >
                    <span className="font-medium text-sm mr-4">Book a Free Call</span>
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>

                  {/* Email Option */}
                  <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                    <div className="bg-white text-black w-9 h-9 flex items-center justify-center rounded-full shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-xs font-medium">Prefer Email Instead?</span>
                      <a href="mailto:hello@incodet.com" className="text-black font-semibold text-sm hover:underline">
                        hello@incodet.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* End of CTA Booking Card */}

          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.sections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a
                  href="mailto:hello@incodet.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  hello@incodet.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19023294688"
                  className="hover:text-gray-300 transition-colors"
                >
                  Phone: +1 (902)-329-4688
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors cursor-default">
                  Address: Montreal, QC, Canada
                </a>
              </li>
              <li>
                <span className="text-gray-400">Available for projects worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Incodet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}