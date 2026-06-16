"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Zap,
  Heart,
  Plane,
  Briefcase,
  GraduationCap,
  Banknote,
  ShoppingBag,
  AlertCircle,
  UserCheck,
  FileCheck,
  BadgeCheck,
  RefreshCw,
  Wallet,
  TrendingUp,
  Shield
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const useCases = [
  { icon: AlertCircle, label: "Emergency expenses" },
  { icon: Zap, label: "Utility and bill payments" },
  { icon: Heart, label: "Medical expenses" },
  { icon: Plane, label: "Travel and lifestyle needs" },
  { icon: Briefcase, label: "Business cash flow requirements" },
  { icon: GraduationCap, label: "Education-related expenses" },
  { icon: Banknote, label: "Unexpected financial situations" },
  { icon: ShoppingBag, label: "Everyday spending needs" }
];

const eligibility = [
  { icon: UserCheck, text: "Are 21 years or older" },
  { icon: Briefcase, text: "Are a salaried or self-employed individual" },
  { icon: Banknote, text: "Have a regular source of income" },
  { icon: FileCheck, text: "Possess valid KYC documents" },
  { icon: BadgeCheck, text: "Meet the lender's eligibility criteria" }
];

const steps = [
  {
    num: "01",
    title: "Apply Online",
    desc: "Complete a simple online application with your personal and financial details."
  },
  {
    num: "02",
    title: "Verification Process",
    desc: "Submit the required KYC and income documents for verification."
  },
  {
    num: "03",
    title: "Credit Assessment",
    desc: "Our lending partners evaluate your profile and determine your eligible credit limit."
  },
  {
    num: "04",
    title: "Get Approved",
    desc: "Once approved, a credit limit is assigned to your account."
  },
  {
    num: "05",
    title: "Access Funds Anytime",
    desc: "Withdraw or utilize funds as needed within your approved credit limit."
  },
  {
    num: "06",
    title: "Repay and Reuse",
    desc: "As you repay the utilized amount, your available credit limit is restored, allowing you to borrow again whenever needed."
  }
];

const whyChoose = [
  "Access funds anytime",
  "Pay interest only on the amount used",
  "Flexible borrowing and repayment",
  "Quick approval process",
  "Minimal documentation",
  "Secure and transparent experience"
];

const benefits = [
  { icon: CreditCard, text: "Pre-approved credit limit" },
  { icon: RefreshCw, text: "No need to apply for a new loan every time" },
  { icon: TrendingUp, text: "Greater financial flexibility" },
  { icon: Wallet, text: "Convenient access to funds" },
  { icon: Shield, text: "Suitable for both planned and unexpected expenses" }
];

