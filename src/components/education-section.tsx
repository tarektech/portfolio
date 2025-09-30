'use client';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import React from 'react';

type Education = {
  id: number;
  icon: React.ReactNode;
  title: string;
  institution: string;
  date: string;
  location: string;
  description: string;
};

const EDUCATION: Education[] = [
  {
    id: 1,
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Associate Degree in Computer Programming',
    institution: 'Istanbul Aydın University',
    date: '2023 – 2025',
    location: 'Istanbul, Turkey',
    description:
      'Graduated from Istanbul Aydın University with an Associate Degree in Computer Programming.',
  },
];

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

        {/* Education Cards */}
        <div className="space-y-8">
          {EDUCATION.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="relative max-w-md mx-auto lg:max-w-sm"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:bg-gray-800/70 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-500 mb-4 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    {education.title}
                  </h3>
                  <h4 className="text-base text-orange-400 font-semibold">
                    {education.institution}
                  </h4>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{education.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {education.description}
                  </p>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
