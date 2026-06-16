"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  IndianRupee,
  Percent,
  Clock,
  PiggyBank,
  Wallet,
  CreditCard,
  Heart,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  Shield,
  Zap
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

const whyUse = [
  "Understand your monthly repayment obligations",
  "Compare different loan amounts and tenures",
  "Plan your finances more effectively",
  "Avoid over-borrowing",
  "Choose a repayment plan that suits your budget",
  "Make informed borrowing decisions"
];

const benefits = [
  { icon: Zap, text: "Free to use" },
  { icon: Clock, text: "Instant results" },
  { icon: TrendingUp, text: "Accurate loan estimates" },
  { icon: PiggyBank, text: "Easy financial planning" },
  { icon: Shield, text: "No registration required" },
  { icon: Calculator, text: "Available anytime, anywhere" }
];

const loanTypes = [
  { icon: Wallet, label: "Personal Loans" },
  { icon: GraduationCap, label: "Education Loans" },
  { icon: Heart, label: "Medical Loans" },
  { icon: CreditCard, label: "Credit Lines" },
  { icon: Briefcase, label: "Business Loans" },
  { icon: ShoppingBag, label: "Consumer Loans" }
];

export default function EmiCalculatorPage() {
  const { ref: whatRef, visible: whatVisible } = useInView(0.1);
  const { ref: whyRef, visible: whyVisible } = useInView(0.1);
  const { ref: howRef, visible: howVisible } = useInView(0.1);
  const { ref: benefitsRef, visible: benefitsVisible } = useInView(0.1);
  const { ref: whoRef, visible: whoVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView(0.1);

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
                <Calculator size={14} className="text-brand-500" />
                EMI Calculator
              </span>

              <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight xs:text-3xl sm:text-4xl md:text-5xl">
                <span className="text-brand-600">Plan Your Loan Repayments</span>{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  with Confidence
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 xs:text-base sm:text-lg lg:mx-0">
                Know Your EMI Before You Borrow. Calculate, Plan, and Borrow
                Smartly with Creditu. Estimate Your Monthly EMI in Seconds.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#emi"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Calculate EMI Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                >
                  Explore Loans
                </Link>
              </div>

              {/* Taglines */}
              <div className="mx-auto mt-8 flex max-w-lg flex-col gap-2.5 lg:mx-0">
                {[
                  "Know Your EMI Before You Borrow",
                  "Calculate, Plan, and Borrow Smartly with Creditu",
                  "Estimate Your Monthly EMI in Seconds"
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-brand-500" />
                    <span className="text-sm font-medium leading-snug text-slate-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Animated EMI Visual */}
            <div className="relative mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-xl ring-1 ring-slate-700/50 xs:p-6 sm:p-8">
                {/* Dot grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />

                <div className="relative">
                  {/* Calculator mockup */}
                  <div className="animate-[float_4s_ease-in-out_infinite] rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">
                      <Calculator size={14} className="text-amber-400" />
                      EMI Calculator
                    </div>

                    {/* Input fields mockup */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                        <div className="flex items-center gap-2">
                          <IndianRupee size={13} className="text-amber-400" />
                          <span className="text-[11px] text-white/50">Loan Amount</span>
                        </div>
                        <span className="text-sm font-bold text-white">₹3,00,000</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                        <div className="flex items-center gap-2">
                          <Percent size={13} className="text-amber-400" />
                          <span className="text-[11px] text-white/50">Interest Rate</span>
                        </div>
                        <span className="text-sm font-bold text-white">12% p.a.</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                        <div className="flex items-center gap-2">
                          <Clock size={13} className="text-amber-400" />
                          <span className="text-[11px] text-white/50">Tenure</span>
                        </div>
                        <span className="text-sm font-bold text-white">24 months</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px w-full bg-white/10" />

                    {/* Result */}
                    <div className="rounded-xl bg-gradient-to-r from-brand-500/20 to-brand-700/20 p-4 ring-1 ring-brand-400/30">
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Your Monthly EMI</div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-white">₹14,122</span>
                        <span className="text-xs text-white/50">/month</span>
                      </div>
                    </div>

                    {/* Summary row */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-white/5 p-2 text-center ring-1 ring-white/5">
                        <div className="text-[9px] text-white/40">Principal</div>
                        <div className="text-xs font-bold text-white">₹3.0L</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2 text-center ring-1 ring-white/5">
                        <div className="text-[9px] text-white/40">Interest</div>
                        <div className="text-xs font-bold text-amber-400">₹38,928</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2 text-center ring-1 ring-white/5">
                        <div className="text-[9px] text-white/40">Total</div>
                        <div className="text-xs font-bold text-white">₹3.39L</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating chips */}
                  <div className="animate-[float_3s_ease-in-out_infinite_0.5s] absolute left-0 top-6 rounded-lg bg-white/10 px-2.5 py-1.5 backdrop-blur-sm sm:-left-3 sm:px-3">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-medium text-white/80">Free</span>
                    </div>
                  </div>
                  <div className="animate-[float_3.5s_ease-in-out_infinite_1s] absolute bottom-20 right-0 rounded-lg bg-white/10 px-2.5 py-1.5 backdrop-blur-sm sm:-right-3 sm:px-3">
                    <span className="text-[10px] font-medium text-white/80">Instant Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* What is an EMI */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={whatRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              whatVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">What is an</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">EMI?</span>
              </h2>
              <p className="section-subtitle">
                An EMI (Equated Monthly Installment) is the fixed amount you pay
                every month towards repaying your loan. It consists of both the
                principal amount and the applicable interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use an EMI Calculator */}
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
                <span className="text-brand-600">Why Use an</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">EMI Calculator?</span>
              </h2>
              <p className="section-subtitle">An EMI Calculator helps you:</p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-3">
              {whyUse.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <CheckCircle2 size={18} className="flex-shrink-0 text-brand-500" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="section relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-100/30 blur-[100px]" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/20 blur-[100px]" />
        </div>

        <div className="container-page relative">
          <div
            ref={howRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              howVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">How Does It</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Work?</span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
              {/* Simply enter */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="text-base font-bold text-slate-900">Simply Enter:</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { icon: IndianRupee, label: "Loan Amount" },
                    { icon: Percent, label: "Interest Rate" },
                    { icon: Clock, label: "Loan Tenure" }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results displayed */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="text-base font-bold text-slate-900">Instantly Get:</h3>
                <div className="mt-4 space-y-3">
                  {[
                    "Monthly EMI",
                    "Total Interest Payable",
                    "Total Amount Payable",
                    "Loan Repayment Summary"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="flex-shrink-0 text-amber-500" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={benefitsRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Benefits of Using the</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">EMI Calculator</span>
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

      {/* Who Can Use It */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={whoRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              whoVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                <span className="text-brand-600">Who Can</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Use It?</span>
              </h2>
              <p className="section-subtitle">
                The EMI Calculator is useful for anyone planning to apply for:
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loanTypes.map((item, i) => (
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

      {/* CTA Section */}
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
              Make Smarter Financial Decisions
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
              Before applying for a loan, use the Creditu EMI Calculator to
              understand your repayment commitments and choose the loan option
              that best fits your financial goals.
            </p>
            <Link
              href="/#emi"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-700 shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
            >
              Calculate Your EMI <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-100 py-8">
        <div className="container-page">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            <strong className="text-slate-600">Disclaimer:</strong> EMI
            calculations are indicative in nature and may vary based on the
            lender&apos;s final terms, interest rates, processing fees, and loan
            approval conditions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
