import { useState } from "react";

const T = {
  font: '"Instrument Sans","DM Sans",-apple-system,system-ui,sans-serif',
  mono: '"DM Mono","Fira Code",ui-monospace,monospace',
  bg: "#FBFBF9", surface: "#FFF", alt: "#F6F5F2",
  border: "#E8E7E3", borderS: "#D3D1C7",
  text: "#2C2C2A", mid: "#5F5E5A", muted: "#888780", dim: "#B4B2A9",
  purple: "#534AB7", purpleL: "#EEEDFE",
  teal: "#0F6E56", tealL: "#E1F5EE",
  coral: "#993C1D", coralL: "#FAECE7",
  blue: "#185FA5", blueL: "#E6F1FB",
  amber: "#854F0B", amberL: "#FAEEDA",
  red: "#791F1F", redL: "#FCEBEB",
  pink: "#993556", pinkL: "#FBEAF0",
  green: "#3B6D11", greenL: "#EAF3DE",
};

const Pill = ({ children, color, bg }) => <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 10, background: bg || T.alt, color: color || T.muted, display: "inline-block" }}>{children}</span>;
const Card = ({ children, style }) => <div style={{ background: T.surface, borderRadius: 10, border: `1px solid ${T.border}`, padding: 18, ...style }}>{children}</div>;

// ── Data ─────────────────────────────────────────────────────────

const NEED_THEMES = [
  { theme: "Safety & stability", users: 29, pct: 94, color: T.coral, insight: "Absolute baseline. Spans physical, environmental, and psychological safety." },
  { theme: "Portability & transport", users: 28, pct: 90, color: T.teal, insight: "Determines activity radius — the gate to 'can I even leave home?'" },
  { theme: "Smart & autonomous", users: 21, pct: 68, color: T.purple, insight: "Viewed as the path to solving safety and control — reduces cognitive load." },
  { theme: "Maneuverability", users: 20, pct: 65, color: T.blue, insight: "Critical in tight indoor spaces and crowded outdoor environments." },
  { theme: "All-terrain performance", users: 20, pct: 65, color: T.amber, insight: "Essential for users in non-ideal infrastructure or outdoor enthusiasts." },
  { theme: "Convenience & ease", users: 20, pct: 65, color: T.green, insight: "Charging, accessories, range — long-term satisfaction drivers." },
  { theme: "Comfort & ergonomics", users: 16, pct: 52, color: T.pink, insight: "Baseline for extended use — seat, footrest, suspension." },
  { theme: "Aesthetics & customization", users: 16, pct: 52, color: T.red, insight: "Far exceeded expectations — identity expression, not vanity." },
];

const PERSONAS = [
  { id: "restorers", name: "Independence restorers", pct: 26, color: T.coral, bg: T.coralL,
    drive: "Overcome severe barriers to regain basic life freedom and family participation — escape 'being trapped.'",
    need: "Portability (each component < 15 lbs) and baseline safety. Emotional payload highest — device carries 'reconnection' hope.",
    signal: "Fixed income, caregiver involvement, high emotional language in interviews." },
  { id: "pushers", name: "Everyday boundary pushers", pct: 26, color: T.teal, bg: T.tealL,
    drive: "Already mobile but limited by device failures in real-world, imperfect environments.",
    need: "Scattered across specific daily pain points: uneven sidewalks, poor weather traction, steep inclines, inadequate footrest design.",
    signal: "Practical, detail-oriented, tests product claims against lived experience." },
  { id: "offloaders", name: "Cognitive load offloaders", pct: 29, color: T.purple, bg: T.purpleL,
    drive: "Driving the device itself consumes too much mental energy — need tech to share the cognitive burden.",
    need: "Smart assist features: auto path correction, proximity alerts, obstacle avoidance. Want to shift focus from 'how to drive' to 'where to go.'",
    signal: "Mentions 'mental exhaustion,' 'constant vigilance,' 'anxiety in crowds.'" },
  { id: "evangelists", name: "Lifestyle tech evangelists", pct: 10, color: T.amber, bg: T.amberL,
    drive: "Reject the 'medical device' label — view device as a tech product and identity extension.",
    need: "Aesthetics, customization, app integration, social shareability. Natural KOLs and brand co-creators.",
    signal: "Design/tech/fashion background, active on social media, uses words like 'sleek' and 'cool.'" },
  { id: "seekers", name: "All-in-one performance seekers", pct: 9, color: T.blue, bg: T.blueL,
    drive: "Tired of switching between multiple devices for different scenarios — want one device that does everything.",
    need: "Highest overall performance bar. Currently own 2-3 devices each. Willing to pay premium for consolidation.",
    signal: "Mentions owning multiple devices, frustration with trade-offs between portability and capability." },
];

