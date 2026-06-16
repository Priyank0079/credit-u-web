"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Home,
  Laptop,
  Globe,
  FileText,
  CreditCard,
  Banknote,
  UserCheck,
  BadgeCheck,
  Users,
  Pencil
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
  { icon: BookOpen, label: "Tuition fees" },
  { icon: Pencil, label: "Admission and examination fees" },
  { icon: Home, label: "Hostel and accommodation expenses" },
  { icon: BookOpen, label: "Books and study materials" },
  { icon: Laptop, label: "Laptop and educational equipment" },
  { icon: Globe, label: "Overseas education expenses" },
  { icon: Banknote, label: "Other course-related costs" }
];

const eligibility = [
  { icon: GraduationCap, text: "Have secured admission to a recognized institution" },
  { icon: Globe, text: "Are pursuing higher education in India or abroad" },
  { icon: BadgeCheck, text: "Meet the lender's eligibility criteria" },
  { icon: Users, text: "Have a parent, guardian, or co-applicant if required by the lender" }
];

const steps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Complete the online application with your academic and personal details."
  },
  {
    num: "02",
    title: "Upload Required Documents",
    desc: "Provide admission proof, academic records, KYC documents, and other required information."
  },
  {
    num: "03",
    title: "Verification & Assessment",
    desc: "The lender evaluates your application, course details, and eligibility."
  },
  {
    num: "04",
    title: "Receive Approval",
    desc: "Review the approved loan amount, repayment terms, and applicable conditions."
  },
  {
    num: "05",
    title: "Loan Disbursement",
    desc: "The approved amount is disbursed as per the lender's policy, typically towards educational expenses."
  }
];

const whyChoose = [
  "Simple online application",
  "Access to multiple lending partners",
  "Transparent process",
  "Competitive loan options",
  "Dedicated support throughout the journey"
];

