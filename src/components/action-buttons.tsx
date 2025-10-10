import { motion } from 'motion/react'
import { ExternalLink, Mail } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { DownloadButton } from './ui/downloadButton'

export function ActionButtons() {
  const handleClick = () => {
    const element = document.querySelector('#portfolio-showcase');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-wrap gap-4"
    >
      {/* Projects Button */}
      <Button
        size="lg"
        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer group"
        onClick={handleClick}
      >
        <span className="flex items-center gap-2">
          Projects
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </Button>

      {/* testing download resume button */}
      <DownloadButton className="bg-orange-600 text-xs hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer group" />
      {/* Contact Button */}
      <Button
        variant="outline"
        size="lg"
        className="border-gray-600 bg-orange-600 hover:bg-orange-700 text-white hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer group"
      >
        <Link
          className="flex items-center gap-2 "
          href="mailto:tarekzein.dev@gmail.com"
        >
          <Mail className="w-4 h-4" />
          Contact
        </Link>
      </Button>
    </motion.div>
  )
}
