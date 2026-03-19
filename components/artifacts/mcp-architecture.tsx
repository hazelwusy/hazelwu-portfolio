import { useState } from "react";

const personas = [
  {
    id: "engineer",
    label: "Engineers",
    icon: "⌨",
    color: "#7F77DD",
    colorLight: "#EEEDFE",
    tools: "AI-powered IDE",
    flow: [
      "Query member records in dev environment",
      "Test feature workflows without admin UI",
      "Grant test rewards for QA scenarios",
    ],
    server: "internal",
  },
  {
    id: "qa",
    label: "QA teams",
    icon: "🔍",
    color: "#1D9E75",
    colorLight: "#E1F5EE",
    tools: "AI coding assistant",
    flow: [
      "Create test members with specific states",
      "Run validation flows across environments",
      "Verify data integrity post-deployment",
    ],
    server: "internal",
  },
  {
    id: "guide",
    label: "Care navigators",
    icon: "💬",
    color: "#D85A30",
    colorLight: "#FAECE7",
    tools: "AI agent platform",
    flow: [
      "Look up member benefits in real time",
      "Draft personalized responses",
      "Auto-create support cases via MCP",
    ],
    server: "internal",
  },
  {
    id: "member",
    label: "Members",
    icon: "👤",
    color: "#378ADD",
    colorLight: "#E6F1FB",
    tools: "ChatGPT / Claude",
    flow: [
      '"What\'s my step count today?"',
      '"Log 165 lbs weight"',
      '"What should I focus on this week?"',
    ],
    server: "external",
  },
];

const internalServices = [
  "Member data service",
  "Reward engine",
  "Health data API",
  "Program management",
  "Care journey service",
];

const phases = [
  {
    num: "01",
    title: "Internal MCP server",
    desc: "~20 admin tools for engineering, QA, and operations. Local STDIO → hosted.",
    status: "shipped",
  },
  {
    num: "02",
    title: "Care navigator AI tooling",
    desc: "Integrate MCP with AI agent platform for frontline support staff.",
    status: "in progress",
  },
  {
    num: "03",
    title: "External consumer MCP",
    desc: "OAuth-based member access through consumer AI assistants.",
    status: "planned",
  },
  {
    num: "04",
    title: "Expand & scale",
    desc: "Voice integration, proactive insights, cross-service workflows.",
    status: "future",
  },
];

const statusColors = {
  shipped: { bg: "#E1F5EE", text: "#0F6E56", label: "Shipped" },
  "in progress": { bg: "#FAEEDA", text: "#854F0B", label: "In progress" },
  planned: { bg: "#E6F1FB", text: "#185FA5", label: "Planned" },
  future: { bg: "#F1EFE8", text: "#5F5E5A", label: "Future" },
};

