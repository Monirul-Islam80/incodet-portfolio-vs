"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Minimum display time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for fade out animation before hiding
      setTimeout(() => setIsHidden(true), 500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`preloader transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo Icon */}
        <div className="preloader-logo">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-2xl">IC</span>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-xl font-semibold text-foreground tracking-wide">
          Incodet
        </div>

        {/* Loading indicator */}
        <div className="flex gap-1 mt-2">
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
