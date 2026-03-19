import { useState } from "react";

const T = {
  font: '"Instrument Sans","DM Sans",-apple-system,system-ui,sans-serif',
  mono: '"DM Mono","Fira Code",ui-monospace,monospace',
  bg: "#FBFBF9", surface: "#FFF", alt: "#F6F5F2",
  border: "#E8E7E3", borderS: "#D3D1C7",
  text: "#2C2C2A", mid: "#5F5E5A", muted: "#888780", dim: "#B4B2A9",
  teal: "#0F6E56", tealL: "#E1F5EE", tealD: "#085041",
  blue: "#185FA5", blueL: "#E6F1FB",
  purple: "#534AB7", purpleL: "#EEEDFE",
  coral: "#993C1D", coralL: "#FAECE7",
  amber: "#854F0B", amberL: "#FAEEDA",
  green: "#3B6D11", greenL: "#EAF3DE",
};

const Pill = ({ children, color, bg }) => <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 10, background: bg || T.alt, color: color || T.muted, display: "inline-block" }}>{children}</span>;
const Card = ({ children, style }) => <div style={{ background: T.surface, borderRadius: 10, border: `1px solid ${T.border}`, padding: 18, ...style }}>{children}</div>;

// ── Tab 1: Problem Reframing ────────────────────────────────────

