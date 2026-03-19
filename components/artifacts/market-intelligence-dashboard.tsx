import { useState, useMemo } from "react";

const CRITERIA = [
  { key: "ttm", label: "Time-to-market", desc: "Speed from decision to live help center, no eng dependency" },
  { key: "search", label: "AI search & deflection", desc: "Ability to parse queries conversationally and intercept tickets" },
  { key: "analytics", label: "Actionable analytics", desc: "Search query reporting, click-through rates, content gap signals" },
  { key: "brand", label: "Brand customization", desc: "White-label capability to feel like a native product extension" },
  { key: "scalability", label: "Scalability", desc: "Ability to grow with org without requiring dedicated admins" },
  { key: "integration", label: "Integration cost", desc: "Effort to connect with existing ticketing / CRM systems" },
];

const PLATFORMS = [
  {
    id: "gitbook", name: "GitBook", tier: "Documentation-first",
    color: "#0F6E56", accent: "#1D9E75", light: "#E1F5EE", mid: "#9FE1CB",
    baseCost: 780, perSeat: 144,
    scores: { ttm: 5, search: 5, analytics: 4, brand: 4, scalability: 4, integration: 3 },
    posX: 0.85, posY: 0.25,
    pros: ["Zero-eng deployment", "Native AI search built in", "Real-time search analytics", "Drag-and-drop authoring"],
    cons: ["Documentation scope only", "Limited CRM integration"],
    setupWeeks: 2,
  },
  {
    id: "zendesk", name: "Zendesk Guide", tier: "Support suite",
    color: "#854F0B", accent: "#BA7517", light: "#FAEEDA", mid: "#FAC775",
    baseCost: 0, perSeat: 660,
    scores: { ttm: 3, search: 3, analytics: 4, brand: 3, scalability: 3, integration: 5 },
    posX: 0.55, posY: 0.55,
    pros: ["Industry-standard ticketing", "Rich ecosystem of apps", "Mature support workflows"],
    cons: ["Ecosystem lock-in", "Rigid UI theming", "Requires full suite adoption"],
    setupWeeks: 6,
  },
  {
    id: "sfdc", name: "Salesforce Knowledge", tier: "Enterprise CRM",
    color: "#791F1F", accent: "#A32D2D", light: "#FCEBEB", mid: "#F7C1C1",
    baseCost: 3600, perSeat: 0,
    scores: { ttm: 1, search: 3, analytics: 5, brand: 3, scalability: 5, integration: 5 },
    posX: 0.35, posY: 0.82,
    pros: ["Deep CRM data integration", "Enterprise-grade analytics", "Custom routing rules"],
    cons: ["Massive TCO", "Months-long implementation", "Requires dedicated admin staff"],
    setupWeeks: 16,
  },
];

const DEFAULT_WEIGHTS = { ttm: 25, search: 30, analytics: 15, brand: 10, scalability: 10, integration: 10 };

const FUNNEL_STAGES = [
  { label: "Total inbound inquiries", pct: 1.0, color: "#888780" },
  { label: "Reach help center", pct: 0.60, color: "#378ADD" },
  { label: "Find relevant article", pct: 0.42, color: "#534AB7" },
  { label: "Self-resolved (deflected)", pct: 0.10, color: "#0F6E56" },
];

const SEARCH_SIGNALS = [
  { query: '"physical therapy coverage"', volume: "High", ctr: "12%", gap: true, insight: "Members can't find PT benefit details → content gap" },
  { query: '"reward points balance"', volume: "High", ctr: "89%", gap: false, insight: "Well-served — existing article resolves most queries" },
  { query: '"change primary doctor"', volume: "Med", ctr: "34%", gap: true, insight: "Article exists but doesn't explain the process clearly" },
  { query: '"mental health resources"', volume: "Med", ctr: "8%", gap: true, insight: "Critical gap — high intent, almost no self-service path" },
  { query: '"step count sync"', volume: "Low", ctr: "91%", gap: false, insight: "Technical FAQ performing well" },
  { query: '"cancel membership"', volume: "Low", ctr: "45%", gap: false, insight: "Moderate — may need clearer CTA or escalation path" },
];

