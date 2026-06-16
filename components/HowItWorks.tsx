"use client";

import { useEffect, useState } from "react";
import {
  Smartphone,
  FileCheck2,
  Fingerprint,
  ScanFace,
  Landmark,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  Check
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Step = {
  icon: any;
  title: string;
  desc: string;
  hue: string;
};

const steps: Step[] = [
  {
    icon: Smartphone,
    title: "Mobile OTP Verification",
    desc: "Instant verification with secure OTP system.",
    hue: "from-brand-600 to-brand-400"
  },
  {
    icon: FileCheck2,
    title: "PAN Verification",
    desc: "Automated document OCR for instant PAN check.",
    hue: "from-brand-400 to-pink-500"
  },
  {
    icon: Fingerprint,
    title: "Aadhaar Verification",
    desc: "Secure paperless e-KYC integration.",
    hue: "from-pink-500 to-rose-500"
  },
  {
    icon: ScanFace,
    title: "Selfie + Face Match",
    desc: "Biometric face matching with liveness detection.",
    hue: "from-rose-500 to-orange-500"
  },
  {
    icon: Landmark,
    title: "Bank Verification",
    desc: "Instant penny drop and bank statement verification.",
    hue: "from-orange-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Income & CIBIL Check",
    desc: "Real-time retrieval of credit history and income.",
    hue: "from-emerald-500 to-teal-500"
  },
  {
    icon: ShieldAlert,
    title: "AML Security Check",
    desc: "Anti-money laundering and risk assessment screening.",
    hue: "from-teal-500 to-cyan-500"
  },
  {
    icon: CheckCircle2,
    title: "Loan Approval",
    desc: "Final digital signature and instant funds disbursal.",
    hue: "from-cyan-500 to-brand-500"
  }
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref: sectionRef, inView } = useInView<HTMLElement>();

  useEffect(() => {
    if (paused || !inView) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, 2800);
    return () => clearInterval(t);
  }, [paused, inView]);

  const current = steps[active];
  const Icon = current.icon;
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section
      ref={sectionRef}
      id="how"
      className="section relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Journey Mapping
          </span>
          <h2 className="mt-4 text-[1.6rem] font-extrabold tracking-tight xs:text-3xl sm:text-4xl lg:text-5xl">
            Our 100% Digital{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
              KYC Journey
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Watch the entire 8-step verification unfold on your phone — every
            step is automated, live and secure.
          </p>
        </div>

        {/* Top progress rail */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/50">
            <span>Step {active + 1} of {steps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="relative mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-cyan-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT — animated step list */}
          <div className="order-2 min-w-0 space-y-2.5 lg:order-1 lg:col-span-7">
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const StepIcon = s.icon;
              return (
                <button
                  key={s.title}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                    setTimeout(() => setPaused(false), 8000);
                  }}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ${
                    isActive
                      ? "scale-[1.02] border-white/20 bg-white/10 shadow-2xl backdrop-blur"
                      : "border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                  }`}
                >
                  {/* Animated gradient sweep on active */}
                  {isActive && (
                    <span
                      className={`absolute inset-0 -z-10 bg-gradient-to-r ${s.hue} opacity-20 blur-xl`}
                    />
                  )}

                  {/* Index/icon bubble */}
                  <div
                    className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white transition-all ${
                      isActive
                        ? `bg-gradient-to-br ${s.hue} shadow-lg`
                        : isDone
                        ? "bg-emerald-500/20 ring-1 ring-emerald-400/40"
                        : "bg-white/10 ring-1 ring-white/15"
                    }`}
                  >
                    {isDone ? (
                      <Check size={20} className="text-emerald-300" />
                    ) : (
                      <StepIcon
                        size={20}
                        className={
                          isActive
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                        }
                      />
                    )}
                    {isActive && (
                      <span
                        className={`absolute -inset-1 -z-10 animate-ping rounded-xl bg-gradient-to-br ${s.hue} opacity-40`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          isActive
                            ? "text-white"
                            : isDone
                            ? "text-emerald-400"
                            : "text-white/40"
                        }`}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      {isDone && (
                        <span className="text-[10px] font-semibold text-emerald-400">
                          · Verified
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mt-0.5 truncate text-base font-bold ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-0.5 truncate text-xs leading-relaxed ${
                        isActive ? "text-white/80" : "text-white/40"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* Right pulse indicator on active */}
                  {isActive && (
                    <div className="flex flex-shrink-0 items-center gap-1.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Live
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT — phone mockup */}
          <div className="relative order-1 min-w-0 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[320px]">
              {/* glow */}
              <div
                className={`absolute -inset-8 -z-10 rounded-[60px] bg-gradient-to-br ${current.hue} opacity-30 blur-3xl transition-all duration-700`}
              />

              {/* phone frame */}
              <div className="relative rounded-[44px] border border-white/10 bg-slate-900 p-3 shadow-2xl">
                {/* notch */}
                <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

                {/* screen */}
                <div
                  key={active}
                  className="relative aspect-[9/19] overflow-hidden rounded-[34px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-up"
                >
                  {/* status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-white/70">
                    <span>9:41</span>
                    <span>creditU</span>
                  </div>

                  {/* gradient hero on phone */}
                  <div
                    className={`mx-3 mt-8 rounded-2xl bg-gradient-to-br ${current.hue} p-5 text-center text-white shadow-xl`}
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur">
                      <Icon size={26} />
                    </div>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-white/80">
                      Step {active + 1} / {steps.length}
                    </div>
                    <div className="mt-1 text-base font-extrabold leading-tight">
                      {current.title}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mx-5 mt-4 text-center text-[11px] leading-relaxed text-white/70">
                    {current.desc}
                  </p>

                  {/* Animated progress dots */}
                  <div className="mt-5 flex justify-center gap-1.5">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === active
                            ? "w-6 bg-white"
                            : i < active
                            ? "w-1.5 bg-emerald-400"
                            : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  {/* fake checklist */}
                  <div className="mx-3 mt-5 space-y-2">
                    {[0, 1, 2].map((idx) => {
                      const refIdx = active - idx;
                      if (refIdx < 0) return null;
                      const item = steps[refIdx];
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={refIdx}
                          className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-2.5 ring-1 ring-white/10"
                        >
                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                              idx === 0
                                ? `bg-gradient-to-br ${item.hue}`
                                : "bg-emerald-500/20"
                            }`}
                          >
                            {idx === 0 ? (
                              <ItemIcon size={13} className="text-white" />
                            ) : (
                              <Check size={13} className="text-emerald-300" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="truncate text-[10px] font-semibold text-white">
                              {item.title}
                            </div>
                            <div
                              className={`text-[9px] ${
                                idx === 0
                                  ? "text-white/60"
                                  : "text-emerald-400"
                              }`}
                            >
                              {idx === 0 ? "Processing…" : "Verified"}
                            </div>
                          </div>
                          {idx === 0 && (
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Action button */}
                  <div className="mx-3 mt-4">
                    <div
                      className={`rounded-xl bg-gradient-to-r ${current.hue} py-2.5 text-center text-xs font-bold text-white shadow-lg`}
                    >
                      Continue →
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute right-2 top-12 hidden rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg lg:block">
                <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Live KYC
              </div>
              <div className="absolute bottom-16 left-2 hidden rounded-2xl bg-white/10 px-3 py-2 text-[10px] font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur lg:block">
                <div className="text-white/60">Powered by</div>
                <div className="text-sm font-bold">creditU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
