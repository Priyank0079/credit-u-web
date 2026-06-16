"use client";

import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Percent, CalendarDays } from "lucide-react";

function inr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(Math.round(n));
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(14);
  const [months, setMonths] = useState(24);

  const { emi, totalInterest, totalPayable, principalPct, interestPct } =
    useMemo(() => {
      const r = rate / 12 / 100;
      const n = months;
      const p = amount;
      const emiVal =
        r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emiVal * n;
      const interest = total - p;
      const pPct = (p / total) * 100;
      const iPct = (interest / total) * 100;
      return {
        emi: emiVal,
        totalInterest: interest,
        totalPayable: total,
        principalPct: pPct,
        interestPct: iPct
      };
    }, [amount, rate, months]);

  return (
    <section id="emi" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">
            <Calculator size={14} /> EMI Calculator
          </span>
          <h2 className="section-title mt-4">
            <span className="text-brand-600">Plan your loan in</span>{" "}
            <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">seconds</span>
          </h2>
          <p className="section-subtitle">
            Get an instant estimate of your monthly EMI, total interest and
            total payable amount.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {/* Inputs */}
          <div className="min-w-0 overflow-hidden rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 xs:p-6 sm:p-8 md:col-span-3">
            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <label className="flex min-w-0 shrink-0 items-center gap-1.5 text-sm font-medium text-slate-700">
                  <IndianRupee size={16} className="flex-shrink-0 text-brand-600" />
                  <span className="truncate">Loan Amount</span>
                </label>
                <div className="flex min-w-0 items-center gap-1 rounded-xl bg-white px-2 py-1.5 ring-1 ring-slate-200 sm:px-3">
                  <span className="text-xs text-slate-500 sm:text-sm">₹</span>
                  <input
                    type="number"
                    value={amount}
                    min={10000}
                    max={5000000}
                    onChange={(e) =>
                      setAmount(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="w-16 min-w-0 bg-transparent text-right text-xs font-semibold text-slate-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none xs:w-20 sm:w-28 sm:text-sm"
                  />
                </div>
              </div>
              <input
                type="range"
                min={10000}
                max={5000000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-3 w-full accent-brand-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>₹10K</span>
                <span>₹50L</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mt-7">
              <div className="flex items-center justify-between gap-2">
                <label className="flex min-w-0 shrink-0 items-center gap-1.5 text-sm font-medium text-slate-700">
                  <Percent size={16} className="flex-shrink-0 text-brand-600" />
                  <span className="hidden xs:inline">Interest Rate (p.a.)</span>
                  <span className="xs:hidden">Rate (p.a.)</span>
                </label>
                <div className="flex min-w-0 items-center gap-1 rounded-xl bg-white px-2 py-1.5 ring-1 ring-slate-200 sm:px-3">
                  <input
                    type="number"
                    value={rate}
                    min={1}
                    max={36}
                    step={0.1}
                    onChange={(e) =>
                      setRate(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="w-10 min-w-0 bg-transparent text-right text-xs font-semibold text-slate-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none xs:w-12 sm:w-16 sm:text-sm"
                  />
                  <span className="text-xs text-slate-500 sm:text-sm">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={36}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-3 w-full accent-brand-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>1%</span>
                <span>36%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mt-7">
              <div className="flex items-center justify-between gap-2">
                <label className="flex min-w-0 shrink-0 items-center gap-1.5 text-sm font-medium text-slate-700">
                  <CalendarDays size={16} className="flex-shrink-0 text-brand-600" />
                  <span>Tenure</span>
                </label>
                <div className="flex min-w-0 items-center gap-1 rounded-xl bg-white px-2 py-1.5 ring-1 ring-slate-200 sm:px-3">
                  <input
                    type="number"
                    value={months}
                    min={12}
                    max={84}
                    onChange={(e) =>
                      setMonths(Math.max(12, Number(e.target.value) || 12))
                    }
                    className="w-8 min-w-0 bg-transparent text-right text-xs font-semibold text-slate-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none xs:w-10 sm:w-14 sm:text-sm"
                  />
                  <span className="text-xs text-slate-500 sm:text-sm">mo</span>
                </div>
              </div>
              <input
                type="range"
                min={12}
                max={84}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="mt-3 w-full accent-brand-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>12M</span>
                <span>7Y</span>
              </div>
            </div>

            {/* Quick presets */}
            <div className="mt-7 text-center md:text-left">
              <div className="text-xs font-medium text-slate-500">
                Quick presets
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                {[
                  { a: 50000, r: 16, m: 12, label: "₹50K · 12M" },
                  { a: 200000, r: 14, m: 24, label: "₹2L · 24M" },
                  { a: 500000, r: 13, m: 36, label: "₹5L · 36M" },
                  { a: 1000000, r: 12, m: 60, label: "₹10L · 60M" }
                ].map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      setAmount(p.a);
                      setRate(p.r);
                      setMonths(p.m);
                    }}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-300"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-4 text-white shadow-card xs:p-6 sm:p-8 md:col-span-2">
            <div className="text-xs font-medium uppercase tracking-wider text-amber-300">
              Your monthly EMI
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-amber-300">₹</span>
              <span className="text-3xl font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl">
                {inr(emi)}
              </span>
            </div>
            <div className="mt-1 text-xs text-white/70">
              for {months} months @ {rate}% p.a.
            </div>

            {/* Donut */}
            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
              <div
                className="h-24 w-24 flex-shrink-0 rounded-full sm:h-28 sm:w-28"
                style={{
                  background: `conic-gradient(#ffffff ${principalPct}%, rgba(255,255,255,0.25) ${principalPct}% 100%)`
                }}
                aria-hidden="true"
              >
                <div className="m-2.5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-brand-700 text-center sm:m-3 sm:h-[5.5rem] sm:w-[5.5rem]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/70">
                      Total
                    </div>
                    <div className="text-sm font-bold text-white">
                      ₹{inr(totalPayable / 100000)}L
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-white" />
                  <span className="text-white/80">Principal</span>
                  <span className="ml-auto font-semibold">
                    ₹{inr(amount)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-white/30 ring-1 ring-white/40" />
                  <span className="text-white/80">Interest</span>
                  <span className="ml-auto font-semibold">
                    ₹{inr(totalInterest)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur sm:p-4">
                <div className="text-[10px] uppercase tracking-wider text-white/70 xs:text-[11px]">
                  Total Interest
                </div>
                <div className="mt-1 text-base font-bold sm:text-lg">
                  ₹{inr(totalInterest)}
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur sm:p-4">
                <div className="text-[10px] uppercase tracking-wider text-white/70 xs:text-[11px]">
                  Total Payable
                </div>
                <div className="mt-1 text-base font-bold sm:text-lg">
                  ₹{inr(totalPayable)}
                </div>
              </div>
            </div>

            <a
              href="#download"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Apply for this loan
            </a>

            <p className="mt-4 text-[11px] leading-relaxed text-white/60">
              *Indicative. Actual EMI may vary based on credit assessment,
              processing fees and final approval by partner NBFCs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
