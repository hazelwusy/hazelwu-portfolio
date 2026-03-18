"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WorkProcess() {
  const cases = [
    {
      title: "AI Workflow Automation & Knowledge Management",
      subtitle: "Well · Product Management",
      summary: "Authored a PRD for an AI-powered internal workflow system and evaluated knowledge management platforms with a data-backed ROI model.",
      href: "/cases/well",
      accentColor: "bg-[#87a878]",
    },
    {
      title: "Global GTM & User Empathy Mapping",
      subtitle: "Strutt Inc. · GTM Strategy",
      summary: "Designed the end-to-end user research methodology and synthesized 200+ interviews into 5 actionable personas that reshaped the company's positioning.",
      href: "/cases/strutt",
      accentColor: "bg-[#c9a66b]",
    },
    {
      title: "Strategic Interventions for Health Equity",
      subtitle: "Corewell Health · Strategy & Operations",
      summary: "Co-designed a community health literacy program and defined population health KPIs correlating digital engagement with clinical outcomes.",
      href: "/cases/corewellhealth",
      accentColor: "bg-[#6b8f5c]",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Selected Cases
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <motion.div key={caseItem.title} variants={itemVariants}>
                <Link href={caseItem.href}>
                  <motion.div
                    className="relative group h-full bg-card rounded-lg border border-border overflow-hidden cursor-pointer"
                    whileHover={{ y: -8, borderColor: "var(--primary)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Accent bar at top */}
                    <div className={`h-1.5 w-full ${caseItem.accentColor}`} />
                    
                    <div className="p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-2 text-foreground leading-tight">
                          {caseItem.title}
                        </h3>
                        <p className="text-sm text-primary mb-3">{caseItem.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {caseItem.summary}
                        </p>
                        
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
