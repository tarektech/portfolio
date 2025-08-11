'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

interface GSAPPageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function GSAPPageWrapper({
  children,
  className = '',
}: GSAPPageWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !progressBarRef.current) return;

    // Smooth scrolling configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // Scroll progress bar
    const progressBar = progressBarRef.current;
    gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left' });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(progressBar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: 'none',
        });
      },
    });

    // Page load animation
    const sections = wrapperRef.current.querySelectorAll('section');

    sections.forEach((section, index) => {
      // Create scroll-triggered animations for each section
      const elements = section.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, .animate-on-scroll'
      );

      if (elements.length > 0) {
        gsap.set(elements, {
          opacity: 0,
          y: 50,
        });

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
            });
          },
          onLeave: () => {
            gsap.to(elements, {
              opacity: 0.7,
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            gsap.to(elements, {
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      }

      // Add parallax effect to specific elements
      const parallaxElements = section.querySelectorAll('.parallax-element');
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
        });
      });
    });

    // Mouse cursor effects
    const cursor = document.createElement('div');
    cursor.className =
      'custom-cursor fixed w-4 h-4 bg-orange-400 rounded-full pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

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
  );
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    let isVisible = false;
    let currentTween: gsap.core.Tween | null = null;

    // Initially hide the button
    gsap.set(button, { opacity: 0, scale: 0, y: 100 });

    // Optimized show/hide function
    const showButton = () => {
      if (isVisible) return;
      isVisible = true;

      // Kill any existing tween to prevent conflicts
      if (currentTween) currentTween.kill();

      currentTween = gsap.to(button, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0,
        ease: 'back.out(1.7)',
      });
    };

    const hideButton = () => {
      if (!isVisible) return;
      isVisible = false;

      // Kill any existing tween to prevent conflicts
      if (currentTween) currentTween.kill();

      currentTween = gsap.to(button, {
        opacity: 0,
        scale: 0,
        y: 100,
        duration: 0,
        ease: 'power2.in',
      });
    };

    // Use more efficient scroll triggers instead of onUpdate
    ScrollTrigger.create({
      start: 'top -300',
      end: '99999',
      onEnter: showButton,
      onLeaveBack: hideButton,
    });

    // Click handler with improved performance
    const handleClick = () => {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 1.2,
        ease: 'power2.out',
      });
    };

    button.addEventListener('click', handleClick);

    // Optimized hover effects
    const handleMouseEnter = () => {
      if (isVisible) {
        gsap.to(button, {
          scale: 1.1,
          duration: 0,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      if (isVisible) {
        gsap.to(button, {
          scale: 1,
          duration: 0,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Clean up
      if (currentTween) currentTween.kill();
      button.removeEventListener('click', handleClick);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
  );
}

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    let bounds: DOMRect;

    const handleMouseEnter = () => {
      bounds = button.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds) return;

      const deltaX = (e.clientX - bounds.left - bounds.width / 2) * strength;
      const deltaY = (e.clientY - bounds.top - bounds.height / 2) * strength;

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button ref={buttonRef} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// Loading Screen Component
export function GSAPLoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !progressRef.current || !textRef.current) return;

    const loader = loaderRef.current;
    const progress = progressRef.current;
    const text = textRef.current;

    // Set initial states
    gsap.set(progress, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(text, { opacity: 0, y: 20 });

    // Create loading timeline
    const tl = gsap.timeline();

    // Animate text in
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Animate progress bar
    tl.to(progress, {
      scaleX: 1,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Animate text out
    tl.to(text, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
    });

    // Animate loader out
    tl.to(loader, {
      y: '-100%',
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-white text-2xl font-bold mb-8">
        Loading Experience...
      </div>
      <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
        />
      </div>
    </div>
  );
}
