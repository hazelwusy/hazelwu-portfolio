"use client"

import { motion } from "framer-motion"
import { GraduationCap, Landmark } from "lucide-react"

export default function Education() {
  const educationItems = [
    {
      institution: "UNC-Chapel Hill",
      degree: "B.S. Health Policy & Management · B.S. Information Science · Minor: Data Science",
      highlight: "Morehead-Cain Scholar (full-ride merit-based scholarship) · GPA: 3.9/4.0 · 2022 - 2026",
      courses: "Health Systems · Data Analytics in Healthcare · Health Care Finance · Data Science & Econometrics · Applied Data Analysis",
      icon: GraduationCap,
      isPrimary: true,
    },
    {
      institution: "University of Michigan, ICPSR",
      degree: "Quantitative Methods for Social Sciences · Clifford C. Clogg Scholarship · Summer 2023",
      highlight: "",
      courses: "Causal Inference · Bayesian Modeling · Time Series · Panel & Longitudinal Analysis",
      icon: Landmark,
      isPrimary: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
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
                  className={`relative h-full p-6 bg-card rounded-lg border overflow-hidden group cursor-pointer ${item.isPrimary ? 'border-primary/50' : 'border-border'}`}
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-lg flex-shrink-0 ${item.isPrimary ? 'bg-gradient-to-br from-[#87a878] to-[#6b8f5c]' : 'bg-gradient-to-br from-[#c9a66b] to-[#a68b4b]'}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{item.institution}</h3>
                        <p className="text-sm text-foreground/90 mt-1">{item.degree}</p>
                        {item.highlight && (
                          <p className="text-sm text-primary mt-1">{item.highlight}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.courses}</p>
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
