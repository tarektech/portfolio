'use client';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import React from 'react';

export function EducationSection() {
  return (
    <section id="education" className="relative py-16 px-6">
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
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-orange-500 mb-6 text-white">
              <GraduationCap className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Associate Degree in Computer Programming
              </h3>
              <h4 className="text-xl text-orange-400 font-semibold">
                Istanbul Aydın University
              </h4>

              {/* Details */}
              <div className="flex flex-wrap gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2024 – 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Istanbul, Turkey</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Graduated from Istanbul Aydın University with an Associate
                Degree in Computer Programming.
              </p>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
