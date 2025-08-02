'use client'
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Zap, Database } from 'lucide-react';
import { ActionButtons } from './action-buttons';
import { SocialLinks } from './social-links';
import { HeroIllustration } from './hero-illustration'; 
import TextType from './ui/TextType/TextType';

const TECH_STACK = [
  {
    name: 'Next.js',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <Palette className="w-4 h-4" />,
  },
  {
    name: 'Supabase',
    icon: <Database className="w-4 h-4" />,
  },
] as const;

export function HeroSection() {
  return (
    <section id="home" className="relative z-10 flex-1 flex items-center mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Ready to Innovate
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Full Stack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
             {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400 max-w-md"
              > */}
              <TextType
                text={[
                  'Software Engineer',
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                ]}
                className="text-lg text-gray-400 max-w-md"
                typingSpeed={80}
                deletingSpeed={40}
                loop={true}
                reverseMode={false}
                startOnVisible={true}
                onSentenceComplete={() => {}}
                showCursor={true}
              />
            {/* </motion.p> */}

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 max-w-lg leading-relaxed"
            >
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {TECH_STACK.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium cursor-pointer hover:bg-gray-700/50 transition-colors"
                >
                  {tech.icon}
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <ActionButtons />

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
