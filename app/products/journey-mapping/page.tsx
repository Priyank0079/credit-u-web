"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  FileCheck2,
  Fingerprint,
  ScanFace,
  Landmark,
  TrendingUp,
  ShieldAlert,
  CreditCard,
  Shield,
  Zap,
  Clock,
  Eye,
  Lock,
  Check
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

const journeySteps = [
  {
    icon: Smartphone,
    num: "01",
    title: "Mobile OTP Verification",
    desc: "Your journey begins with a simple mobile number verification. Enter your phone number and receive a secure OTP (One-Time Password) to confirm your identity instantly.",
    detail: "No passwords to remember. Secure and instant."
  },
  {
    icon: FileCheck2,
    num: "02",
    title: "PAN Verification",
    desc: "Submit your PAN card details for automated verification. Our system uses OCR technology to instantly validate your PAN and fetch relevant financial information.",
    detail: "Automated OCR — no manual data entry needed."
  },
  {
    icon: Fingerprint,
    num: "03",
    title: "Aadhaar Verification",
    desc: "Complete a paperless e-KYC through Aadhaar verification. This step confirms your identity and address details securely through UIDAI-connected systems.",
    detail: "Paperless, secure, UIDAI-authorized."
  },
  {
    icon: ScanFace,
    num: "04",
    title: "Selfie & Face Match",
    desc: "Take a quick selfie for biometric verification. Our AI-powered face matching technology ensures the applicant matches the documents submitted — with liveness detection to prevent fraud.",
    detail: "AI liveness detection for maximum security."
  },
  {
    icon: Landmark,
    num: "05",
    title: "Bank Verification",
    desc: "Verify your bank account through an instant penny drop verification. This confirms your account ownership and enables direct disbursement of approved funds.",
    detail: "Instant penny drop — account confirmed in seconds."
  },
  {
    icon: TrendingUp,
    num: "06",
    title: "Income & CIBIL Check",
    desc: "Our lending partners access your credit history (CIBIL score) and income details in real-time to assess your repayment capacity and determine eligible loan offers.",
    detail: "Real-time credit bureau fetch."
  },
  {
    icon: ShieldAlert,
    num: "07",
    title: "AML & Security Check",
    desc: "Anti-Money Laundering (AML) screening ensures compliance with regulatory requirements. Your profile is scanned against global watchlists and risk databases for secure lending.",
    detail: "Regulatory compliance guaranteed."
  },
  {
    icon: CreditCard,
    num: "08",
    title: "Loan Approval & Disbursement",
    desc: "Once all verifications pass, receive your loan offer instantly. Review the terms, accept digitally, and get funds disbursed directly to your bank account.",
    detail: "Digital signature — funds in minutes."
  }
];

const whyMatters = [
  { icon: Zap, text: "100% Digital — No branch visits required" },
  { icon: Clock, text: "Complete KYC in under 5 minutes" },
  { icon: Eye, text: "Real-time status tracking at every step" },
  { icon: Shield, text: "Bank-grade encryption and data security" },
  { icon: Lock, text: "RBI-compliant verification process" },
  { icon: CheckCircle2, text: "Instant approval with minimal documentation" }
];

export default function JourneyMappingPage() {
  const { ref: overviewRef, visible: overviewVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.05);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView(0.1);

  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveStep((a) => (a + 1) % journeySteps.length);
    }, 3500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
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
                <MapPin size={14} className="text-brand-500" />
                Journey Mapping
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Your Complete Loan</span>{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Journey — Simplified
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                From application to disbursement, Creditu maps your entire loan
                journey into 8 simple, fully digital steps. Track your progress in
                real-time and get approved faster than ever before.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#how"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  See Live Demo <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                >
                  Apply Now
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm xs:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "8 Steps", v: "End-to-End" },
                  { k: "<5 min", v: "KYC Time" },
                  { k: "100%", v: "Digital" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Animated Journey Visual */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl ring-1 ring-slate-700/50 xs:p-5 sm:p-6">
                {/* Dot grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />

                <div className="relative">
                  {/* Progress */}
                  <div className="flex items-center justify-between text-[10px] font-semibold text-white/50">
                    <span>Step {activeStep + 1} of 8</span>
                    <span>{Math.round(((activeStep + 1) / 8) * 100)}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-700 ease-out"
                      style={{ width: `${((activeStep + 1) / 8) * 100}%` }}
                    />
                  </div>

                  {/* Steps list */}
                  <div className="mt-5 space-y-2">
                    {journeySteps.map((step, i) => {
                      const isActive = i === activeStep;
                      const isDone = i < activeStep;
                      const StepIcon = step.icon;
                      return (
                        <button
                          key={step.num}
                          onClick={() => {
                            setActiveStep(i);
                            setPaused(true);
                            setTimeout(() => setPaused(false), 8000);
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-white/10 ring-1 ring-white/20"
                              : "bg-white/[0.02] hover:bg-white/[0.05]"
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-br from-brand-500 to-brand-700"
                                : isDone
                                ? "bg-emerald-500/20"
                                : "bg-white/10"
                            }`}
                          >
                            {isDone ? (
                              <Check size={14} className="text-emerald-400" />
                            ) : (
                              <StepIcon size={14} className={isActive ? "text-white" : "text-white/50"} />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`block truncate text-xs font-semibold ${isActive ? "text-white" : isDone ? "text-white/70" : "text-white/50"}`}>
                              {step.title}
                            </span>
                          </div>
                          {isActive && (
                            <span className="flex h-2 w-2 flex-shrink-0">
                              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                          )}
                          {isDone && (
                            <span className="text-[9px] font-medium text-emerald-400">Done</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={overviewRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              overviewVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">What is</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Journey Mapping?</span>
              </h2>
              <p className="section-subtitle">
                Journey Mapping is the visual representation of every touchpoint a
                customer experiences — from the moment they begin their loan
                application to the final fund disbursement. At Creditu, we&apos;ve
                mapped the entire digital lending journey into 8 transparent,
                trackable steps so you always know exactly where you stand.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                In the lending industry, the journey typically includes stages like
                identity verification, document submission, credit assessment,
                approval, and disbursement. Creditu automates every stage — making
                it faster, paperless, and 100% digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed 8-Step Journey */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={stepsRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              stepsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">The 8-Step</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Digital Journey</span>
              </h2>
              <p className="section-subtitle">
                Every step is automated, secure, and designed for speed.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl space-y-5">
              {journeySteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-6"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
                      <StepIcon size={20} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500">
                          Step {step.num}
                        </span>
                        <span className="hidden rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-semibold text-brand-600 xs:inline-block">
                          {step.detail}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Journey Mapping Matters */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={whyRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              whyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Why It</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Matters</span>
              </h2>
              <p className="section-subtitle">
                A transparent journey means trust, speed, and confidence.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              {whyMatters.map((item, i) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div className="container-page relative">
          <div
            ref={ctaRef}
            className={`mx-auto max-w-2xl text-center will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Start Your Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
              Experience a fully digital, transparent, and secure loan application
              process. From verification to disbursement — track every step in
              real-time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-700 shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/#how"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Watch Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-100 py-8">
        <div className="container-page">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            <strong className="text-slate-600">Disclaimer:</strong> Creditu is a
            loan facilitation platform and does not directly lend money. The
            journey steps described above represent our digital verification and
            onboarding process. Actual loan approval, interest rates, and
            disbursement are subject to the respective lender&apos;s policies and
            eligibility criteria.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
