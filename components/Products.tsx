"use client";

import { useEffect, useRef, useState } from "react";
import {
  Wallet,
  CreditCard,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

type Product = {
  icon: any;
  title: string;
  desc: string;
  limit: string;
  rate: string;
  status: "ACTIVE" | "COMING SOON";
  cta: string;
  href: string;
  color: string;
  glow: string;
  iconBg: string;
};

const products: Product[] = [
  {
    icon: Wallet,
    title: "Personal Loan",
    desc: "Bigger goals, simple terms. 100% digital with no paperwork hassle.",
    limit: "₹ 5,00,000",
    rate: "Lowest interest",
    status: "ACTIVE",
    cta: "APPLY FOR LOAN",
    href: "/products/personal-loan",
    color: "from-brand-500 to-brand-600",
    glow: "bg-brand-500/20",
    iconBg: "bg-brand-50"
  },
  {
    icon: CreditCard,
    title: "Credit Line",
    desc: "Flexible credit you can use anytime. Pay interest only on what you use.",
    limit: "₹ 2,00,000",
    rate: "Lowest interest",
    status: "ACTIVE",
    cta: "APPLY FOR LOAN",
    href: "/products/credit-line",
    color: "from-amber-500 to-yellow-500",
    glow: "bg-amber-500/20",
    iconBg: "bg-amber-50"
  },
  {
    icon: Stethoscope,
    title: "Medical Loan",
    desc: "Cover medical expenses, surgeries and treatments with instant approval.",
    limit: "₹ 10,00,000",
    rate: "Lowest interest",
    status: "COMING SOON",
    cta: "JOIN WAITLIST",
    href: "/products/medical-loan",
    color: "from-emerald-500 to-green-600",
    glow: "bg-emerald-500/20",
    iconBg: "bg-emerald-50"
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    desc: "Fund higher education in India and abroad with student-friendly EMIs.",
    limit: "₹ 3,00,000",
    rate: "Lowest interest",
    status: "COMING SOON",
    cta: "JOIN WAITLIST",
    href: "/products/education-loan",
    color: "from-cyan-500 to-teal-600",
    glow: "bg-cyan-500/20",
    iconBg: "bg-cyan-50"
  }
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-soft will-change-[transform,opacity] transition-[transform,opacity,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? "0ms" : `${index * 100}ms` }}
    >
      {/* Background glow on hover */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${product.glow} opacity-0 blur-2xl transition-opacity duration-300 ease-out group-hover:opacity-80`}
      />

      {/* Status badge */}
      <span
        className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${
          product.status === "ACTIVE"
            ? "bg-emerald-50/90 text-emerald-700 ring-1 ring-emerald-200"
            : "bg-amber-50/90 text-amber-700 ring-1 ring-amber-200"
        }`}
      >
        {product.status === "ACTIVE" && (
          <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        )}
        {product.status}
      </span>

      {/* Icon */}
      <div className="relative mx-auto mt-6 h-16 w-16 sm:mt-0 lg:mx-0">
        <div
          className={`absolute inset-1 rounded-2xl ${product.glow} opacity-60 blur-lg`}
        />
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-lg will-change-transform transition-transform duration-300 ease-out group-hover:scale-110`}
        >
          <product.icon size={26} strokeWidth={1.8} />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-center text-xl font-bold text-slate-900 lg:text-left">
        {product.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-center text-sm leading-relaxed text-slate-600 lg:text-left">
        {product.desc}
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Max Limit
          </div>
          <div className="mt-0.5 text-sm font-bold text-slate-800">
            {product.limit}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Interest
          </div>
          <div className="mt-0.5 text-sm font-bold text-slate-800">
            {product.rate}
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={product.href}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${product.color} px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-[transform,box-shadow] duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5`}
      >
        {product.cta}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Animated bottom border */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${product.color} transition-transform duration-300 ease-out group-hover:scale-x-100`}
      />
    </div>
  );
}

export default function Products() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="section relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="container-page relative">
        {/* Section header with animation */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Loan Products
          </span>
          <h2 className="section-title mt-5">
            <span className="text-brand-600">Choose the right</span>{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">credit for your needs</span>
          </h2>
          <p className="section-subtitle">
            Tailored financial solutions designed to match your life goals with
            flexible repayment options.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
