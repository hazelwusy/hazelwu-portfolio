import { useState } from "react";

const categories = [
  {
    id: "automated",
    label: "Fully automated",
    color: "#1D9E75",
    colorLight: "#E1F5EE",
    colorBorder: "#9FE1CB",
    icon: "⚡",
    risk: "Low",
    description: "AI handles end-to-end. No human review needed.",
    examples: [
      {
        query: '"What\'s my step count today?"',
        reason: "Read-only health data, no clinical interpretation",
      },
      {
        query: '"How many reward points do I have?"',
        reason: "Read-only account data, zero clinical risk",
      },
      {
        query: '"Log 7 hours of sleep"',
        reason: "Self-reported metric, bounded input validation",
      },
    ],
    criteria: [
      "Read-only data retrieval",
      "Self-reported logging with bounded values",
      "Account/program status queries",
      "No clinical interpretation required",
    ],
  },
  {
    id: "ai-assist",
    label: "AI-assisted (human reviews)",
    color: "#BA7517",
    colorLight: "#FAEEDA",
    colorBorder: "#FAC775",
    icon: "🤝",
    risk: "Medium",
    description:
      "AI drafts a response or retrieves data; human navigator reviews before delivery.",
    examples: [
      {
        query: '"Is physical therapy covered under my plan?"',
        reason: "Benefits interpretation varies by plan — AI pulls data, human confirms",
      },
      {
        query: '"Can you help me find a dermatologist near me?"',
        reason: "Provider search is automatable, but recommendation needs human judgment",
      },
      {
        query: '"I want to change my primary care physician"',
        reason: "Write operation with downstream care implications",
      },
    ],
    criteria: [
      "Benefits interpretation (plan-specific nuance)",
      "Provider recommendations",
      "Account modifications with care implications",
      "Multi-step workflows requiring judgment",
    ],
  },
  {
    id: "escalate",
    label: "Immediate human escalation",
    color: "#A32D2D",
    colorLight: "#FCEBEB",
    colorBorder: "#F7C1C1",
    icon: "🚨",
    risk: "High",
    description:
      "AI must NOT attempt to answer. Route directly to qualified human support.",
    examples: [
      {
        query: '"I\'m feeling really dizzy and my chest hurts"',
        reason: "Potential medical emergency — clinical triage required",
      },
      {
        query: '"Should I take my medication with this supplement?"',
        reason: "Drug interaction — requires licensed clinical review",
      },
      {
        query: '"My doctor said I have pre-diabetes, what should I do?"',
        reason: "Diagnosis-related guidance requires clinical expertise",
      },
    ],
    criteria: [
      "Any symptom description or medical complaint",
      "Medication questions or drug interactions",
      "Mental health concerns",
      "Diagnosis interpretation or care planning",
      "Appeals, grievances, or legal-adjacent requests",
    ],
  },
];

const decisionTree = [
  {
    question: "Does the request involve clinical symptoms, medications, or diagnosis?",
    yes: "escalate",
    no: "next",
  },
  {
    question: "Does it require interpreting plan-specific benefits or making care recommendations?",
    yes: "ai-assist",
    no: "next",
  },
  {
    question: "Is it a read-only query or bounded self-reported data entry?",
    yes: "automated",
    no: "ai-assist",
  },
];

