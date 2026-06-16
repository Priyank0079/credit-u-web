"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Scale,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  CreditCard,
  FileText,
  ShieldAlert,
  AlertTriangle,
  Gavel,
  Fingerprint,
  FileSignature,
  Mail
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

const sections = [
  {
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content:
      "By using our website or accessing creditU services, you agree to these legal terms and conditions. These terms govern your use of our digital platforms and any loan products you apply for."
  },
  {
    icon: UserCheck,
    title: "Eligibility",
    content:
      "You must be an Indian citizen, aged between 21 and 60, and have a valid source of income to apply for loans. Providing false or misleading information will result in immediate rejection and potential legal action."
  },
  {
    icon: CreditCard,
    title: "Loan Approval",
    content:
      "Credit approval is at the sole discretion of our RBI-registered NBFC partners. We facilitate the application process and do not guarantee approval. Interest rates and processing fees will be disclosed before final disbursal."
  },
  {
    icon: Fingerprint,
    title: "KYC Requirements",
    content:
      "Applicants are required to provide valid identity documents as per RBI's KYC (Know Your Customer) guidelines. Your application will only proceed if the verification is successful."
  },
  {
    icon: ShieldAlert,
    title: "Prohibited Use",
    content:
      "You may not use our platform for any illegal activities or to harass others. Any unauthorized attempt to breach our security or access other users' data is strictly prohibited and reportable to authorities."
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "CreditU is not responsible for any indirect or consequential damages arising from your use of our services or any loan application. Our platform is provided 'as-is' and 'as-available'."
  },
  {
    icon: Gavel,
    title: "Governing Law",
    content:
      "These terms will be governed by and interpreted as per Indian laws. Any disputes will be subject to the exclusive jurisdiction of the courts in Bengaluru, India."
  },
  {
    icon: FileSignature,
    title: "Electronic Consent",
    content:
      "You consent to receive all communications and documents electronically. Your digital signature and OTP-based verification hold the same legal weight as a physical signature for loan agreements."
  },
  {
    icon: FileText,
    title: "Legal Disclaimer",
    content:
      "CreditU is a technology platform and not a lender. All loans are provided by our RBI-registered NBFC partners. We follow all guidelines set by the Reserve Bank of India and local financial regulations to ensure your safety and fairness."
  }
];

export default function TermsConditionsPage() {
  const { ref: contentRef, visible: contentVisible } = useInView(0.05);
  const { ref: ctaRef, visible: ctaVisible } = useInView(0.1);

  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-100/50 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-amber-100/30 blur-[100px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
              <Scale size={14} className="text-brand-500" />
              Legal
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-brand-600">Terms &</span>{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              This document outlines the legal agreement between you and creditU
              regarding our services and your responsibilities.
            </p>

            <div className="mt-4 text-sm font-medium text-slate-500">
              Last Updated: March 19, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={contentRef}
            className={`transition-all duration-500 ease-out ${
              contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-3xl space-y-6">
              {sections.map((section, i) => {
                const SectionIcon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-soft will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-8"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110">
                        <SectionIcon size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grievance Redressal CTA */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={ctaRef}
            className={`mx-auto max-w-2xl text-center transition-all duration-500 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Mail size={24} />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                Grievance Redressal
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                If you have any concerns, complaints, or grievances regarding our
                services, loan processing, or data handling, please reach out to
                our dedicated grievance redressal team. We are committed to
                resolving your issues promptly and fairly.
              </p>
              <Link
                href="mailto:grievance@creditu.in"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
              >
                Contact Grievance Team <ArrowRight size={16} />
              </Link>
              <p className="mt-4 text-xs text-slate-500">
                Email: grievance@creditu.in · Response within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
