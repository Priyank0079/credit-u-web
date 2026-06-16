"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  FileText,
  CreditCard,
  Heart,
  Activity,
  Pill,
  Syringe,
  Baby,
  MonitorSmartphone,
  Banknote,
  UserCheck,
  Briefcase,
  FileCheck,
  Send,
  BadgeCheck,
  Wallet
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
  { icon: Activity, label: "Emergency hospitalization" },
  { icon: Syringe, label: "Surgeries & medical procedures" },
  { icon: Pill, label: "Dental treatments" },
  { icon: Baby, label: "Fertility treatments" },
  { icon: Heart, label: "Cancer care" },
  { icon: MonitorSmartphone, label: "Medical equipment purchases" },
  { icon: Banknote, label: "Post-hospitalization expenses" },
  { icon: Stethoscope, label: "Other healthcare-related needs" }
];

const eligibility = [
  { icon: UserCheck, text: "Are 21 years or older" },
  { icon: Briefcase, text: "Are salaried or self-employed" },
  { icon: Banknote, text: "Have a regular source of income" },
  { icon: FileCheck, text: "Possess valid KYC documents" },
  { icon: BadgeCheck, text: "Meet the lender's eligibility criteria" }
];

const steps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Fill out a simple online application with basic personal and financial details."
  },
  {
    num: "02",
    title: "Complete Verification",
    desc: "Provide the required KYC and income documents for verification."
  },
  {
    num: "03",
    title: "Get Matched with Lenders",
    desc: "Our lending partners evaluate your application and determine your eligibility."
  },
  {
    num: "04",
    title: "Receive Approval",
    desc: "If approved, review the loan offer, including loan amount, tenure, and repayment terms."
  },
  {
    num: "05",
    title: "Get Funds Disbursed",
    desc: "Upon acceptance, the approved amount is transferred as per the lender's process."
  }
];

const whyChoose = [
  "Simple online application",
  "Fast approval process",
  "Minimal documentation",
  "Flexible repayment options",
  "Secure and transparent process"
];

export default function MedicalLoanPage() {
  const { ref: useRef2, visible: useVisible } = useInView(0.1);
  const { ref: eligRef, visible: eligVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.1);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-100/30 blur-[100px]" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
                <Stethoscope size={14} className="text-emerald-500" />
                Medical Loan
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Quick Financial Support for</span>{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Your Healthcare Needs
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                Medical emergencies can happen anytime. Creditu helps you connect
                with trusted lending partners to access funds for medical treatments,
                surgeries, hospitalization, and other healthcare expenses.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#emi"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  Calculate EMI
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm xs:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "₹10L", v: "Up to" },
                  { k: "<2 min", v: "Approval" },
                  { k: "Zero", v: "Paperwork" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Doctor Illustration */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-50 p-5 shadow-xl ring-1 ring-emerald-100/50 xs:p-6 sm:p-8">
                {/* SVG Doctor illustration */}
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Body */}
                  <ellipse cx="200" cy="380" rx="100" ry="20" fill="#d1fae5" opacity="0.6" />
                  {/* Coat */}
                  <path d="M140 200 C140 180 160 160 200 160 C240 160 260 180 260 200 L270 360 L130 360 Z" fill="white" stroke="#10b981" strokeWidth="2" />
                  {/* Collar */}
                  <path d="M170 165 L200 190 L230 165" fill="none" stroke="#10b981" strokeWidth="2.5" />
                  {/* Head */}
                  <circle cx="200" cy="120" r="50" fill="#fde68a" />
                  {/* Face */}
                  <circle cx="185" cy="110" r="4" fill="#334155" />
                  <circle cx="215" cy="110" r="4" fill="#334155" />
                  <path d="M190 130 Q200 140 210 130" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Hair */}
                  <path d="M155 100 C155 60 245 60 245 100 C245 80 155 80 155 100" fill="#1e293b" />
                  {/* Stethoscope */}
                  <path d="M175 180 C175 210 185 230 200 240 C215 230 225 210 225 180" fill="none" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="200" cy="245" r="8" fill="#0d9488" />
                  <circle cx="200" cy="245" r="4" fill="#99f6e4" />
                  {/* Cross badge */}
                  <rect x="185" y="275" width="30" height="30" rx="6" fill="#10b981" />
                  <rect x="196" y="280" width="8" height="20" rx="2" fill="white" />
                  <rect x="190" y="286" width="20" height="8" rx="2" fill="white" />
                  {/* Clipboard */}
                  <rect x="270" y="220" width="50" height="70" rx="6" fill="#f0fdfa" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="285" y="215" width="20" height="10" rx="3" fill="#10b981" />
                  <line x1="280" y1="240" x2="310" y2="240" stroke="#99f6e4" strokeWidth="2" />
                  <line x1="280" y1="252" x2="305" y2="252" stroke="#99f6e4" strokeWidth="2" />
                  <line x1="280" y1="264" x2="300" y2="264" stroke="#99f6e4" strokeWidth="2" />
                  {/* Heart pulse line */}
                  <path d="M80 260 L100 260 L110 240 L120 280 L130 250 L140 260 L160 260" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can a Medical Loan Be Used For */}
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
                Cover a wide range of medical and healthcare expenses with ease.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 ease-out group-hover:scale-110">
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
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-emerald-100/30 blur-[100px]" />
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
                A simple 5-step process to get your medical loan approved.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl space-y-5">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-extrabold text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
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
                  <CheckCircle2 size={16} className="text-emerald-500" />
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