function ProblemReframing() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>The reframe: utilization matters more than access</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>We started with a broad question about healthcare access barriers. Field research led us to a more precise — and more actionable — framing.</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 0, alignItems: "center", marginBottom: 16 }}>
        <div style={{ padding: 14, borderRadius: 8, background: T.coralL, borderLeft: `3px solid ${T.coral}` }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: T.coral, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Starting assumption</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>The barrier is access to healthcare</div>
          <div style={{ fontSize: 11, color: T.mid, marginTop: 4, lineHeight: 1.5 }}>Communities need more clinics, more providers, more insurance coverage.</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 20, color: T.dim }}>→</div>
        <div style={{ padding: 14, borderRadius: 8, background: T.tealL, borderLeft: `3px solid ${T.teal}` }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: T.teal, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Reframed insight</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>The barrier is health literacy</div>
          <div style={{ fontSize: 11, color: T.mid, marginTop: 4, lineHeight: 1.5 }}>Communities have access but can't navigate the system — the information itself is the barrier.</div>
        </div>
      </div>

      <div style={{ padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${T.purple}` }}>
        <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>
          <strong style={{ color: T.purple }}>What shifted our thinking:</strong> A frontline nurse at a community ministry told us: "The access to technology isn't the barrier — it's the information. Health literacy isn't connected to formal education." The president of the health system confirmed: "Access to healthcare is just one piece of the puzzle." These weren't academic abstractions — they were operational realities we heard from practitioners on the ground.
        </div>
      </div>
    </Card>

    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>Why this distinction matters for a health system</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ padding: 14, borderRadius: 8, background: T.alt }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.mid, marginBottom: 6 }}>Access (supporter role)</div>
          <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>Providing the ability to receive healthcare services — clinics, insurance, transportation. Necessary but not sufficient. A health system can support access but doesn't control all the structural factors.</div>
        </div>
        <div style={{ padding: 14, borderRadius: 8, background: T.tealL }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.teal, marginBottom: 6 }}>Utilization (driver role)</div>
          <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.5 }}>Ensuring people actually use healthcare effectively — understanding their conditions, navigating patient portals, following treatment plans. A health system can directly drive utilization through health literacy programs. This is where organizational action has the highest leverage.</div>
        </div>
      </div>
    </Card>

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>The scale of the gap</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Low health literacy isn't a niche problem — it's a population-level challenge that disproportionately impacts marginalized communities.</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { stat: "~40%", desc: "of U.S. adults have limited health literacy", sub: "~60 million people", color: T.coral },
          { stat: "53%", desc: "of nonwhite / Hispanic adults within that group", sub: "~32 million people", color: T.purple },
          { stat: "9/10", desc: "Americans struggle to use health information effectively", sub: "Even with formal education", color: T.blue },
        ].map((s, i) => <div key={i} style={{ padding: 14, borderRadius: 8, background: T.alt, textAlign: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: s.color, fontFamily: T.mono }}>{s.stat}</div>
          <div style={{ fontSize: 11, color: T.mid, marginTop: 4, lineHeight: 1.4 }}>{s.desc}</div>
          <div style={{ fontSize: 10, color: T.dim, marginTop: 4 }}>{s.sub}</div>
        </div>)}
      </div>
      <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { outcome: "Increased ER visits and hospital stays", type: "System cost" },
          { outcome: "Lower treatment adherence", type: "Health outcome" },
          { outcome: "Missed preventive care opportunities", type: "Population health" },
          { outcome: "Higher mortality rates", type: "Health equity" },
        ].map((o, i) => <div key={i} style={{ padding: 8, borderRadius: 6, background: T.coralL, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: T.mid }}>{o.outcome}</span>
          <Pill color={T.coral} bg="#fff">{o.type}</Pill>
        </div>)}
      </div>
    </Card>
  </div>;
}

// ── Tab 2: Research Process ─────────────────────────────────────

function ResearchProcess() {
  const moments = [
    { name: "Virtual urgent care", insight: "Technology adoption is uneven — underserved patients drop off at the digital front door", color: T.blue },
    { name: "Community ministry visit", insight: "Frontline providers confirmed: information, not technology, is the real barrier to healthcare utilization", color: T.teal },
    { name: "School health initiative", insight: "Children as health literacy ambassadors — family health behaviors change when kids bring knowledge home", color: T.purple },
    { name: "Lifestyle wellness program", insight: "Preventive health education works best when embedded in existing community rhythms, not delivered as separate 'interventions'", color: T.green },
    { name: "Digital services review", insight: "Patient portal (MyChart) has powerful capabilities but usage drops dramatically in low-literacy populations — the tool isn't the problem, onboarding is", color: T.amber },
    { name: "County health department", insight: "Community health workers are the most trusted channel — they bridge the gap between institutional healthcare and lived experience", color: T.coral },
  ];

  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Research journey: six defining encounters</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Each site visit, stakeholder interview, and observation shifted our understanding. The path from "access" to "literacy" wasn't predetermined — it emerged from the data.</div>
      {moments.map((m, i) => <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: m.color + "15", color: m.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
        <div style={{ flex: 1, padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${m.color}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: m.color }}>{m.name}</div>
          <div style={{ fontSize: 11, color: T.mid, marginTop: 3, lineHeight: 1.5 }}>{m.insight}</div>
        </div>
      </div>)}
    </Card>

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>Stakeholder landscape</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>We mapped the ecosystem to understand who influences health literacy at each stage of a patient's journey.</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { role: "Health system leadership", examples: "President of regional health system, physicians, digital services team", influence: "Sets organizational health literacy strategy, allocates resources", color: T.blue },
          { role: "Community-based organizations", examples: "Refugee services, cultural associations, neighborhood groups, county health dept", influence: "Trusted by communities, can embed health education into existing programs", color: T.teal },
          { role: "Frontline health workers", examples: "Community health workers, ministry nurses, school health coordinators", influence: "Bridge institutional healthcare and lived experience — highest trust channel", color: T.coral },
        ].map(s => <div key={s.role} style={{ padding: 12, borderRadius: 8, background: T.alt, borderTop: `3px solid ${s.color}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.role}</div>
          <div style={{ fontSize: 10, color: T.muted, marginBottom: 6, lineHeight: 1.4 }}>{s.examples}</div>
          <div style={{ fontSize: 10, color: T.dim, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>Influence</div>
          <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.4 }}>{s.influence}</div>
        </div>)}
      </div>
    </Card>
  </div>;
}

// ── Tab 3: Solution Design ──────────────────────────────────────

