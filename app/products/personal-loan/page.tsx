"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Wallet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
  Home,
  Plane,
  PartyPopper,
  PiggyBank,
  GraduationCap,
  Briefcase,
  Banknote,
  UserCheck,
  FileCheck,
  BadgeCheck,
  Send
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
  { icon: Heart, label: "Medical emergencies" },
  { icon: Home, label: "Home renovation" },
  { icon: Plane, label: "Travel expenses" },
  { icon: PartyPopper, label: "Wedding costs" },
  { icon: PiggyBank, label: "Debt consolidation" },
  { icon: GraduationCap, label: "Education expenses" },
  { icon: Briefcase, label: "Business requirements" },
  { icon: Banknote, label: "Other personal financial needs" }
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
    title: "Submit Your Application",
    desc: "Complete a simple online application with your personal and financial details."
  },
  {
    num: "02",
    title: "Complete Verification",
    desc: "Upload the required KYC and income documents."
  },
  {
    num: "03",
    title: "Get Matched with Lenders",
    desc: "Our lending partners assess your profile and eligibility."
  },
  {
    num: "04",
    title: "Receive Loan Offers",
    desc: "Review available loan offers, including loan amount, tenure, and repayment terms."
  },
  {
    num: "05",
    title: "Get Funds Disbursed",
    desc: "Upon approval and acceptance, the loan amount is disbursed as per the lender's process."
  }
];

const whyChoose = [
  "Quick online application",
  "Fast approval process",
  "Minimal documentation",
  "Flexible repayment options",
  "Secure and transparent experience"
];

export default function PersonalLoanPage() {
  const { ref: useRef2, visible: useVisible } = useInView(0.1);
  const { ref: eligRef, visible: eligVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.1);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);

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
                <Wallet size={14} className="text-brand-500" />
                Personal Loan
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Flexible Financial Support for</span>{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Your Personal Needs
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                Whether you&apos;re planning a major purchase, managing an emergency,
                or consolidating expenses, Creditu helps you connect with trusted
                lending partners to access personal loans tailored to your financial needs.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#emi"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                >
                  Calculate EMI
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm xs:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "₹5L", v: "Up to" },
                  { k: "<5 min", v: "Approval" },
                  { k: "Zero", v: "Paperwork" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Personal Finance Illustration */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-sky-50 p-5 shadow-xl ring-1 ring-brand-100/50 xs:p-6 sm:p-8">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Ground shadow */}
                  <ellipse cx="200" cy="375" rx="110" ry="18" fill="#dbeafe" opacity="0.5" />
                  {/* Person body */}
                  <path d="M160 210 C160 185 175 170 200 170 C225 170 240 185 240 210 L250 350 L150 350 Z" fill="#1e40af" opacity="0.9" />
                  {/* Shirt/collar */}
                  <path d="M180 175 L200 195 L220 175" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
                  {/* Head */}
                  <circle cx="200" cy="130" r="45" fill="#fde68a" />
                  {/* Face */}
                  <circle cx="187" cy="122" r="3.5" fill="#334155" />
                  <circle cx="213" cy="122" r="3.5" fill="#334155" />
                  <path d="M192 140 Q200 148 208 140" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Hair */}
                  <path d="M160 115 C160 78 240 78 240 115 C240 95 160 95 160 115" fill="#1e293b" />
                  {/* Phone in hand */}
                  <rect x="235" y="230" width="40" height="70" rx="8" fill="#1e293b" />
                  <rect x="238" y="235" width="34" height="58" rx="5" fill="#dbeafe" />
                  {/* Phone screen content - checkmark */}
                  <circle cx="255" cy="258" r="10" fill="#10b981" />
                  <path d="M250 258 L253 261 L260 254" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="244" y="274" width="22" height="3" rx="1.5" fill="#93c5fd" />
                  <rect x="247" y="281" width="16" height="3" rx="1.5" fill="#93c5fd" />
                  {/* Coins floating */}
                  <circle cx="100" cy="180" r="18" fill="#f59e0b" opacity="0.9" />
                  <text x="100" y="185" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">₹</text>
                  <circle cx="320" cy="160" r="14" fill="#f59e0b" opacity="0.7" />
                  <text x="320" y="165" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">₹</text>
                  <circle cx="85" cy="250" r="12" fill="#fbbf24" opacity="0.6" />
                  <text x="85" y="255" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">₹</text>
                  <circle cx="330" cy="240" r="16" fill="#f59e0b" opacity="0.8" />
                  <text x="330" y="245" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">₹</text>
                  {/* Wallet */}
                  <rect x="70" y="300" width="60" height="45" rx="8" fill="#0b3c6d" />
                  <rect x="75" y="305" width="50" height="12" rx="3" fill="#1d4ed8" />
                  <circle cx="110" cy="330" r="6" fill="#fbbf24" />
                  {/* Sparkles */}
                  <path d="M310 100 L315 110 L320 100 L315 90 Z" fill="#fbbf24" opacity="0.8" />
                  <path d="M120" y="100 L123 107 L126 100 L123 93 Z" fill="#60a5fa" opacity="0.7" />
                  <path d="M340 300 L343 307 L346 300 L343 293 Z" fill="#fbbf24" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can a Personal Loan Be Used For */}
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
                Use your personal loan for a wide range of financial needs.
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
                A simple 5-step process to get your personal loan.
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

      {/* Why Choose Creditu */}
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
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Creditu?</span>
              </h2>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
              {whyChoose.map((item, i) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-brand-600" />
                  {item}
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
            loan facilitation platform and does not directly lend money. Loan
            approval, interest rates, and disbursement are subject to the respective
            lender&apos;s policies and eligibility criteria.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
