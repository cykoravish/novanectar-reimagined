"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import HamburgerIcon from "./HambergerIcon"

interface NavItem {
  label: string
  href: string
  items?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { 
    href: "/services", 
    label: "Services",
    items: [
      { label: "Website Development", href: "/services/web" },
      { label: "Mobile Development", href: "/services/mobile" },
      { label: "Graphic Design", href: "/services/design" },
      { label: "Digital Marketing", href: "/services/marketing" },
      { label: "Ecommerce", href: "/services/ecommerce" },
      { label: "SEO", href: "/services/seo" },
    ]
  },
  { href: "/work", label: "Our Work" },
  { 
    href: "/internship", 
    label: "Internship",
    items: [
      { label: "Web Development", href: "/internship/web" },
      { label: "Mobile Development", href: "/internship/mobile" },
      { label: "UI/UX Design", href: "/internship/design" },
    ]
  },
  { 
    href: "/training", 
    label: "Training",
    items: [
      { label: "Frontend Development", href: "/training/frontend" },
      { label: "Backend Development", href: "/training/backend" },
      { label: "Full Stack Development", href: "/training/fullstack" },
    ]
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setExpandedItem(null)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.2,
        ease: "easeOut"
      }
    })
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Novanectar Logo"
              width={200}
              height={50}
              className="w-auto h-8"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
            <Link 
              href="/contact"
              className="px-6 py-2 rounded-md bg-[#4169E1] text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="lg:hidden z-50">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 lg:hidden bg-[#F8F9FA] z-40 overflow-y-auto pt-20"
          >
            <div className="absolute top-6 right-4 z-50">
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-4">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Novanectar Logo"
                  width={150}
                  height={40}
                  className="w-auto h-8"
                />
              </Link>
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="border-b border-gray-200"
                  >
                    {item.items ? (
                      <div>
                        <button
                          onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-4 text-gray-800"
                        >
                          <span className="text-base">{item.label}</span>
                          <motion.div
                            animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: "auto", 
                                opacity: 1,
                                transition: {
                                  height: { duration: 0.3, ease: "easeOut" },
                                  opacity: { duration: 0.2 }
                                }
                              }}
                              exit={{ 
                                height: 0, 
                                opacity: 0,
                                transition: {
                                  height: { duration: 0.3, ease: "easeIn" },
                                  opacity: { duration: 0.2 }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 space-y-4">
                                {item.items.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ 
                                      opacity: 1, 
                                      x: 0,
                                      transition: {
                                        delay: subIndex * 0.1,
                                        duration: 0.2,
                                        ease: "easeOut"
                                      }
                                    }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={toggleMenu}
                                      className="flex items-center justify-between py-2 pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                      <span>{subItem.label}</span>
                                      <ChevronRight className="w-5 h-5" />
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block py-4 text-gray-800"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="block py-4 text-gray-800"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.href}
        className="flex items-center space-x-1 py-2 text-gray-800 hover:text-blue-600 transition-colors"
      >
        <span>{item.label}</span>
        {item.items && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        )}
      </Link>

      {item.items && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full pt-2"
            >
              <div className="bg-white rounded-md shadow-lg py-2 min-w-[200px]">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

