'use client'
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    setIsClient(true);
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background - Much darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black animate-gradient-x" />

      {/* Floating particles - More subtle */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/10 rounded-full"
            initial={{
              x: Math.random() * screenDimensions.width,
              y: Math.random() * screenDimensions.height,
            }}
            animate={{
              x: Math.random() * screenDimensions.width,
              y: Math.random() * screenDimensions.height,
            }}
            transition={{
              duration: Math.random() * 15 + 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient orbs - Much more subtle and darker */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-gradient-to-r from-orange-900/10 to-orange-900/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] bg-gradient-to-r from-slate-800/8 to-gray-800/8 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Additional subtle overlay for extra darkness */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
