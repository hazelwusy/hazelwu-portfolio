"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const SilkBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`} style={{ position: 'relative' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main flowing gradient orbs with green and orange */}
        <motion.div
          className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent rounded-full blur-[100px]"
          style={{ y: y1, opacity }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-warm/12 via-warm-light/8 to-transparent rounded-full blur-[80px]"
          style={{ y: y2, opacity }}
          animate={{
            scale: [1, 0.95, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-accent/10 via-primary/8 to-transparent rounded-full blur-[90px]"
          style={{ opacity }}
          animate={{
            scale: [1, 1.05, 1],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025] mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
          </svg>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