export default function EducationLoanPage() {
  const { ref: useRef2, visible: useVisible } = useInView(0.1);
  const { ref: eligRef, visible: eligVisible } = useInView(0.1);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.1);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50/30">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[100px]" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-700 shadow-sm">
                <GraduationCap size={14} className="text-cyan-500" />
                Education Loan
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Invest in Your Future</span>{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                  with Confidence
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                Higher education is one of the most important investments in life.
                Creditu helps students connect with trusted lending partners to
                finance their educational journey in India and abroad.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#emi"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Calculate EMI
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mx-auto mt-10 grid max-w-[20rem] grid-cols-3 gap-2 xs:max-w-sm xs:gap-3 lg:mx-0 lg:max-w-md">
                {[
                  { k: "₹3L", v: "Up to" },
                  { k: "60 mo", v: "Tenure" },
                  { k: "Zero", v: "Paperwork" }
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white p-1.5 text-center shadow-soft ring-1 ring-slate-100 xs:p-2 sm:p-3">
                    <div className="text-xs font-bold text-brand-600 xs:text-sm sm:text-lg">{s.k}</div>
                    <div className="text-[10px] text-slate-500 xs:text-[11px]">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Student Illustration */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-5 shadow-xl ring-1 ring-sky-100/50 xs:p-6 sm:p-8">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Ground */}
                  <ellipse cx="200" cy="375" rx="110" ry="18" fill="#e0f2fe" opacity="0.6" />
                  {/* Desk */}
                  <rect x="100" y="280" width="200" height="12" rx="4" fill="#0e7490" opacity="0.8" />
                  <rect x="110" y="292" width="8" height="70" rx="2" fill="#0e7490" opacity="0.6" />
                  <rect x="282" y="292" width="8" height="70" rx="2" fill="#0e7490" opacity="0.6" />
                  {/* Student body */}
                  <path d="M170 200 C170 180 180 168 200 168 C220 168 230 180 230 200 L235 278 L165 278 Z" fill="#0891b2" />
                  {/* Head */}
                  <circle cx="200" cy="130" r="42" fill="#fde68a" />
                  {/* Face */}
                  <circle cx="188" cy="123" r="3" fill="#334155" />
                  <circle cx="212" cy="123" r="3" fill="#334155" />
                  <path d="M194 138 Q200 145 206 138" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                  {/* Glasses */}
                  <circle cx="188" cy="123" r="9" fill="none" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="212" cy="123" r="9" fill="none" stroke="#475569" strokeWidth="1.5" />
                  <line x1="197" y1="123" x2="203" y2="123" stroke="#475569" strokeWidth="1.5" />
                  {/* Hair */}
                  <path d="M162 118 C162 82 238 82 238 118 C238 98 162 98 162 118" fill="#1e293b" />
                  {/* Graduation cap */}
                  <polygon points="200,70 240,85 200,100 160,85" fill="#1e293b" />
                  <rect x="196" y="60" width="8" height="14" rx="2" fill="#1e293b" />
                  <line x1="240" y1="85" x2="245" y2="100" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="245" cy="103" r="4" fill="#f59e0b" />
                  {/* Book on desk */}
                  <rect x="130" y="260" width="50" height="18" rx="3" fill="#06b6d4" />
                  <rect x="133" y="262" width="44" height="4" rx="1" fill="#67e8f9" />
                  <rect x="133" y="269" width="30" height="3" rx="1" fill="#67e8f9" opacity="0.5" />
                  {/* Laptop on desk */}
                  <rect x="210" y="250" width="60" height="28" rx="4" fill="#334155" />
                  <rect x="214" y="253" width="52" height="21" rx="2" fill="#bae6fd" />
                  {/* Laptop screen content */}
                  <rect x="220" y="257" width="20" height="3" rx="1" fill="#0891b2" />
                  <rect x="220" y="263" width="40" height="2" rx="1" fill="#0891b2" opacity="0.4" />
                  <rect x="220" y="268" width="35" height="2" rx="1" fill="#0891b2" opacity="0.3" />
                  {/* Floating elements - books */}
                  <rect x="60" y="140" width="35" height="45" rx="4" fill="#06b6d4" opacity="0.8" />
                  <rect x="64" y="145" width="27" height="4" rx="1" fill="white" opacity="0.6" />
                  <rect x="64" y="153" width="20" height="3" rx="1" fill="white" opacity="0.4" />
                  {/* Globe */}
                  <circle cx="330" cy="150" r="25" fill="#0891b2" opacity="0.2" />
                  <circle cx="330" cy="150" r="25" fill="none" stroke="#0891b2" strokeWidth="1.5" />
                  <ellipse cx="330" cy="150" rx="12" ry="25" fill="none" stroke="#0891b2" strokeWidth="1" />
                  <line x1="305" y1="150" x2="355" y2="150" stroke="#0891b2" strokeWidth="1" />
                  {/* Sparkles */}
                  <path d="M80 100 L84 108 L88 100 L84 92 Z" fill="#f59e0b" opacity="0.8" />
                  <path d="M340 260 L343 266 L346 260 L343 254 Z" fill="#06b6d4" opacity="0.7" />
                  <path d="M100 300 L103 306 L106 300 L103 294 Z" fill="#f59e0b" opacity="0.6" />
                  {/* Certificate */}
                  <rect x="310" y="280" width="45" height="35" rx="4" fill="white" stroke="#0891b2" strokeWidth="1.5" />
                  <circle cx="332" cy="292" r="6" fill="#f59e0b" opacity="0.7" />
                  <rect x="318" y="302" width="28" height="3" rx="1" fill="#0891b2" opacity="0.4" />
                  <rect x="322" y="308" width="20" height="2" rx="1" fill="#0891b2" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can an Education Loan Be Used For */}
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
                Cover all your education-related expenses with ease.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-transform duration-300 ease-out group-hover:scale-110">
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
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
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
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-cyan-100/30 blur-[100px]" />
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
                A simple 5-step process to fund your education.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl space-y-5">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-sm font-extrabold text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
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
                  <CheckCircle2 size={16} className="text-cyan-500" />
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
