"use client";
// import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import techLife from "@/assets/landing/tech-life.png";
import dotts from "@/assets/landing/dotted-background.png";
import triangle from "@/assets/landing/triangleBackground.png";

// import { gsap } from "gsap";
import gsap, { registerGSAPPlugins } from "@/lib/gsapUtils";
import Image from "next/image";
import { useEffect } from "react";
import ServicesSection from "../services/ServicesSection";
import ProcessSection from "../process/ProcessSection";
import ProjectSession from "../projects/ProjectSession";
import WhyChooseUs from "../why-us/WhyUsSession";
import ContactForm from "../contact/contact";
import TestimonialSection from "../testimonial/TestimonialSecion";
import FAQSection from "../faq/FaqSection";
import FooterSection from "../footer/FooterSection";
import FloatingTechLayout from "./FloatingIcons";

export const MainContent = () => {
  // Animation with GSAP
  useEffect(() => {
    // Register GSAP plugins
    registerGSAPPlugins();
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
    <>
      <div>
        <div className="h-[180rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {/* //landing page// */}
          <FloatingTechLayout>
            <div className="w-5xl pt-28 px-2 text-center">
              <h1 className="text-black text-3xl md:text-5xl sm:text-4xl max-w-4xl mx-auto font-bold">
                We Build Success Stories Not Just Websites
              </h1>
            </div>
            <div className="pt-10 text-center px-2 max-w-xl mx-auto">
              <p className="text-black text-center font-medium text-sm md:text-base lg:text-lg">
                Transform your business with powerful digital strategies
                designed for real world results
              </p>
            </div>
            <div className="flex pt-10 px-2 justify-center gap-4">
              <button className="bg-blue-500 px-4 py-2 sm:px-5 sm:py-2 text-white text-sm sm:text-base rounded-md font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none active:scale-95">
                Get Started Today
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-md font-medium shadow-md transition-transform transform hover:scale-105 hover:text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none active:scale-95">
                Schedule a Free Consultation
              </button>
            </div>
            <p className="text-black text-center pt-8 px-2">
              Building Success Stories for
              <span className="text-blue-500"> 200+ Trusted Clients</span>
            </p>
          </FloatingTechLayout>
          {/* //landing page end// */}

          {/* about page start  */}
          <section className="w-full bg-white/65 min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl text-black font-bold underline">
                    About
                  </h2>
                  <p className="text-gray-700 text-lg">
                    We provide smart digital solutions to help your business
                    grow.
                  </p>
                  <p className="text-gray-600">
                    We specialize in a wide range of digital development,
                    including UI/UX, Graphic Design, 2D/3D Illustration &
                    Animation, Logo & Brand Identity Design, Web Development,
                    App Development, SEO and more.
                  </p>

                  {/* Dots Pattern */}
                  <div className="relative w-32 h-32">
                    <Image
                      src={dotts}
                      alt="Dots pattern"
                      fill
                      style={{ objectFit: "contain" }}
                      className="opacity-50"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>

                {/* Illustration Side */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  {/* Main Illustration */}
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={techLife}
                      alt="Digital solutions illustration"
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>

                  {/* Triangle Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <Image
                      src={triangle}
                      alt="Triangle pattern"
                      fill
                      style={{ objectFit: "contain" }}
                      className="opacity-50"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* about end  */}
          <div className="bg-blue-300 bg-opacity-50 h-[100rem] pt-16 text-black text-3xl text-center">
            <h1 className="font-semibold underline">Services</h1>
            <ServicesSection />
            <ProcessSection />
            <ProjectSession />
            <WhyChooseUs />
            <ContactForm />
            <TestimonialSection />
            <FAQSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  );
};