const JTBD = [
  { job: "Eliminate daily friction", color: T.teal,
    current: "Every day is filled with micro-challenges: multi-point turns in narrow hallways, constant fear of bumping shelves in stores, imprecise joysticks creating mental burden.",
    desired: "A fluid, near-subconscious driving experience — shift cognitive energy from 'how to drive' to 'living life.'",
    core: "Reduce cognitive cost. Users aren't buying features — they're buying back mental bandwidth." },
  { job: "Expand life's boundaries", color: T.purple,
    current: "Many users feel physically and psychologically trapped. One user described being 'a prisoner in her own home' — 90% of her time is spent unable to leave. Another family cannot travel together because current devices don't fit in one vehicle.",
    desired: "Portability = going to the zoo with family. All-terrain = farmers' market on gravel. Range = exploring a new town without 'range anxiety.'",
    core: "Grant possibility. The product is a vehicle for exploring the world, not just a mobility aid." },
  { job: "Provide holistic safety", color: T.coral,
    current: "Persistent background noise of insecurity. Users report tipping incidents, loss-of-control episodes in traffic, and equipment failures on slopes. Fear comes not just from real danger, but from distrust in the device itself.",
    desired: "A three-layer safety system: passive (hardware reliability) → active (real-time intelligent response) → predictive (sensor-based risk avoidance). Trust rebuilt through demonstrated competence.",
    core: "Build trust. Smart safety's greatest value is liberating users from fear, not just preventing accidents." },
  { job: "Become an identity extension", color: T.amber,
    current: "Traditional devices scream 'medical equipment' — users feel labeled, stripped of personality. One user described standard devices as 'high school robotics club projects.'",
    desired: "Customizable colorways, sleek design language, fashion-forward accessories. Users want their device to express who they are, not what they need.",
    core: "De-stigmatize and personalize. Design language, materials, and customization become tools for 'this is who I am.'" },
];

const PRICING = {
  survey: { n: 15, tooLow: 1921, expected: 3530, gettingExpensive: 5562, tooMuch: 5608, medTooLow: 1145, medExpected: 3000, medExpensive: 4000, medTooMuch: 5000 },
  interview: { n: 18, avg: 6626, median: 5800, min: 1200, max: 15000 },
};

const SAFETY_LAYERS = [
  { layer: "Passive safety", desc: "Hardware reliability — mechanical design prevents failure", example: "Footrest design prevents ejection on slopes; solid vs. pneumatic tire trade-offs", color: T.teal },
  { layer: "Active safety", desc: "Real-time intelligent response to dynamic environments", example: "Anti-slip on inclines, anti-tip systems, slope stabilization", color: T.purple },
  { layer: "Predictive safety", desc: "Sensor-based anticipatory risk avoidance", example: "Detect pets, pedestrians, curb edges before contact — reduce cognitive load to near zero", color: T.coral },
];

// ── Tab: Need Frequency ─────────────────────────────────────────

function NeedFrequency() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Core need themes by mention frequency</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>Across 200+ depth interviews — coded from Want & Need matrices</div>
      {NEED_THEMES.map((n, i) => <div key={i} style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{n.theme}</span>
            {i < 2 && <Pill color={T.coral} bg={T.coralL}>{i === 0 ? "Top need" : "#2 pain point"}</Pill>}
          </div>
          <span style={{ fontSize: 12, fontFamily: T.mono, fontWeight: 600, color: n.color }}>{n.pct}%</span>
        </div>
        <div style={{ background: T.alt, borderRadius: 4, height: 12, overflow: "hidden", marginBottom: 4 }}>
          <div style={{ width: n.pct + "%", height: "100%", background: n.color + "35", borderRadius: 4, transition: "width 0.5s" }} />
        </div>
        <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.4 }}>{n.insight}</div>
      </div>)}
    </Card>

    <Card>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Key finding: safety is a three-layer system</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Users don't think of "safety" as a single feature — interviews revealed a layered mental model</div>
      {SAFETY_LAYERS.map((l, i) => <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: l.color + "15", color: l.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
        <div style={{ flex: 1, padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${l.color}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: l.color }}>{l.layer}</div>
          <div style={{ fontSize: 11, color: T.mid, marginTop: 2 }}>{l.desc}</div>
          <div style={{ fontSize: 10, color: T.muted, marginTop: 4, fontStyle: "italic" }}>e.g., {l.example}</div>
        </div>
      </div>)}
    </Card>
  </div>;
}

