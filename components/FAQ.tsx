"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Who is eligible for a loan from creditU?",
    a: "You must be an Indian citizen, aged between 21 and 55, and have a valid source of income to apply for loans. Final eligibility is decided by our RBI-registered NBFC partners."
  },
  {
    q: "How long does approval take?",
    a: "For most applicants, approval is instant \u2014 within seconds of completing KYC. Our proprietary core engine evaluates over 2,000 data points in micro-seconds to give you the best credit offer."
  },
  {
    q: "What documents do I need?",
    a: "Just your PAN, Aadhaar and bank details. Our 8-step digital KYC handles everything \u2014 OTP, PAN, Aadhaar, selfie/face match, bank verification, income & CIBIL check, AML screening, and final approval."
  },
  {
    q: "Is creditU a lender?",
    a: "creditU is a technology platform and not a lender. All loans are provided by our RBI-registered NBFC partners. We follow all guidelines set by the Reserve Bank of India."
  },
  {
    q: "Is my data safe with creditU?",
    a: "Yes. We are ISO 9001:2015 and ISO 27001:2022 certified. All data is encrypted with 256-bit SSL military-grade encryption, and we follow strict RBI compliance and AML screening on every application."
  },
  {
    q: "Are there any hidden charges?",
    a: "Never. Interest rates and processing fees will be disclosed before final disbursal. We are 100% transparent on every charge."
  },
  {
    q: "How does VKYC work?",
    a: "Our VKYC performs PAN OCR, Aadhaar e-KYC, biometric face match with liveness detection, and bank penny drop verification \u2014 fully RBI compliant."
  },
  {
    q: "How do I raise a grievance?",
    a: "Reach our Grievance Redressal Officer Rashmi at grievance@creditu.in. We respond within the timelines mandated by RBI."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-100/30 blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/30 blur-[100px]" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 shadow-sm ring-1 ring-slate-100">
            <HelpCircle size={14} className="text-amber-500" />
            FAQs
          </span>
          <h2 className="section-title mt-5">
            <span className="text-brand-600">Questions,</span>{" "}
            <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">answered</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before borrowing with creditU.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 ${
                  isOpen
                    ? "border-brand-200 shadow-md ring-1 ring-brand-100"
                    : "border-slate-200 shadow-soft hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-slate-50/50 sm:px-6"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-200 ${
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {f.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-brand-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 py-4 pl-[3.25rem] text-sm leading-relaxed text-slate-600 sm:px-6 sm:pl-[3.75rem]">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
