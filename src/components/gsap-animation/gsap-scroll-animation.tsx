'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?:
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleIn'
    | 'rotateIn'
    | 'custom';
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  snap?: boolean;
  toggleActions?: string;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  customAnimation?: gsap.TweenVars;
  enabled?: boolean;
}

export function GSAPScrollAnimation({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  stagger = 0,
  trigger,
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = false,
  pin = false,
  snap = false,
  toggleActions = 'play none none reverse',
  markers = false,
  onEnter,
  onLeave,
  onEnterBack,
  onLeaveBack,
  customAnimation,
  enabled = true,
}: GSAPScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const element = ref.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    // Kill previous animation if it exists
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const getAnimationProps = (): gsap.TweenVars => {
      if (customAnimation) return customAnimation;

      const baseProps: gsap.TweenVars = {
        duration,
        delay,
        ease: 'power2.out',
      };

      switch (animation) {
        case 'fadeIn':
          return {
            ...baseProps,
            opacity: 1,
            from: { opacity: 0 },
          };
        case 'slideUp':
          return {
            ...baseProps,
            y: 0,
            opacity: 1,
            from: { y: 100, opacity: 0 },
          };
        case 'slideDown':
          return {
            ...baseProps,
            y: 0,
            opacity: 1,
            from: { y: -100, opacity: 0 },
          };
        case 'slideLeft':
          return {
            ...baseProps,
            x: 0,
            opacity: 1,
            from: { x: 100, opacity: 0 },
          };
        case 'slideRight':
          return {
            ...baseProps,
            x: 0,
            opacity: 1,
            from: { x: -100, opacity: 0 },
          };
        case 'scaleIn':
          return {
            ...baseProps,
            scale: 1,
            opacity: 1,
            from: { scale: 0.5, opacity: 0 },
          };
        case 'rotateIn':
          return {
            ...baseProps,
            rotation: 0,
            scale: 1,
            opacity: 1,
            from: { rotation: 180, scale: 0.5, opacity: 0 },
          };
        default:
          return baseProps;
      }
    };

    const animationProps = getAnimationProps();

    // Set initial state
    if (animationProps.from) {
      gsap.set(element, animationProps.from);
    }

    // Create the animation
    if (stagger > 0) {
      const children = element.children;
      if (children.length > 0) {
        animationRef.current = gsap.to(children, {
          ...animationProps,
          stagger,
          scrollTrigger: {
            trigger: triggerElement,
            start,
            end,
            scrub,
            pin,
            snap: snap ? 1 : undefined,
            toggleActions,
            markers,
            onEnter,
            onLeave,
            onEnterBack,
            onLeaveBack,
          },
        });
      }
    } else {
      animationRef.current = gsap.to(element, {
        ...animationProps,
        scrollTrigger: {
          trigger: triggerElement,
          start,
          end,
          scrub,
          pin,
          snap: snap ? 1 : undefined,
          toggleActions,
          markers,
          onEnter,
          onLeave,
          onEnterBack,
          onLeaveBack,
        },
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [
    animation,
    delay,
    duration,
    stagger,
    trigger,
    start,
    end,
    scrub,
    pin,
    snap,
    toggleActions,
    markers,
    enabled,
    customAnimation,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  ]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Wrapper component for text animations
interface GSAPTextAnimationProps {
  text: string;
  className?: string;
  animation?: 'typewriter' | 'reveal' | 'wave' | 'bounce';
  delay?: number;
  duration?: number;
  splitBy?: 'chars' | 'words' | 'lines';
  stagger?: number;
  repeat?: number;
  yoyo?: boolean;
}

export function GSAPTextAnimation({
  text,
  className = '',
  animation = 'reveal',
  delay = 0,
  duration = 1,
  splitBy = 'chars',
  stagger = 0.05,
  repeat = 0,
  yoyo = false,
}: GSAPTextAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Split text based on splitBy option
    let splitText: string[];
    switch (splitBy) {
      case 'words':
        splitText = text.split(' ');
        break;
      case 'lines':
        splitText = text.split('\n');
        break;
      default:
        splitText = text.split('');
    }

    // Create HTML with spans
    element.innerHTML = splitText
      .map((part, index) => {
        const content = part === ' ' ? '&nbsp;' : part === '\n' ? '<br>' : part;
        return `<span class="split-text-${index}" style="display: inline-block;">${content}</span>`;
      })
      .join('');

    const spans = element.querySelectorAll('span');

    const getTextAnimation = () => {
      switch (animation) {
        case 'typewriter':
          gsap.set(spans, { opacity: 0 });
          return gsap.to(spans, {
            opacity: 1,
            duration: 0.05,
            stagger,
            delay,
            repeat,
            yoyo,
            ease: 'none',
          });
        case 'reveal':
          gsap.set(spans, { opacity: 0, y: 50 });
          return gsap.to(spans, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            repeat,
            yoyo,
            ease: 'power2.out',
          });
        case 'wave':
          gsap.set(spans, { y: 0 });
          return gsap.to(spans, {
            y: -20,
            duration: 0.5,
            stagger,
            delay,
            repeat,
            yoyo: true,
            ease: 'power2.inOut',
          });
        case 'bounce':
          gsap.set(spans, { scale: 1 });
          return gsap.to(spans, {
            scale: 1.2,
            duration: 0.3,
            stagger,
            delay,
            repeat,
            yoyo: true,
            ease: 'elastic.out(1, 0.3)',
          });
        default:
          return gsap.to(spans, {
            opacity: 1,
            duration,
            stagger,
            delay,
            repeat,
            yoyo,
          });
      }
    };

    const tl = getTextAnimation();

    return () => {
      tl.kill();
    };
  }, [text, animation, delay, duration, splitBy, stagger, repeat, yoyo]);

  return <div ref={ref} className={className} />;
}

// Parallax component
interface GSAPParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string;
  start?: string;
  end?: string;
}

export function GSAPParallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  trigger,
  start = 'top bottom',
  end = 'bottom top',
}: GSAPParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    const movement = speed * 100;

    const animationProps: gsap.TweenVars = {
      ease: 'none',
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        scrub: true,
      },
    };

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

    const tween = gsap.to(element, animationProps);

    return () => {
      tween.kill();
    };
  }, [speed, direction, trigger, start, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Timeline component for complex animations
interface GSAPTimelineProps {
  children: ReactNode;
  className?: string;
  animations: Array<{
    target: string;
    props: gsap.TweenVars;
    position?: string | number;
  }>;
  trigger?: string;
  start?: string;
  end?: string;
  repeat?: number;
  yoyo?: boolean;
  paused?: boolean;
}

export function GSAPTimeline({
  children,
  className = '',
  animations,
  trigger,
  start = 'top 80%',
  end = 'bottom 20%',
  repeat = 0,
  yoyo = false,
  paused = false,
}: GSAPTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    const tl = gsap.timeline({
      repeat,
      yoyo,
      paused,
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        toggleActions: 'play none none reverse',
      },
    });

    animations.forEach(({ target, props, position }) => {
      const targets = element.querySelectorAll(target);
      if (targets.length > 0) {
        tl.to(targets, props, position);
      }
    });

    return () => {
      tl.kill();
    };
  }, [animations, trigger, start, end, repeat, yoyo, paused]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
