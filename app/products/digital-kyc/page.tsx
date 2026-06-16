"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  FileCheck2,
  Fingerprint,
  ScanFace,
  Landmark,
  TrendingUp,
  ShieldAlert,
  Video,
  Lock,
  Eye,
  Zap,
  Clock,
  Globe,
  UserCheck,
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

const kycSteps = [
  {
    icon: Smartphone,
    title: "Mobile OTP Verification",
    desc: "Verify your identity instantly with a one-time password sent to your registered mobile number. No passwords, no delays."
  },
  {
    icon: FileCheck2,
    title: "PAN Card Verification",
    desc: "Our OCR-powered system reads and validates your PAN card in seconds — extracting name, date of birth, and PAN number automatically."
  },
  {
    icon: Fingerprint,
    title: "Aadhaar e-KYC",
    desc: "Complete paperless identity and address verification through UIDAI-authorized Aadhaar e-KYC. No physical documents needed."
  },
  {
    icon: ScanFace,
    title: "Video KYC & Face Match",
    desc: "AI-powered facial recognition with liveness detection ensures the applicant is a real person and matches the submitted documents."
  },
  {
    icon: Landmark,
    title: "Bank Account Verification",
    desc: "Instant penny drop verification confirms your bank account ownership and enables direct disbursement of approved funds."
  },
  {
    icon: TrendingUp,
    title: "Credit Bureau & Income Check",
    desc: "Real-time CIBIL score retrieval and income assessment to determine your repayment capacity and eligible loan offers."
  },
  {
    icon: ShieldAlert,
    title: "AML & Compliance Screening",
    desc: "Anti-Money Laundering (AML) checks against global watchlists and regulatory databases to ensure safe, compliant lending."
  }
];

const whyDigitalKyc = [
  { icon: Clock, text: "Complete KYC in under 90 seconds" },
  { icon: Lock, text: "256-bit SSL encryption at every step" },
  { icon: Eye, text: "99.8% face match accuracy with liveness detection" },
  { icon: Globe, text: "No branch visits — complete from anywhere" },
  { icon: UserCheck, text: "RBI & UIDAI compliant process" },
  { icon: Zap, text: "Instant verification — no manual review delays" }
];

const securityFeatures = [
  "256-bit SSL/TLS encryption",
  "UIDAI-authorized Aadhaar verification",
  "RBI-compliant KYC process",
  "ISO 27001:2022 certified infrastructure",
  "Anti-Money Laundering screening",
  "Biometric liveness detection",
  "Data encrypted at rest and in transit",
  "Automated fraud prevention"
];