const T = {
  font: '"Instrument Sans", "DM Sans", -apple-system, system-ui, sans-serif',
  mono: '"DM Mono", "Fira Code", "SF Mono", ui-monospace, monospace',
  bg: "#FBFBF9", surface: "#FFFFFF", surfaceAlt: "#F6F5F2",
  border: "#E8E7E3", borderStrong: "#D3D1C7",
  text: "#2C2C2A", textMid: "#5F5E5A", textMuted: "#888780", textDim: "#B4B2A9",
  green: "#0F6E56", greenLight: "#E1F5EE",
};

function Pill({ children, color, bg }) {
  return <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 10, background: bg || T.surfaceAlt, color: color || T.textMuted, letterSpacing: 0.2, lineHeight: 1, display: "inline-block" }}>{children}</span>;
}

function Card({ children, style }) {
  return <div style={{ background: T.surface, borderRadius: 10, border: "1px solid " + T.border, padding: 18, ...style }}>{children}</div>;
}

function MiniBar({ value, max = 5, color }) {
  return <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: max }, (_, i) => <div key={i} style={{ width: 16, height: 5, borderRadius: 2.5, background: i < value ? color : T.surfaceAlt, transition: "background 0.3s" }} />)}</div>;
}

function SLabel({ children }) {
  return <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", color: T.textDim, marginBottom: 6 }}>{children}</div>;
}

function WeightedScoring({ weights, setWeights }) {
  const results = useMemo(() => {
    const tw = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
    return PLATFORMS.map(p => ({ ...p, weighted: Math.round(CRITERIA.reduce((s, c) => s + p.scores[c.key] * (weights[c.key] / tw), 0) * 100) / 100 })).sort((a, b) => b.weighted - a.weighted);
  }, [weights]);
  const best = results[0].weighted;
  return <div>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Criteria weights</div><div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Drag to reprioritize — ranking updates in real time</div></div>
        <button onClick={() => setWeights({ ...DEFAULT_WEIGHTS })} style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid " + T.border, background: T.surface, color: T.textMuted, fontSize: 11, cursor: "pointer", fontFamily: T.font, fontWeight: 500 }}>Reset defaults</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
        {CRITERIA.map(c => <div key={c.key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 11, color: T.textMid, width: 115, flexShrink: 0 }}>{c.label}</div>
          <input type="range" min={0} max={50} value={weights[c.key]} onChange={e => setWeights(w => ({ ...w, [c.key]: +e.target.value }))} style={{ flex: 1, accentColor: T.green, height: 3 }} />
          <div style={{ fontSize: 11, fontFamily: T.mono, color: T.green, width: 32, textAlign: "right", fontWeight: 600 }}>{weights[c.key]}%</div>
        </div>)}
      </div>
    </Card>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
      {results.map((p, i) => <Card key={p.id} style={{ borderLeft: "3px solid " + p.accent, padding: "14px 18px", display: "grid", gridTemplateColumns: "30px 1fr 180px 70px", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.mono, color: i === 0 ? T.green : T.textDim }}>#{i + 1}</div>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{p.name}</div><div style={{ fontSize: 11, color: T.textMuted }}>{p.tier}</div></div>
        <div style={{ background: T.surfaceAlt, borderRadius: 4, height: 22, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, borderRadius: 4, width: (p.weighted / best) * 100 + "%", background: p.accent + "22", transition: "width 0.5s" }} />
          <span style={{ position: "relative", fontSize: 11, fontFamily: T.mono, color: p.color, fontWeight: 600, padding: "0 8px", lineHeight: "22px" }}>{p.weighted.toFixed(2)} / 5.00</span>
        </div>
        <Pill color={p.color} bg={p.light}>{["High", "Medium", "Low"][i]} fit</Pill>
      </Card>)}
    </div>
    <Card>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 10 }}>Score breakdown by criterion</div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
          <thead><tr>
            <th style={{ padding: "6px 8px", textAlign: "left", color: T.textDim, fontWeight: 500, borderBottom: "1px solid " + T.border }}>Criterion</th>
            <th style={{ padding: "6px 8px", textAlign: "center", color: T.textDim, fontWeight: 500, borderBottom: "1px solid " + T.border, fontSize: 10 }}>Weight</th>
            {results.map(p => <th key={p.id} style={{ padding: "6px 8px", textAlign: "center", color: p.color, fontWeight: 600, borderBottom: "1px solid " + T.border }}>{p.name}</th>)}
          </tr></thead>
          <tbody>{CRITERIA.map(c => <tr key={c.key}>
            <td style={{ padding: "7px 8px", color: T.textMid, borderBottom: "1px solid " + T.border + "22", fontSize: 11 }}>{c.label}<div style={{ fontSize: 10, color: T.textDim, marginTop: 1 }}>{c.desc}</div></td>
            <td style={{ padding: "7px 8px", textAlign: "center", fontFamily: T.mono, color: T.textDim, borderBottom: "1px solid " + T.border + "22" }}>{weights[c.key]}%</td>
            {results.map(p => <td key={p.id} style={{ padding: "7px 8px", textAlign: "center", borderBottom: "1px solid " + T.border + "22" }}><MiniBar value={p.scores[c.key]} color={p.accent} /></td>)}
          </tr>)}</tbody>
        </table>
      </div>
    </Card>
  </div>;
}

