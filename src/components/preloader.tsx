"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../app/icon.png";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  const brandLetters = "Incodet".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait exactly 800ms for the slide-up curtain animation to finish completely
      setTimeout(() => setIsHidden(true), 800); 
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`preloader ${
        isLoading ? "preloader-active" : "preloader-exit"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Icon */}
        <div className="preloader-logo-container">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/10 relative overflow-hidden">
            <Image
              src={logo}
              style={{ borderRadius: "inherit" }}
              fill={true}
              alt="logo of incodet"
              priority
            />
          </div>
        </div>

        {/* Brand Name Wave Formation */}
        <div className="flex text-2xl font-bold tracking-widest text-white mt-2 select-none">
          {brandLetters.map((letter, index) => (
            <span
              key={index}
              className="inline-block preloader-wave-letter"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}