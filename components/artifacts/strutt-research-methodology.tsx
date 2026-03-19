import { useState } from "react";

const T = {
  font: '"Instrument Sans", "DM Sans", -apple-system, system-ui, sans-serif',
  mono: '"DM Mono", "Fira Code", ui-monospace, monospace',
  bg: "#FBFBF9", surface: "#FFF", alt: "#F6F5F2",
  border: "#E8E7E3", borderS: "#D3D1C7",
  text: "#2C2C2A", mid: "#5F5E5A", muted: "#888780", dim: "#B4B2A9",
  purple: "#534AB7", purpleL: "#EEEDFE",
  teal: "#0F6E56", tealL: "#E1F5EE",
  coral: "#993C1D", coralL: "#FAECE7",
  blue: "#185FA5", blueL: "#E6F1FB",
  amber: "#854F0B", amberL: "#FAEEDA",
};

const Pill = ({ children, color, bg }) => <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 10, background: bg || T.alt, color: color || T.muted, letterSpacing: 0.2, display: "inline-block" }}>{children}</span>;
const Card = ({ children, style }) => <div style={{ background: T.surface, borderRadius: 10, border: `1px solid ${T.border}`, padding: 18, ...style }}>{children}</div>;

// ── Tab 1: Research System Overview ─────────────────────────────

