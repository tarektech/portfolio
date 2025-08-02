'use client';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

import { FaCode, FaAward, FaTools } from 'react-icons/fa';

import { TechStackSection } from './tabs/tech-stack-section';
import { CertificationsSection } from './tabs/certifications-section';
import { ProjectsSection } from './tabs/projects-section';

export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'certificates', label: 'Certificates', icon: FaAward },
    { id: 'tech-stack', label: 'Tech Stack', icon: FaTools },
  ];

  const getIndicatorPosition = () => {
    switch (activeTab) {
      case 'projects':
        return { left: '0.25rem' };
      case 'certificates':
        return { left: 'calc(33.333% + 0.083rem)' };
      case 'tech-stack':
        return { left: 'calc(66.666% - 0.083rem)' };
      default:
        return { left: '0.25rem' };
    }
  };

  return (
    <section
      id="portfolio-showcase"
      className="relative py-16 px-6 min-h-screen"
    >
      <div className="container ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Portfolio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Showcase
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </motion.div>

        {/* Custom Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Tab List */}
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2 mb-8 min-h-[3.5rem] sm:h-14">
            {/* Animated background indicator */}
            <div
              className="absolute top-2 bottom-2 w-[calc(33.333%-0.166rem)] bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg transition-all duration-300 ease-out"
              style={getIndicatorPosition()}
            />

            {/* Tab Buttons */}
            <div className="relative z-10 grid grid-cols-3 min-h-[2.5rem] sm:h-full">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 transition-all duration-300 rounded-lg font-medium group cursor-pointer px-1 py-2 sm:py-0 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <motion.div
                      whileHover={!isActive ? { scale: 1.1 } : {}}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative z-10"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <motion.span
                      whileHover={!isActive ? { y: -1 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`text-xs sm:text-sm relative z-10 text-center ${
                        isActive ? 'font-semibold' : ''
                      }`}
                    >
                      {tab.label}
                    </motion.span>

                    {/* Hover overlay for inactive tabs */}
                    {!isActive && (
                      <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* Projects Tab Content */}
              {activeTab === 'projects' && <ProjectsSection />}

              {/* Certificates Tab Content */}
              {activeTab === 'certificates' && <CertificationsSection />}

              {/* Tech Stack Tab Content */}
              {activeTab === 'tech-stack' && <TechStackSection />}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