function TCOSimulator() {
  const [seats, setSeats] = useState(2);
  const [years, setYears] = useState(3);
  const [deflPct, setDeflPct] = useState(10);
  const [cpw, setCpw] = useState(200);
  const annualCases = cpw * 52;
  const costPerCase = 18;
  const results = useMemo(() => PLATFORMS.map(p => {
    const ac = p.baseCost + p.perSeat * seats, tc = ac * years, dc = Math.round(annualCases * deflPct / 100), as_ = dc * costPerCase, net = as_ - ac;
    return { ...p, annualCost: ac, totalCost: tc, deflectedCases: dc, annualSavings: as_, netAnnual: net, roi: ac > 0 ? Math.round((as_ / ac) * 10) / 10 : 0, paybackDays: ac > 0 ? Math.round((ac / as_) * 365) : 0 };
  }), [seats, years, deflPct, cpw, annualCases]);
  const maxTCO = Math.max(...results.map(r => r.totalCost));
  return <div>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 14 }}>Model parameters</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
        {[{ label: "Editor seats", v: seats, set: setSeats, min: 1, max: 10, u: "" }, { label: "Time horizon", v: years, set: setYears, min: 1, max: 5, u: " yr" }, { label: "Deflection rate", v: deflPct, set: setDeflPct, min: 5, max: 40, u: "%" }, { label: "Cases / week", v: cpw, set: setCpw, min: 50, max: 500, u: "" }].map(s => <div key={s.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 11, color: T.textMuted }}>{s.label}</span><span style={{ fontSize: 12, fontFamily: T.mono, color: T.green, fontWeight: 600 }}>{s.v}{s.u}</span></div>
          <input type="range" min={s.min} max={s.max} value={s.v} onChange={e => s.set(+e.target.value)} style={{ width: "100%", accentColor: T.green, height: 3 }} />
        </div>)}
      </div>
      <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 6, background: T.surfaceAlt, display: "flex", justifyContent: "space-between", fontSize: 11 }}>
        <span style={{ color: T.textDim }}>Derived: annual cases</span><span style={{ fontFamily: T.mono, color: T.text, fontWeight: 600 }}>{annualCases.toLocaleString()}</span>
      </div>
    </Card>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 12 }}>{years}-year total cost of ownership</div>
      {results.map(p => <div key={p.id} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 12, color: T.textMid }}>{p.name}</span><span style={{ fontSize: 12, fontFamily: T.mono, color: p.color, fontWeight: 600 }}>${p.totalCost.toLocaleString()}</span></div>
        <div style={{ background: T.surfaceAlt, borderRadius: 4, height: 10, overflow: "hidden" }}><div style={{ width: (p.totalCost / maxTCO) * 100 + "%", height: "100%", background: p.accent + "40", borderRadius: 4, transition: "width 0.5s" }} /></div>
      </div>)}
    </Card>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
      {results.map(p => <Card key={p.id} style={{ borderTop: "3px solid " + p.accent, padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 10 }}>{p.name}</div>
        {[{ l: "Annual cost", v: "$" + p.annualCost.toLocaleString() }, { l: "Deflected cases/yr", v: p.deflectedCases.toLocaleString() }, { l: "Labor savings/yr", v: "$" + p.annualSavings.toLocaleString() }, { l: "Net savings/yr", v: "$" + p.netAnnual.toLocaleString() }, { l: "ROI multiple", v: p.roi + "×" }, { l: "Payback period", v: p.paybackDays + " days" }].map(row => <div key={row.l} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid " + T.border + "44" }}>
          <span style={{ fontSize: 10, color: T.textDim }}>{row.l}</span><span style={{ fontSize: 11, fontFamily: T.mono, color: T.text, fontWeight: 500 }}>{row.v}</span>
        </div>)}
      </Card>)}
    </div>
    <Card>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 4 }}>Sensitivity: net annual savings by deflection rate</div>
      <div style={{ fontSize: 11, color: T.textDim, marginBottom: 14 }}>Holding {seats} seats, {cpw} cases/wk constant · Shown for top-ranked platform</div>
      <div style={{ display: "grid", gridTemplateColumns: "50px 1fr", gap: "6px 10px", alignItems: "center" }}>
        {[5, 10, 15, 20, 25, 30].map(rate => { const b = PLATFORMS[0]; const sav = Math.round(annualCases * rate / 100) * costPerCase - (b.baseCost + b.perSeat * seats); const maxS = Math.round(annualCases * 0.30) * costPerCase; return [
          <div key={"l" + rate} style={{ fontSize: 11, fontFamily: T.mono, color: T.textDim, textAlign: "right" }}>{rate}%</div>,
          <div key={"b" + rate} style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ height: 8, borderRadius: 4, transition: "width 0.4s", width: Math.max(3, (sav / maxS) * 100) + "%", background: sav > 0 ? T.green : "#A32D2D" }} /><span style={{ fontSize: 10, fontFamily: T.mono, fontWeight: 600, color: sav > 0 ? T.green : "#A32D2D", whiteSpace: "nowrap" }}>${sav.toLocaleString()}</span></div>
        ]; })}
      </div>
    </Card>
  </div>;
}

