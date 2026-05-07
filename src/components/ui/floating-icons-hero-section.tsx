"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface IconProps {
  id: number;
  icon: React.ElementType<{ className?: string }>;
  className: string;
  label?: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
  showContent?: boolean;
  iconsClassName?: string;
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const floatDuration = 5 + (index % 5);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-2.5 rounded-3xl shadow-xl bg-card/45 backdrop-blur-md border border-border/30"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <iconData.icon className="w-5 h-5 md:w-7 md:h-7 text-foreground/80" />
        {iconData.label ? <span className="sr-only">{iconData.label}</span> : null}
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(
  (
    {
      className,
      title,
      subtitle,
      ctaText,
      ctaHref,
      icons,
      showContent = true,
      iconsClassName,
      ...props
    },
    ref
  ) => {
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    React.useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-transparent",
          className
        )}
        {...props}
      >
        <div className={cn("absolute inset-0 w-full h-full", iconsClassName)}>
          {icons.map((iconData, index) => (
            <Icon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
            />
          ))}
        </div>

        {showContent && (
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
              {title}
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
            <div className="mt-10">
              <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </div>
          </div>
        )}
      </section>
    );
  }
);

FloatingIconsHero.displayName = "FloatingIconsHero";

export { FloatingIconsHero };
export type { IconProps };
