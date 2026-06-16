"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

function inr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(Math.round(n));
}

export default function Hero() {
  const [amount, setAmount] = useState(200000);
  const [months, setMonths] = useState(12);
  const [animate, setAnimate] = useState(false);
  const rate = 14; // indicative annual %

  // Trigger animations on mount (page load / navigation)
  useEffect(() => {
    // Small delay to ensure paint before animation
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = months;
    const p = amount;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [amount, months]);

  return (
    <section className="relative overflow-hidden bg-soft-gradient">
      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        {/* LEFT */}
        <div className="min-w-0 text-center lg:text-left">
          <span
            className={`chip transition-all duration-700 ease-out ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <ShieldCheck size={14} /> RBI compliant lending platform
          </span>
          <h1
            className={`mt-5 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 ease-out delay-150 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-brand-600">Get Instant</span>{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Personal Loans.
            </span>
          </h1>
          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0 transition-all duration-700 ease-out delay-300 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Smart credit system. No paperwork. 100% digital. Experience the
            future of personal finance with creditU.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start transition-all duration-700 ease-out delay-[450ms] ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="#download" className="btn-primary">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link href="#download" className="btn-secondary">
              Check Eligibility
            </Link>
          </div>

          <div
            className={`mx-auto mt-10 grid w-full max-w-md grid-cols-2 gap-2 sm:gap-4 lg:mx-0 lg:max-w-lg transition-all duration-700 ease-out delay-[600ms] ${
              animate
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
          >
            {[
              { k: "5 min", v: "Approval" },
              { k: "₹5L", v: "Up to" }
            ].map((s) => (
              <div key={s.v} className="min-w-0 rounded-xl bg-white p-2.5 text-center shadow-soft xs:p-3 sm:p-4 lg:text-left">
                <div className="text-base font-bold text-brand-600 xs:text-lg sm:text-xl">{s.k}</div>
                <div className="text-[11px] text-slate-500 xs:text-xs">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Loan calculator card */}
        <div className="relative min-w-0">
          <div className="pointer-events-none absolute -left-10 -top-10 hidden h-72 w-72 rounded-full bg-brand-200/50 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 hidden h-72 w-72 rounded-full bg-amber-200/40 blur-3xl sm:block" />

          <div
            className={`relative mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 sm:p-8 transition-all duration-700 ease-out delay-300 ${
              animate
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-brand-700">
                  Quick Apply
                </div>
                <div className="mt-1 text-lg font-bold text-slate-900">
                  Personal Loan
                </div>
              </div>
              <div className="rounded-full bg-amber-50 p-3 text-amber-600">
                <Zap size={20} />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Loan amount</span>
                  <span className="font-semibold text-slate-900">
                    ₹{inr(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-2 w-full accent-brand-600"
                />
                <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                  <span>₹10K</span>
                  <span>₹5L</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Tenure</span>
                  <span className="font-semibold text-slate-900">
                    {months} months
                  </span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={36}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="mt-2 w-full accent-brand-600"
                />
                <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                  <span>12M</span>
                  <span>36M</span>
                </div>
              </div>

              <div className="rounded-2xl bg-accent-gold-light p-4 ring-1 ring-amber-200/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">EMI starts at</span>
                  <span className="text-2xl font-extrabold text-brand-600">
                    ₹{inr(emi)}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-slate-500">
                  *Indicative @ {rate}% p.a. Final rate post credit assessment.
                </div>
              </div>

              <a href="#download" className="btn-primary w-full">
                Check Eligibility <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative animated gradient orb */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-brand-200/20 via-transparent to-amber-200/20 blur-3xl transition-all duration-1000 ease-out delay-500 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
    </section>
  );
}