export default function MCPArchitecture() {
  const [activePersona, setActivePersona] = useState(null);
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <div
      style={{
        fontFamily:
          '"Instrument Sans", "DM Sans", -apple-system, sans-serif',
        maxWidth: 820,
        margin: "0 auto",
        color: "#2C2C2A",
        padding: "0 16px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#7F77DD",
            marginBottom: 8,
          }}
        >
          Portfolio artifact · Redacted
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            lineHeight: 1.2,
            margin: "0 0 8px",
            letterSpacing: -0.5,
          }}
        >
          MCP server architecture
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#888780",
            margin: 0,
            lineHeight: 1.5,
            maxWidth: 600,
          }}
        >
          Unified infrastructure enabling AI agents to interact with a digital
          health platform — one protocol powering internal operations and
          consumer-facing experiences.
        </p>
      </div>

      {/* Tab nav */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 28,
          borderBottom: "1px solid #D3D1C7",
        }}
      >
        {[
          { id: "architecture", label: "System architecture" },
          { id: "personas", label: "User flows" },
          { id: "roadmap", label: "Phased rollout" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? "#7F77DD" : "#888780",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #7F77DD"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Architecture Tab */}
      {activeTab === "architecture" && (
        <div>
          {/* Core architecture diagram */}
          <div
            style={{
              position: "relative",
              padding: 24,
              background: "#FAFAF8",
              borderRadius: 12,
              border: "1px solid #E8E7E3",
            }}
          >
            {/* AI Clients row */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 8,
                fontSize: 11,
                fontWeight: 600,
                color: "#888780",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              AI clients
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              {["AI-powered IDE", "AI agent platform", "ChatGPT", "Claude"].map(
                (t) => (
                  <div
                    key={t}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 20,
                      background: "#fff",
                      border: "1px solid #D3D1C7",
                      fontSize: 12,
                      color: "#5F5E5A",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </div>
                )
              )}
            </div>

            {/* Arrow down */}
            <div
              style={{
                textAlign: "center",
                color: "#B4B2A9",
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              ↓ MCP Protocol ↓
            </div>

            {/* Two servers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 20,
              }}
            >
              {/* Internal */}
              <div
                style={{
                  background: "#EEEDFE",
                  borderRadius: 10,
                  padding: 16,
                  border: "1px solid #CECBF6",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#534AB7",
                    marginBottom: 4,
                  }}
                >
                  Internal MCP server
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#7F77DD",
                    marginBottom: 10,
                  }}
                >
                  Service account / internal OAuth
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {[
                    "Member lookup",
                    "Reward ops",
                    "Health queries",
                    "Program mgmt",
                    "QA automation",
                    "Case creation",
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 10,
                        padding: "3px 8px",
                        borderRadius: 4,
                        background: "#fff",
                        color: "#534AB7",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External */}
              <div
                style={{
                  background: "#E6F1FB",
                  borderRadius: 10,
                  padding: 16,
                  border: "1px solid #B5D4F4",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#185FA5",
                    marginBottom: 4,
                  }}
                >
                  External consumer MCP
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#378ADD",
                    marginBottom: 10,
                  }}
                >
                  Consumer OAuth flow
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {[
                    "Health queries",
                    "Data logging",
                    "Reward balance",
                    "Program progress",
                    "Recommendations",
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 10,
                        padding: "3px 8px",
                        borderRadius: 4,
                        background: "#fff",
                        color: "#185FA5",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div
              style={{
                textAlign: "center",
                color: "#B4B2A9",
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              ↓ REST API translation layer ↓
            </div>

            {/* Backend services */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 8,
                fontSize: 11,
                fontWeight: 600,
                color: "#888780",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Existing platform services
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {internalServices.map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "#F1EFE8",
                    border: "1px solid #D3D1C7",
                    fontSize: 11,
                    color: "#5F5E5A",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Key insight */}
          <div
            style={{
              marginTop: 20,
              padding: "14px 18px",
              background: "#EEEDFE",
              borderRadius: 8,
              borderLeft: "3px solid #7F77DD",
            }}
          >
            <div
              style={{ fontSize: 12, fontWeight: 600, color: "#534AB7", marginBottom: 4 }}
            >
              Core design insight
            </div>
            <div style={{ fontSize: 13, color: "#3C3489", lineHeight: 1.5 }}>
              The MCP layer is purely an interface — no new business logic. It
              translates MCP protocol to existing REST APIs. This means{" "}
              <strong>zero changes to mobile apps, web apps, or core services</strong>
              . Build once, deploy across every AI tool.
            </div>
          </div>
        </div>
      )}

      {/* Personas Tab */}
      {activeTab === "personas" && (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {personas.map((p) => (
              <button
                key={p.id}
                onClick={() =>
                  setActivePersona(activePersona === p.id ? null : p.id)
                }
                style={{
                  padding: 14,
                  borderRadius: 10,
                  border:
                    activePersona === p.id
                      ? `2px solid ${p.color}`
                      : "1px solid #D3D1C7",
                  background: activePersona === p.id ? p.colorLight : "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 6 }}>{p.icon}</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: activePersona === p.id ? p.color : "#2C2C2A",
                  }}
                >
                  {p.label}
                </div>
                <div style={{ fontSize: 11, color: "#888780" }}>
                  via {p.tools}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: p.server === "internal" ? "#EEEDFE" : "#E6F1FB",
                    color: p.server === "internal" ? "#534AB7" : "#185FA5",
                    display: "inline-block",
                    fontWeight: 600,
                  }}
                >
                  {p.server} MCP
                </div>
              </button>
            ))}
          </div>

          {activePersona && (
            <div
              style={{
                padding: 20,
                borderRadius: 10,
                background: "#FAFAF8",
                border: "1px solid #E8E7E3",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#888780",
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Example conversation flow
              </div>
              {personas
                .find((p) => p.id === activePersona)
                .flow.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background:
                          personas.find((p) => p.id === activePersona).color,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#2C2C2A",
                        lineHeight: 1.5,
                        padding: "2px 0",
                      }}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              <div
                style={{
                  marginTop: 14,
                  padding: "10px 14px",
                  borderRadius: 6,
                  background: "#fff",
                  border: "1px dashed #D3D1C7",
                  fontSize: 12,
                  color: "#888780",
                  fontStyle: "italic",
                }}
              >
                All interactions go through MCP → existing REST APIs. No new
                backend logic required.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Roadmap Tab */}
      {activeTab === "roadmap" && (
        <div>
          {phases.map((phase, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 16,
                marginBottom: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#D3D1C7",
                  minWidth: 40,
                  fontFamily: "monospace",
                  lineHeight: 1,
                  paddingTop: 4,
                }}
              >
                {phase.num}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: 16,
                  borderRadius: 10,
                  background: "#FAFAF8",
                  border: "1px solid #E8E7E3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#2C2C2A" }}>
                    {phase.title}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 10,
                      background: statusColors[phase.status].bg,
                      color: statusColors[phase.status].text,
                    }}
                  >
                    {statusColors[phase.status].label}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: "#888780", lineHeight: 1.5 }}>
                  {phase.desc}
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 8,
              padding: "14px 18px",
              background: "#E1F5EE",
              borderRadius: 8,
              borderLeft: "3px solid #1D9E75",
            }}
          >
            <div
              style={{ fontSize: 12, fontWeight: 600, color: "#0F6E56", marginBottom: 4 }}
            >
              Phasing strategy
            </div>
            <div style={{ fontSize: 13, color: "#085041", lineHeight: 1.5 }}>
              Ship narrow, validate with real usage data, expand based on
              demand. Internal MCP de-risks external by proving the protocol and
              architecture patterns first.
            </div>
          </div>
        </div>
      )}

      {/* Footer note */}
      <div
        style={{
          marginTop: 28,
          paddingTop: 16,
          borderTop: "1px solid #E8E7E3",
          fontSize: 11,
          color: "#B4B2A9",
          lineHeight: 1.5,
        }}
      >
        Company-specific details (service names, API endpoints, staffing ratios,
        strategic KPIs, and employee names) have been redacted. Architecture
        patterns and product thinking are preserved.
      </div>
    </div>
  );
}