// ── Tab: Personas ───────────────────────────────────────────────

function PersonaView() {
  const [active, setActive] = useState(null);
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Five user personas distilled from 200+ interviews</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Clustered by core motivation and primary need pattern — not demographics</div>
      <div style={{ display: "flex", gap: 2, height: 28, borderRadius: 6, overflow: "hidden", marginBottom: 6 }}>
        {PERSONAS.map(p => <div key={p.id} style={{ width: p.pct + "%", background: p.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: p.color, cursor: "pointer", transition: "all 0.2s" }} onClick={() => setActive(active === p.id ? null : p.id)}>{p.pct}%</div>)}
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {PERSONAS.map(p => <div key={p.id} style={{ width: p.pct + "%", fontSize: 8, color: T.dim, textAlign: "center", lineHeight: 1.2 }}>{p.name.split(" ")[0]}</div>)}
      </div>
    </Card>

    {PERSONAS.map(p => <Card key={p.id} style={{
      marginBottom: 10, borderLeft: `3px solid ${p.color}`, cursor: "pointer",
      background: active === p.id ? p.bg : T.surface, transition: "all 0.2s",
    }} onClick={() => setActive(active === p.id ? null : p.id)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: active === p.id ? p.color : T.text }}>{p.name}</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <Pill color={p.color} bg={p.bg}>{p.pct}% of pool</Pill>
        </div>
      </div>
      {active === p.id && <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6, marginBottom: 8 }}><strong style={{ color: T.text }}>Core drive:</strong> {p.drive}</div>
        <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6, marginBottom: 8 }}><strong style={{ color: T.text }}>Need pattern:</strong> {p.need}</div>
        <div style={{ padding: 8, borderRadius: 6, background: T.alt, fontSize: 11, color: T.muted, lineHeight: 1.5 }}><strong>Identification signal:</strong> {p.signal}</div>
      </div>}
    </Card>)}

    <Card style={{ borderLeft: `3px solid ${T.amber}` }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.amber, marginBottom: 4 }}>Cross-cutting insight: ~40% are early adopters</div>
      <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6 }}>Across all personas, roughly 40% of interviewees exhibited "tech curious" traits — IT backgrounds, designers, fashion-forward users who care about algorithms, app connectivity, and sensor systems. They're willing to pay premium for innovation and are natural brand evangelists. This segment cuts across the persona clusters rather than forming its own.</div>
    </Card>
  </div>;
}

// ── Tab: JTBD ───────────────────────────────────────────────────