function SolutionDesign() {
  const [active, setActive] = useState(null);
  const pillars = [
    { id: "fair", name: "Community health fairs", tag: "In-person", color: T.teal, bg: T.tealL,
      desc: "Pop-up health literacy events hosted at trusted community locations — churches, libraries, school gyms, community centers, parks. Not clinical screenings, but education and technology onboarding.",
      components: [
        { name: "Patient portal onboarding", detail: "Hands-on help signing up for and navigating the health system's patient portal — the single highest-leverage digital health literacy action" },
        { name: "Telehealth device distribution & training", detail: "Home diagnostic devices distributed with live setup assistance — removing the 'unboxing barrier' that stops adoption" },
        { name: "Nutrition & wellness classes", detail: "Taught by community health workers using culturally relevant content, not generic hospital materials" },
        { name: "Insurance navigation", detail: "Medicare/Medicaid enrollment assistance and plain-language explanation of coverage — the most common knowledge gap we identified" },
        { name: "Community health worker connections", detail: "Direct warm handoffs to CHWs who can provide ongoing support beyond the single event" },
      ],
      detail: "Estimated $3,250 per event. Locations mapped using demographic data to maximize reach in target ZIP codes (Grandville Corridor, Southeast Grand Rapids)." },
    { id: "virtual", name: "Virtual health hub", tag: "Digital", color: T.blue, bg: T.blueL,
      desc: "A new dedicated section within the health system's website — not buried in existing navigation, but a standalone destination designed for low-literacy users.",
      components: [
        { name: "Instructional video library", detail: "How-to videos for patient portal and telehealth devices, produced at 5th-grade reading level with multilingual captions" },
        { name: "Keyword-based health content search", detail: "Plain-language search (not medical jargon) that surfaces relevant wellness content and local resources" },
        { name: "One-click virtual appointment booking", detail: "Simplified scheduling flow that removes the 4-5 step process that causes drop-off in current system" },
        { name: "Live CHW chat connection", detail: "Real-time text connection to community health workers for navigation assistance" },
      ],
      detail: "Extends the health fair model into a persistent digital resource. Key design principle: 'if someone can use Facebook, they can use this.'" },
    { id: "seminar", name: "Online seminar series", tag: "Hybrid", color: T.purple, bg: T.purpleL,
      desc: "Scheduled virtual classes that combine health education with technology training — building both health literacy and digital literacy simultaneously.",
      components: [
        { name: "Telehealth device deep-dives", detail: "Live walkthroughs of home diagnostic tools with Q&A — replicating the health fair experience virtually" },
        { name: "Nutrition & chronic disease management", detail: "Condition-specific education (diabetes, hypertension) using teach-back methodology" },
        { name: "Lifestyle medicine programming", detail: "Preventive health habits integrated into daily routines — not abstract medical advice" },
        { name: "CHW-led office hours", detail: "Regular open sessions where community members can ask any health navigation question" },
      ],
      detail: "Designed for scalability — one seminar can reach multiple communities simultaneously, while maintaining the personal, trust-based interaction model." },
  ];

  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>The Corewell Academy: three-pillar solution</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>A blended in-person and digital health literacy program designed to meet communities where they are — physically and digitally.</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
        {pillars.map(p => <button key={p.id} onClick={() => setActive(active === p.id ? null : p.id)} style={{
          flex: 1, padding: 12, borderRadius: 8, textAlign: "center", cursor: "pointer",
          background: active === p.id ? p.bg : T.alt, border: active === p.id ? `2px solid ${p.color}` : `1px solid ${T.border}`,
          fontFamily: T.font, transition: "all 0.2s",
        }}>
          <Pill color={p.color} bg={active === p.id ? "#fff" : p.bg}>{p.tag}</Pill>
          <div style={{ fontSize: 13, fontWeight: 700, color: active === p.id ? p.color : T.text, marginTop: 6 }}>{p.name}</div>
        </button>)}
      </div>
    </Card>

    {active && (() => {
      const p = pillars.find(x => x.id === active);
      return <Card style={{ borderLeft: `3px solid ${p.color}`, marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 6 }}>{p.name}</div>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: T.dim, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Components</div>
        {p.components.map((c, i) => <div key={i} style={{ padding: 10, borderRadius: 6, background: T.alt, marginBottom: 6, borderLeft: `2px solid ${p.color}40` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>{c.name}</div>
          <div style={{ fontSize: 11, color: T.muted, marginTop: 2, lineHeight: 1.5 }}>{c.detail}</div>
        </div>)}
        <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: p.bg, fontSize: 11, color: p.color, lineHeight: 1.5 }}>{p.detail}</div>
      </Card>;
    })()}

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Community partnership model</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>We identified 6 initial community organizations to serve as trusted distribution channels — chosen for cultural alignment with target communities, not just geographic proximity.</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { org: "Hispanic Center of Western Michigan", serves: "Latino/a community", role: "Bilingual health fair co-hosting, culturally adapted materials" },
          { org: "African American Health Institute", serves: "Black community", role: "CHW network access, chronic disease education" },
          { org: "West Michigan Asian American Association", serves: "Asian American community", role: "Multilingual outreach, cultural health practices integration" },
          { org: "Refugee resettlement collective", serves: "New arrivals", role: "Health system orientation, insurance enrollment navigation" },
          { org: "Neighborhood association", serves: "Grandville Corridor residents", role: "Venue access, grassroots promotion network" },
          { org: "County community health dept", serves: "County-wide population", role: "Data sharing, CHW coordination, evaluation support" },
        ].map(o => <div key={o.org} style={{ padding: 10, borderRadius: 6, background: T.alt, fontSize: 11 }}>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 2 }}>{o.org}</div>
          <div style={{ color: T.dim, fontSize: 10, marginBottom: 4 }}>Serves: {o.serves}</div>
          <div style={{ color: T.muted, lineHeight: 1.4 }}>{o.role}</div>
        </div>)}
      </div>
    </Card>
  </div>;
}

