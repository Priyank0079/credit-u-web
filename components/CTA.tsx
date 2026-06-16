                                            "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const tickerItems = [
  { text: "100% Digital Process", icon: "✓" },
  { text: "RBI Compliant Platform", icon: "✓" },
  { text: "No Paperwork Required", icon: "✓" },
  { text: "Instant Credit Decision", icon: "✓" },
  { text: "Bank-Grade Encryption", icon: "✓" },
  { text: "UPI Payments Supported", icon: "✓" }
];

const counters = [
  { label: "Processing", value: 90, suffix: "s", icon: Zap },
  { label: "Digital", value: 100, suffix: "%", icon: CheckCircle2 },
  { label: "Security", value: 256, suffix: "-bit", icon: TrendingUp }
];

export default function CTA() {
  const [vals, setVals] = useState(counters.map(() => 0));
  const { ref: sectionRef, inView } = useInView<HTMLElement>();

  // Count-up animation — pauses off-screen
  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVals(counters.map((c) => c.value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section">
      <div className="container-page">
        {/* Outer wrapper for the rotating conic border */}
        <div className="group relative overflow-hidden rounded-[2rem] p-[2px]">
          {/* Rotating conic border */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[-50%] -z-10 opacity-90"
            style={{
              background:
                "conic-gradient(from 0deg, #0b3c6d, #1a5a9e, #538fc1, #f59e0b, #10b981, #06b6d4, #093158, #0b3c6d)",
              animation: "spin 8s linear infinite"
            }}
          />

          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-slate-950 px-6 py-14 sm:px-10 sm:py-20">
            {/* Atmosphere */}
            <div className="pointer-events-none absolute inset-0">
              {/* Animated blobs */}
              <div
                className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl"
                style={{ animation: "float 7s ease-in-out infinite" }}
              />
              <div
                className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl"
                style={{ animation: "float 9s ease-in-out infinite reverse" }}
              />
              <div
                className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl"
                style={{ animation: "float 11s ease-in-out infinite" }}
              />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                  backgroundSize: "44px 44px"
                }}
              />

              {/* Floating sparkles */}
              {[
                { top: "15%", left: "12%", delay: "0s" },
                { top: "25%", right: "16%", delay: "1.2s" },
                { top: "55%", left: "8%", delay: "2s" },
                { bottom: "22%", right: "10%", delay: "0.6s" },
                { top: "70%", left: "70%", delay: "1.8s" },
                { top: "40%", right: "45%", delay: "2.4s" }
              ].map((s, i) => (
                <span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.7)]"
                  style={{
                    ...s,
                    animation: `float 4s ease-in-out ${s.delay} infinite`
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-3xl text-center text-white">
              {/* Badge */}
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="bg-gradient-to-r from-cyan-300 to-brand-300 bg-clip-text text-transparent">
                  Launching soon across India
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-6 text-[1.6rem] font-black leading-[1.05] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Your Credit Line.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-brand-300 to-brand-400 bg-clip-text text-transparent">
                    In 90 Seconds.
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-brand-500/30 blur-md"
                  />
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 xs:text-base sm:text-lg">
                No paperwork. No queues. Apply, verify, and get funds in your
                account — entirely from your phone.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#download"
                  className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-2xl transition hover:scale-105"
                >
                  {/* Shimmer */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-300/60 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                  <Sparkles size={16} className="mr-2 text-brand-600" />
                  Apply Now
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Check Eligibility
                </Link>
              </div>

              {/* Animated counters */}
              <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
                {counters.map((c, i) => {
                  const Icon = c.icon;
                  const display = Math.round(vals[i]).toLocaleString("en-IN");
                  return (
                    <div
                      key={c.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.08] xs:p-3 sm:p-4"
                    >
                      <Icon
                        size={16}
                        className="mx-auto text-cyan-300"
                      />
                      <div className="mt-1.5 text-lg font-extrabold xs:text-xl sm:text-3xl">
                        {display}
                        <span className="text-sm text-brand-300 xs:text-base">
                          {c.suffix}
                        </span>
                      </div>
                      <div className="whitespace-nowrap text-[8px] font-bold uppercase tracking-wide text-white/50 xs:text-[10px] xs:tracking-wider">
                        {c.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <Shield size={12} className="text-emerald-400" /> Bank-grade
                  Security
                </span>
                <span className="opacity-30">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap size={12} className="text-amber-300" /> Instant Disbursal
                </span>
                <span className="opacity-30">•</span>
                <span>RBI Compliant</span>
              </div>
            </div>

            {/* Live feature ticker */}
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
              <div className="absolute left-0 top-0 z-10 flex h-full items-center gap-2 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent px-4 pr-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                  Features
                </span>
              </div>
              <div
                className="flex gap-8 whitespace-nowrap py-3 pl-32 pr-6"
                style={{ animation: "marquee 25s linear infinite" }}
              >
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-shrink-0 items-center gap-2 text-xs text-white/80"
                  >
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span className="font-semibold text-white">
                      {item.text}
                    </span>
                    <span className="ml-4 text-white/20">|</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}