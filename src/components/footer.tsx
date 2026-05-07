import { ExternalLink, Globe, Mail } from "lucide-react";

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
      href: "https://github.com/ryangsling",
      label: "GitHub",
      icon: ExternalLink,
    },
    { href: "#", label: "LinkedIn", icon: Globe },
    { href: "#", label: "Twitter", icon: Mail },
  ],
};

export function Footer() {
  return (
    <div className="padding-global py-12 md:py-16 z-230 relative ">
      <div className="container-base">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="text-lg font-semibold">Incodet</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
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
                  <social.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.sections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@incodet.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@incodet.com
                </a>
              </li>
              <li>
                <a
                  href="phoneto: +1 (902)-329-4688"
                  className="hover:text-foreground transition-colors"
                >
                  {"Phone: +1 (902)-329-4688"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
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
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Incodet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
