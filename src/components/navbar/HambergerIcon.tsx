'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface HamburgerIconProps {
  isOpen: boolean
  toggleMenu: () => void
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggleMenu }) => {
  const iconRef = useRef<HTMLDivElement>(null)
  const timeline = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const icon = iconRef.current
    if (icon) {
      const lines = icon.querySelectorAll('.line')
      
      // Create a new timeline if it doesn't exist
      if (!timeline.current) {
        timeline.current = gsap.timeline({ paused: true })
          .to(lines[0], { 
            y: 8, 
            duration: 0.2,
            ease: 'power2.inOut'
          })
          .to(lines[2], { 
            y: -8, 
            duration: 0.2,
            ease: 'power2.inOut'
          }, 0)
          .to(lines[1], { 
            opacity: 0, 
            duration: 0.2,
            ease: 'power2.inOut'
          }, 0)
          .to(lines[0], { 
            rotation: 45, 
            transformOrigin: '50% 50%',
            duration: 0.2,
            ease: 'power2.inOut'
          })
          .to(lines[2], { 
            rotation: -45, 
            transformOrigin: '50% 50%',
            duration: 0.2,
            ease: 'power2.inOut'
          }, '>-0.2')
      }

      // Play or reverse the timeline based on isOpen state
      if (isOpen) {
        timeline.current.play()
      } else {
        timeline.current.reverse()
      }
    }

    // Cleanup
    return () => {
      if (timeline.current) {
        timeline.current.kill()
      }
    }
  }, [isOpen])

  return (
    <div 
      ref={iconRef} 
      className="w-6 h-6 flex flex-col justify-between cursor-pointer" 
      onClick={toggleMenu}
      role="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="line w-full h-0.5 bg-gray-800 rounded-full"></div>
      <div className="line w-full h-0.5 bg-gray-800 rounded-full"></div>
      <div className="line w-full h-0.5 bg-gray-800 rounded-full"></div>
    </div>
  )
}

export default HamburgerIcon

