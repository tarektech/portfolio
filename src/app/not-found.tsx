'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';
import TextType from '@/components/ui/TextType/TextType';
import ShinyText from '@/components/ShinyText/ShinyText';

interface Particle {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  duration: number;
}

export default function NotFound() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x1: Math.random() * window.innerWidth,
      y1: Math.random() * window.innerHeight,
      x2: Math.random() * window.innerWidth,
      y2: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute size-1 rounded-full bg-orange-400/20"
            initial={{
              x: particle.x1,
              y: particle.y1,
            }}
            animate={{
              x: particle.x2,
              y: particle.y2,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        {/* 404 Text with shimmer wave animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
          className="mb-4"
        >
          <TextShimmerWave
            as="h1"
            className="text-9xl font-extrabold sm:text-[12rem]"
            duration={1.5}
            spread={0.8}
          >
            404
          </TextShimmerWave>
        </motion.div>

        {/* Message with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-4 space-y-4"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <TextType
              text="Page Not Found"
              typingSpeed={80}
              showCursor={false}
              loop={false}
              className="inline-block"
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mb-8"
        >
          <ShinyText
            text="The page you're looking for seems to have wandered off into the digital void. Let's get you back on track."
            speed={3}
            className="text-lg"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <Link href="/">
            <Button
              size="lg"
              className="cursor-pointer gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-orange-400 hover:to-red-400 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