function MarketPositioning() {
  const [hovered, setHovered] = useState(null);
  return <div>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Capability vs. cost positioning</div><div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Bubble size = implementation timeline</div></div>
        <div style={{ display: "flex", gap: 14 }}>{PLATFORMS.map(p => <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: p.accent }} /><span style={{ fontSize: 10, color: T.textMuted }}>{p.name}</span></div>)}</div>
      </div>
      <div style={{ position: "relative", height: 320, background: T.surfaceAlt, borderRadius: 8, border: "1px solid " + T.border, overflow: "hidden" }}>
        {[0.25, 0.5, 0.75].map(v => <div key={"h" + v} style={{ position: "absolute", left: 0, right: 0, top: v * 100 + "%", borderTop: "1px dashed " + T.border }} />)}
        {[0.25, 0.5, 0.75].map(v => <div key={"v" + v} style={{ position: "absolute", top: 0, bottom: 0, left: v * 100 + "%", borderLeft: "1px dashed " + T.border }} />)}
        <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", fontSize: 10, color: T.textDim }}>Capability fit →</div>
        <div style={{ position: "absolute", left: 6, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: 10, color: T.textDim, whiteSpace: "nowrap" }}>Annual cost →</div>
        <div style={{ position: "absolute", right: 10, top: 10, padding: "6px 10px", background: T.green + "10", border: "1px dashed " + T.green + "40", borderRadius: 6, fontSize: 10, color: T.green, fontWeight: 500, width: 110, textAlign: "center" }}>Ideal zone:<br />high capability, low cost</div>
        {PLATFORMS.map(p => { const x = p.posX * 88 + 6, y = p.posY * 83 + 6, sz = 16 + p.setupWeeks * 1.5, on = hovered === p.id; return <div key={p.id} onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)} style={{ position: "absolute", left: x + "%", top: y + "%", transform: "translate(-50%,-50%)", cursor: "pointer", zIndex: on ? 10 : 1 }}>
          <div style={{ width: sz, height: sz, borderRadius: "50%", background: on ? p.accent + "35" : p.accent + "18", border: "2px solid " + p.accent, transition: "all 0.2s", transform: on ? "scale(1.25)" : "scale(1)" }} />
          <div style={{ position: "absolute", top: sz / 2 + 8, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontSize: 11, fontWeight: 700, color: p.color }}>{p.name}</div>
          {on && <div style={{ position: "absolute", bottom: sz / 2 + 12, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", padding: "7px 12px", borderRadius: 8, background: T.surface, border: "1px solid " + T.border, fontSize: 10, color: T.text, textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}><div style={{ fontWeight: 700, marginBottom: 2 }}>{p.tier}</div><div style={{ color: T.textMuted }}>Setup: ~{p.setupWeeks} weeks</div></div>}
        </div>; })}
      </div>
    </Card>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 12 }}>Implementation timeline comparison</div>
      {PLATFORMS.map(p => <div key={p.id} style={{ marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 11, color: T.textMid }}>{p.name}</span><span style={{ fontSize: 11, fontFamily: T.mono, color: p.color, fontWeight: 600 }}>~{p.setupWeeks} wk</span></div>
        <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: 16 }, (_, i) => <div key={i} style={{ flex: 1, height: 7, borderRadius: 2, background: i < p.setupWeeks ? p.accent + "50" : T.surfaceAlt, transition: "background 0.3s" }} />)}</div>
      </div>)}
      <div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>Each block = 1 week. Documentation-first deploys in a sprint; enterprise CRM takes a quarter+.</div>
    </Card>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
      {PLATFORMS.map(p => <Card key={p.id} style={{ borderTop: "3px solid " + p.accent, padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 10 }}>{p.name}</div>
        <SLabel>Strengths</SLabel>
        {p.pros.map((s, i) => <div key={i} style={{ fontSize: 11, color: T.textMid, marginBottom: 4, paddingLeft: 8, borderLeft: "2px solid " + T.green + "40", lineHeight: 1.4 }}>{s}</div>)}
        <div style={{ marginTop: 8 }} />
        <SLabel>Weaknesses</SLabel>
        {p.cons.map((s, i) => <div key={i} style={{ fontSize: 11, color: T.textMid, marginBottom: 4, paddingLeft: 8, borderLeft: "2px solid #A32D2D30", lineHeight: 1.4 }}>{s}</div>)}
      </Card>)}
    </div>
  </div>;
}