function JTBDView() {
  const [active, setActive] = useState(null);
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Jobs-To-Be-Done: what users hire the product to accomplish</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 8 }}>Users don't buy features — they buy progress. Four core "jobs" emerged from the data.</div>
    </Card>
    {JTBD.map((j, i) => <Card key={i} style={{
      marginBottom: 10, borderLeft: `3px solid ${j.color}`, cursor: "pointer",
      transition: "all 0.2s",
    }} onClick={() => setActive(active === i ? null : i)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: j.color + "15", color: j.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{j.job}</div>
        </div>
        <span style={{ fontSize: 16, color: T.dim, transition: "transform 0.2s", transform: active === i ? "rotate(180deg)" : "none" }}>▾</span>
      </div>
      {active === i && <div style={{ marginTop: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          <div style={{ padding: 12, borderRadius: 8, background: T.redL }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.red, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Current state</div>
            <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>{j.current}</div>
          </div>
          <div style={{ padding: 12, borderRadius: 8, background: T.tealL }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.teal, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Desired progress</div>
            <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>{j.desired}</div>
          </div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, background: T.purpleL, borderLeft: `2px solid ${T.purple}` }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.purple }}>Core analysis: {j.core}</div>
        </div>
      </div>}
    </Card>)}
  </div>;
}

// ── Tab: Pricing ────────────────────────────────────────────────

function PricingView() {
  const priceRanges = [
    { range: "$1,000–2,000", survey: 20, interview: 6, label: "Entry" },
    { range: "$2,000–4,000", survey: 40, interview: 11, label: "Core low" },
    { range: "$4,000–6,000", survey: 30, interview: 28, label: "Core mid" },
    { range: "$6,000–8,000", survey: 7, interview: 28, label: "Core high" },
    { range: "$8,000–15,000", survey: 3, interview: 27, label: "Premium" },
  ];

  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Price perception: survey vs. depth interview users</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Users who experienced deep product demos valued the product 65% higher than survey-only respondents</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        <Card style={{ borderTop: `3px solid ${T.blue}`, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.blue, marginBottom: 8 }}>Survey respondents (n={PRICING.survey.n})</div>
          {[{ l: "Median 'expected'", v: "$" + PRICING.survey.medExpected.toLocaleString() }, { l: "Median 'too much'", v: "$" + PRICING.survey.medTooMuch.toLocaleString() }, { l: "Mean 'expected'", v: "$" + PRICING.survey.expected.toLocaleString() }].map(r =>
            <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${T.border}44` }}>
              <span style={{ fontSize: 10, color: T.dim }}>{r.l}</span>
              <span style={{ fontSize: 12, fontFamily: T.mono, color: T.text, fontWeight: 600 }}>{r.v}</span>
            </div>)}
        </Card>
        <Card style={{ borderTop: `3px solid ${T.purple}`, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.purple, marginBottom: 8 }}>Depth interview users (n={PRICING.interview.n})</div>
          {[{ l: "Median expected", v: "$" + PRICING.interview.median.toLocaleString() }, { l: "Mean expected", v: "$" + PRICING.interview.avg.toLocaleString() }, { l: "Range", v: "$" + PRICING.interview.min.toLocaleString() + "–$" + PRICING.interview.max.toLocaleString() }].map(r =>
            <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${T.border}44` }}>
              <span style={{ fontSize: 10, color: T.dim }}>{r.l}</span>
              <span style={{ fontSize: 12, fontFamily: T.mono, color: T.text, fontWeight: 600 }}>{r.v}</span>
            </div>)}
        </Card>
      </div>

      <div style={{ padding: 12, borderRadius: 8, background: T.purpleL, borderLeft: `3px solid ${T.purple}` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.purple, marginBottom: 4 }}>Key insight: value perception scales with information depth</div>
        <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.6 }}>Users who experienced detailed product demos, interactive Q&A, and real-world testing understood the technology's pain-point-solving potential at a deeper level — and priced accordingly. Survey respondents anchored to existing market prices for standard power wheelchairs. This gap validates the need for experiential selling, not spec-sheet selling.</div>
      </div>
    </Card>

    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 12 }}>Distribution comparison by price range</div>
      {priceRanges.map((r, i) => <div key={i} style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 11, color: T.mid, marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: T.mono }}>{r.range}</span>
          <Pill color={T.muted}>{r.label}</Pill>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 60px 1fr", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: T.blue, textAlign: "right" }}>Survey</span>
          <div style={{ background: T.alt, borderRadius: 3, height: 8, overflow: "hidden" }}><div style={{ width: r.survey + "%", height: "100%", background: T.blue + "40", borderRadius: 3 }} /></div>
          <span style={{ fontSize: 10, color: T.purple, textAlign: "right" }}>Interview</span>
          <div style={{ background: T.alt, borderRadius: 3, height: 8, overflow: "hidden" }}><div style={{ width: r.interview + "%", height: "100%", background: T.purple + "40", borderRadius: 3 }} /></div>
        </div>
      </div>)}
    </Card>

    <Card>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 10 }}>High-valuation user profiles</div>
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 12 }}>Users who quoted $6,000+ clustered into three patterns</div>
      {[
        { profile: "Independence restorers", reason: "View device as 'dignity and freedom' — value transcends function. One user shared the humiliation of asking strangers for help; a device enabling full independence is 'priceless.'", color: T.coral },
        { profile: "Medical device-anchored", reason: "Price reference is complex rehab equipment ($15K-$20K with insurance). They categorize the product as premium medical tech, not consumer electronics — and price accordingly.", color: T.blue },
        { profile: "Multi-device consolidators", reason: "Currently own 2-3 devices for different scenarios. Willing to pay premium for an all-in-one solution that replaces total cost and maintenance burden of multiple devices.", color: T.teal },
      ].map(p => <div key={p.profile} style={{ padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${p.color}`, marginBottom: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: p.color, marginBottom: 3 }}>{p.profile}</div>
        <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.5 }}>{p.reason}</div>
      </div>)}
    </Card>
  </div>;
}

// ── Tab: Strategic Implications ─────────────────────────────────

function StrategicView() {
  return <div>
    <Card style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>From research to action: how findings shaped strategy</div>
      {[
        { finding: "Safety is a 3-layer system, not a feature", action: "Product: restructured feature prioritization around passive → active → predictive safety hierarchy. Marketing: messaging shifted from 'smart features' to 'trust at every level.'", color: T.coral },
        { finding: "Portability has two distinct market paths", action: "Product: parallel-tracked lightweight disassembly (Path A) and auto-loading (Path B) as separate roadmap items targeting different segments. Path A serves caregivers; Path B serves independence seekers.", color: T.teal },
        { finding: "Value perception scales with demo depth", action: "Sales: shifted from spec-sheet outreach to experiential selling — test drives, video walkthroughs, interactive demos. Research validated that deep exposure raises WTP by ~65%.", color: T.purple },
        { finding: "40% are early adopters who reject 'medical device' framing", action: "Brand: developed dual-track positioning — 'safety-first' for 60% clinical segment, 'smart lifestyle tech' for 40% early adopter segment. Naming preference: 'Smart Chair' > 'Power Seat.'", color: T.amber },
        { finding: "5 distinct personas with different purchase triggers", action: "GTM: created persona-specific content and channel strategies. Mother's Day campaign for family safety angle; tech review placements for early adopter segment; MS community partnerships for clinical channel.", color: T.blue },
      ].map((item, i) => <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ padding: 12, borderRadius: 8, background: T.alt, borderLeft: `2px solid ${item.color}` }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: item.color, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Finding</div>
          <div style={{ fontSize: 12, color: T.text, fontWeight: 600, lineHeight: 1.5 }}>{item.finding}</div>
        </div>
        <div style={{ padding: 12, borderRadius: 8, background: item.color + "08", borderLeft: `2px solid ${item.color}40` }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: item.color, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Strategic action</div>
          <div style={{ fontSize: 11, color: T.mid, lineHeight: 1.5 }}>{item.action}</div>
        </div>
      </div>)}
    </Card>

    <Card style={{ borderLeft: `3px solid ${T.teal}` }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.teal, marginBottom: 4 }}>Meta-insight</div>
      <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.65 }}>The most important output of this research wasn't any single finding — it was building a systematic, repeatable infrastructure that converts qualitative user stories into structured, actionable product and marketing intelligence. The Want & Need matrix, persona framework, and JTBD analysis are now living documents that evolve with every new interview, giving the team a shared language for making decisions grounded in user reality rather than assumption.</div>
    </Card>
  </div>;
}

// ── Main ─────────────────────────────────────────────────────────

const TABS = [
  { id: "needs", label: "Need frequency" },
  { id: "personas", label: "User personas" },
  { id: "jtbd", label: "Jobs-To-Be-Done" },
  { id: "pricing", label: "Price intelligence" },
  { id: "strategy", label: "Strategic implications" },
];

export default function InsightDashboard() {
  const [tab, setTab] = useState("needs");
  return <div style={{ fontFamily: T.font, background: T.bg, minHeight: "100vh", padding: "28px 20px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Pill color={T.coral} bg={T.coralL}>Portfolio artifact</Pill>
          <Pill>Redacted</Pill>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px", letterSpacing: -0.5, color: T.text }}>User insight intelligence dashboard</h1>
        <p style={{ fontSize: 14, color: T.muted, margin: 0, lineHeight: 1.55, maxWidth: 660 }}>
          Synthesized findings from 200+ depth interviews with mobility device users — 8 need themes, 5 user personas, 4 Jobs-To-Be-Done, and pricing intelligence that shaped product, marketing, and sales strategy.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
          {[{ n: "200+", l: "depth interviews" }, { n: "33", l: "pricing data points" }, { n: "5", l: "user personas" }, { n: "8", l: "need themes coded" }].map(s =>
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: T.text, fontFamily: T.mono }}>{s.n}</div>
              <div style={{ fontSize: 10, color: T.dim }}>{s.l}</div>
            </div>)}
        </div>
      </div>
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `1px solid ${T.borderS}`, overflowX: "auto" }}>
        {TABS.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "10px 16px", fontSize: 12, fontWeight: tab === t.id ? 600 : 400, color: tab === t.id ? T.coral : T.dim, background: "none", border: "none", fontFamily: T.font, borderBottom: tab === t.id ? `2px solid ${T.coral}` : "2px solid transparent", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.label}</button>)}
      </div>
      {tab === "needs" && <NeedFrequency />}
      {tab === "personas" && <PersonaView />}
      {tab === "jtbd" && <JTBDView />}
      {tab === "pricing" && <PricingView />}
      {tab === "strategy" && <StrategicView />}
      <div style={{ marginTop: 28, paddingTop: 14, borderTop: `1px solid ${T.border}`, fontSize: 10, color: T.dim, lineHeight: 1.5 }}>
        Individual user identities, specific medical diagnoses, internal employee names, company Confluence data, and proprietary product specifications have been redacted. Analytical frameworks, quantitative findings, and strategic insights are preserved.
      </div>
    </div>
  </div>;
}
