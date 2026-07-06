import { ExternalLink, Globe, Mail } from "lucide-react";
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
 <div className="padding-global py-12 md:py-16 z-[230] relative">
  <div className="container-base">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      {/* Brand */}
      <div className="lg:col-span-2">
        {/* 
          FIXED LOGO CONTAINER: 
          - Added `relative` so `fill={true}` anchors to this tag.
          - Added explicit height and width (`h-8 w-32`) to fit a standard logo aspect ratio. Change these values to match your specific logo file proportions.
          - Changed to `flex items-center` to keep structural layouts sound.
        */}
        <a href="#" className="relative block h-8 w-32 mb-4 rounded overflow-hidden">
          <Image
            src={logo}
            fill={false}
            style={{height: "100%",width: 'auto'}}
            className=" " // Ensures the image resizes beautifully without getting distorted
            alt="logo of incodet"
            priority // Forces next/image to load the branding asset early
          />
        </a>
        <p className="text-white text-sm max-w-xs mb-6">
          Building software that solves real problems. From idea to launch,
          we help businesses turn concepts into products.
        </p>

            {/* Social Links */}
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

          {/* Quick Links */}
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

          {/* Contact */}
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
                  href="phoneto: +1 (902)-329-4688"
                  className="hover:text-gray-300 transition-colors"
                >
                  {"Phone: +1 (902)-329-4688"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  {"Address: Montreal, QC, Canada"}
                </a>
              </li>
              <li>
                <span>Available for projects worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Incodet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
