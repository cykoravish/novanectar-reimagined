import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/landing/icons/java.png";
import js from "@/assets/landing/icons/js.png";
import physics from "@/assets/landing/icons/physics.png";
import python from "@/assets/landing/icons/python.png";
import programing from "@/assets/landing/icons/programing.png";


const FloatingTechLayout = ({ children }) => {
  const techIcons = [
    // Left side icons
    { src:  java, alt: 'Node.js', className: 'w-12 h-12 md:w-16 md:h-16 left-[5%] top-[15%]' },
    { src: python, alt: 'Java', className: 'w-12 h-12 md:w-16 md:h-16 left-[8%] bottom-[20%]' },
    { src:  java, alt: 'Python', className: 'w-14 h-14 md:w-20 md:h-20 left-[15%] top-[40%]' },
    
    // Right side icons
    { src:  java, alt: 'JavaScript', className: 'w-12 h-12 md:w-16 md:h-16 right-[5%] top-[20%]' },
    { src: programing, alt: 'React', className: 'w-12 h-12 md:w-16 md:h-16 right-[10%] bottom-[25%]' },
    { src: '/angular.png', alt: 'Angular', className: 'w-12 h-12 md:w-16 md:h-16 right-[15%] top-[45%]' },
    
    // Top icons
    { src: python, alt: 'Flutter', className: 'w-12 h-12 md:w-16 md:h-16 left-[30%] top-[10%]' },
    { src: programing, alt: 'Kotlin', className: 'w-12 h-12 md:w-16 md:h-16 right-[30%] top-[5%]' },
    
    // Bottom icons
    { src: physics, alt: 'Express', className: 'w-12 h-12 md:w-16 md:h-16 left-[25%] bottom-[10%]' },
    { src: programing, alt: 'Next.js', className: 'w-12 h-12 md:w-16 md:h-16 right-[25%] bottom-[15%]' },
    { src: js, alt: 'TypeScript', className: 'w-12 h-12 md:w-16 md:h-16 right-[40%] bottom-[8%]' }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Floating icons layer */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <motion.div
            key={icon.alt}
            className={`absolute ${icon.className}`}
            animate={{
              y: [0, Math.random() * 15 - 7.5, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                style={{ objectFit: 'contain' }}
                className="select-none"
                priority={index < 4}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloatingTechLayout;