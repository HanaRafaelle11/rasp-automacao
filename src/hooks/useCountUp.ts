'use client'

import { useEffect, useRef, useState } from 'react'
import { easeOutCubic } from '@/lib/utils'

interface UseCountUpOptions {
  end: number
  duration?: number
  startOnView?: boolean
}

export function useCountUp({
  end,
  duration = 2000,
  startOnView = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!startOnView) {
      startCounting()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            startCounting()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted, startOnView])

  function startCounting() {
    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentCount = Math.round(easedProgress * end)

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)
  }

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return { count, ref }
}
