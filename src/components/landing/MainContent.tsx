"use client";
import { cn } from "@/lib/utils";
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
      <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="pt-28 text-black text-4xl text-center font-semibold">
          We Build success Stories Not Just Websites
        </h1>
        <p className="text-black text-center font-medium text-lg pt-10">
          Transform your business with powerfull digital strategies designed for
          real world result
        </p>
        <div className="flex pt-10 justify-center gap-4">
          <button className="bg-blue-500 px-4 py-3 text-white rounded-md">
            Get Started Toaday
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-3 rounded-md font-medium">
            Schedule a free Consultant
          </button>
        </div>
        <p className="text-black text-center pt-8">
          Building Success Stories for{" "}
          <span className="text-blue-500">200+ Trusted clients</span>
        </p>
      </div>
      <h1>About</h1>
    </div>
  );
};