function DeflectionIntel() {
  return <div>
    <Card style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>Ticket deflection funnel model</div>
      <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 16 }}>How inbound inquiries flow through a help center — from arrival to self-resolution</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        {FUNNEL_STAGES.map((s, i) => { const w = 35 + s.pct * 60; return <div key={i} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 70, textAlign: "right", fontSize: 11, fontFamily: T.mono, color: T.textDim, flexShrink: 0 }}>{Math.round(s.pct * 100)}%</div>
          <div style={{ width: w + "%", padding: "10px 14px", background: s.color + "12", borderLeft: "3px solid " + s.color, borderRadius: i === 0 ? "8px 8px 0 0" : i === FUNNEL_STAGES.length - 1 ? "0 0 8px 8px" : 0 }}><div style={{ fontSize: 12, fontWeight: 600, color: s.color }}>{s.label}</div></div>
          <div style={{ fontSize: 11, fontFamily: T.mono, color: s.color, flexShrink: 0, fontWeight: 500 }}>{s.pct === 1 ? "N" : Math.round(s.pct * 100) + "% · N"}</div>
        </div>; })}
      </div>
      <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 6, background: T.greenLight, border: "1px solid " + T.green + "30", fontSize: 11, color: T.green, lineHeight: 1.5 }}>
        The 10% deflection assumption is intentionally conservative. Industry benchmarks for AI-powered help centers range 15–30%. We modeled the floor case so the argument holds under pessimistic conditions.
      </div>
    </Card>
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Search analytics → product intelligence</div><div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>The help center isn't just cost savings — it's a listening post</div></div>
        <Pill color="#D85A30" bg="#FAECE7">Key differentiator</Pill>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
          <thead><tr>{["Search query", "Volume", "CTR", "Gap?", "Product signal"].map(h => <th key={h} style={{ padding: "7px 8px", textAlign: "left", fontWeight: 600, color: T.textDim, borderBottom: "1px solid " + T.border, fontSize: 10, whiteSpace: "nowrap" }}>{h}</th>)}</tr></thead>
          <tbody>{SEARCH_SIGNALS.map((s, i) => <tr key={i} style={{ background: s.gap ? "#FCEBEB44" : "transparent" }}>
            <td style={{ padding: "7px 8px", borderBottom: "1px solid " + T.border + "22", fontFamily: T.mono, color: T.text, fontSize: 11 }}>{s.query}</td>
            <td style={{ padding: "7px 8px", borderBottom: "1px solid " + T.border + "22" }}><Pill color={s.volume === "High" ? "#993C1D" : s.volume === "Med" ? "#854F0B" : T.textDim} bg={s.volume === "High" ? "#FAECE7" : s.volume === "Med" ? "#FAEEDA" : T.surfaceAlt}>{s.volume}</Pill></td>
            <td style={{ padding: "7px 8px", borderBottom: "1px solid " + T.border + "22", fontFamily: T.mono, color: parseInt(s.ctr) < 30 ? "#A32D2D" : T.green, fontWeight: 600 }}>{s.ctr}</td>
            <td style={{ padding: "7px 8px", borderBottom: "1px solid " + T.border + "22" }}>{s.gap ? <span style={{ fontSize: 10, color: "#A32D2D", fontWeight: 700 }}>Gap</span> : <span style={{ fontSize: 10, color: T.green, fontWeight: 600 }}>OK</span>}</td>
            <td style={{ padding: "7px 8px", borderBottom: "1px solid " + T.border + "22", color: T.textMid, lineHeight: 1.4 }}>{s.insight}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[{ label: "Content gap signal", desc: "High volume + low CTR = missing or inadequate article", color: "#A32D2D", bg: "#FCEBEB" }, { label: "UX friction signal", desc: "Medium CTR = article needs clearer structure or CTA", color: "#854F0B", bg: "#FAEEDA" }, { label: "Feature request signal", desc: "Repeated queries about unsupported functionality = roadmap input", color: "#185FA5", bg: "#E6F1FB" }].map(s => <div key={s.label} style={{ padding: 10, borderRadius: 6, background: s.bg, borderLeft: "2px solid " + s.color + "40" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: s.color, marginBottom: 3 }}>{s.label}</div>
          <div style={{ fontSize: 10, color: T.textMid, lineHeight: 1.4 }}>{s.desc}</div>
        </div>)}
      </div>
    </Card>
  </div>;
}