// ── Tab 4: Evaluation Framework ─────────────────────────────────

function EvaluationFramework() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Dual-lens evaluation: system metrics + community metrics</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>We designed the evaluation framework to satisfy both the health system's operational KPIs and the community's lived-experience outcomes — because a program that only moves one set of numbers will eventually lose support from the other side.</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Card style={{ borderTop: `3px solid ${T.blue}`, padding: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.blue, marginBottom: 10 }}>Health system metrics</div>
          {[
            { metric: "ER utilization rate", unit: "visits / 1K members / month", direction: "Decrease" },
            { metric: "ER 90-day revisit rate", unit: "% of discharged patients", direction: "Decrease" },
            { metric: "Avg. hospital length of stay", unit: "days", direction: "Decrease" },
            { metric: "Telehealth device utilization", unit: "sessions / month vs baseline", direction: "Increase" },
            { metric: "Virtual appointment frequency", unit: "appointments / 1K / month", direction: "Increase" },
          ].map((m, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: `1px solid ${T.border}44` }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.text }}>{m.metric}</div>
              <div style={{ fontSize: 10, color: T.dim }}>{m.unit}</div>
            </div>
            <Pill color={m.direction === "Decrease" ? T.teal : T.blue} bg={m.direction === "Decrease" ? T.tealL : T.blueL}>{m.direction}</Pill>
          </div>)}
        </Card>

        <Card style={{ borderTop: `3px solid ${T.teal}`, padding: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.teal, marginBottom: 10 }}>Community outcome metrics</div>
          {[
            { metric: "Health literacy score", unit: "Pre/post standardized assessment", direction: "Increase" },
            { metric: "Likelihood to use virtual care", unit: "Self-reported survey", direction: "Increase" },
            { metric: "Confidence in health technology", unit: "Patient portal, telehealth devices", direction: "Increase" },
            { metric: "Applicable knowledge gained", unit: "Teach-back methodology assessment", direction: "Increase" },
            { metric: "Chronic condition management", unit: "A1C, blood pressure tracked over time", direction: "Improve" },
          ].map((m, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: `1px solid ${T.border}44` }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.text }}>{m.metric}</div>
              <div style={{ fontSize: 10, color: T.dim }}>{m.unit}</div>
            </div>
            <Pill color={T.teal} bg={T.tealL}>{m.direction}</Pill>
          </div>)}
        </Card>
      </div>
    </Card>

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>Evaluation methodology</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { method: "Quality improvement cycles", desc: "Continuous data collection for consistency and fidelity across health fair events — standardize what works, iterate on what doesn't", color: T.blue },
          { method: "Baseline + benchmark testing", desc: "Health literacy assessments administered before and after program engagement — validated instruments, not self-report alone", color: T.teal },
          { method: "Stakeholder review cadence", desc: "Regular metric reviews with both health system leadership and community partners — ensures relevance and prevents metric drift", color: T.purple },
          { method: "Community-based participatory research", desc: "Motivational interviews, focus groups, and surveys designed with community input — the community is a research partner, not a research subject", color: T.coral },
        ].map(m => <div key={m.method} style={{ padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${m.color}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: m.color, marginBottom: 3 }}>{m.method}</div>
          <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{m.desc}</div>
        </div>)}
      </div>
    </Card>
  </div>;
}

// ── Tab 5: My Contribution ──────────────────────────────────────

