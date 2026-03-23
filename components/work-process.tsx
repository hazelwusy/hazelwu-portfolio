"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function WorkProcess() {
  const cases = [
    {
      title: "AI Workflow Automation & Knowledge Management",
      subtitle: "Well · Product Management",
      summary: "Authored a PRD for an AI-powered internal workflow system and evaluated knowledge management platforms with a data-backed ROI model.",
      href: "/cases/well",
      icon: Sparkles,
      gradient: "from-primary to-accent",
      number: "01",
    },
    {
      title: "Global GTM & User Empathy Mapping",
      subtitle: "Strutt · GTM Strategy",
      summary: "Designed the end-to-end user research methodology and synthesized 200+ interviews into 5 actionable personas that reshaped the company's positioning.",
      href: "/cases/strutt",
      icon: Target,
      gradient: "from-[#f59e0b] to-[#d97706]",
      number: "02",
    },
    {
      title: "Strategic Interventions for Health Equity",
      subtitle: "Corewell Health · Strategy & Operations",
      summary: "Co-designed a community health literacy program and defined population health KPIs correlating digital engagement with clinical outcomes.",
      href: "/cases/corewell",
      icon: Zap,
      gradient: "from-secondary to-primary",
      number: "03",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-sm font-mono text-primary tracking-wider uppercase">04</span>
            <span className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Selected Cases
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real-world projects where I've driven impact through product thinking and strategic analysis.
          </p>
        </motion.div>

        {/* Cases grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem) => {
              const Icon = caseItem.icon
              return (
                <motion.div key={caseItem.title} variants={cardVariants}>
                  <Link href={caseItem.href}>
                    <motion.div
                      className="group relative h-full bg-card rounded-2xl border border-border overflow-hidden cursor-pointer"
                      whileHover={{ 
                        y: -8,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Number badge */}
                      <div className="absolute top-4 right-4 text-5xl font-bold text-muted/10 group-hover:text-primary/10 transition-colors">
                        {caseItem.number}
                      </div>
                      
                      {/* Top accent bar with animation */}
                      <div className={`h-1 w-full bg-gradient-to-r ${caseItem.gradient} relative overflow-hidden`}>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                      </div>
                      
                      {/* Hover gradient border */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px] bg-gradient-to-br ${caseItem.gradient}`}>
                        <div className="absolute inset-[1px] bg-card rounded-2xl" />
                      </div>
                      
                      <div className="relative z-10 p-6">
                        {/* Icon */}
                        <motion.div 
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${caseItem.gradient} shadow-lg mb-4`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>

                        {/* Content */}
                        <h3 className="font-bold text-lg mb-2 text-foreground leading-tight group-hover:text-primary transition-colors">
                          {caseItem.title}
                        </h3>
                        <p className="text-sm text-primary/80 mb-3 font-medium">{caseItem.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          {caseItem.summary}
                        </p>
                        
                        {/* CTA */}
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                          <span className="animated-underline">Read case study</span>
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </span>
                      </div>

                      {/* Decorative glow */}
                      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
