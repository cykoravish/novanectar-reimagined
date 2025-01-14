import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import bg from "@/assets/testimonial/testimonial.jpg"
import avatar1 from "@/assets/testimonial/avatar1.png"

const testimonialData = {
  name: 'Jane D',
  role: 'Marketing Manager',
  content: 'Working with NovaNectar was a game-changer. Their team delivered a seamless app that exceeded our expectations.'
};

// const MotionImage = motion(Image);
const MotionImage = motion.create(Image);


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TestimonialCard = ({ position, className = "" }:any) => {
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl p-4 shadow-lg w-64 z-20 ${className}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image 
            src={avatar1}
            alt="avatar"
            fill
            sizes="32px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{testimonialData.name}</h3>
          <p className="text-xs text-gray-600">{testimonialData.role}</p>
        </div>
      </div>
      <p className="text-xs text-gray-700 leading-relaxed">{testimonialData.content}</p>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Main Container */}
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <MotionImage
            src={bg}
            alt="Brain background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Responsive Cards Grid */}
        <div className="relative z-10 w-full min-h-screen">
          <motion.div
            className="container mx-auto px-4 py-8 min-h-screen"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block relative min-h-screen">
              <TestimonialCard className="absolute top-[15%] left-[10%]" />
              <TestimonialCard className="absolute top-[15%] right-[10%]" />
              <TestimonialCard className="absolute top-[45%] left-[15%]" />
              <TestimonialCard className="absolute bottom-[15%] right-[15%]" />
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-8 place-items-center">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex flex-col gap-6 items-center">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;