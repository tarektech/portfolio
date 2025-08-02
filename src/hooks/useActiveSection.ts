import { useState, useEffect, useCallback } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const updateActiveSection = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = 100; // Account for header height
    const viewportHeight = window.innerHeight;

    let bestSection = 'home';
    let maxVisibleArea = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.id;

      // Calculate how much of the section is visible in the viewport
      const visibleTop = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, headerHeight)
      );
      const visibleArea = Math.max(0, visibleTop);

      // For very tall sections (like portfolio and contact), we prioritize them when they start appearing
      const sectionHeight = rect.height;
      const isLargeSection = sectionHeight > viewportHeight * 0.8; // Sections taller than 80% of viewport

      let score = visibleArea;

      // Boost score for large sections when they're starting to be visible
      if (
        isLargeSection &&
        rect.top <= headerHeight &&
        rect.bottom > headerHeight
      ) {
        score = visibleArea * 1.5; // Give large sections priority
      }

      if (score > maxVisibleArea && visibleArea > 50) {
        // Minimum 50px visible
        maxVisibleArea = score;
        bestSection = sectionId;
      }
    });

    if (bestSection !== activeSection) {
      setActiveSection(bestSection);
    }
  }, [activeSection]);

  useEffect(() => {
    // Set up intersection observer
    const sections = document.querySelectorAll('section[id]');

    if (sections.length === 0) {
      // If sections aren't ready, try again after a short delay
      const timeout = setTimeout(() => {
        updateActiveSection();
      }, 100);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Only update when sections enter or leave the viewport
        const hasIntersecting = entries.some((entry) => entry.isIntersecting);
        if (hasIntersecting) {
          updateActiveSection();
        }
      },
      {
        threshold: [0, 0.1],
        rootMargin: '-80px 0px -80px 0px',
      }
    );

    // Set up scroll listener as backup
    const handleScroll = () => {
      updateActiveSection();
    };

    // Observe all sections
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial update
    updateActiveSection();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateActiveSection]);

  return activeSection;
}
