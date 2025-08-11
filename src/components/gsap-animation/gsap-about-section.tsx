'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';
import {
  TiltEffect,
  RevealAnimation,
} from './gsap-advanced-effects';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function GSAPAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    // Set initial states
    gsap.set(
      [
        headerRef.current,
        contentRef.current,
        statsRef.current,
        buttonsRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Animate background gradient
    if (backgroundRef.current) {
      gsap.set(backgroundRef.current, { scaleX: 0, transformOrigin: 'left' });
      tl.to(backgroundRef.current, {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.out',
      });
    }

    // Animate header
    tl.to(
      headerRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=1'
    );

    // Animate content with character reveal
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.5'
    );

    // Animate stats with stagger
    if (statsRef.current) {
      const statItems = statsRef.current.children;
      tl.to(
        statItems,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
        },
        '-=0.5'
      );
    }

    // Animate buttons
    tl.to(
      buttonsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    // Add floating animation to stats
    if (statsRef.current) {
      const statItems = Array.from(statsRef.current.children);
      statItems.forEach((item, index) => {
        gsap.to(item, {
          y: 'random(-10, 10)',
          rotation: 'random(-2, 2)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });
    }

    // Parallax effect for background elements
    gsap.to(section, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function handleDownloadResume() {
    const resumeUrl = '/resume/Tarek-Alzein.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tarek-Alzein.pdf';
    link.click();
  }

  const handleClick = () => {
    const element = document.querySelector('#portfolio-showcase');
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 100 },
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-34 px-6 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 -z-10"
      />

      <div className="container relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <RevealAnimation direction="bottom" duration={1.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Me
              </span>
            </h2>
          </RevealAnimation>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Main About Content */}
        <div ref={contentRef} className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-semibold">Hello, I&apos;m</p>
            <TextShimmerWave className="text-2xl font-semibold " duration={1.4}>
              Tarek Alzein
            </TextShimmerWave>
          </div>
          <TiltEffect tiltAngle={5} scale={1.02}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                I&apos;m a passionate{' '}
                <span className="text-orange-400 font-semibold">
                  Full Stack Developer
                </span>{' '}
                with a love for creating beautiful, functional, and
                user-friendly digital experiences. With expertise in modern web
                technologies, I bring ideas to life through clean code and
                innovative solutions.
              </p>
            </div>
          </TiltEffect>

          <TiltEffect tiltAngle={3} scale={1.01}>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
              <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                My journey in web development is driven by curiosity and a
                commitment to continuous learning. I specialize in React,
                Next.js, TypeScript, and modern backend technologies, always
                staying up-to-date with the latest industry trends and best
                practices.
              </p>
            </div>
          </TiltEffect>
        </div>

        {/* Stats Section */}
        

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <TiltEffect tiltAngle={8} scale={1.05}>
            <button
              onClick={handleDownloadResume}
              className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                📄 Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </TiltEffect>

          <TiltEffect tiltAngle={8} scale={1.05}>
            <button
              onClick={handleClick}
              className="group relative px-8 py-3 border-2 border-orange-500 text-orange-400 font-medium rounded-lg overflow-hidden transition-all duration-300 hover:text-white cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                🎯 View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </TiltEffect>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}
