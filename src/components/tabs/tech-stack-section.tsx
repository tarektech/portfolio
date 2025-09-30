import { motion } from 'motion/react';
import { TECH_STACK } from '../../lib/types';

import React from 'react';

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-20 px-6">
      <motion.div
        key="tech-stack-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative "
            >
              <div
                className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer text-center h-full flex flex-col items-center justify-center ${tech.bgColor} hover:shadow-lg hover:shadow-gray-900/20`}
              >
                {/* Icon */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-16 h-16">
                  <span className="text-4xl text-white ">{tech.icon}</span>
                </div>

                {/* Tech Name */}
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                  {tech.name}
                </h3>

                {/* Hover Gradient Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Border Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Self-taught</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-400 text-sm">Learning Journey</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
