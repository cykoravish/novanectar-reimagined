
"use client"
// import { motion } from "framer-motion";

import { gsap } from "gsap";
import { useEffect } from "react";

export const MainContent = () => {
   // Animation with GSAP
   useEffect(() => {
    gsap.fromTo(
      ".grid-square",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    
  //   <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //   {/* Grid Background */}
  //   <div className="absolute inset-0 grid grid-cols-gridPattern gap-4 overflow-hidden">
  //     {Array.from({ length: 144 }).map((_, i) => (
  //       <motion.div
  //         key={i}
  //         className="grid-square w-full h-20 bg-gray-200"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //       />
  //     ))}
  //   </div>

  //   {/* Content */}
  //   <div className="relative z-10 text-center">
  //     <h1 className="text-5xl font-extrabold text-black sm:text-6xl">
  //       We Build Success Stories,
  //       <br />
  //       <span className="text-blue-500">Not Just Websites</span>
  //     </h1>
  //     <p className="mt-4 text-lg text-gray-600">
  //       Transform your business with powerful digital strategies designed for
  //       real-world results.
  //     </p>
  //     <div className="mt-8 space-x-4">
  //       <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
  //         Get Started Today
  //       </button>
  //       <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
  //         Schedule a free Consultation
  //       </button>
  //     </div>
  //   </div>
  // </div>
  <div>
  <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  </div>
  )
}
