"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Beaker, FlaskConical, Users } from "lucide-react"
import { motion } from "framer-motion"

const researchExperiences = [
  {
    title: "Research Assistant",
    organization: "Mental Health Systems Research, UNC Gillings School of Global Public Health",
    pi: "PI: Dr. Kristen Hassmiller-Lich",
    period: "May 2024 – Present",
    location: "Chapel Hill, NC",
    description: [
      "Conducted 40+ semi-structured stakeholder interviews across Washtenaw County's acute mental health crisis system; applied systematic thematic coding in Dedoose to identify bottlenecks in care coordination.",
      "Developed system dynamics simulation models in Stella Architect to quantify crisis service utilization under varying resource constraints; scenario analyses projected a 23% reduction in average wait times.",
      "Contributed to county-level systems mapping research examining service fragmentation and capacity constraints in behavioral health crisis access.",
    ],
    gradient: "from-primary to-secondary",
    dotColor: "bg-primary",
    icon: Users,
    isCurrent: true,
  },
  {
    title: "Research Assistant & Project Manager",
    organization: "Penn Lab, UNC School of Medicine",
    pi: "PI: Dr. David Penn",
    period: "May 2023 – Present",
    location: "Chapel Hill, NC",
    projects: [
      {
        name: "SCIT Meta-Analysis",
        details: [
          "Led a 5-person research team through systematic review and meta-analysis of Social Cognition and Interaction Training (SCIT) for psychosis populations.",
          "Executed quantitative evidence synthesis using Hedges' g effect sizes; conducted subgroup, moderator, meta-regression, and sensitivity analyses.",
        ],
      },
      {
        name: "Horyzons USA (PI: Dr. Kelsey Ludwig)",
        details: [
          "Analyzed longitudinal user activity data to assess retention and engagement in a digital mental health intervention for first-episode psychosis.",
          "Extracted patterns from user logs and journal activity to understand therapeutic engagement over time.",
        ],
      },
    ],
    gradient: "from-warm to-warm-light",
    dotColor: "bg-warm",
    icon: FlaskConical,
    isCurrent: true,
  },
  {
    title: "Research Assistant",
    organization: "UNC School of Social Work",
    pi: "PI: Dr. Jodi Constantine Brown",
    period: "Aug 2022 – Aug 2023",
    location: "Chapel Hill, NC",
    description: [
      "Co-authored a scoping review examining social work literature on grief and bereavement interventions; developed and applied systematic search protocols across PubMed and PsycINFO.",
      "Conducted full-text screening and narrative synthesis of 180+ studies, contributing to manuscript draft and revisions.",
    ],
    gradient: "from-secondary to-accent",
    dotColor: "bg-secondary",
    icon: Beaker,
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

export default function ResearchExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-warm/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm font-mono text-warm tracking-wider uppercase">Research</span>
            <span className="w-12 h-px bg-warm/40" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Research & Project Experience
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Contributing to mental health systems research, evidence synthesis, and digital health interventions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-warm/30 rounded-full" />

          {researchExperiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot with pulse for current */}
                <div className="absolute left-0 top-1">
                  <div className={`relative w-6 h-6 rounded-full ${exp.dotColor} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-3 h-3 text-white" />
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
                          {exp.organization}
                        </p>
                        {exp.pi && (
                          <p className="text-sm text-muted-foreground italic">
                            {exp.pi}
                          </p>
                        )}
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

                    {/* Description or Projects */}
                    {exp.description ? (
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : exp.projects ? (
                      <div className="space-y-4">
                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex} className="border-l-2 border-warm/30 pl-4">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              {project.name}
                            </h4>
                            <ul className="space-y-1.5">
                              {project.details.map((detail, dIndex) => (
                                <li key={dIndex} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                  <span className="text-warm mt-1.5 flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Navigation links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="pt-12 border-t border-border mt-8 flex flex-col sm:flex-row justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            View Professional Experience
            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
