'use client';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import React from 'react';

const EXPERIENCE = [
  {
    title: 'Intern',
    company: 'Mundoimex Global Lojistik',
    period: '04/2025 - 05/2025',
    location: 'Istanbul, Turkey',
    description:
      'Developed web apps to support logistics operations using Next.js, React.js, and Python. Contributed to digital transformation projects within the logistics sector.',
    technologies: ['Next.js', 'React.js', 'Python', 'Web Development'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-18 px-6">
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
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="sm:block hidden absolute left-2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 opacity-30"></div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 ml-0 md:ml-16  hover:bg-gray-800/70 transition-all duration-300 relative">
                {/* Timeline Dot */}
                <div className="sm:block hidden absolute -left-16 top-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-gray-900"></div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 mb-4 text-white">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-orange-400 font-semibold">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 text-xs font-medium"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
