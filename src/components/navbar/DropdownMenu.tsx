'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

interface DropdownItem {
  icon: React.ReactNode
  title: string
  href: string
  subItems?: DropdownItem[]
}

interface DropdownMenuProps {
  title: string
  items: DropdownItem[]
  mobile?: boolean
  onClick?: () => void
  className?: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, mobile = false, onClick, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mobile && dropdownRef.current && arrowRef.current && menuRef.current) {
      const handleMouseEnter = () => {
        setIsOpen(true)
        gsap.to(arrowRef.current, {
          rotation: 180,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(menuRef.current, {
          opacity: 1,
          y: 0,
          display: 'block',
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        setIsOpen(false)
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            if (menuRef.current) {
              menuRef.current.style.display = 'none'
            }
          }
        })
      }

      dropdownRef.current.addEventListener('mouseenter', handleMouseEnter)
      dropdownRef.current.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        if (dropdownRef.current) {
          dropdownRef.current.removeEventListener('mouseenter', handleMouseEnter)
          dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [mobile])

  const toggleMobileMenu = () => {
    if (mobile) {
      setIsOpen(!isOpen)
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: !isOpen ? 1 : 0,
          y: !isOpen ? 0 : -10,
          duration: 0.3,
          ease: 'power2.out',
          display: !isOpen ? 'block' : 'none'
        })
      }
      if (arrowRef.current) {
        gsap.to(arrowRef.current, {
          rotation: !isOpen ? 180 : 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        className="flex items-center space-x-1 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200"
        onClick={mobile ? toggleMobileMenu : undefined}
      >
        <span>{title}</span>
        <ChevronDown ref={arrowRef} className="w-4 h-4" />
      </button>
      <div
        ref={menuRef}
        style={{ display: 'none', opacity: 0 }}
        className={`${
          mobile ? 'mt-2 bg-white' : 'absolute left-0 top-full mt-2 bg-white'
        } w-48 rounded-md shadow-lg py-1 z-20`}
      >
        {items.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={onClick}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Link>
            {item.subItems && (
              <div className="pl-4">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={onClick}
                  >
                    {subItem.icon}
                    <span className="ml-2">{subItem.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu

