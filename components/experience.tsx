"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Product Management Intern",
      company: "Well",
      period: "Sep 2025 – Present",
      location: "Chapel Hill, NC",
      description: "AI workflow product requirements, knowledge management platform evaluation, agile execution across clinical and engineering teams.",
      gradient: "from-primary to-secondary",
      dotColor: "bg-primary",
      isCurrent: true,
    },
    {
      title: "Product Strategy (GTM) Intern",
      company: "Strutt Inc.",
      period: "May 2025 – Feb 2026",
      location: "Singapore (Remote)",
      description: "End-to-end user research design, 200+ stakeholder interviews, beta analytics, pricing and positioning strategy.",
      gradient: "from-warm to-warm-light",
      dotColor: "bg-warm",
      isCurrent: false,
    },
    {
      title: "Research and Project Coordination Intern",
      company: "Brookings Institution",
      period: "Jun 2025 – Aug 2025",
      location: "Washington, D.C.",
      description: "End-to-end program operations for 6 Brookings research portfolios, centralized knowledge repository design, and driver-based budget modeling for multi-million-dollar programs.",
      gradient: "from-secondary to-accent",
      dotColor: "bg-secondary",
      isCurrent: false,
    },
    {
      title: "Strategy & Operations Intern",
      company: "Corewell Health",
      period: "May 2024 – Jul 2024",
      location: "Grand Rapids, MI",
      description: "Telehealth equity gap analysis, community intervention design, population health KPI framework.",
      gradient: "from-accent to-primary",
      dotColor: "bg-accent",
      isCurrent: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-warm/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm font-mono text-primary tracking-wider uppercase">05</span>
            <span className="w-12 h-px bg-primary/40" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building expertise across product management, strategy, and health tech operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-primary/30 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-10 pb-12 last:pb-0"
            >
              {/* Timeline dot with pulse for current */}
              <div className="absolute left-0 top-1">
                <div className={`relative w-6 h-6 rounded-full ${exp.dotColor} flex items-center justify-center shadow-md`}>
                  <Briefcase className="w-3 h-3 text-white" />
                  {exp.isCurrent && (
                    <>
                      <span className={`absolute inset-0 rounded-full ${exp.dotColor} animate-ping opacity-30`} />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    </>
                  )}
                </div>
              </div>

              {/* Card */}
              <motion.div
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ 
                  x: 8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Hover glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="font-semibold text-primary">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Time badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <time>{exp.period}</time>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-3.5 h-3.5 text-warm" aria-hidden="true" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
