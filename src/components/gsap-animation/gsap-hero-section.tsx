'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Sparkles, Palette, Zap, Database } from 'lucide-react';
import { ActionButtons } from '../action-buttons';
import { SocialLinks } from '../social-links';
import { HeroIllustration } from '../hero-illustration';
import { GSAPParallax } from './gsap-scroll-animation';

// Regis./gsap-scroll-animation
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const TECH_STACK = [
  {
    name: 'Next.js',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <Palette className="w-4 h-4" />,
  },
  {
    name: 'Supabase',
    icon: <Database className="w-4 h-4" />,
  },
] as const;

const TYPING_TEXTS = [
  'Software Engineer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
];

export function GSAPHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const typingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Kill existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Create master timeline
    const masterTl = gsap.timeline({
      delay: 0.5,
    });

    // Initial states
    gsap.set(
      [
        badgeRef.current,
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    gsap.set(techStackRef.current?.children || [], {
      opacity: 0,
      scale: 0.8,
      y: 20,
    });

    gsap.set([actionsRef.current, socialRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(illustrationRef.current, {
      opacity: 0,
      scale: 0.8,
      x: 100,
    });

    // Badge animation
    masterTl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Title animation with character reveal
    masterTl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.5'
    );

    // Subtitle typing animation
    masterTl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.3'
    );

    // Description animation
    masterTl.to(
      descriptionRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    // Tech stack staggered animation
    masterTl.to(
      techStackRef.current?.children || [],
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    );

    // Actions animation
    masterTl.to(
      actionsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    // Social links animation
    masterTl.to(
      socialRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6'
    );

    // Illustration animation
    masterTl.to(
      illustrationRef.current,
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=1'
    );

    // Typing text animation
    let currentIndex = 0;
    const typeText = () => {
      if (!typingTextRef.current) return;

      const currentText = TYPING_TEXTS[currentIndex];
      const textElement = typingTextRef.current;

      // Clear previous text
      gsap.to(textElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          textElement.textContent = '';
          gsap.set(textElement, { opacity: 1 });

          // Type new text
          gsap.to(textElement, {
            duration: currentText.length * 0.05,
            text: currentText,
            ease: 'none',
            onComplete: () => {
              // Wait before changing to next text
              gsap.delayedCall(2, () => {
                currentIndex = (currentIndex + 1) % TYPING_TEXTS.length;
                typeText();
              });
            },
          });
        },
      });
    };

    // Start typing animation after other animations
    gsap.delayedCall(2, typeText);

    // Scroll-triggered parallax effects
    gsap.to(heroRef.current, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Floating animation for tech stack items
    if (techStackRef.current) {
      const techItems = techStackRef.current.children;
      Array.from(techItems).forEach((item, index) => {
        gsap.to(item, {
          y: 'random(-10, 10)',
          rotation: 'random(-5, 5)',
          duration: 'random(2, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });
    }

    // Cleanup function
    return () => {
      masterTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!illustrationRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      gsap.to(illustrationRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative z-10 flex-1 flex items-center mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Ready to Innovate
            </div>

            {/* Main Title */}
            <div ref={titleRef} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Full Stack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Developer
                </span>
              </h1>
            </div>

            {/* Subtitle with typing effect */}
            <div
              ref={subtitleRef}
              className="text-lg text-gray-400 max-w-md h-8"
            >
              <div ref={typingTextRef} className="inline-block">
                {TYPING_TEXTS[0]}
              </div>
              <span className="animate-pulse">|</span>
            </div>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-gray-300 max-w-lg leading-relaxed"
            >
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </p>

            {/* Tech Stack */}
            <div ref={techStackRef} className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium cursor-pointer hover:bg-gray-700/50 transition-colors hover:scale-105"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div ref={actionsRef}>
              <ActionButtons />
            </div>

            {/* Social Links */}
            <div ref={socialRef}>
              <SocialLinks />
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="hidden lg:block">
            <div ref={illustrationRef} className="relative">
              <GSAPParallax speed={0.2} direction="up">
                <HeroIllustration />
              </GSAPParallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
