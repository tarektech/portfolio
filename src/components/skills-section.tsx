import { motion } from 'motion/react';
import {
  Globe,
  GitBranch,
  Smartphone,
  Server,
} from 'lucide-react';
import React from 'react';

const SKILLS_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-orange-500 to-cyan-500',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'SASS',
      'Figma',
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-green-500 to-orange-500',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'GraphQL',
      'Python',
    ],
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-orange-500 to-pink-500',
    skills: [
      'React Native',
      'Cross-platform',
      'iOS Development',
      'Android Development',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <GitBranch className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'Git & GitHub',
      'Clean Code',
      'Responsive Design',
      'SEO Best Practices',
      'Vercel Deployment',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and
            user-friendly applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">20+</div>
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
      </div>
    </section>
  );
}
