"use client";

import { useEffect, useState } from "react";
import {
  Video,
  ScanFace,
  Fingerprint,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  Eye,
  Activity,
  FileText,
  Zap
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const checks = [
  { icon: FileText, label: "PAN OCR", value: "99.5%" },
  { icon: Fingerprint, label: "Aadhaar e-KYC", value: "Verified" },
  { icon: Eye, label: "Liveness Check", value: "99.8%" },
  { icon: ScanFace, label: "Face Match", value: "Match" },
  { icon: ShieldCheck, label: "AML Screen", value: "Clean" },
  { icon: Lock, label: "256-bit SSL", value: "Active" }
];

const metrics = [
  { label: "Faces Verified", target: 99.8, suffix: "%" },
  { label: "OCR Accuracy", target: 99.5, suffix: "%" },
  { label: "Avg. Time", target: 90, suffix: "s" },
  { label: "Fraud Blocked", target: 12450, suffix: "+" }
];

// Pre-computed deterministic mesh dot positions (kept outside render so they
// don't re-randomize on every state update — would otherwise jitter wildly).
const MESH_DOTS = (() => {
  const dots: { cx: number; cy: number }[] = [];
  // Seeded pseudo-random for stable layout across renders
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  while (dots.length < 70) {
    const cx = 60 + rand() * 80;
    const cy = 40 + rand() * 160;
    const ox = (cx - 100) / 50;
    const oy = (cy - 120) / 80;
    if (ox * ox + oy * oy <= 1) dots.push({ cx, cy });
  }
  return dots;
})();

export default function KYCSection() {
  const [scanLine, setScanLine] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [counters, setCounters] = useState(metrics.map(() => 0));
  const { ref: sectionRef, inView } = useInView<HTMLElement>();

  // Scan line animation (continuous) — pauses off-screen
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    let start = performance.now();
    const tick = (now: number) => {
      const t = ((now - start) % 2400) / 2400;
      setScanLine(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  // Reveal verification chips sequentially — pauses off-screen
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setRevealed((r) => (r + 1) % (checks.length + 2));
    }, 700);
    return () => clearInterval(t);
  }, [inView]);

  // Animate metric counters once on mount
  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounters(metrics.map((m) => m.target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="kyc"
      className="section relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container-page relative">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <Video size={14} className="text-cyan-300" />
            Digital KYC
          </span>
          <h2 className="mt-4 text-[1.6rem] font-extrabold tracking-tight xs:text-3xl sm:text-4xl lg:text-5xl">
            Your Security is{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
              Non-Negotiable
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Watch live biometric verification in motion. Military-grade
            protection with AI-powered face match and liveness detection.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT — biometric scanner */}
          <div className="relative min-w-0 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-md">
              {/* Outer rotating glow */}
              <div className="absolute -inset-10 -z-10">
                <div
                  className="absolute inset-0 rounded-full opacity-60 blur-3xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #0b3c6d, #1a5a9e, #538fc1, #06b6d4, #093158, #0b3c6d)",
                    animation: "spin 8s linear infinite"
                  }}
                />
              </div>

              {/* Concentric pulse rings */}
              <div className="absolute inset-0 -z-0 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="absolute h-full w-full animate-ping rounded-3xl border border-cyan-400/40"
                    style={{ animationDelay: `${i * 0.7}s`, animationDuration: "2.4s" }}
                  />
                ))}
              </div>

              {/* Scanner frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-2xl backdrop-blur">
                {/* Top status bar */}
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      REC · LIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 ring-1 ring-emerald-400/40">
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-300">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Face mesh visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Face silhouette */}
                  <svg
                    viewBox="0 0 200 240"
                    className="h-3/4 w-auto"
                    fill="none"
                  >
                    {/* mesh dots */}
                    {MESH_DOTS.map((d, i) => (
                      <circle
                        key={i}
                        cx={d.cx}
                        cy={d.cy}
                        r={1.2}
                        fill="rgba(34,211,238,0.85)"
                      />
                    ))}
                    {/* face oval outline */}
                    <ellipse
                      cx="100"
                      cy="120"
                      rx="50"
                      ry="80"
                      stroke="rgba(34,211,238,0.45)"
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />
                    {/* eyes/nose/mouth */}
                    <circle cx="80" cy="100" r="3" fill="#22d3ee" />
                    <circle cx="120" cy="100" r="3" fill="#22d3ee" />
                    <path
                      d="M85 145 Q100 158 115 145"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M100 115 L100 130"
                      stroke="rgba(34,211,238,0.7)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Scan line */}
                <div
                  className="absolute inset-x-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_18px_2px_rgba(34,211,238,0.85)]"
                  style={{ top: `${15 + scanLine * 70}%` }}
                />
                <div
                  className="absolute inset-x-0 z-0 h-32 bg-gradient-to-b from-cyan-400/15 to-transparent"
                  style={{ top: `${15 + scanLine * 70 - 18}%` }}
                />

                {/* Corner brackets */}
                {[
                  "top-16 left-5 border-l-2 border-t-2",
                  "top-16 right-5 border-r-2 border-t-2",
                  "bottom-20 left-5 border-l-2 border-b-2",
                  "bottom-20 right-5 border-r-2 border-b-2"
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`absolute h-6 w-6 border-cyan-400 ${cls}`}
                  />
                ))}

                {/* Bottom info strip */}
                <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/40 px-5 py-3 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                        Liveness Score
                      </div>
                      <div className="text-lg font-extrabold leading-none text-white">
                        99.8%
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 ring-1 ring-emerald-400/30">
                      <Sparkles size={11} className="text-emerald-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Real Person
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating verification chips */}
              <div className="pointer-events-none absolute left-0 top-12 hidden lg:block">
                <FloatingChip
                  icon={FileText}
                  label="PAN Verified"
                  active={revealed >= 1}
                  hue="from-brand-600 to-brand-400"
                />
              </div>
              <div className="pointer-events-none absolute right-0 top-24 hidden lg:block">
                <FloatingChip
                  icon={Fingerprint}
                  label="Aadhaar e-KYC"
                  active={revealed >= 2}
                  hue="from-brand-400 to-pink-500"
                />
              </div>
              <div className="pointer-events-none absolute bottom-32 left-0 hidden lg:block">
                <FloatingChip
                  icon={ShieldCheck}
                  label="AML Clean"
                  active={revealed >= 3}
                  hue="from-emerald-500 to-teal-500"
                />
              </div>
              <div className="pointer-events-none absolute bottom-44 right-0 hidden lg:block">
                <FloatingChip
                  icon={Activity}
                  label="Bank Verified"
                  active={revealed >= 4}
                  hue="from-cyan-500 to-brand-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — checks grid + metrics */}
          <div className="min-w-0 text-center lg:col-span-6 lg:text-left">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Zap size={14} className="-mt-0.5 mr-1 inline" />
              Live Verification Stack
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {checks.map((c, i) => {
                const CIcon = c.icon;
                const lit = revealed === 0 || revealed > i;
                return (
                  <div
                    key={c.label}
                    className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-500 ${
                      lit
                        ? "border-white/15 bg-white/[0.06]"
                        : "border-white/5 bg-white/[0.02] opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
                          lit
                            ? "bg-gradient-to-br from-brand-500/40 to-brand-600/40 ring-1 ring-cyan-400/40"
                            : "bg-white/5 ring-1 ring-white/10"
                        }`}
                      >
                        <CIcon
                          size={16}
                          className={lit ? "text-cyan-300" : "text-white/40"}
                        />
                      </div>
                      {lit && (
                        <CheckCircle2
                          size={16}
                          className="text-emerald-400"
                        />
                      )}
                    </div>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {c.label}
                    </div>
                    <div
                      className={`mt-0.5 text-base font-extrabold ${
                        lit ? "text-white" : "text-white/40"
                      }`}
                    >
                      {c.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metrics row */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((m, i) => {
                const formatted =
                  m.target >= 1000
                    ? Math.round(counters[i]).toLocaleString("en-IN")
                    : counters[i].toFixed(m.suffix === "s" ? 0 : 1);
                return (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-4"
                  >
                    <div className="text-xl font-extrabold text-white">
                      {formatted}
                      <span className="text-base text-cyan-300">{m.suffix}</span>
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compliance bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30">
                <ShieldCheck size={18} className="text-emerald-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white">
                  RBI Compliant · ISO 27001:2022 · 256-bit SSL
                </div>
                <div className="text-xs text-white/60">
                  Anti-money laundering and risk assessment screening on every
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  icon: Icon,
  label,
  active,
  hue
}: {
  icon: any;
  label: string;
  active: boolean;
  hue: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 shadow-2xl backdrop-blur-md transition-all duration-500 ${
        active
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-2 scale-90 opacity-0"
      }`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${hue}`}
      >
        <Icon size={12} className="text-white" />
      </span>
      <span className="text-xs font-bold text-white">{label}</span>
      <CheckCircle2 size={13} className="text-emerald-400" />
    </div>
  );
}