function SystemOverview() {
  const phases = [
    { num: "01", title: "Strategic screening", color: T.purple, bg: T.purpleL,
      desc: "Lightweight micro-survey deployed across community channels. Mandatory fields screen for mobility challenge severity and device usage; optional open-ended prompt captures the user's 'one moment they wish could be different' — this becomes the personalized hook for the interview.",
      outputs: ["Screened lead pool", "Personalized interview hooks", "CRM segmentation (List 1/2/3)"],
      details: ["Mandatory: name, age, device type, challenge severity, location, contact", "Optional: housing type, family, current device brand/model, media habits", "Open-ended: 'one moment you wish could be different'"] },
    { num: "02", title: "Interview design", color: T.teal, bg: T.tealL,
      desc: "Each interview is custom-tailored based on screening data. Three fixed 'big questions' anchor every session (current situation → ideal expectations → product fit), then decomposed into personalized sub-questions weighted by priority. Product introduction is never upfront — it's triggered by the user's own pain point narrative.",
      outputs: ["Tailored question flow per user", "Priority-weighted question bank", "Product introduction trigger map"],
      details: ["Fixed framework: 3 core questions × N personalized sub-questions", "Priority tagging: must-ask vs. time-permitting", "Product intro: problem-driven unveiling, not demo-first"] },
    { num: "03", title: "Conversational journey", color: T.coral, bg: T.coralL,
      desc: "A structured 50-minute arc designed to feel like a natural conversation. Opens with trust-building (5-7 min), deepens into mobility challenges and emotional compromises (15-20 min), transitions to product-as-catalyst (15-20 min), explores ripple effects and advocacy potential (7-10 min), closes with pricing perception and future vision (5-7 min).",
      outputs: ["Want & Need classification per user", "KOC potential score", "User Story packageability assessment"],
      details: ["Section A: Opening — step into their world", "Section B: Challenges & compromises — the emotional core", "Section C: Product connection — problem-driven reveal", "Section D: Ripple effect — advocacy & sharing intent", "Section E: Value & future — pricing & ultimate vision"] },
    { num: "04", title: "Analysis & synthesis", color: T.blue, bg: T.blueL,
      desc: "Each interview produces a structured User Profile following a standardized template. Profiles are coded into a Want & Need matrix (motivation → attribute → expectation → specific case), then cross-referenced to surface recurring themes, persona clusters, and JTBD patterns across 200+ interviews.",
      outputs: ["Standardized user profiles", "Want & Need matrix", "Cross-interview theme analysis"],
      details: ["Profile template: demographics, mobility context, want/need matrix, purchase behavior, media usage, price sensitivity", "Coding: need vs. want, functional vs. emotional, motivation → root cause", "Synthesis: frequency analysis, persona clustering, JTBD extraction"] },
  ];

  return <div>
    {phases.map(p => <div key={p.num} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
      <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.mono, color: T.dim, minWidth: 36, paddingTop: 2 }}>{p.num}</div>
      <Card style={{ flex: 1, borderLeft: `3px solid ${p.color}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>{p.title}</div>
          <Pill color={p.color} bg={p.bg}>{p.outputs.length} outputs</Pill>
        </div>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.dim, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Key outputs</div>
            {p.outputs.map((o, i) => <div key={i} style={{ fontSize: 11, color: T.mid, marginBottom: 3, paddingLeft: 8, borderLeft: `2px solid ${p.color}40` }}>{o}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.dim, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Details</div>
            {p.details.map((d, i) => <div key={i} style={{ fontSize: 11, color: T.muted, marginBottom: 3, paddingLeft: 8, borderLeft: `2px solid ${T.border}` }}>{d}</div>)}
          </div>
        </div>
      </Card>
    </div>)}
  </div>;
}

// ── Tab 2: Interview Arc ────────────────────────────────────────

function InterviewArc() {
  const [active, setActive] = useState(null);
  const sections = [
    { id: "A", title: "Opening: step into their world", time: "5-7 min", pct: 10, color: T.purple, bg: T.purpleL,
      goal: "Build trust, establish open atmosphere using personalized hooks from screening data.",
      technique: "Reference something personal from pre-screening ('I noticed you mentioned...'). Frame as listening to their story, not evaluating them.",
      questions: ["Personalized icebreaker based on screening responses", "Frame-setting: 'We're here to listen to your story'"] },
    { id: "B", title: "Mobility challenges & compromises", time: "15-20 min", pct: 35, color: T.teal, bg: T.tealL,
      goal: "Deep-dive into current pain points, physical/emotional limitations, and the gap between reality and aspiration.",
      technique: "Probe 'Why' chains: What feeling does it leave you with? What's the cost? Probe 'Compromise': What have you given up? What does that mean to you?",
      questions: ["Walk me through a typical day — what does getting around look like?", "Describe moments where things get particularly challenging or frustrating", "What has this meant you've had to give up?", "Tell me about your current device — strengths and weaknesses"] },
    { id: "C", title: "Product connection: problem-driven reveal", time: "15-20 min", pct: 35, color: T.coral, bg: T.coralL,
      goal: "Introduce product concept as a natural response to stated pain points. Validate feature-need fit.",
      technique: "Wait for a specific pain point, then: 'What you shared about [X] is insightful. Would you mind if I showed you something we're working on that addresses this?' Select 2-3 most relevant features from slide deck.",
      questions: ["Which aspect resonates most as 'what I need right now'? Why?", "Beyond solving pain points, what extra experiences could this bring?", "Anything you're unclear about or concerned might not work for you?"] },
    { id: "D", title: "Ripple effect: beyond personal use", time: "7-10 min", pct: 12, color: T.amber, bg: T.amberL,
      goal: "Assess advocacy potential, sharing intent, and KOC viability.",
      technique: "Explore willingness to share organically: 'If this truly transformed your experience, would you feel inclined to tell others? Why?'",
      questions: ["Who would benefit most from hearing about this?", "How do you typically share things you believe in?", "Which channels do you trust for mobility product info?"] },
    { id: "E", title: "Value, pricing & future vision", time: "5-7 min", pct: 8, color: T.blue, bg: T.blueL,
      goal: "Capture price perception, willingness-to-pay anchors, and ultimate product vision.",
      technique: "PSM (Price Sensitivity Meter) for quantitative anchoring. Open-ended: 'If you could change one thing about mobility aids, what would it be?'",
      questions: ["What price range feels reasonable for this level of technology?", "What specific value would make a higher price unquestionably worth it?", "If you could add one game-changing feature, what would it be?"] },
  ];

  return <div>
    {/* Arc visualization */}
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>50-minute conversational arc</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Each section is designed to flow naturally from the previous one — the user never feels "interviewed"</div>
      <div style={{ display: "flex", gap: 2, height: 32, borderRadius: 6, overflow: "hidden", marginBottom: 10 }}>
        {sections.map(s => <div key={s.id}
          onClick={() => setActive(active === s.id ? null : s.id)}
          style={{
            width: s.pct + "%", background: active === s.id ? s.color : s.color + "30",
            cursor: "pointer", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: active === s.id ? "#fff" : s.color,
          }}>{s.id}</div>)}
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {sections.map(s => <div key={s.id} style={{ width: s.pct + "%", fontSize: 9, color: T.dim, textAlign: "center" }}>{s.time}</div>)}
      </div>
    </Card>

    {/* Section cards */}
    {sections.map(s => <Card key={s.id} style={{
      marginBottom: 10, borderLeft: `3px solid ${s.color}`,
      background: active === s.id ? s.bg : T.surface,
      cursor: "pointer", transition: "all 0.2s",
    }} onClick={() => setActive(active === s.id ? null : s.id)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: s.color + "20", color: s.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.id}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{s.title}</div>
        </div>
        <Pill color={s.color} bg={s.bg}>{s.time}</Pill>
      </div>
      {active === s.id && <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6, marginBottom: 10 }}><strong style={{ color: T.text }}>Goal:</strong> {s.goal}</div>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6, marginBottom: 10 }}><strong style={{ color: T.text }}>Technique:</strong> {s.technique}</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: T.dim, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Core questions</div>
        {s.questions.map((q, i) => <div key={i} style={{ fontSize: 11, color: T.mid, marginBottom: 4, paddingLeft: 10, borderLeft: `2px solid ${s.color}40`, lineHeight: 1.4, fontStyle: "italic" }}>"{q}"</div>)}
      </div>}
    </Card>)}
  </div>;
}

// ── Tab 3: Screening & Recruitment ──────────────────────────────

function ScreeningSystem() {
  const stages = [
    { label: "Stage 1: Exploratory", goal: "Map product-market fit, identify core mobility pain points", n: "30+", method: "Semi-structured depth interviews (60 min)", incentive: "$100 credit", evolution: "Discovered three core user characteristics through iterative interviews" },
    { label: "Stage 2: Conversion-oriented", goal: "Convert research subjects into qualified leads, validate pricing", n: "10-12 per wave", method: "Focused interviews (30 min) with streamlined question bank", incentive: "$50 credit", evolution: "Shifted from pure exploration to purchase-intent qualification" },
  ];

  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Research evolution: from exploration to conversion</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>The methodology evolved as our understanding deepened — each stage built on the previous one's findings</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {stages.map((s, i) => <Card key={i} style={{ borderTop: `3px solid ${i === 0 ? T.purple : T.teal}`, padding: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? T.purple : T.teal, marginBottom: 8 }}>{s.label}</div>
          {[{ l: "Goal", v: s.goal }, { l: "Sample", v: s.n + " users" }, { l: "Method", v: s.method }, { l: "Incentive", v: s.incentive }].map(r =>
            <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${T.border}44` }}>
              <span style={{ fontSize: 10, color: T.dim }}>{r.l}</span>
              <span style={{ fontSize: 11, color: T.text, fontWeight: 500, textAlign: "right", maxWidth: "65%" }}>{r.v}</span>
            </div>)}
          <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: T.alt, fontSize: 11, color: T.mid, lineHeight: 1.5 }}><strong>Key evolution:</strong> {s.evolution}</div>
        </Card>)}
      </div>
    </Card>

    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Screening funnel</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Multi-channel recruitment with progressive qualification</div>
      {[
        { stage: "Awareness", desc: "Community posts, partner referrals, targeted outreach", w: 95, color: T.dim },
        { stage: "Micro-survey", desc: "2-3 min screener: demographics + mobility challenge + open-ended hook", w: 70, color: T.blue },
        { stage: "CRM segmentation", desc: "Scored into List 1 (high-fit) / List 2 (moderate) / List 3 (general) ", w: 50, color: T.purple },
        { stage: "Interview invitation", desc: "Personalized outreach with hooks from screening data", w: 35, color: T.teal },
        { stage: "Depth interview", desc: "50-min tailored conversational journey", w: 22, color: T.coral },
        { stage: "Profile & lead", desc: "Standardized user profile + sales lead classification (A/B tier)", w: 15, color: T.teal },
      ].map((s, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <div style={{ width: 100, textAlign: "right", fontSize: 11, color: T.muted, flexShrink: 0 }}>{s.stage}</div>
        <div style={{ width: s.w + "%", padding: "8px 12px", background: s.color + "12", borderLeft: `3px solid ${s.color}`, borderRadius: i === 0 ? "6px 6px 0 0" : i === 5 ? "0 0 6px 6px" : 0 }}>
          <div style={{ fontSize: 11, color: s.color, fontWeight: 500 }}>{s.desc}</div>
        </div>
      </div>)}
    </Card>

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>User profile template structure</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { section: "Demographics", fields: "Gender, age, location, housing, income range, family composition", color: T.purple },
          { section: "Mobility context", fields: "Condition, current device, usage frequency, specific challenges", color: T.teal },
          { section: "Want & Need matrix", fields: "Need/Want × Motivation × Attribute (functional/emotional) × Expectation × Specific case", color: T.coral },
          { section: "Purchase behavior", fields: "Channel, process, insurance role, influencer, budget, installment preference", color: T.blue },
          { section: "Media & advocacy", fields: "Platform usage, information channels, community involvement, KOC potential, User Story packageability", color: T.amber },
          { section: "Price sensitivity", fields: "PSM 4-point scale: too-low, expected, expensive-but-acceptable, too-much", color: T.purple },
        ].map(s => <div key={s.section} style={{ padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${s.color}40` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.section}</div>
          <div style={{ fontSize: 10, color: T.muted, lineHeight: 1.5 }}>{s.fields}</div>
        </div>)}
      </div>
    </Card>
  </div>;
}

// ── Tab 4: Want & Need Framework ────────────────────────────────

function WantNeedFramework() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Want vs. Need classification framework</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Every user insight is coded into a structured matrix that separates functional necessities from aspirational desires</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ padding: 14, borderRadius: 8, background: T.coralL, borderLeft: `3px solid ${T.coral}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, marginBottom: 6 }}>Need (non-negotiable)</div>
          <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>A gap between the user's current state and a minimally acceptable baseline. Unmet needs cause real harm or prevent basic function. Examples: safety from tipping, ability to transport device, physical control despite muscle degeneration.</div>
        </div>
        <div style={{ padding: 14, borderRadius: 8, background: T.purpleL, borderLeft: `3px solid ${T.purple}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.purple, marginBottom: 6 }}>Want (aspirational)</div>
          <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>A desire to go beyond the baseline toward an ideal state. Unmet wants reduce satisfaction but don't prevent function. Examples: aesthetic customization, tech-forward identity, social media shareability.</div>
        </div>
      </div>
    </Card>

    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 10 }}>Matrix structure (per user)</div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
          <thead><tr>
            {["Need/Want", "Motivation", "Attribute", "Expectation", "Specific case"].map(h => <th key={h} style={{ padding: "7px 10px", textAlign: "left", fontWeight: 600, color: T.dim, borderBottom: `1px solid ${T.border}`, fontSize: 10 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {[
              ["Need", "Muscle control deterioration", "Functional", "Physical safety", "Condition causes sudden muscle rigidity — joystick becomes dangerous"],
              ["Need", "Cannot fit device in vehicle", "Functional", "Portability", "Family has 3 mobility devices but only 1 accessible van"],
              ["Want", "Self-conscious about device bulk", "Emotional", "Aesthetics & dignity", "Feels device takes up too much space in public — wants extension of self, not 'medical equipment'"],
              ["Want", "Difficult van entry/exit", "Functional", "Driving experience", "Sometimes can only exit van in reverse — frustrating and undignified"],
            ].map((row, i) => <tr key={i} style={{ background: row[0] === "Need" ? T.coralL + "44" : T.purpleL + "44" }}>
              {row.map((cell, j) => <td key={j} style={{ padding: "7px 10px", borderBottom: `1px solid ${T.border}22`, color: j === 0 ? (cell === "Need" ? T.coral : T.purple) : T.mid, fontWeight: j === 0 ? 700 : 400, fontSize: 11 }}>{cell}</td>)}
            </tr>)}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 10, fontSize: 10, color: T.dim, fontStyle: "italic" }}>Example from a single user profile. This matrix is completed for every interviewed user, then cross-referenced for pattern extraction.</div>
    </Card>

    <Card>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 4 }}>Three anchoring questions</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 12 }}>Every interview is designed to answer these three questions — they map directly to the matrix columns</div>
      {[
        { q: "What is the user's current situation?", maps: "Root cause of the gap (Motivation column)", color: T.teal },
        { q: "What are the user's ideal expectations?", maps: "The need/want itself (Expectation column)", color: T.purple },
        { q: "Where does our product fit / not fit?", maps: "Why they need/want it (Attribute column)", color: T.coral },
      ].map((item, i) => <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: item.color + "15", color: item.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{item.q}</div>
          <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>Maps to → {item.maps}</div>
        </div>
      </div>)}
    </Card>
  </div>;
}

// ── Main ─────────────────────────────────────────────────────────

const TABS = [
  { id: "system", label: "Research system" },
  { id: "arc", label: "Interview arc" },
  { id: "screening", label: "Screening & recruitment" },
  { id: "framework", label: "Want & Need framework" },
];

export default function ResearchMethodology() {
  const [tab, setTab] = useState("system");
  return <div style={{ fontFamily: T.font, background: T.bg, minHeight: "100vh", padding: "28px 20px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Pill color={T.purple} bg={T.purpleL}>Portfolio artifact</Pill>
          <Pill>Redacted</Pill>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px", letterSpacing: -0.5, color: T.text }}>User research methodology system</h1>
        <p style={{ fontSize: 14, color: T.muted, margin: 0, lineHeight: 1.55, maxWidth: 660 }}>
          End-to-end research infrastructure I designed for a pre-launch intelligent mobility startup — from strategic screening to structured user profiling. Powered 200+ depth interviews across two research stages.
        </p>
      </div>
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `1px solid ${T.borderS}`, overflowX: "auto" }}>
        {TABS.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "10px 16px", fontSize: 12, fontWeight: tab === t.id ? 600 : 400, color: tab === t.id ? T.purple : T.dim, background: "none", border: "none", fontFamily: T.font, borderBottom: tab === t.id ? `2px solid ${T.purple}` : "2px solid transparent", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.label}</button>)}
      </div>
      {tab === "system" && <SystemOverview />}
      {tab === "arc" && <InterviewArc />}
      {tab === "screening" && <ScreeningSystem />}
      {tab === "framework" && <WantNeedFramework />}
      <div style={{ marginTop: 28, paddingTop: 14, borderTop: `1px solid ${T.border}`, fontSize: 10, color: T.dim, lineHeight: 1.5 }}>
        Specific user identities, medical conditions, internal employee names, and proprietary product details have been redacted. Research methodology, analytical frameworks, and structural design are preserved.
      </div>
    </div>
  </div>;
}
