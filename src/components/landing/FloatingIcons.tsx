import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/landing/icons/java.png";
import js from "@/assets/landing/icons/js.png";
import physics from "@/assets/landing/icons/physics.png";
import python from "@/assets/landing/icons/python.png";
import programing from "@/assets/landing/icons/programing.png";

import gsap from "gsap";

const FloatingTechLayout = ({ children }) => {
  const techIcons = [
    // Left side icons with different animation patterns
    {
      src:java,
      alt: "Node.js",
      className: "w-12 h-12 md:w-16 md:h-16 left-[5%] top-[15%]",
      pattern: "circular",
    },
    {
      src: js,
      alt: "Java",
      className: "w-12 h-12 md:w-16 md:h-16 left-[8%] bottom-[20%]",
      pattern: "wave",
    },
    {
      src: programing,
      alt: "Python",
      className: "w-14 h-14 md:w-20 md:h-20 left-[15%] top-[40%]",
      pattern: "bounce",
    },

    // Right side icons with different patterns
    {
      src: java,
      alt: "JavaScript",
      className: "w-12 h-12 md:w-16 md:h-16 right-[5%] top-[20%]",
      pattern: "wave",
    },
    {
      src: physics,
      alt: "React",
      className: "w-12 h-12 md:w-16 md:h-16 right-[10%] bottom-[25%]",
      pattern: "circular",
    },
    {
      src: java,
      alt: "Angular",
      className: "w-12 h-12 md:w-16 md:h-16 right-[15%] top-[45%]",
      pattern: "bounce",
    },

    // Top icons
    {
      src: js,
      alt: "Flutter",
      className: "w-12 h-12 md:w-16 md:h-16 left-[30%] top-[10%]",
      pattern: "wave",
    },
    {
      src: programing,
      alt: "Kotlin",
      className: "w-12 h-12 md:w-16 md:h-16 right-[30%] top-[5%]",
      pattern: "circular",
    },

    // Bottom icons
    {
      src: physics,
      alt: "Express",
      className: "w-12 h-12 md:w-16 md:h-16 left-[25%] bottom-[10%]",
      pattern: "bounce",
    },
    {
      src: python,
      alt: "Next.js",
      className: "w-12 h-12 md:w-16 md:h-16 right-[25%] bottom-[15%]",
      pattern: "wave",
    },
    {
      src: java,
      alt: "TypeScript",
      className: "w-12 h-12 md:w-16 md:h-16 right-[40%] bottom-[8%]",
      pattern: "circular",
    },
  ];

  const iconRefs = useRef([]);

  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, techIcons.length);

    // Clear any existing animations
    gsap.killTweensOf(iconRefs.current);

    // Create animations for each icon based on its pattern
    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;

      const pattern = techIcons[index].pattern;
      const duration = 2 + Math.random();
      const delay = Math.random();

      switch (pattern) {
        case "circular":
          // Smooth circular motion
          gsap.to(icon, {
            duration: duration,
            repeat: -1,
            ease: "none",
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 15, y: 15 },
                { x: 0, y: 30 },
                { x: -15, y: 15 },
                { x: 0, y: 0 },
              ],
              curviness: 1.8,
            },
            delay: delay,
          });
          break;

        case "wave":
          // Smooth wave motion
          gsap.to(icon, {
            duration: duration,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true,
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
            delay: delay,
          });
          break;

        case "bounce":
          // Gentle bouncing motion
          gsap.to(icon, {
            duration: duration * 0.8,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true,
            y: "-=20",
            x: Math.random() * 15 - 7.5,
            delay: delay,
          });
          break;
      }

      // Add subtle rotation to all icons
      gsap.to(icon, {
        duration: duration * 1.5,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
        rotation: Math.random() * 10 - 5,
        delay: delay,
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(iconRefs.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Floating icons layer */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <div
            key={icon.alt}
            ref={(el) => (iconRefs.current[index] = el)}
            className={`absolute ${icon.className} transition-transform will-change-transform`}
          >
            <div className="relative w-full h-full">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                style={{ objectFit: "contain" }}
                className="select-none"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingTechLayout;
