'use client';
import { motion } from 'motion/react';
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';
import React from 'react';

export function AboutSection() {
  function handleDownloadResume() {
    const resumeUrl = '/resume/Tarek-Alzein.pdf';
    // Open PDF in new window for preview

    // Also trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tarek-Alzein.pdf';
    link.click();
  }

  const handleClick = () => {
    const element = document.querySelector('#portfolio-showcase');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-34 px-6">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Hello, I&apos;m{' '}
              <TextShimmerWave
                className="text-2xl font-semibold "
                duration={1.4}
              >
                Tarek Alzein
              </TextShimmerWave>
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              A passionate, self-taught full stack web developer with a strong
              focus on clean code and user-friendly, high-quality solutions. I
              specialize in building modern, responsive web and mobile
              applications.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
              My journey in technology is driven by continuous learning and
              exploration of new technologies to refine my skills. I&apos;m
              focused on transitioning into the IT industry and eventually
              moving towards AI and data science.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-orange-600 transition-all duration-200 cursor-pointer"
              onClick={handleClick}
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800/50 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
