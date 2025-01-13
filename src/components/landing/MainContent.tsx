"use client";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
import techLife from "@/assets/landing/tech-life.png";
import dotts from "@/assets/landing/dotted-background.png";

import { gsap } from "gsap";
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
    <>
      <div>
        <div className="h-[180rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="pt-28 text-black text-4xl text-center font-semibold">
            We Build success Stories Not Just Websites
          </h1>
          <p className="text-black text-center font-medium text-lg pt-10">
            Transform your business with powerfull digital strategies designed
            for real world result
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
            Building Success Stories for
            <span className="text-blue-500">200+ Trusted clients</span>
          </p>
          <div className="px-4 mt-10 pb-28">
            <h1 className="text-black text-4xl font-semibold underline">
              About
            </h1>
            <div className="flex">
              <div>
                <p className="text-black pt-10 text-2xl font-medium">
                  We provide smart digital solutions to help your business grow.
                </p>
                <p className="text-black text-lg pt-4">
                  We specialize in a wide range of design development, including
                  UI/UX, Graphic Design, 2D/3D Illustration & Animation, Logo &
                  Brand Identity Design, Web Development, App Development, SEO
                  and more.
                </p>
              </div>
              <Image
                src={techLife}
                alt="techLife"
                width={150}
                height={200}
                className="md:block hidden"
              />
            </div>
          </div>
          <Image
            src={dotts}
            alt="dotted"
            width={150}
            height={200}
            className="md:block hidden"
          />
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
