import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assets/pocess/bg.png";

const ServiceCard = ({ title, description, icon }: any) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] bg-gradient-to-br from-gray-400/90 to-gray-700/90 rounded-xl p-4 sm:p-6 overflow-hidden backdrop-blur-sm border-4 border-gray-300 flex-shrink-0"
    >
      <motion.div
        variants={{
          initial: {
            x: "100%",
            y: "-100%",
            opacity: 0,
          },
          hover: {
            x: 0,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute inset-[-10rem] bg-gradient-to-br from-blue-600 to-blue-500 pointer-events-none rounded-full"
      />

      <div className="relative z-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100/20 flex items-center justify-center mb-4 sm:mb-6">
          <div className="relative w-full h-full bg-blue-100 text-blue-400 rounded-full">
            <div className="absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
              {icon}
            </div>
          </div>
        </div>

        <motion.div
          variants={{
            hover: { y: -5 },
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="pt-2 text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 tracking-wider">
            {title}
          </h3>
          <p className="text-gray-200 pt-2 font-thin leading-relaxed tracking-wider text-xs sm:text-sm">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState("-100%");

  /////////////adjusting view porth width dynamically/////////

  useEffect(() => {
    const updateScrollRange = () => {
      if (window.innerWidth < 480) {
        // Very small screens (e.g., small mobile)
        setScrollRange("-600%"); // Scroll more for tighter spaces
      } else if (window.innerWidth < 640) {
        // Small screens (mobile)
        setScrollRange("-400%");
      } else if (window.innerWidth < 768) {
        // Large mobile or small tablets
        setScrollRange("-320%");
      } else if (window.innerWidth < 1024) {
        // Tablets
        setScrollRange("-230%");
      } else if (window.innerWidth < 1440) {
        // Small desktops or laptops
        setScrollRange("-150%");
      } else {
        // Large screens (desktops)
        setScrollRange("-100%");
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);

    return () => {
      window.removeEventListener("resize", updateScrollRange);
    };
  }, []);

  /////////////end//////////////////////////////////////////////////

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollRange]);

  const services = [
    {
      title: "Strategy",
      description:
        "Developing comprehensive plans to achieve your business goals and maximize your digital presence.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      title: "Wireframing & Design",
      description:
        "Creating intuitive layouts and stunning visuals that enhance user engagement and experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Building robust and scalable applications using cutting-edge technologies and best practices.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality assurance to ensure your product is bug-free and performs optimally across all platforms.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <path d="M16 8L2 22" />
          <path d="M17.5 15H9" />
        </svg>
      ),
    },
    {
      title: "Operation",
      description:
        "Seamlessly deploying your project to production environments, ensuring smooth transitions and optimal performance.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      ),
    },
    {
      title: "Launch",
      description:
        "Providing ongoing support and updates to ensure your project remains secure, efficient, and up-to-date with the latest technologies.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-gray-900">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image
          alt="Process"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 text-start underline">
            Process
          </h2>
          <div className="overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex space-x-4 sm:space-x-6 lg:space-x-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