export default function CreditLinePage() {
  const { ref: useRef2, visible: useVisible } = useInView(0.1);
  const { ref: eligRef, visible: eligVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.1);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);
  const { ref: benefitsRef, visible: benefitsVisible } = useInView(0.1);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-100/50 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-100/30 blur-[100px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="container-page relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 animate-fade-up">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                <CreditCard size={14} className="text-brand-500" />
                Credit Line
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Instant Access to Funds</span>{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Whenever You Need
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                A Credit Line gives you access to a pre-approved credit limit that
                you can use whenever required. Unlike a traditional loan, you only
                borrow what you need and pay interest only on the amount utilized.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Credit Line <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#emi"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                >
                  Calculate EMI
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm sm:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "₹2L", v: "Limit" },
                  { k: "Instant", v: "Access" },
                  { k: "Reusable", v: "Credit" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Animated Credit Line Visual */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-xl ring-1 ring-slate-700/50 xs:p-6 sm:p-8">
                {/* Dot grid overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />

                {/* Animated Credit Card */}
                <div className="relative">
                  {/* Credit card */}
                  <div className="animate-[float_4s_ease-in-out_infinite] relative mx-auto w-52 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 p-4 shadow-2xl xs:w-56 sm:w-64 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-10 rounded bg-amber-400/90" />
                      <div className="text-xs font-medium text-white/60">CREDIT LINE</div>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <span className="text-sm tracking-[3px] text-white/80">••••</span>
                      <span className="text-sm tracking-[3px] text-white/80">••••</span>
                      <span className="text-sm tracking-[3px] text-white/80">••••</span>
                      <span className="text-sm tracking-[3px] text-white/80">1234</span>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-[9px] uppercase text-white/50">Available Limit</div>
                        <div className="text-lg font-bold text-white">₹2,00,000</div>
                      </div>
                      <div className="flex h-8 w-12 items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-white/20" />
                        <div className="-ml-3 h-6 w-6 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>

                  {/* Floating chips */}
                  <div className="animate-[float_3s_ease-in-out_infinite_0.5s] absolute left-0 top-4 rounded-lg bg-white/10 px-2 py-1.5 backdrop-blur-sm xs:px-3 sm:-left-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-medium text-white/80">Active</span>
                    </div>
                  </div>

                  <div className="animate-[float_3.5s_ease-in-out_infinite_1s] absolute right-0 top-12 rounded-lg bg-white/10 px-2 py-1.5 backdrop-blur-sm xs:px-3 sm:-right-2">
                    <span className="text-[10px] font-medium text-white/80">0% interest unused</span>
                  </div>

                  {/* Credit meter below card */}
                  <div className="mt-8 rounded-xl bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Utilized</span>
                      <span>₹45,000 / ₹2,00,000</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="animate-[grow_2s_ease-out_forwards] h-full w-0 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <RefreshCw size={11} className="text-green-400 animate-[spin_4s_linear_infinite]" />
                        <span className="text-[10px] text-green-400">Auto-restores on repayment</span>
                      </div>
                      <span className="text-[10px] font-medium text-white/80">22.5% used</span>
                    </div>
                  </div>

                  {/* Transaction pills */}
                  <div className="mt-4 space-y-2">
                    {[
                      { label: "Bill Payment", amount: "₹5,200", time: "Just now" },
                      { label: "Medical", amount: "₹12,000", time: "2 hrs ago" },
                      { label: "Repaid", amount: "+₹8,000", time: "Yesterday", isCredit: true }
                    ].map((tx, i) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/5"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full ${tx.isCredit ? "bg-green-400" : "bg-brand-400"}`} />
                          <span className="text-[11px] text-white/70">{tx.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-medium ${tx.isCredit ? "text-green-400" : "text-white/80"}`}>
                            {tx.amount}
                          </span>
                          <span className="text-[9px] text-white/40">{tx.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes grow {
            0% { width: 0%; }
            100% { width: 22.5%; }
          }
        `}</style>
      </section>

      {/* What Can a Credit Line Be Used For */}
      <section className="section relative overflow-hidden bg-white">
        <div className="container-page">
          <div
            ref={useRef2}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              useVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">What Can It Be</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Used For?</span>
              </h2>
              <p className="section-subtitle">
                A flexible solution for a wide range of financial needs.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={eligRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              eligVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Who Can</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Apply?</span>
              </h2>
              <p className="section-subtitle">
                You may be eligible if you meet the following criteria.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl space-y-3">
              {eligibility.map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-100/30 blur-[100px]" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/20 blur-[100px]" />
        </div>

        <div className="container-page relative">
          <div
            ref={stepsRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              stepsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">How It</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="section-subtitle">
                A simple 6-step process to get your credit line active.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl space-y-5">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-extrabold text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Creditu Credit Line */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={whyRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              whyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Why Choose</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Creditu Credit Line?</span>
              </h2>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
              {whyChoose.map((item, i) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-brand-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={benefitsRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Benefits of a</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Credit Line</span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item, i) => (
                <div
                  key={item.text}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-100 py-8">
        <div className="container-page">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            <strong className="text-slate-600">Disclaimer:</strong> Creditu is a
            loan facilitation platform and does not directly lend money. Credit line
            approval, credit limits, interest rates, and disbursement are subject to
            the respective lender&apos;s policies, eligibility criteria, and
            regulatory requirements.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