function MyContribution() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>What I contributed to this project</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>This was a 5-person team project through the Morehead-Cain Scholarship's Civic Collaboration program. Here's what I specifically owned or drove.</div>
      {[
        { area: "Problem reframing: access → literacy → utilization", desc: "Led the synthesis of field research findings into the core thesis that health literacy (not access) was the binding constraint. Built the conceptual framework distinguishing 'drivers' vs 'supporters' of healthcare utilization — which became the central argument of our proposal.", color: T.teal },
        { area: "Community needs assessment & stakeholder mapping", desc: "Conducted and synthesized interviews with healthcare leadership, community health workers, and ministry staff. Mapped the stakeholder ecosystem to identify trusted channels for health literacy delivery.", color: T.purple },
        { area: "Solution architecture: blended delivery model", desc: "Designed the three-pillar structure (in-person fairs + virtual hub + seminar series) and specified the component-level details — from patient portal onboarding workflows to the CHW warm-handoff process.", color: T.blue },
        { area: "Evaluation framework design", desc: "Built the dual-lens evaluation model that satisfied both the health system's operational KPIs and community outcome measurement. Specified the methodology mix: QI cycles, baseline benchmarking, CBPR, and stakeholder review cadence.", color: T.coral },
        { area: "Final presentation to health system leadership", desc: "Co-presented the proposal to the president of the health system's regional division and clinical leadership team. The 'Corewell Academy' concept was received as an actionable initiative aligned with their value-based care strategy.", color: T.amber },
      ].map((item, i) => <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: item.color + "15", color: item.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
        <Card style={{ flex: 1, borderLeft: `2px solid ${item.color}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 4 }}>{item.area}</div>
          <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6 }}>{item.desc}</div>
        </Card>
      </div>)}
    </Card>

    <Card style={{ borderLeft: `3px solid ${T.teal}` }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.teal, marginBottom: 4 }}>What this project taught me</div>
      <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.65 }}>The most important skill I practiced here wasn't the deliverable — it was learning to sit with ambiguity long enough for the real problem to reveal itself. We spent the first two weeks convinced the answer was "more access." It took six different field encounters to realize the answer was "better literacy." In health tech, the difference between building the right thing and the wrong thing often comes down to whether you were patient enough to let the users redefine your question.</div>
    </Card>
  </div>;
}

// ── Main ─────────────────────────────────────────────────────────

const TABS = [
  { id: "reframe", label: "Problem reframing" },
  { id: "research", label: "Research process" },
  { id: "solution", label: "Solution design" },
  { id: "eval", label: "Evaluation framework" },
  { id: "contribution", label: "My contribution" },
];

export default function CorewellAcademy() {
  const [tab, setTab] = useState("reframe");
  return <div style={{ fontFamily: T.font, background: T.bg, minHeight: "100vh", padding: "28px 20px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Pill color={T.teal} bg={T.tealL}>Portfolio artifact</Pill>
          <Pill color={T.blue} bg={T.blueL}>Morehead-Cain Scholarship</Pill>
          <Pill>Team project</Pill>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px", letterSpacing: -0.5, color: T.text }}>Health literacy initiative for marginalized communities</h1>
        <p style={{ fontSize: 14, color: T.muted, margin: 0, lineHeight: 1.55, maxWidth: 660 }}>
          Civic collaboration with a major Michigan health system — reframing the healthcare access problem as a health literacy problem, then designing a blended in-person and digital solution to close the gap in underserved communities.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
          {[{ n: "6", l: "field research sites" }, { n: "6", l: "community partners" }, { n: "3", l: "solution pillars" }, { n: "10", l: "evaluation metrics" }].map(s =>
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: T.text, fontFamily: T.mono }}>{s.n}</div>
              <div style={{ fontSize: 10, color: T.dim }}>{s.l}</div>
            </div>)}
        </div>
      </div>
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `1px solid ${T.borderS}`, overflowX: "auto" }}>
        {TABS.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "10px 16px", fontSize: 12, fontWeight: tab === t.id ? 600 : 400, color: tab === t.id ? T.teal : T.dim, background: "none", border: "none", fontFamily: T.font, borderBottom: tab === t.id ? `2px solid ${T.teal}` : "2px solid transparent", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.label}</button>)}
      </div>
      {tab === "reframe" && <ProblemReframing />}
      {tab === "research" && <ResearchProcess />}
      {tab === "solution" && <SolutionDesign />}
      {tab === "eval" && <EvaluationFramework />}
      {tab === "contribution" && <MyContribution />}
      <div style={{ marginTop: 28, paddingTop: 14, borderTop: `1px solid ${T.border}`, fontSize: 10, color: T.dim, lineHeight: 1.5 }}>
        Presented to Corewell Health leadership as part of the UNC Morehead-Cain Scholarship Civic Collaboration program (Summer 2024). This was a 5-person team project. Internal operational data, specific patient metrics, and proprietary health system details are not included.
      </div>
    </div>
  </div>;
}
