"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  const [hoverData, setHoverData] = useState({
    isHovering: false,
    width: 32,
    height: 32,
    borderRadius: "50%",
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Raw coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Line calculations (offset remains 16 since the lines hide on hover anyway)
  const topHeight = useTransform(smoothY, (y) => Math.max(0, y - 16));
  const bottomY = useTransform(smoothY, (y) => y + 16);
  const leftWidth = useTransform(smoothX, (x) => Math.max(0, x - 16));
  const rightX = useTransform(smoothX, (x) => x + 16);

  useEffect(() => {
    if (window.innerWidth < 768 || "ontouchstart" in window) {
      setIsDesktop(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const button = target.closest('a, button, input, textarea, [role="button"]');

      if (button) {
        // 1. Measure the button
        const rect = button.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(button);
        
        // 2. Lock the spring target to the dead-center of the button
        mouseX.set(rect.left + rect.width / 2);
        mouseY.set(rect.top + rect.height / 2);

        // 3. Update size and shape ONLY
        setHoverData({
          isHovering: true,
          width: rect.width + 16, // 8px padding
          height: rect.height + 16,
          borderRadius: computedStyle.borderRadius,
        });
      } else {
        // Normal roaming tracking
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        
        setHoverData({
          isHovering: false,
          width: 32,
          height: 32,
          borderRadius: "50%",
        });
      }
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

  const baseStyle = { 
    opacity: isVisible ? 1 : 0, 
    mixBlendMode: "difference" as const,
    willChange: "transform"
  };

  return (
    <>
      {/* --- LINES (Hide on Hover) --- */}
      <motion.div
        className="fixed top-0 left-0 w-[1px] pointer-events-none z-[9998]"
        style={{ left: smoothX, top: 0, height: topHeight, backgroundColor: "rgba(255, 255, 255, 0.4)", ...baseStyle }}
        animate={{ opacity: hoverData.isHovering ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[1px] h-[100vh] pointer-events-none z-[9998]"
        style={{ left: smoothX, top: bottomY, backgroundColor: "rgba(255, 255, 255, 0.4)", ...baseStyle }}
        animate={{ opacity: hoverData.isHovering ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 h-[1px] pointer-events-none z-[9998]"
        style={{ left: 0, top: smoothY, width: leftWidth, backgroundColor: "rgba(255, 255, 255, 0.4)", ...baseStyle }}
        animate={{ opacity: hoverData.isHovering ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 h-[1px] w-[100vw] pointer-events-none z-[9998]"
        style={{ left: rightX, top: smoothY, backgroundColor: "rgba(255, 255, 255, 0.4)", ...baseStyle }}
        animate={{ opacity: hoverData.isHovering ? 0 : 1 }}
      />

      {/* --- CORE CURSOR CIRCLE --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          // PERFECT CENTERING: Top/Left track the mouse, X/Y pull it back by 50%
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          ...baseStyle
        }}
        animate={{
          width: hoverData.width,
          height: hoverData.height,
          borderRadius: hoverData.borderRadius,
          // Solid white dot when roaming, hollow white border when hovering a button
          backgroundColor: hoverData.isHovering ? "rgba(0, 0, 0, 0)" : "rgb(255, 255, 255)", 
          border: hoverData.isHovering ? "2px solid white" : "0px solid transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}