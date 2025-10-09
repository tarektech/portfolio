'use client'

import { useEffect, useState } from 'react'

const useCountUp = (
  end: number,
  duration: number = 2000,
  delay: number = 0,
) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }, delay)

    return () => clearTimeout(timeout)
  }, [end, duration, delay])

  return count
}

export function Statistics() {
  const certifications = useCountUp(12, 2000, 100)
  const categories = useCountUp(8, 2000, 200)
  const years = useCountUp(4, 2000, 300)

  return (
    <>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2 tabular-nums">
          {certifications}+
        </div>
        <div className="text-gray-400">Total Certifications</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2 tabular-nums">
          {categories}
        </div>
        <div className="text-gray-400">Categories</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2 tabular-nums">
          {years}
        </div>
        <div className="text-gray-400">Years Learning</div>
      </div>
    </>
  )
}
