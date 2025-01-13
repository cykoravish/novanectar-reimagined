import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What services does NovaNectar provide?",
    answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, and custom software development. Our team specializes in creating innovative solutions tailored to your business needs."
  },
  {
    id: 2,
    question: "What services does NovaNectar provide?",
    answer: "Our expertise extends to cloud computing, AI/ML integration, e-commerce solutions, and enterprise software development. We work closely with clients to understand their requirements and deliver scalable solutions."
  },
  {
    id: 3,
    question: "What services does NovaNectar provide?",
    answer: "From startup consultation to enterprise-level digital transformation, we offer end-to-end services. This includes strategic planning, implementation, maintenance, and ongoing support for all your digital needs."
  },
  {
    id: 4,
    question: "What services does NovaNectar provide?",
    answer: "We specialize in creating custom digital solutions that help businesses grow. Our services include website development, app creation, digital marketing, and technology consulting."
  },
  {
    id: 5,
    question: "What services does NovaNectar provide?",
    answer: "Our team provides full-stack development services, cloud solutions, and digital transformation strategies. We focus on delivering innovative solutions that drive business growth."
  },
  {
    id: 6,
    question: "What services does NovaNectar provide?",
    answer: "We offer comprehensive digital services including web development, mobile applications, cloud solutions, and digital marketing strategies tailored to your business goals."
  }
];

const FAQItem = ({ faq, isOpen, onClick, isHovered, onHover, onHoverEnd }) => {
  return (
    <motion.div
      className="border-t border-gray-400/30 py-4"
      initial={false}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <motion.div 
        className="flex justify-between items-center cursor-pointer group"
        onClick={onClick}
      >
        <h3 className="text-white text-base pr-8">{faq.question}</h3>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <Plus 
            className="text-white w-5 h-5 group-hover:scale-110 transition-transform" 
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.25
                }
              }
            }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 mt-3 text-sm leading-relaxed pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B2341] px-4 py-12 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Split layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column - Text content */}
          <div className="lg:sticky lg:top-16 lg:h-fit">
            <motion.h2 
              className="text-gray-400 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FAQ
            </motion.h2>
            
            <motion.h1 
              className="text-white text-3xl md:text-4xl font-semibold mb-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Make Something Awesome Together
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're not just another agency-we're your digital growth partners. With years of industry experience and a passion for innovation, our team is dedicated to delivering measurable results propel your business forward
            </motion.p>
          </div>

          {/* Right column - FAQ items */}
          <motion.div 
            className="lg:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                isHovered={hoveredId === faq.id}
                onHover={() => setHoveredId(faq.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;