"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Target } from "lucide-react"
import { motion } from "framer-motion"
import { CaseStudyModal } from "@/components/case-study-modal"
import ResearchMethodology from "@/components/artifacts/strutt-research-methodology"
import InsightDashboard from "@/components/artifacts/strutt-insight-dashboard"

const tags = ["User Research", "JTBD Framework", "Pricing Strategy", "Growth Analytics"]

const artifacts = [
  { title: "Research Methodology", description: "Four-phase qualitative system from screening to synthesis", redacted: false },
  { title: "Insight Dashboard", description: "Need themes, personas, JTBD, and pricing analysis from 200+ interviews", redacted: false },
]

const metrics = [
  { value: "CES 2026", label: "Best of Innovation award" },
  { value: "200+", label: "consumer & clinical interviews synthesized" },
  { value: "5", label: "personas adopted for global GTM" },
  { value: "84%", label: "Day-7 community retention" },
]

export default function StruttCasePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const modals = {
    methodology: {
      title: "Research Methodology",
    },
    insights: {
      title: "Insight Dashboard",
    },
  } as const

  return (
    <main className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-warm/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                i === 0 ? 'bg-warm/10 text-warm' : 
                i === 1 ? 'bg-warm-light/10 text-warm' :
                i === 2 ? 'bg-primary/10 text-primary' :
                'bg-secondary/10 text-secondary'
              }`}
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
          From Medical Device to Lifestyle Brand:{" "}
          <span className="text-warm">
            Global GTM & User Empathy Mapping
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12 flex items-center gap-2"
        >
          <Target className="w-4 h-4 text-warm" />
          Strutt · GTM Strategy Intern · May 2025 – Feb 2026 · Singapore (Remote)
        </motion.p>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-warm to-transparent" />
            The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"Strutt was preparing to launch an intelligent mobility device into the U.S. market, but faced a fundamental positioning question: was this a 'durable medical equipment' product, or something more? The team needed to deeply understand their users — people with conditions like MS, chronic fatigue, and various mobility challenges — to figure out not just what features to build, but what story to tell."}
          </p>
        </motion.section>

        {/* What I Did */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
            What I Did
          </h2>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-warm/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-warm" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Designing the research methodology</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I authored the complete user research SOP — a multi-stage qualitative framework covering screening, discovery interviews, usability evaluation, and pricing research. The methodology was designed with sensitivity at its core: these are users sharing vulnerable, deeply personal experiences. I built a structured-but-flexible conversation guide anchored around three core questions: What is the user's current situation? What are their ideal expectations? And where does our product design fit or fail? I also created a user profile template capturing mobility specifics, media behavior, purchase patterns, and community advocacy potential."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{"The 'Safety to Joy' insight"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"The biggest finding came from synthesizing 200+ interviews using a Jobs-to-Be-Done framework. I organized all user needs into four core 'jobs': eliminate daily friction, expand physical and psychological boundaries, provide holistic safety, and express personal identity. About 60% of users anchored on safety as non-negotiable, while 40% were primarily motivated by joy, independence, and self-expression. But once safety felt certain, even the safety-first group wanted to talk about freedom. The product wasn't competing with other wheelchairs — it was competing with the feeling of being stuck."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-secondary/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-secondary" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Persona development & pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I distilled the research into 5 distinct personas — from 'Independence Rebuilders' to 'Lifestyle Tech Evangelists' — each with specific acquisition channel and messaging recommendations. Willingness-to-pay analysis revealed that users anchored expectations to existing complex rehab technology prices, enabling a value-based pricing strategy built around 'dignity and unassisted mobility' rather than hardware specs."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-accent/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Growth analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I built SQL and Tableau dashboards to track our beta community, monitoring the full engagement funnel from landing page to community group to interview pipeline. I designed CRM segmentation logic to distinguish casual subscribers from high-potential candidates, with conversion metrics for each tier."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-warm-light/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-warm-light" />
              <h3 className="text-lg font-semibold text-foreground mb-3">B2B partnerships & industry recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Beyond end-user research, I supported strategic outreach to B2B stakeholders — clinicians, DME distributors, and rehab facilities — to validate channel fit and reimbursement positioning. The combined insights across consumer and clinical audiences directly informed the go-to-market narrative Strutt brought to CES 2026, where the product won two awards including CES Best of Innovation."}
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
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-secondary to-transparent" />
            Portfolio Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artifacts.map((artifact, i) => (
              <motion.button
                key={artifact.title}
                type="button"
                onClick={() => {
                  if (artifact.title === "Research Methodology") setActiveModal("methodology")
                  if (artifact.title === "Insight Dashboard") setActiveModal("insights")
                }}
                className={`group p-4 bg-card border border-border rounded-xl hover:border-warm/50 transition-all text-left ${
                  i === 0 ? 'hover:bg-warm/5' : 'hover:bg-primary/5'
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-warm transition-colors">{artifact.title}</h3>
                  {artifact.redacted && (
                    <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">Redacted</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{artifact.description}</p>
              </motion.button>
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
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="p-4 bg-card border border-border rounded-xl text-center hover:border-warm/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className={`text-2xl font-bold mb-1 ${
                  i === 0 ? 'text-warm' :
                  i === 1 ? 'text-primary' :
                  i === 2 ? 'text-secondary' :
                  'text-accent'
                }`}>{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
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
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-warm via-primary to-transparent" />
            What I Learned
          </h2>
          <blockquote className="relative border-l-4 pl-6 py-2 italic text-muted-foreground text-lg bg-gradient-to-r from-card to-transparent rounded-r-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-warm via-primary to-secondary rounded-full" />
            {"\"The most important data point in user research isn't what people say they want — it's the gap between their current reality and the life they imagine. When a user tells you they haven't left the house in 10 years, that's not a feature request. That's the entire product.\""}
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all cases
          </Link>
        </motion.div>
      </div>

      <CaseStudyModal
        open={activeModal === "methodology"}
        onOpenChange={(open) => setActiveModal(open ? "methodology" : null)}
        title={modals.methodology.title}
        size="full"
      >
        <ResearchMethodology />
      </CaseStudyModal>

      <CaseStudyModal
        open={activeModal === "insights"}
        onOpenChange={(open) => setActiveModal(open ? "insights" : null)}
        title={modals.insights.title}
        size="full"
      >
        <InsightDashboard />
      </CaseStudyModal>
    </main>
  )
}
