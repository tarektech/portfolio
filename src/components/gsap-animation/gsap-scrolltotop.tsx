import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


// Scroll to Top Button Component
export function ScrollToTopButton() {
    const buttonRef = useRef<HTMLButtonElement>(null)
  
    useEffect(() => {
      if (!buttonRef.current) return
  
      const button = buttonRef.current
      let isVisible = false
      let currentTween: gsap.core.Tween | null = null
  
      // Initially hide the button
      gsap.set(button, { opacity: 0, scale: 0, y: 100 })
  
      // Optimized show/hide function
      const showButton = () => {
        if (isVisible) return
        isVisible = true
  
        // Kill any existing tween to prevent conflicts
        if (currentTween) currentTween.kill()
  
        currentTween = gsap.to(button, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0,
          ease: 'back.out(1.7)',
        })
      }
  
      const hideButton = () => {
        if (!isVisible) return
        isVisible = false
  
        // Kill any existing tween to prevent conflicts
        if (currentTween) currentTween.kill()
  
        currentTween = gsap.to(button, {
          opacity: 0,
          scale: 0,
          y: 100,
          duration: 0,
          ease: 'power2.in',
        })
      }
  
      // Use more efficient scroll triggers instead of onUpdate
      ScrollTrigger.create({
        start: 'top -300',
        end: '99999',
        onEnter: showButton,
        onLeaveBack: hideButton,
      })
  
      // Click handler with improved performance
      const handleClick = () => {
        gsap.to(window, {
          scrollTo: { y: 0, autoKill: false },
          duration: 0.1,
          ease: 'power2.out',
        })
      }
  
      button.addEventListener('click', handleClick)
  
      // Optimized hover effects
      const handleMouseEnter = () => {
        if (isVisible) {
          gsap.to(button, {
            scale: 1.1,
            duration: 0,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }
      }
  
      const handleMouseLeave = () => {
        if (isVisible) {
          gsap.to(button, {
            scale: 1,
            duration: 0,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }
      }
  
      button.addEventListener('mouseenter', handleMouseEnter)
      button.addEventListener('mouseleave', handleMouseLeave)
  
      return () => {
        // Clean up
        if (currentTween) currentTween.kill()
        button.removeEventListener('click', handleClick)
        button.removeEventListener('mouseenter', handleMouseEnter)
        button.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [])
  
    return (
      <button
        ref={buttonRef}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-40 flex items-center justify-center group cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    )
  }
