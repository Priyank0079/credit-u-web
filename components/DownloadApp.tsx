"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Smartphone,
  Wallet,
  Shield,
  TrendingUp,
  Bell,
  CheckCircle2,
  Download,
  QrCode,
  Sparkles,
  Rocket,
  X
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Screen = {
  title: string;
  badge: string;
  hue: string;
  icon: any;
  rows: { label: string; value: string; tone?: "good" | "neutral" }[];
};

const screens: Screen[] = [
  {
    title: "Dashboard",
    badge: "OVERVIEW",
    hue: "from-brand-600 to-brand-400",
    icon: Wallet,
    rows: [
      { label: "Available Limit", value: "₹4,50,000", tone: "good" },
      { label: "Active Loan", value: "₹50,000" },
      { label: "Next EMI", value: "Jul 5" },
      { label: "Credit Score", value: "780", tone: "good" }
    ]
  },
  {
    title: "Apply Loan",
    badge: "INSTANT",
    hue: "from-cyan-500 to-brand-500",
    icon: TrendingUp,
    rows: [
      { label: "Loan Amount", value: "₹2,00,000" },
      { label: "Tenure", value: "24 months" },
      { label: "Rate of Interest", value: "14% p.a." },
      { label: "Monthly EMI", value: "₹9,602", tone: "good" }
    ]
  },
  {
    title: "VKYC",
    badge: "VERIFIED",
    hue: "from-emerald-500 to-teal-500",
    icon: Shield,
    rows: [
      { label: "PAN", value: "Verified ✓", tone: "good" },
      { label: "Aadhaar", value: "Verified ✓", tone: "good" },
      { label: "Liveness Score", value: "99.8%", tone: "good" },
      { label: "AML Check", value: "Clean", tone: "good" }
    ]
  },
  {
    title: "EMI Tracker",
    badge: "ON TIME",
    hue: "from-amber-500 to-orange-500",
    icon: Bell,
    rows: [
      { label: "Paid", value: "8 / 24" },
      { label: "Outstanding", value: "₹1,33,000" },
      { label: "Auto-Pay", value: "Enabled", tone: "good" },
      { label: "Next Reminder", value: "Jul 5" }
    ]
  }
];

const features = [
  "🎯 One-tap apply",
  "⚡ 90-second approval",
  "🔒 Bank-grade security",
  "📊 Real-time EMI tracker",
  "💳 Auto-debit on time",
  "🎁 Exclusive offers"
];

