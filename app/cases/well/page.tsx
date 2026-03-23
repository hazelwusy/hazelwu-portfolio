"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { CaseStudyModal } from "@/components/case-study-modal"
import MarketIntelligenceDashboard from "@/components/artifacts/market-intelligence-dashboard"
import EscalationFlow from "@/components/artifacts/escalation-logic"
import MCPArchitecture from "@/components/artifacts/mcp-architecture"

const tags = ["Product Strategy", "AI/MCP Architecture", "Knowledge Management", "Financial Modeling"]

const artifacts = [
  { title: "MCP Server Architecture", description: "Dual-track MCP infrastructure enabling AI agents across internal and consumer surfaces", redacted: false },
  { title: "AI-to-Human Escalation Logic", description: "Three-tier classification system for safe AI handoff boundaries in healthcare", redacted: false },
  { title: "Market Intelligence Dashboard", description: "Platform evaluation with TCO modeling and ticket deflection analysis", redacted: false },
]

const metrics = [
  { value: "2", label: "product PRDs shipped" },
  { value: "10–20x", label: "projected ROI" },
  { value: "15+", label: "inquiry workflows mapped" },
  { value: "10%+", label: "routine inquiries automatable" },
]

export default function WellCasePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const modals = {
    mcp: {
      title: "MCP Server Architecture",
    },
    escalation: {
      title: "AI-to-Human Escalation Logic",
    },
    market: {
      title: "Market Intelligence Dashboard",
    },
  } as const

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
                i === 0 ? 'bg-primary/10 text-primary' : 
                i === 1 ? 'bg-secondary/10 text-secondary' :
                i === 2 ? 'bg-accent/10 text-accent' :
                'bg-warm/10 text-warm'
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
          Scaling Care Navigation:{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI Workflow Automation & Knowledge Management
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-warm" />
          Well · Product Management Intern · Sep 2025 – Present · Chapel Hill, NC
        </motion.p>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
            The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"As Well's digital health platform scaled, clinical and non-clinical support teams were hitting bottlenecks. Fragmented internal documentation made it hard for guides to quickly resolve member questions, and there was no standardized way to expose the platform's capabilities to AI-powered tools. At the same time, members increasingly expected to interact with their health data through AI assistants — and we had no infrastructure for that."}
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
            <span className="w-8 h-px bg-gradient-to-r from-secondary to-transparent" />
            What I Did
          </h2>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-3">AI workflow architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I authored two product requirements documents: one for an internal Model Context Protocol (MCP) server — the infrastructure that would let AI agents safely interact with the platform — and one for an AI-powered help center that would surface contextual answers to members in real time. Both involved mapping complex conversational workflows: when a member asks about benefits vs. when they need clinical triage, what gets automated vs. what requires a human handoff. I defined strict AI-to-human escalation boundaries to protect patient safety, and coordinated across engineering, clinical, and QA teams. The core design insight was 'build once, deploy everywhere' — one MCP server powering multiple AI surfaces rather than building custom integrations for each."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-warm/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-warm" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Knowledge management & cost deflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I evaluated knowledge management platforms — conducting a competitive analysis of Salesforce Knowledge, Zendesk Guide, and GitBook against our core requirements: time-to-market, AI-powered search, actionable analytics, and brand fit. I built a financial model using real support volume data and demonstrated that even a conservative ticket deflection rate would yield significant ROI, freeing the team to focus on complex, high-touch member issues."}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-secondary/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-secondary" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Agile execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I wrote and maintained a backlog of user stories spanning both product workstreams, and partnered daily with engineering to keep cross-functional teams aligned — translating clinical needs into technical specs and keeping everyone building toward the same goal."}
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
            <span className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            Portfolio Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {artifacts.map((artifact, i) => (
              <motion.button
                key={artifact.title}
                type="button"
                onClick={() => {
                  if (artifact.title === "MCP Server Architecture") setActiveModal("mcp")
                  if (artifact.title === "AI-to-Human Escalation Logic") setActiveModal("escalation")
                  if (artifact.title === "Market Intelligence Dashboard") setActiveModal("market")
                }}
                className={`group p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all text-left ${
                  i === 0 ? 'hover:bg-primary/5' : i === 1 ? 'hover:bg-secondary/5' : 'hover:bg-warm/5'
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{artifact.title}</h3>
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
            <span className="w-8 h-px bg-gradient-to-r from-warm to-transparent" />
            Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${
                  i === 0 ? 'from-primary to-secondary' :
                  i === 1 ? 'from-warm to-warm-light' :
                  i === 2 ? 'from-secondary to-accent' :
                  'from-accent to-primary'
                } bg-clip-text text-transparent`}>{metric.value}</div>
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
            <span className="w-8 h-px bg-gradient-to-r from-primary via-warm to-transparent" />
            What I Learned
          </h2>
          <blockquote className="relative border-l-4 border-gradient pl-6 py-2 italic text-muted-foreground text-lg bg-gradient-to-r from-card to-transparent rounded-r-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-warm to-accent rounded-full" />
            {"\"The best product work I did here wasn't the PRD — it was learning to translate between clinical language and engineering language until everyone was building the same thing.\""}
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
        open={activeModal === "mcp"}
        onOpenChange={(open) => setActiveModal(open ? "mcp" : null)}
        title={modals.mcp.title}
        size="full"
      >
        <MCPArchitecture />
      </CaseStudyModal>

      <CaseStudyModal
        open={activeModal === "escalation"}
        onOpenChange={(open) => setActiveModal(open ? "escalation" : null)}
        title={modals.escalation.title}
        size="full"
      >
        <EscalationFlow />
      </CaseStudyModal>

      <CaseStudyModal
        open={activeModal === "market"}
        onOpenChange={(open) => setActiveModal(open ? "market" : null)}
        title={modals.market.title}
        size="full"
      >
        <MarketIntelligenceDashboard />
      </CaseStudyModal>
    </main>
  )
}