function Methodology() {
  const steps = [
    { num: "01", title: "Stakeholder needs → evaluation criteria", tag: "Discovery", color: "#534AB7", bg: "#EEEDFE", desc: "Interviewed support leads and product team. Surfaced four non-negotiables (time-to-market, AI search, analytics, brand fit) plus two secondary criteria (scalability, integration cost). Weighted criteria by business priority — AI search & deflection received the highest weight because it directly drives the ROI thesis." },
    { num: "02", title: "Three-tier competitive scan", tag: "Analysis", color: "#0F6E56", bg: "#E1F5EE", desc: "Selected platforms across three market tiers (documentation-first, integrated support suite, enterprise CRM) to test the hypothesis that a lightweight, purpose-built tool outperforms heavyweight platforms at our current maturity stage. Scored each on 6 criteria with a 5-point rubric." },
    { num: "03", title: "Parametric financial model", tag: "Modeling", color: "#993C1D", bg: "#FAECE7", desc: "Built a sensitivity analysis using real operational inputs (case volume, staffing, salary range). The model is parametric — changing any input cascades through the entire cost structure. Used low/high salary bounds to create a range rather than a point estimate, making the recommendation robust to uncertainty." },
    { num: "04", title: "Search analytics as product intelligence", tag: "Insight", color: "#185FA5", bg: "#E6F1FB", desc: "Reframed the help center from a cost center to a product intelligence tool. Search query analytics surface where members struggle; low click-through rates identify documentation gaps; repeated queries about unsupported features generate roadmap signals. This shifted the conversation from \"how do we cut costs\" to \"how do we learn faster.\"" },
    { num: "05", title: "Recommendation with built-in decision reversibility", tag: "Strategy", color: "#854F0B", bg: "#FAEEDA", desc: "Structured the recommendation to minimize switching cost: documentation-first platform has low lock-in (content exports as Markdown), low TCO ceiling, and fast time-to-value. If the org outgrows it, migration is straightforward. This addressed the key stakeholder concern: \"what if we pick wrong?\"" },
  ];
  return <div>
    {steps.map(s => <div key={s.num} style={{ display: "flex", gap: 14, marginBottom: 12, alignItems: "flex-start" }}>
      <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.mono, color: T.textDim, minWidth: 36, paddingTop: 2 }}>{s.num}</div>
      <Card style={{ flex: 1, borderLeft: "3px solid " + s.color }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}><div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{s.title}</div><Pill color={s.color} bg={s.bg}>{s.tag}</Pill></div>
        <div style={{ fontSize: 12, color: T.textMid, lineHeight: 1.65 }}>{s.desc}</div>
      </Card>
    </div>)}
    <Card style={{ borderLeft: "3px solid " + T.green, marginTop: 4 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.green, marginBottom: 4 }}>Analytical framework takeaway</div>
      <div style={{ fontSize: 12, color: T.textMid, lineHeight: 1.65 }}>The strongest product recommendations aren't about picking the "best" tool — they're about matching organizational maturity to platform complexity, building in decision reversibility, and reframing cost conversations as learning conversations.</div>
    </Card>
  </div>;
}

