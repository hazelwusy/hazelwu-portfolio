"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, BarChart3, HeartPulse, ChevronRight } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Product & Strategy",
      icon: Lightbulb,
      skills: ["Product Management", "PRD & Requirements Writing", "Roadmap Prioritization", "Agile/Scrum", "GTM Strategy", "Competitive Analysis", "Pricing & Financial Modeling", "Stakeholder Alignment"],
      gradient: "from-primary to-accent",
      iconBg: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      title: "User Research & Insights",
      icon: Users,
      skills: ["User Interviews", "Persona Development", "JTBD Framework", "Qualitative Synthesis", "Empathy Mapping", "Usability Evaluation", "Survey Design"],
      gradient: "from-accent to-primary",
      iconBg: "bg-gradient-to-br from-accent to-accent/80",
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: ["SQL", "Python", "Tableau", "Salesforce", "Excel/VBA", "CRM & Funnel Analytics", "A/B Testing Logic", "KPI Design"],
      gradient: "from-[#f59e0b] to-[#d97706]",
      iconBg: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    },
    {
      title: "Healthcare & Domain",
      icon: HeartPulse,
      skills: ["EHR Systems (Epic)", "Telehealth Workflows", "Health Policy & Regulation", "Population Health", "Digital Health Interventions", "Clinical-Technical Translation", "Health Equity"],
      gradient: "from-secondary to-primary",
      iconBg: "bg-gradient-to-br from-secondary to-primary",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-sm font-mono text-primary tracking-wider uppercase">02</span>
            <span className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A blend of technical capabilities and domain expertise for building impactful health tech solutions.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div 
                key={category.title} 
                variants={cardVariants}
                custom={categoryIndex}
              >
                <motion.div
                  className="group relative h-full p-6 bg-card rounded-2xl border border-border overflow-hidden cursor-default"
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px] bg-gradient-to-br ${category.gradient}`}>
                    <div className="absolute inset-[1px] bg-card rounded-2xl" />
                  </div>
                  
                  {/* Background glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl ${category.iconBg} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-sm leading-tight">{category.title}</h3>
                    </div>

                    {/* Skills list */}
                    <ul className="space-y-2.5">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          className="group/item flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.03 + categoryIndex * 0.1, duration: 0.3 }}
                        >
                          <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                          <span className="flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.gradient}`} aria-hidden="true" />
                            {skill}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
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
