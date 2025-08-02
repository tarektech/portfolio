import { motion } from 'motion/react';
import {
  Code,
  Database,
  Globe,
  Settings,
  CheckCircle,
  Cloud,
} from 'lucide-react';
import React from 'react';

export function HeroIllustration() {
  return (
    <div className="relative w-full h-96">
      {/* Main illustration container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central monitor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-600 p-4">
            {/* Screen content */}
            <div className="w-full h-full bg-gray-900 rounded border border-gray-700 p-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-1">
                <div className="w-3/4 h-2 bg-orange-400/50 rounded"></div>
                <div className="w-1/2 h-2 bg-green-400/50 rounded"></div>
                <div className="w-2/3 h-2 bg-orange-400/50 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile device */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 20, y: 10 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute"
        >
          <div className="w-20 h-32 bg-gray-800 rounded-lg border border-gray-600 p-1">
            <div className="w-full h-full bg-gray-900 rounded border border-gray-700"></div>
          </div>
        </motion.div>

        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -top-8 -left-8"
        >
          <div className="p-3 bg-orange-600/20 border border-orange-500/30 rounded-lg">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute -top-4 -right-12"
        >
          <div className="p-3 bg-green-600/20 border border-green-500/30 rounded-lg">
            <Database className="w-6 h-6 text-green-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute -bottom-8 -left-4"
        >
          <div className="p-3 bg-orange-600/20 border border-orange-500/30 rounded-lg">
            <Globe className="w-6 h-6 text-orange-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute -bottom-4 -right-8"
        >
          <div className="p-3 bg-cyan-600/20 border border-cyan-500/30 rounded-lg">
            <Settings className="w-6 h-6 text-cyan-400" />
          </div>
        </motion.div>

        {/* Success indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="absolute bottom-16 right-16"
        >
          <div className="p-2 bg-green-600/20 border border-green-500/30 rounded-full">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
        </motion.div>

        {/* Cloud icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute top-12 right-4"
        >
          <div className="p-2 bg-gray-600/20 border border-gray-500/30 rounded-lg">
            <Cloud className="w-5 h-5 text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 100 100 Q 200 50 300 100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
