import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { PROJECTS } from '../../lib/types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <motion.div
        key="projects-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="grid md:grid-cols-2 lg:grid-cols-3  gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 transition-all duration-300  cursor-pointer h-full flex flex-col">
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Link
                  href={project.link}
                  target="_blank"
                  rel={project.title}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Action buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github !== '#' && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/70 rounded-md text-white hover:bg-black/90 transition-colors"
                    >
                      <FaGithub className="w-3 h-3" />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 rounded-md text-white hover:bg-black/90 transition-colors "
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500/20 to-orange-500/20 text-orange-300 border border-orange-500/30">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-700/50 ">
                <Link
                  href={project.link}
                  target="_blank"
                  rel={project.title}
                  className="inline-flex items-center gap-1 text-orange-400 hover:text-red-300 font-medium transition-colors cursor-pointer text-sm"
                >
                  Live Demo
                  <FaExternalLinkAlt className="w-3 h-3" />
                </Link>
                <Link
                  href={
                    project.github !== '#'
                      ? project.github
                      : `/projects/${project.id}`
                  }
                  target={project.github !== '#' ? '_blank' : undefined}
                  rel={
                    project.github !== '#' ? 'noopener noreferrer' : undefined
                  }
                  className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium transition-colors cursor-pointer text-sm"
                >
                  Details
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
