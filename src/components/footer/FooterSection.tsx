import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ellipse from "@/assets/footer/ellipse.png"

const FooterSection = () => {
  const footerRef = useRef<any>(null);

  useEffect(() => {
    // GSAP animation for the floating ellipses
    const ellipses = footerRef.current.querySelectorAll('.ellipse');
    gsap.to(ellipses, {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.5,
        from: "random"
      }
    });
  }, []);

  const linkVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-[#020817] text-white py-16 overflow-hidden">
      {/* Floating Ellipses */}
      <div className="absolute left-0 top-0 ellipse">
        <Image 
          src={ellipse}
          alt="Decorative ellipse"
          width={100}
          height={100}
          className="opacity-50 blur-sm"
        />
      </div>
      <div className="absolute right-0 bottom-0 ellipse">
        <Image 
          src={ellipse}
          alt="Decorative ellipse"
          width={100}
          height={100}
          className="opacity-50 blur-sm"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">NOVANECTAR</h2>
            <p className="text-sm text-gray-400">IT Services & IT Consulting</p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">VISIT US</p>
              <p className="text-sm text-gray-400">GMS Road Dehradun</p>
              <p className="text-sm text-gray-400">Uttarakhand, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services'].map((item) => (
                <motion.li key={item} variants={linkVariants} whileHover="hover">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'App Development',
                'UI/UX Design',
                'Graphic Design',
                'SEO',
                'Digital Marketing'
              ].map((item) => (
                <motion.li key={item} variants={linkVariants} whileHover="hover">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">CAREER</h3>
            <ul className="space-y-2">
              {['Jobs', 'Internship', 'Training'].map((item) => (
                <motion.li key={item} variants={linkVariants} whileHover="hover">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service'].map((item) => (
                  <motion.li key={item} variants={linkVariants} whileHover="hover">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
              <ul className="space-y-2">
                {['LinkedIn', 'Instagram', 'Facebook'].map((item) => (
                  <motion.li key={item} variants={linkVariants} whileHover="hover">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;