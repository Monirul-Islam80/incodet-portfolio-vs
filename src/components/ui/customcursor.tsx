"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  // We ONLY use React state for things that change rarely (hovering/visibility)
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // 1. Raw mouse coordinates bypass React state entirely
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Apply your exact spring physics to the raw coordinates
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Dynamically calculate the center offset (8px when hovering, 16px roaming)
  const offset = isHovering ? 8 : 16;

  // 4. Transform the smooth coordinates into lengths and positions for the lines
  const topHeight = useTransform(smoothY, (y) => Math.max(0, y - offset));
  const bottomY = useTransform(smoothY, (y) => y + offset);
  const leftWidth = useTransform(smoothX, (x) => Math.max(0, x - offset));
  const rightX = useTransform(smoothX, (x) => x + offset);
  
  const circleX = useTransform(smoothX, (x) => x - offset);
  const circleY = useTransform(smoothY, (y) => y - offset);

  useEffect(() => {
    if (window.innerWidth < 768 || "ontouchstart" in window) {
      setIsDesktop(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      // Update motion values directly (NO re-renders triggered!)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isDesktop) return null;

  // Added willChange: "transform" to force hardware acceleration and kill blend-mode flickering
  const baseStyle = { 
    opacity: isVisible ? 1 : 0, 
    mixBlendMode: "difference" as const,
    willChange: "transform"
  };

  return (
    <>
      {/* --- TOP LINE --- */}
      <motion.div
        className="fixed top-0 left-0 w-[1px] pointer-events-none z-[9998]"
        style={{
          x: smoothX,
          y: 0,
          height: topHeight,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          ...baseStyle
        }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* --- BOTTOM LINE --- */}
      <motion.div
        className="fixed top-0 left-0 w-[1px] h-[100vh] pointer-events-none z-[9998]"
        style={{
          x: smoothX,
          y: bottomY,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          ...baseStyle
        }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* --- LEFT LINE --- */}
      <motion.div
        className="fixed top-0 left-0 h-[1px] pointer-events-none z-[9998]"
        style={{
          x: 0,
          y: smoothY,
          width: leftWidth,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          ...baseStyle
        }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* --- RIGHT LINE --- */}
      <motion.div
        className="fixed top-0 left-0 h-[1px] w-[100vw] pointer-events-none z-[9998]"
        style={{
          x: rightX,
          y: smoothY,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          ...baseStyle
        }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* --- CORE CURSOR CIRCLE --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: circleX,
          y: circleY,
          backgroundColor: "rgb(255, 255, 255)",
          ...baseStyle
        }}
        animate={{
          width: isHovering ? 16 : 32,
          height: isHovering ? 16 : 32,
        }}
        // Just transitioning the width/height snap on hover now
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}