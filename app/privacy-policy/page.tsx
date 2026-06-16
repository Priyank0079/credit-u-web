"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  FileText,
  Database,
  Users,
  Clock,
  UserCheck,
  Cookie,
  Baby,
  Bell,
  Mail,
  ArrowRight
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
    icon: Database,
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us when you create an account, apply for a loan, or communicate with us. This includes identity data (Aadhar, PAN), contact information, and financial history necessary for credit assessment."
  },
  {
    icon: FileText,
    title: "How We Use Your Data",
    content:
      "Your data is primarily used to evaluate loan eligibility, process applications, and prevent fraud. We also use it to communicate account updates, security alerts, and personalized financial offers that may benefit you."
  },
  {
    icon: Users,
    title: "Information Sharing",
    content:
      "We do not sell your personal data. We only share information with regulated financial partners, credit bureaus (like CIBIL), and service providers who help us operate our loan services under strict confidentiality agreements."
  },
  {
    icon: Clock,
    title: "Data Retention",
    content:
      "We retain your information as long as necessary to provide services and comply with legal or regulatory requirements set by the Reserve Bank of India (RBI)."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content:
      "You have the right to access, correct, or request deletion of your personal information. You can also opt-out of marketing communications at any time through your account settings."
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content:
      "We use cookies to enhance your experience, remember preferences, and analyze app usage. You can manage cookie settings in your browser, but some features may not work without them."
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    content:
      "Our services are not intended for individuals under 18. We do not knowingly collect information from children. If we discover such data, we will delete it immediately."
  },
  {
    icon: Bell,
    title: "Policy Updates",
    content:
      "We may update this policy periodically to reflect changes in our practices or for legal reasons. We will notify you of any significant changes via email or app notifications."
  }
];

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={14} className="text-brand-500" />
              Legal
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-brand-600">Privacy</span>{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Your privacy and data security are our top priorities at creditU.
              Learn how we handle your information with transparency and care.
            </p>

            <div className="mt-4 text-sm font-medium text-slate-500">
              Last Updated: March 19, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="section bg-white">
        <div className="container-page">
          <div
            ref={contentRef}
            className={`will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
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

      {/* Contact CTA */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div
            ref={ctaRef}
            className={`mx-auto max-w-2xl text-center will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Mail size={24} />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                Still have questions?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our compliance team is here to help if you need further
                clarification on our data handling practices or have specific
                privacy concerns.
              </p>
              <Link
                href="mailto:grievance@creditu.in"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl"
              >
                Contact Privacy Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
