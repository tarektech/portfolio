'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'; // eslint-disable-line

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Animation configurations
export const ANIMATION_CONFIG = {
  ease: 'power2.out',
  duration: 0.8,
  stagger: 0.1,
  scrollTrigger: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
} as const;

// Timeline animations
export const createStaggeredFadeIn = (
  elements: string | Element | Element[],
  options: {
    delay?: number;
    stagger?: number;
    duration?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  } = {}
) => {
  const {
    delay = 0,
    stagger = 0.1,
    duration = 0.8,
    y = 50,
    x = 0,
    scale = 1,
    rotation = 0,
  } = options;

  const tl = gsap.timeline({ delay });

  tl.set(elements, {
    opacity: 0,
    y: y,
    x: x,
    scale: scale === 1 ? 0.9 : scale,
    rotation: rotation,
  });

  tl.to(elements, {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotation: 0,
    duration,
    stagger,
    ease: ANIMATION_CONFIG.ease,
  });

  return tl;
};

// Scroll-triggered animations
export const createScrollAnimation = (
  trigger: string | Element,
  animation: gsap.TweenVars,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    toggleActions?: string;
    onEnter?: () => void;
    onLeave?: () => void;
  } = {}
) => {
  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    pin = false,
    toggleActions = 'play none none reverse',
    onEnter,
    onLeave,
  } = options;

  return gsap.to(trigger, {
    ...animation,
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      pin,
      toggleActions,
      onEnter,
      onLeave,
    },
  });
};

// Parallax effect
export const createParallaxEffect = (
  element: string | Element,
  speed: number = 0.5,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) => {
  const movement = speed * 100;

  const animationProps: gsap.TweenVars = {};

  switch (direction) {
    case 'up':
      animationProps.y = -movement;
      break;
    case 'down':
      animationProps.y = movement;
      break;
    case 'left':
      animationProps.x = -movement;
      break;
    case 'right':
      animationProps.x = movement;
      break;
  }

  return gsap.to(element, {
    ...animationProps,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Text reveal animation
export const createTextReveal = (
  element: string | Element,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    splitBy?: 'chars' | 'words' | 'lines';
  } = {}
) => {
  const {
    delay = 0,
    duration = 1,
    stagger = 0.03,
    splitBy = 'chars',  // eslint-disable-line
  } = options;

  // This would typically use SplitText plugin (GSAP premium)
  // For now, we'll use a basic character splitting approach
  const textElement =
    typeof element === 'string' ? document.querySelector(element) : element;
  if (!textElement) return;

  const text = textElement.textContent || '';
  const chars = text.split('');

  textElement.innerHTML = chars
    .map(
      (char) =>
        `<span style="display: inline-block;">${
          char === ' ' ? '&nbsp;' : char
        }</span>`
    )
    .join('');

  const charElements = textElement.querySelectorAll('span');

  gsap.set(charElements, { opacity: 0, y: 50 });

  return gsap.to(charElements, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    delay,
    ease: 'power2.out',
  });
};

// Magnetic hover effect
export const createMagneticEffect = (
  element: string | Element,
  strength: number = 0.3
) => {
  const el =
    typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  let bounds: DOMRect;

  const onMouseEnter = () => {
    bounds = el.getBoundingClientRect();
  };

  const onMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent;
    if (!bounds) return;

    const deltaX =
      (mouseEvent.clientX - bounds.left - bounds.width / 2) * strength;
    const deltaY =
      (mouseEvent.clientY - bounds.top - bounds.height / 2) * strength;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  el.addEventListener('mouseenter', onMouseEnter);
  el.addEventListener('mousemove', onMouseMove);
  el.addEventListener('mouseleave', onMouseLeave);

  return () => {
    el.removeEventListener('mouseenter', onMouseEnter);
    el.removeEventListener('mousemove', onMouseMove);
    el.removeEventListener('mouseleave', onMouseLeave);
  };
};

// Smooth scrolling
export const smoothScrollTo = (
  target: string | Element,
  offset: number = 0
) => {
  const element =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: element, offsetY: offset },
    ease: 'power2.inOut',
  });
};

// Page transition animation
export const createPageTransition = () => {
  const tl = gsap.timeline();

  tl.set('.page-transition', { scaleY: 0, transformOrigin: 'bottom' });
  tl.to('.page-transition', { scaleY: 1, duration: 0.5, ease: 'power2.inOut' });
  tl.to('.page-transition', {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 0.5,
    ease: 'power2.inOut',
  });

  return tl;
};

// Morphing shapes animation
export const createMorphingShapes = (
  element: string | Element,
  paths: string[],
  options: {
    duration?: number;
    repeat?: number;
    yoyo?: boolean;
    ease?: string;
  } = {}
) => {
  const {
    duration = 2,
    repeat = -1,
    yoyo = true,
    ease = 'power2.inOut',
  } = options;

  const tl = gsap.timeline({ repeat, yoyo });

  paths.forEach((path, index) => {
    if (index === 0) return;
    tl.to(element, { morphSVG: path, duration, ease }, index * duration);
  });

  return tl;
};

// Loading animation
export const createLoadingAnimation = () => {
  const tl = gsap.timeline();

  // Animate loader elements
  tl.to('.loader-bar', {
    scaleX: 1,
    duration: 2,
    ease: 'power2.inOut',
  });
  tl.to('.loader-text', {
    opacity: 0,
    y: -20,
    duration: 0.5,
  });
  tl.to('.loader', {
    y: '-100%',
    duration: 1,
    ease: 'power2.inOut',
  });

  return tl;
};

// Utility functions
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

// Performance optimization
export const enablePerformanceMode = () => {
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });
};
