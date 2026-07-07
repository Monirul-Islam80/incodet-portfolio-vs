"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../app/icon.png";
import Image from "next/image";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
  // { href: "/#values", label: "Values" },
  // { href: "/#integrations", label: "Integrations" },
  // { href: "/#testimonials", label: "Testimonials" },
  // { href: "/#team", label: "Team" },
  // { href: "/#faq", label: "FAQs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Full-Screen Blurry Backdrop (Mobile/Tablet Only) --- */}
      <div
        className={`fixed inset-0 z-40 bg-white/5 backdrop-blur-[80px] transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      />

      {/* --- Floating Island Container --- */}
      {/* Handled dynamic sizing for mobile and tablet, while preserving laptop layout constraints */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-[calc(100%-2rem)] sm:w-auto max-w-[360px] lg:max-w-none">
        
        {/* Top Row Controls */}
        <div className="flex items-center gap-2">
          {/* Logo Icon Button */}
          <a
            href="/"
            className="w-10 h-10 relative rounded-full px-5 py-3 bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#4a4a4a] transition-colors shadow-lg"
            aria-label="Home"
          >
            <Image
              src={logo}
              style={{ borderRadius: "inherit" }}
              fill={true}
              alt="logo of incodet"
            />
          </a>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex px-5 py-3 items-center gap-2 rounded-full bg-[#3a3a3a] text-white text-sm font-medium hover:bg-[#4a4a4a] transition-colors shadow-lg"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            Menu
          </button>
        </div>

        {/* --- Dropdown Panel --- */}
        {/* Added visibility safeguards so it follows your open state on smaller devices */}
        <div
          className={`absolute top-full mt-3 w-full sm:min-w-[360px] bg-[#3a3a3a] rounded-[2rem] p-8 transition-all duration-300 origin-top shadow-2xl ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto transform-none"
              : "opacity-0 scale-95 pointer-events-none -translate-y-4"
          }`}
        >
          {/* 2-Column Grid for Links */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}