export default function DigitalKycPage() {
  const { ref: whatRef, visible: whatVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.05);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);
  const { ref: secRef, visible: secVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView(0.1);

  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = ((now - start) % 2400) / 2400;
      setScanY(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-100/50 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[100px]" />
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
                <ShieldCheck size={14} className="text-brand-500" />
                Digital KYC
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">100% Digital KYC —</span>{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Secure & Instant
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                Creditu&apos;s Digital KYC eliminates paperwork, branch visits, and
                manual verification. Complete your entire identity verification in
                under 90 seconds — all from your smartphone.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start KYC Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#kyc"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                >
                  See Live Demo
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm xs:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "90s", v: "Avg. Time" },
                  { k: "99.8%", v: "Accuracy" },
                  { k: "256-bit", v: "Encryption" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Animated Face Scanner Visual */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl ring-1 ring-slate-700/50 xs:p-5 sm:p-6">
                {/* Grid overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                  }}
                />

                <div className="relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">REC · LIVE</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 ring-1 ring-emerald-400/40">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                      <span className="text-[9px] font-bold text-emerald-300">Verified</span>
                    </div>
                  </div>

                  {/* Face scanner area */}
                  <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    {/* Face mesh SVG */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 200 240" className="h-3/4 w-auto" fill="none">
                        {/* Face oval */}
                        <ellipse cx="100" cy="120" rx="50" ry="75" stroke="rgba(34,211,238,0.4)" strokeDasharray="3 3" strokeWidth="1" />
                        {/* Mesh dots */}
                        {Array.from({ length: 40 }, (_, i) => {
                          const angle = (i / 40) * Math.PI * 2;
                          const rx = 35 + (i % 3) * 12;
                          const ry = 55 + (i % 3) * 15;
                          return (
                            <circle
                              key={i}
                              cx={100 + Math.cos(angle) * rx * 0.8}
                              cy={120 + Math.sin(angle) * ry * 0.7}
                              r={1}
                              fill="rgba(34,211,238,0.7)"
                            />
                          );
                        })}
                        {/* Eyes */}
                        <circle cx="80" cy="105" r="4" fill="none" stroke="#22d3ee" strokeWidth="1" />
                        <circle cx="80" cy="105" r="1.5" fill="#22d3ee" />
                        <circle cx="120" cy="105" r="4" fill="none" stroke="#22d3ee" strokeWidth="1" />
                        <circle cx="120" cy="105" r="1.5" fill="#22d3ee" />
                        {/* Nose */}
                        <path d="M100 115 L100 135" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
                        {/* Mouth */}
                        <path d="M85 150 Q100 160 115 150" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>

                    {/* Scan line */}
                    <div
                      className="absolute inset-x-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_2px_rgba(34,211,238,0.8)]"
                      style={{ top: `${10 + scanY * 80}%` }}
                    />

                    {/* Corner brackets */}
                    <div className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-cyan-400" />
                    <div className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-cyan-400" />
                    <div className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cyan-400" />
                  </div>

                  {/* Verification chips below scanner */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "Face Match", val: "99.8%" },
                      { label: "Liveness", val: "Pass" },
                      { label: "AML", val: "Clean" }
                    ].map((c) => (
                      <div key={c.label} className="rounded-lg bg-white/5 p-2 text-center ring-1 ring-white/10">
                        <div className="text-[9px] text-white/50">{c.label}</div>
                        <div className="text-xs font-bold text-emerald-400">{c.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom compliance */}
                  <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-emerald-500/10 py-2 ring-1 ring-emerald-400/20">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-semibold text-emerald-300">RBI Compliant · ISO 27001 · 256-bit SSL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Digital KYC */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={whatRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              whatVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">What is</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Digital KYC?</span>
              </h2>
              <p className="section-subtitle">
                KYC (Know Your Customer) is a mandatory verification process
                required by the Reserve Bank of India (RBI) for all financial
                services. Digital KYC replaces the traditional paper-based process
                with a fully online, AI-powered verification system.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                At Creditu, we use advanced technologies including OCR (Optical
                Character Recognition), biometric face matching, liveness
                detection, and real-time database verification to complete your
                KYC in under 90 seconds — all from the comfort of your home.
                Our Video KYC uses advanced AI-powered verification
                technology trusted across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KYC Verification Steps */}
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
                <span className="text-brand-600">KYC Verification</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Steps</span>
              </h2>
              <p className="section-subtitle">
                7 automated checks — all completed digitally within seconds.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl space-y-5">
              {kycSteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-6"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
                      <StepIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500">
                          Step {String(i + 1).padStart(2, "0")}
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

      {/* Why Digital KYC */}
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
                <span className="text-brand-600">Why</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Digital KYC?</span>
              </h2>
              <p className="section-subtitle">
                Faster, safer, and completely paperless.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              {whyDigitalKyc.map((item, i) => (
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

      {/* Security & Compliance */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={secRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              secVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Security &</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Compliance</span>
              </h2>
              <p className="section-subtitle">
                Your data is protected with military-grade security standards.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {securityFeatures.map((item, i) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2 size={16} className="text-brand-500" />
                  {item}
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
              Verify Your Identity in Seconds
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
              No paperwork. No branch visits. Just a quick, secure digital
              verification and you&apos;re ready to access credit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-700 shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start KYC <ArrowRight size={16} />
              </Link>
              <Link
                href="/#kyc"
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
            <strong className="text-slate-600">Disclaimer:</strong> Creditu&apos;s
            Digital KYC follows all RBI guidelines for e-KYC and Video KYC.
            Your personal data is encrypted and processed only for verification
            purposes as per our privacy policy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
