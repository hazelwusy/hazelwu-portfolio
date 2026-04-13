"use client"

import { motion } from "framer-motion"
import { GraduationCap, Landmark, Award, BookOpen } from "lucide-react"

export default function Education() {
  const educationItems = [
    {
      institution: "UNC-Chapel Hill",
      degree: "B.S. Health Policy & Management · B.S. Information Science · Minor: Data Science · 2022 - 2026",
      highlight: "Morehead-Cain Scholar",
      highlight2: "GPA: 3.9/4.0",
      courses: "Health Systems · Data Analytics in Healthcare · Health Care Finance · Data Science & Econometrics · Applied Data Analysis",
      icon: GraduationCap,
      isPrimary: true,
      iconBg: "bg-primary",
      borderColor: "border-primary/30",
      accentBarColor: "bg-primary",
    },
    {
      institution: "University of Michigan, ICPSR",
      degree: "Quantitative Methods for Social Sciences · Clifford C. Clogg Scholarship · Summer 2023",
      highlight: "",
      courses: "Causal Inference · Bayesian Modeling · Time Series · Panel & Longitudinal Analysis",
      icon: Landmark,
      isPrimary: false,
      iconBg: "bg-warm",
      borderColor: "border-warm/30",
      accentBarColor: "bg-warm",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-warm/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
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
            <span className="text-sm font-mono text-primary tracking-wider uppercase">03</span>
            <span className="w-12 h-px bg-primary/40" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Academic foundation in health systems, information science, and quantitative methods.
          </p>
        </motion.div>

        {/* Education cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.institution} variants={itemVariants}>
                <motion.div
                  className={`group relative h-full bg-card rounded-2xl border ${item.borderColor} overflow-hidden hover:border-opacity-60 transition-colors`}
                  whileHover={{ 
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${item.accentBarColor}`} />

                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-xl ${item.iconBg} shadow-md flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{item.institution}</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">{item.degree}</p>
                      </div>
                    </div>

                    {/* Highlight badges */}
                    {item.highlight && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        <motion.div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <Award className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-medium text-foreground">{item.highlight}</span>
                        </motion.div>
                        {"highlight2" in item && item.highlight2 && (
                          <motion.div 
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="text-xs font-medium text-foreground">{item.highlight2}</span>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Courses */}
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.courses}</p>
                    </div>
                  </div>


                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