export default function EscalationFlow() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [treeStep, setTreeStep] = useState(0);
  const [treePath, setTreePath] = useState([]);
  const [showTree, setShowTree] = useState(false);

  const resetTree = () => {
    setTreeStep(0);
    setTreePath([]);
    setShowTree(true);
  };

  const answerTree = (answer) => {
    const current = decisionTree[treeStep];
    const newPath = [...treePath, { question: current.question, answer }];

    if (answer === "yes" && current.yes !== "next") {
      setTreePath([...newPath, { result: current.yes }]);
      setTreeStep(-1);
    } else if (answer === "no" && current.no !== "next") {
      setTreePath([...newPath, { result: current.no }]);
      setTreeStep(-1);
    } else {
      setTreePath(newPath);
      setTreeStep(treeStep + 1);
    }
  };

  const resultCategory =
    treePath.length > 0 && treePath[treePath.length - 1].result
      ? categories.find((c) => c.id === treePath[treePath.length - 1].result)
      : null;

  return (
    <div
      style={{
        fontFamily: '"Instrument Sans", "DM Sans", -apple-system, sans-serif',
        maxWidth: 820,
        margin: "0 auto",
        color: "#2C2C2A",
        padding: "0 16px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#D85A30",
            marginBottom: 8,
          }}
        >
          Portfolio artifact · Redacted
        </div>
        <h1
          style={{
            fontSize: 26,
            fontWeight: 700,
            lineHeight: 1.2,
            margin: "0 0 8px",
            letterSpacing: -0.5,
          }}
        >
          AI-to-human escalation logic
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#888780",
            margin: 0,
            lineHeight: 1.5,
            maxWidth: 620,
          }}
        >
          In health tech, getting the AI boundary wrong can endanger patients.
          I designed a three-tier classification system that determines when AI
          handles requests autonomously, when it assists humans, and when it
          must immediately hand off.
        </p>
      </div>

      {/* Three-tier overview */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() =>
              setActiveCategory(activeCategory === cat.id ? null : cat.id)
            }
            style={{
              flex: "1 1 200px",
              padding: 14,
              borderRadius: 10,
              border:
                activeCategory === cat.id
                  ? `2px solid ${cat.color}`
                  : `1px solid ${cat.colorBorder}`,
              background: activeCategory === cat.id ? cat.colorLight : "#fff",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 20 }}>{cat.icon}</span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: cat.colorLight,
                  color: cat.color,
                }}
              >
                {cat.risk} risk
              </span>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: cat.color,
                marginTop: 8,
              }}
            >
              {cat.label}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#888780",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              {cat.description}
            </div>
          </button>
        ))}
      </div>

      {/* Expanded category detail */}
      {activeCategory && (
        <div
          style={{
            padding: 20,
            borderRadius: 10,
            background: "#FAFAF8",
            border: "1px solid #E8E7E3",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Examples */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#888780",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Example queries
              </div>
              {categories
                .find((c) => c.id === activeCategory)
                .examples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 12,
                      padding: 10,
                      borderRadius: 8,
                      background: "#fff",
                      border: "1px solid #E8E7E3",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#2C2C2A",
                        marginBottom: 4,
                        fontStyle: "italic",
                      }}
                    >
                      {ex.query}
                    </div>
                    <div style={{ fontSize: 11, color: "#888780", lineHeight: 1.4 }}>
                      → {ex.reason}
                    </div>
                  </div>
                ))}
            </div>
            {/* Criteria */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#888780",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Classification criteria
              </div>
              {categories
                .find((c) => c.id === activeCategory)
                .criteria.map((cr, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: categories.find(
                          (c) => c.id === activeCategory
                        ).color,
                        marginTop: 5,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ fontSize: 13, color: "#2C2C2A", lineHeight: 1.5 }}>
                      {cr}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Interactive decision tree */}
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#2C2C2A",
              }}
            >
              Interactive decision tree
            </div>
            <div style={{ fontSize: 12, color: "#888780" }}>
              Walk through the routing logic I designed
            </div>
          </div>
          <button
            onClick={resetTree}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "1px solid #D3D1C7",
              background: "#fff",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
              color: "#5F5E5A",
              fontFamily: "inherit",
            }}
          >
            {showTree ? "Reset" : "Try it"}
          </button>
        </div>

        {showTree && (
          <div>
            {treePath.map((step, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                {step.question && (
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        color: "#888780",
                        flex: 1,
                      }}
                    >
                      {step.question}
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "2px 10px",
                        borderRadius: 10,
                        background:
                          step.answer === "yes" ? "#E1F5EE" : "#FCEBEB",
                        color: step.answer === "yes" ? "#0F6E56" : "#A32D2D",
                      }}
                    >
                      {step.answer}
                    </span>
                  </div>
                )}
                {step.result && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: 14,
                      borderRadius: 8,
                      background: categories.find(
                        (c) => c.id === step.result
                      ).colorLight,
                      border: `1px solid ${
                        categories.find((c) => c.id === step.result).colorBorder
                      }`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: categories.find((c) => c.id === step.result)
                          .color,
                      }}
                    >
                      {categories.find((c) => c.id === step.result).icon}{" "}
                      Route → {categories.find((c) => c.id === step.result).label}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {treeStep >= 0 && treeStep < decisionTree.length && (
              <div
                style={{
                  padding: 14,
                  borderRadius: 8,
                  background: "#fff",
                  border: "1px solid #D3D1C7",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2C2C2A",
                    marginBottom: 10,
                  }}
                >
                  {decisionTree[treeStep].question}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => answerTree("yes")}
                    style={{
                      padding: "6px 20px",
                      borderRadius: 6,
                      border: "1px solid #9FE1CB",
                      background: "#E1F5EE",
                      color: "#0F6E56",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => answerTree("no")}
                    style={{
                      padding: "6px 20px",
                      borderRadius: 6,
                      border: "1px solid #F7C1C1",
                      background: "#FCEBEB",
                      color: "#A32D2D",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {!showTree && (
          <div
            style={{
              textAlign: "center",
              padding: 20,
              color: "#B4B2A9",
              fontSize: 13,
            }}
          >
            Click "Try it" to walk through the escalation decision tree
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 24,
          paddingTop: 16,
          borderTop: "1px solid #E8E7E3",
          fontSize: 11,
          color: "#B4B2A9",
          lineHeight: 1.5,
        }}
      >
        Specific clinical protocols and internal workflow details have been
        redacted. The classification framework and product thinking are
        preserved.
      </div>
    </div>
  );
}
