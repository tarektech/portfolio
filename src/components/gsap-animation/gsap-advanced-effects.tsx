'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

// Morphing Text Effect
interface MorphingTextProps {
  texts: string[];
  className?: string;
  duration?: number;
  ease?: string;
}

export function MorphingText({
  texts,
  className = '',
  duration = 2,
  ease = 'power2.inOut',
}: MorphingTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || texts.length < 2) return;

    const element = textRef.current;
    let currentIndex = 0;

    const morphText = () => {
      const currentText = texts[currentIndex]; // eslint-disable-line
      const nextIndex = (currentIndex + 1) % texts.length;
      const nextText = texts[nextIndex];

      // Create a timeline for morphing effect
      const tl = gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
          gsap.delayedCall(1, morphText);
        },
      });

      // Animate current text out
      tl.to(element, {
        scale: 0.8,
        opacity: 0,
        rotationX: 90,
        duration: duration / 2,
        ease,
      });

      // Change text and animate in
      tl.call(() => {
        element.textContent = nextText;
      });
      tl.to(element, {
        scale: 1,
        opacity: 1,
        rotationX: 0,
        duration: duration / 2,
        ease,
      });
    };

    // Start with first text
    element.textContent = texts[0];
    gsap.delayedCall(2, morphText);

    return () => {
      gsap.killTweensOf(element);
    };
  }, [texts, duration, ease]);

  return <div ref={textRef} className={className} />;
}

// Reveal Animation
interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  duration?: number;
}

export function RevealAnimation({
  children,
  className = '',
  direction = 'bottom',
  delay = 0,
  duration = 1,
}: RevealAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    // Set initial states
    gsap.set(container, { overflow: 'hidden' });

    const getOverlayPosition = () => {
      switch (direction) {
        case 'left':
          return { x: '-100%' };
        case 'right':
          return { x: '100%' };
        case 'top':
          return { y: '-100%' };
        case 'bottom':
        default:
          return { y: '100%' };
      }
    };

    gsap.set(overlay, {
      ...getOverlayPosition(),
      backgroundColor: '#1f2937',
    });

    // Create reveal animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();

        // Move overlay to reveal content
        tl.to(overlay, {
          ...getOverlayPosition(),
          duration,
          delay,
          ease: 'power2.inOut',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div ref={overlayRef} className="absolute inset-0 z-10" />
    </div>
  );
}

// Particle System
interface ParticleSystemProps {
  count?: number;
  className?: string;
  color?: string;
  size?: number;
}

export function ParticleSystem({
  count = 50,
  className = '',
  color = '#f59e0b',
  size = 2,
}: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        pointer-events: none;
      `;

      container.appendChild(particle);
      particles.push(particle);

      // Set initial position
      gsap.set(particle, {
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        opacity: Math.random(),
      });

      // Animate particle
      gsap.to(particle, {
        y: `random(-200, 200)`,
        x: `random(-100, 100)`,
        opacity: 'random(0.1, 0.8)',
        duration: 'random(3, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    }

    return () => {
      particles.forEach((particle) => {
        gsap.killTweensOf(particle);
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [count, color, size]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    />
  );
}

// Magnetic Element
interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  distance?: number;
}

export function MagneticElement({
  children,
  className = '',
  strength = 0.3,
  distance = 100,
}: MagneticElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let bounds: DOMRect;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds) return;

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distanceFromCenter < distance) {
        const pullX = deltaX * strength;
        const pullY = deltaY * strength;

        gsap.to(element, {
          x: pullX,
          y: pullY,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    const handleMouseEnter = () => {
      bounds = element.getBoundingClientRect();
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [strength, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// 3D Tilt Effect
interface TiltEffectProps {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
  scale?: number;
}

export function TiltEffect({
  children,
  className = '',
  tiltAngle = 15,
  scale = 1.05,
}: TiltEffectProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let bounds: DOMRect;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds) return;

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = (e.clientX - centerX) / (bounds.width / 2);
      const deltaY = (e.clientY - centerY) / (bounds.height / 2);

      const rotateX = deltaY * tiltAngle;
      const rotateY = -deltaX * tiltAngle;

      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        scale,
        duration: 0.3,
        ease: 'power2.out',
        transformOrigin: 'center center',
      });
    };

    const handleMouseEnter = () => {
      bounds = element.getBoundingClientRect();
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [tiltAngle, scale]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

// Staggered Animation Container
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn';
  trigger?: string;
}

export function StaggeredContainer({
  children,
  className = '',
  stagger = 0.1,
  animation = 'fadeIn',
  trigger,
}: StaggeredContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const triggerElement = trigger
      ? document.querySelector(trigger)
      : container;
    const elements = container.children;

    // Set initial states
    const getInitialState = () => {
      switch (animation) {
        case 'slideUp':
          return { opacity: 0, y: 50 };
        case 'scaleIn':
          return { opacity: 0, scale: 0.5 };
        default:
          return { opacity: 0 };
      }
    };

    const getAnimation = () => {
      switch (animation) {
        case 'slideUp':
          return { opacity: 1, y: 0 };
        case 'scaleIn':
          return { opacity: 1, scale: 1 };
        default:
          return { opacity: 1 };
      }
    };

    gsap.set(elements, getInitialState());

    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(elements, {
          ...getAnimation(),
          duration: 0.8,
          stagger,
          ease: 'power2.out',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(elements);
    };
  }, [stagger, animation, trigger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
