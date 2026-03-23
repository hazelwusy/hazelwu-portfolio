"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  // Words to highlight in the text
  const highlightWords = ["curiosity", "product", "AI tools", "health systems", "data skills", "product instinct"]

  const renderHighlightedText = (text: string) => {
    let result = text
    highlightWords.forEach(word => {
      result = result.replace(
        new RegExp(`(${word})`, 'gi'),
        '|||$1|||'
      )
    })
    
    return result.split('|||').map((part, i) => {
      const isHighlight = highlightWords.some(w => w.toLowerCase() === part.toLowerCase())
      return isHighlight ? (
        <span key={i} className="text-primary font-medium">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    })
  }

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          style={{ opacity }}
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/8 via-accent/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/8 via-primary/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header with animated line */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-sm font-mono text-primary tracking-wider uppercase">01</span>
              <span className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Me
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Content with highlighted keywords */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                {renderHighlightedText("I keep coming back to one question: how do we use technology to make healthcare actually work better for people? That curiosity has taken me from analyzing telehealth product at a health system to designing go-to-market strategy for a smart mobility device to building internal AI tools at a digital health startup. I like starting with messy, real-world problems and figuring out what to build.")}
              </p>
            </motion.div>

            <motion.div 
              className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-accent via-primary to-transparent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                {renderHighlightedText("My background sits at the intersection of health systems knowledge, data skills, and product instinct. I'm still early in my career, and that's exciting — I bring fresh eyes, energy, and a genuine willingness to learn. When I'm not working, you'll find me hiking or writing.")}
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative element */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary/30"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    backgroundColor: ["var(--primary)", "var(--accent)", "var(--primary)"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Always learning, always building</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
