'use client';
import { motion } from 'motion/react';
import { Palette, Code, Smartphone } from 'lucide-react';
import React from 'react';

const SERVICES = [
  {
    title: 'Web Design',
    description:
      'Modern, professional-level UI design that captivates users and delivers exceptional experiences.',
    icon: <Palette className="w-8 h-8" />,
    gradient: 'from-pink-400 to-orange-500',
  },
  {
    title: 'Web Development',
    description:
      'High-quality, responsive, and user-friendly websites and applications built with modern technologies.',
    icon: <Code className="w-8 h-8" />,
    gradient: 'from-orange-400 to-cyan-500',
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications using React Native for iOS and Android platforms.',
    icon: <Smartphone className="w-8 h-8" />,
    gradient: 'from-green-400 to-orange-500',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 px-6">
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
              Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your
            digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid  md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-300 hover:scale-102 cursor-pointer h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${service.gradient} mb-3 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs flex-grow">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
