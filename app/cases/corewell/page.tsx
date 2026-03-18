"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const tags = ["Health Equity", "Population Health", "Community Research", "Intervention Design"]

const artifacts = [
  { title: "Final Proposal", description: "Executive presentation delivered to health system leadership", redacted: false },
  { title: "Evaluation Framework", description: "KPIs linking digital engagement to clinical outcomes", redacted: false },
  { title: "Partnership Map", description: "6-organization stakeholder ecosystem", redacted: false },
  { title: "Budget Model", description: "Per-event cost and scaling projections", redacted: false },
]

const metrics = [
  { value: "35+", label: "stakeholder interviews across system" },
  { value: "50K+", label: "Epic encounters analyzed" },
  { value: "6", label: "community partnerships secured" },
  { value: "Dual-track", label: "KPI framework adopted" },
]

export default function CorewellCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
        >
          Bridging the Digital Divide: Strategic Interventions for Health Equity
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-2"
        >
          Corewell Health · Strategy & Operations Intern · May 2024 – Jul 2024 · Grand Rapids, MI
        </motion.p>

        {/* Context line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm text-muted-foreground/70 mb-12"
        >
          Morehead-Cain Civic Collaboration — 5-person scholar team, 8-week engagement
        </motion.p>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            {"Corewell Health's telehealth and digital health tools had strong adoption overall — but those numbers masked a critical equity gap. Vulnerable populations in Grand Rapids were systematically underutilizing these tools, leading to higher ED visits, longer hospital stays, and worse chronic disease management."}
          </p>
        </motion.section>

        {/* What I Did */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">What I Did</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Reframing the problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Through stakeholder conversations — including with the West Michigan President and frontline community health workers — we learned the barrier wasn't access to technology. Most community members had smartphones. The barrier was health literacy: the ability to find, understand, and actually use health information. This shifted our approach from 'give people more tools' to 'meet people where they are and teach them what they already have.'"}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Ecosystem mapping</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I helped scan 6 key touchpoints in the Corewell ecosystem — from virtual urgent care to school health initiatives to community ministries — to find where digital health literacy was falling through the cracks. We used national health literacy data to focus on the communities most affected."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Designing the Corewell Academy</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"We co-designed a three-pronged intervention: community health fairs at trusted neighborhood locations with hands-on patient portal setup and workshops; a virtual health resource tab; and online seminars for nutrition and lifestyle education. I contributed to budget modeling, partnership strategy (6 initial partners), and the evaluation framework."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Population health KPIs</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I defined dual-track metrics: institutional (ER utilization, revisit rate, length of stay, virtual appointment frequency) and community-reported (confidence with health tech, literacy scores, chronic condition management). The key was correlating digital engagement with clinical outcomes."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Portfolio Artifacts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Portfolio Artifacts</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {artifacts.map((artifact) => (
              <div
                key={artifact.title}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{artifact.title}</h3>
                  {artifact.redacted && (
                    <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">Redacted</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{artifact.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 bg-card border border-border rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What I Learned */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">What I Learned</h2>
          <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground text-lg">
            {"\"I went in thinking this was a technology problem. It's not. It's a trust problem, an education problem, and a systems design problem. Technology is just one lever — and it only works when you pull the others first.\""}
          </blockquote>
        </motion.section>

        {/* Bottom Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="pt-8 border-t border-border"
        >
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all cases
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