export default function DownloadApp() {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { ref: sectionRef, inView } = useInView<HTMLElement>();

  // Cycle phone screens — pauses off-screen
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % screens.length);
    }, 3000);
    return () => clearInterval(t);
  }, [inView]);

  const handleStoreClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }, []);

  // Lock body scroll & close on Escape
  useEffect(() => {
    if (!showModal) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [showModal]);

  const current = screens[active];
  const Icon = current.icon;

  return (
    <section ref={sectionRef} id="download" className="section relative bg-slate-950">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/25 blur-3xl"
          style={{ animation: "float 12s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px"
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* LEFT — content */}
          <div className="min-w-0 text-center text-white lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              <span className="bg-gradient-to-r from-amber-300 to-brand-300 bg-clip-text text-transparent">
                App launching soon — Join early access
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Your Money,{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-brand-300 to-brand-400 bg-clip-text text-transparent">
                Your Pocket.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              The creditU mobile app puts instant loans, EMI tracking, full VKYC,
              and your credit score on tap. Available soon on iOS and Android.
            </p>

            {/* Trust badges */}
            <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 lg:mx-0">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur">
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-xs font-semibold text-white/80">100% Digital</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur">
                <Shield size={14} className="text-emerald-400" />
                <span className="text-xs font-semibold text-white/80">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur">
                <Download size={14} className="text-cyan-300" />
                <span className="text-xs font-semibold text-white/80">Coming Soon</span>
              </div>
            </div>

            {/* Store badges */}
            <div className="mx-auto mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:mx-0 lg:items-start">
              <button
                onClick={handleStoreClick}
                className="group/btn relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur transition hover:scale-105 hover:border-white/30 hover:bg-white/10 sm:w-56"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">
                    Get it on
                  </div>
                  <div className="text-base font-bold text-white">
                    Google Play
                  </div>
                </div>
              </button>

              <button
                onClick={handleStoreClick}
                className="group/btn relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur transition hover:scale-105 hover:border-white/30 hover:bg-white/10 sm:w-56"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">
                    Download on the
                  </div>
                  <div className="text-base font-bold text-white">App Store</div>
                </div>
              </button>
            </div>

            {/* QR + Feature chips */}
            <div className="mt-6 flex flex-wrap items-start justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-2xl">
                  {/* Decorative QR */}
                  <svg viewBox="0 0 32 32" className="h-full w-full">
                    {Array.from({ length: 100 }).map((_, i) => {
                      const x = (i % 10) * 3;
                      const y = Math.floor(i / 10) * 3;
                      // pseudo random pattern
                      const visible = (i * 73 + 31) % 7 < 4;
                      return visible ? (
                        <rect
                          key={i}
                          x={x + 1}
                          y={y + 1}
                          width="2.4"
                          height="2.4"
                          fill="#0f172a"
                        />
                      ) : null;
                    })}
                    {/* corner squares */}
                    <rect x="1" y="1" width="8" height="8" fill="#0f172a" />
                    <rect x="3" y="3" width="4" height="4" fill="#fff" />
                    <rect x="23" y="1" width="8" height="8" fill="#0f172a" />
                    <rect x="25" y="3" width="4" height="4" fill="#fff" />
                    <rect x="1" y="23" width="8" height="8" fill="#0f172a" />
                    <rect x="3" y="25" width="4" height="4" fill="#fff" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    <QrCode size={11} /> Scan to install
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-white">
                    Point your camera
                  </div>
                  <div className="text-[10px] text-white/50">
                    Direct link to app
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.1]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — animated phone */}
          <div className="relative min-w-0 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[300px]">
              {/* Glow halo */}
              <div
                className={`absolute -inset-10 -z-10 rounded-[50px] bg-gradient-to-br ${current.hue} opacity-40 blur-3xl transition-all duration-700`}
              />

              {/* Floating sparkles */}
              <span
                className="absolute left-0 top-12 hidden h-2 w-2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.7)] sm:block"
                style={{ animation: "float 5s ease-in-out infinite" }}
              />
              <span
                className="absolute right-0 top-32 hidden h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_3px_rgba(83,143,193,0.7)] sm:block"
                style={{ animation: "float 6s ease-in-out 1s infinite" }}
              />
              <span
                className="absolute bottom-24 left-2 hidden h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.7)] sm:block"
                style={{ animation: "float 7s ease-in-out 2s infinite" }}
              />

              {/* Tilted phone frame */}
              <div
                className="relative rounded-[42px] border border-white/15 bg-slate-900 p-3 shadow-2xl"
                style={{
                  transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg)",
                  animation: "float 8s ease-in-out infinite"
                }}
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-3 z-30 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />

                {/* Screen */}
                <div
                  key={active}
                  className="relative aspect-[9/19] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-up"
                >
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-white/70">
                    <span>9:41</span>
                    <span className="font-bold text-white">creditU</span>
                  </div>

                  {/* Hero card */}
                  <div
                    className={`mx-3 mt-6 rounded-2xl bg-gradient-to-br ${current.hue} p-4 text-white shadow-xl`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                        {current.badge}
                      </span>
                      <CheckCircle2 size={12} className="text-white/90" />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
                        <Icon size={18} />
                      </div>
                      <div className="text-base font-extrabold">
                        {current.title}
                      </div>
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="mx-3 mt-4 space-y-2">
                    {current.rows.map((r, i) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 ring-1 ring-white/10"
                        style={{
                          animation: `fadeUp 0.4s ease-out ${i * 0.08}s both`
                        }}
                      >
                        <span className="text-[10px] text-white/60">
                          {r.label}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            r.tone === "good" ? "text-emerald-300" : "text-white"
                          }`}
                        >
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tab indicators */}
                  <div className="mt-5 flex justify-center gap-1.5">
                    {screens.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === active
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="mx-3 mt-4">
                    <div
                      className={`rounded-xl bg-gradient-to-r ${current.hue} py-2 text-center text-xs font-bold text-white shadow-lg`}
                    >
                      Continue →
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/10 bg-slate-950/80 px-2 py-2 backdrop-blur">
                    {[Wallet, TrendingUp, Bell, Shield].map((Ic, i) => (
                      <div
                        key={i}
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                          i === active
                            ? `bg-gradient-to-br ${current.hue}`
                            : ""
                        }`}
                      >
                        <Ic
                          size={13}
                          className={
                            i === active ? "text-white" : "text-white/40"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification cards */}
              <div
                className="absolute left-0 top-20 hidden rounded-xl border border-white/15 bg-white/10 p-2.5 shadow-2xl backdrop-blur-md lg:block"
                style={{ animation: "float 5s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/40">
                    <CheckCircle2 size={13} className="text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-emerald-300">
                      LOAN APPROVED
                    </div>
                    <div className="text-[10px] font-bold text-white">
                      ₹2,00,000 ready
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-32 right-0 hidden rounded-xl border border-white/15 bg-white/10 p-2.5 shadow-2xl backdrop-blur-md lg:block"
                style={{ animation: "float 6s ease-in-out 1.5s infinite" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-amber-300" />
                  <div className="text-[10px] font-bold text-white">
                    Instant disbursal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal — covers entire section */}
      {showModal && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop blur within section */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

          {/* Modal card */}
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl animate-[fadeUp_0.3s_ease-out] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white sm:right-4 sm:top-4"
            >
              <X size={16} />
            </button>

            {/* Glow effects */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Content */}
            <div className="relative text-center">
              {/* Animated icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 shadow-lg shadow-brand-500/30 sm:h-20 sm:w-20">
                <Rocket size={28} className="text-white sm:hidden" style={{ animation: "float 3s ease-in-out infinite" }} />
                <Rocket size={36} className="hidden text-white sm:block" style={{ animation: "float 3s ease-in-out infinite" }} />
              </div>

              <h3 className="mt-4 text-xl font-black text-white sm:mt-6 sm:text-2xl">
                We&apos;re Building Something
                <span className="block bg-gradient-to-r from-cyan-300 to-brand-300 bg-clip-text text-transparent">
                  Amazing!
                </span>
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:mt-3 sm:text-sm">
                Our mobile app is currently under development. We&apos;re crafting a seamless experience for instant loans, EMI tracking, and full VKYC — right from your pocket.
              </p>

              {/* Progress indicator */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:mt-6 sm:p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white/80">Development Progress</span>
                  <span className="font-bold text-cyan-300">78%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>

              {/* Features coming */}
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:mt-5 sm:gap-2">
                {["Instant Loans", "VKYC", "EMI Tracker", "Credit Score"].map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium text-white/70 sm:px-3 sm:text-[11px]"
                  >
                    <CheckCircle2 size={10} className="text-emerald-400" />
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowModal(false)}
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] sm:mt-6"
              >
                Got it!
              </button>

              <p className="mt-2 text-[10px] text-white/40 sm:mt-3 sm:text-[11px]">
                Stay tuned — launching soon on iOS & Android
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
