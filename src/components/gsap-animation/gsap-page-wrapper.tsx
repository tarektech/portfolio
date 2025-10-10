'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollToTopButton } from './gsap-scrolltotop'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

interface GSAPPageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function GSAPPageWrapper({
  children,
  className = '',
}: GSAPPageWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !progressBarRef.current) return

    // Smooth scrolling configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Scroll progress bar
    const progressBar = progressBarRef.current
    gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left' })

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(progressBar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: 'none',
        })
      },
    })

    // Page load animation
    const sections = wrapperRef.current.querySelectorAll('section')

    sections.forEach((section, index) => {
      // Create scroll-triggered animations for each section
      const elements = section.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, .animate-on-scroll',
      )

      if (elements.length > 0) {
        gsap.set(elements, {
          opacity: 0,
          y: 50,
        })

        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
            })
          },
          onLeave: () => {
            gsap.to(elements, {
              opacity: 0.7,
              duration: 0.3,
            })
          },
          onEnterBack: () => {
            gsap.to(elements, {
              opacity: 1,
              duration: 0.3,
            })
          },
        })
      }

      // Add parallax effect to specific elements
      const parallaxElements = section.querySelectorAll('.parallax-element')
      parallaxElements.forEach((element) => {
        gsap.to(element, {
          y: (index + 1) * -50,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    })

    // Mouse cursor effects
    const cursor = document.createElement('div')
    cursor.className =
      'custom-cursor fixed w-4 h-4 bg-orange-400 rounded-full pointer-events-none z-50 mix-blend-difference'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: 'power2.out',
      })
    }

    document.addEventListener('mousemove', moveCursor)

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      document.removeEventListener('mousemove', moveCursor)
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return (
    <div ref={wrapperRef} className={className}>
      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 z-50"
        style={{ transformOrigin: 'left' }}
      />

      {/* Page Content */}
      {children}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}



