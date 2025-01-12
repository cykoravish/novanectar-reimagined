import bgImage from "@/assets/pocess/bg.png";
import Image from "next/image";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceCard = ({ title, description, icon }:any) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-[350] h-[450px] bg-gradient-to-br from-gray-400/90 to-gray-700/90 rounded-xl p-6 overflow-hidden backdrop-blur-sm border-4 border-gray-300"
    >
      {/* Hover animation overlay */}
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

      {/* Content container */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-24 h-24  rounded-full bg-blue-100/20 flex items-center justify-center mb-8">
          <div className="relative w-full h-full bg-blue-100 text-blue-400 rounded-full">
            <div className="absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
              {icon}
            </div>
          </div>
        </div>

        {/* Text content */}
        <motion.div
          variants={{
            hover: { y: -5 },
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="pt-4 text-2xl font-medium text-white mb-4 tracking-wider">
            {title}
          </h3>
          <p className="text-gray-200 pt-4 font-thin leading-relaxed tracking-wider text-base">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ProcessSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction:any) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Strategy",
      description:
        "Transforming ideas into intuitive wireframes and stunning designs that enhance user engagement and experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      title: "Wireframing & Design",
      description:
        "Transforming ideas into intuitive wireframes and stunning designs that enhance user engagement and experience.",
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
        "Transforming ideas into intuitive wireframes and stunning designs that enhance user engagement and experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Testing",
      description:
        "Transforming ideas into intuitive wireframes and stunning designs that enhance user engagement and experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <path d="M16 8L2 22" />
          <path d="M17.5 15H9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full h-[40rem]">
      <div>
        <h2 className="z-10 text-white absolute underline font-semibold pl-4 pt-6">Process</h2>
      </div>
      {/* Set a fixed height */}
      <Image
        alt="Process"
        src={bgImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="10vw" // You can adjust the size here
        style={{
          objectFit: "cover",
        }}
      />

      <div className="max-w-full mx-auto py-20 pl-14">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 px-2 no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex-none"
              style={{ scrollSnapAlign: "start" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
