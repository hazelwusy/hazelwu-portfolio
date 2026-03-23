"use client"

import { ArrowRight, Download, Sparkles } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SilkBackground } from "./aceternity/silk-background"
import { useRef } from "react"

// Magnetic button component for enhanced interactivity
function MagneticButton({ 
  children, 
  className = "",
  href,
  download,
  onClick,
}: { 
  children: React.ReactNode
  className?: string
  href?: string
  download?: boolean
  onClick?: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const name = "Shuyan (Hazel) Wu"

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div 
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--foreground) 1px, transparent 1px),
                linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          {/* Decorative corner elements */}
          <div className="absolute top-32 left-8 w-24 h-24 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
          <div className="absolute bottom-32 right-8 w-24 h-24 border-r-2 border-b-2 border-warm/20 rounded-br-3xl" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating badge with warm accent */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/10 to-warm/10 border border-primary/20 text-sm"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-warm" />
            </motion.span>
            <span className="text-foreground/80 font-medium">Open to opportunities</span>
          </motion.div>

          {/* Animated name with letter-by-letter reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="inline-flex flex-wrap justify-center">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  style={{ display: letter === " " ? "inline" : "inline-block" }}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Tagline - clean solid color */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            <span className="text-primary">
              Health tech, human-centered.
            </span>
            <span className="text-muted-foreground"> Product, data, and strategy.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12 max-w-2xl mx-auto space-y-3">
            <p className="text-base text-muted-foreground leading-relaxed">
              Recent grad from UNC-Chapel Hill · Health Policy & Management + Information Science · Morehead-Cain Scholar
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Looking for entry-level roles in health tech — product, strategy, analytics, and operations.
            </p>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton
              href="#cases"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </MagneticButton>
            
            <MagneticButton
              href="/ShuyanWu_Resume_PM_0218.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium overflow-hidden bg-card border-2 border-warm/30 hover:border-warm transition-all duration-300 hover:bg-warm/5 focus:outline-none focus:ring-2 focus:ring-warm focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="relative flex items-center gap-2 text-foreground">
                Download Resume
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-warm" aria-hidden="true" />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
