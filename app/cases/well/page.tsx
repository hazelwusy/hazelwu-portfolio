"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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
          Scaling Care Navigation: AI Workflow Automation & Knowledge Management
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12"
        >
          Well · Product Management Intern · Sep 2025 – Present · Chapel Hill, NC
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
          <h2 className="text-2xl font-bold text-foreground mb-6">What I Did</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">AI workflow architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I authored two product requirements documents: one for an internal Model Context Protocol (MCP) server — the infrastructure that would let AI agents safely interact with the platform — and one for an AI-powered help center that would surface contextual answers to members in real time. Both involved mapping complex conversational workflows: when a member asks about benefits vs. when they need clinical triage, what gets automated vs. what requires a human handoff. I defined strict AI-to-human escalation boundaries to protect patient safety, and coordinated across engineering, clinical, and QA teams. The core design insight was 'build once, deploy everywhere' — one MCP server powering multiple AI surfaces rather than building custom integrations for each."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Knowledge management & cost deflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I evaluated knowledge management platforms — conducting a competitive analysis of Salesforce Knowledge, Zendesk Guide, and GitBook against our core requirements: time-to-market, AI-powered search, actionable analytics, and brand fit. I built a financial model using real support volume data and demonstrated that even a conservative ticket deflection rate would yield significant ROI, freeing the team to focus on complex, high-touch member issues."}
              </p>
            </div>

            <div>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Portfolio Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {artifacts.map((artifact) => (
              <button
                key={artifact.title}
                type="button"
                onClick={() => {
                  if (artifact.title === "MCP Server Architecture") setActiveModal("mcp")
                  if (artifact.title === "AI-to-Human Escalation Logic") setActiveModal("escalation")
                  if (artifact.title === "Market Intelligence Dashboard") setActiveModal("market")
                }}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors text-left"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{artifact.title}</h3>
                  {artifact.redacted && (
                    <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">Redacted</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{artifact.description}</p>
              </button>
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
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
