import { motion } from 'motion/react'
import React from 'react'

type ContectMotionProps = {
  children: React.ReactNode
  className?: string
}

export default function ContectMotion({ children, className }: ContectMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
