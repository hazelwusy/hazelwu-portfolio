"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const tags = ["User Research", "JTBD Framework", "Pricing Strategy", "Growth Analytics"]

const artifacts = [
  { title: "User Research SOP", description: "Multi-stage qualitative methodology I authored", redacted: false },
  { title: "Want & Need Analysis", description: "JTBD framework applied to 200+ interviews", redacted: true },
  { title: "User Profile Template", description: "Multi-dimensional data capture framework", redacted: false },
  { title: "Engagement Funnel", description: "CRM segmentation and conversion pathway", redacted: false },
  { title: "5 Personas", description: "Personas with acquisition strategy", redacted: true },
]

const metrics = [
  { value: "CES 2026", label: "Best of Innovation award" },
  { value: "200+", label: "consumer & clinical interviews synthesized" },
  { value: "5", label: "personas adopted for global GTM" },
  { value: "84%", label: "Day-7 community retention" },
]

export default function StruttCasePage() {
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
          From Medical Device to Lifestyle Brand: Global GTM & User Empathy Mapping
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12"
        >
          Strutt · GTM Strategy Intern · May 2025 – Feb 2026 · Singapore (Remote)
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
          <h2 className="text-2xl font-bold text-foreground mb-6">What I Did</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Designing the research methodology</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I authored the complete user research SOP — a multi-stage qualitative framework covering screening, discovery interviews, usability evaluation, and pricing research. The methodology was designed with sensitivity at its core: these are users sharing vulnerable, deeply personal experiences. I built a structured-but-flexible conversation guide anchored around three core questions: What is the user's current situation? What are their ideal expectations? And where does our product design fit or fail? I also created a user profile template capturing mobility specifics, media behavior, purchase patterns, and community advocacy potential."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{"The 'Safety to Joy' insight"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"The biggest finding came from synthesizing 200+ interviews using a Jobs-to-Be-Done framework. I organized all user needs into four core 'jobs': eliminate daily friction, expand physical and psychological boundaries, provide holistic safety, and express personal identity. About 60% of users anchored on safety as non-negotiable, while 40% were primarily motivated by joy, independence, and self-expression. But once safety felt certain, even the safety-first group wanted to talk about freedom. The product wasn't competing with other wheelchairs — it was competing with the feeling of being stuck."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Persona development & pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I distilled the research into 5 distinct personas — from 'Independence Rebuilders' to 'Lifestyle Tech Evangelists' — each with specific acquisition channel and messaging recommendations. Willingness-to-pay analysis revealed that users anchored expectations to existing complex rehab technology prices, enabling a value-based pricing strategy built around 'dignity and unassisted mobility' rather than hardware specs."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Growth analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I built SQL and Tableau dashboards to track our beta community, monitoring the full engagement funnel from landing page to community group to interview pipeline. I designed CRM segmentation logic to distinguish casual subscribers from high-potential candidates, with conversion metrics for each tier."}
              </p>
            </div>

            <div>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Portfolio Artifacts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