const TABS = [
  { id: "scoring", label: "Weighted scoring" },
  { id: "tco", label: "TCO & ROI simulator" },
  { id: "positioning", label: "Market positioning" },
  { id: "funnel", label: "Deflection & intelligence" },
  { id: "methodology", label: "Methodology" },
];

export default function MarketIntelDashboard() {
  const [tab, setTab] = useState("scoring");
  const [weights, setWeights] = useState({ ...DEFAULT_WEIGHTS });
  return <div style={{ fontFamily: T.font, background: T.bg, minHeight: "100vh", padding: "28px 20px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}><Pill color={T.green} bg={T.greenLight}>Portfolio artifact</Pill><Pill>Redacted</Pill></div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px", letterSpacing: -0.5, color: T.text }}>Market intelligence dashboard</h1>
        <p style={{ fontSize: 14, color: T.textMuted, margin: 0, lineHeight: 1.55, maxWidth: 640 }}>Weighted multi-criteria platform evaluation, parametric TCO modeling, and search-analytics-as-product-intelligence framework for a knowledge management platform decision.</p>
      </div>
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid " + T.borderStrong, overflowX: "auto" }}>
        {TABS.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "10px 16px", fontSize: 12, fontWeight: tab === t.id ? 600 : 400, color: tab === t.id ? T.green : T.textDim, background: "none", border: "none", fontFamily: T.font, borderBottom: tab === t.id ? "2px solid " + T.green : "2px solid transparent", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.label}</button>)}
      </div>
      {tab === "scoring" && <WeightedScoring weights={weights} setWeights={setWeights} />}
      {tab === "tco" && <TCOSimulator />}
      {tab === "positioning" && <MarketPositioning />}
      {tab === "funnel" && <DeflectionIntel />}
      {tab === "methodology" && <Methodology />}
      <div style={{ marginTop: 28, paddingTop: 14, borderTop: "1px solid " + T.border, fontSize: 10, color: T.textDim, lineHeight: 1.5 }}>Exact financial figures, case volumes, salary data, and internal staffing numbers have been redacted. Platform names retained (publicly available products). Cost structures approximate, based on published pricing.</div>
    </div>
  </div>;
}
