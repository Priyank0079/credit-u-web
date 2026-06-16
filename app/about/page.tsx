import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import {
  MapPin,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  Users2,
  Landmark,
  CheckCircle2,
  FileText
} from "lucide-react";

export const metadata = {
  title: "About Us — creditU",
  description:
    "Empowering India with accessible credit. Learn about creditU Technologies, our mission, and regulatory compliance."
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-soft-gradient py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-page relative text-center">
          <span className="chip">
            <Users2 size={14} /> Our Story
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-600 sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering India with{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Accessible Credit
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We&apos;re on a mission to bridge the credit gap for millions of
            Indians through innovative technology and transparent lending.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="min-w-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-accent-gold">
              <MapPin size={18} />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Bangalore Based
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
              Who we are?
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-none">
              <strong className="text-brand-600">creditU</strong> is a
              Bangalore-based fintech platform offering a{" "}
              <span className="font-semibold text-brand-600">credit line</span>{" "}
              and{" "}
              <span className="font-semibold text-accent-gold-dark">
                personal loan
              </span>{" "}
              for daily commuters. We believe every Indian deserves access to
              fair, transparent credit — without the hassle of a credit card or a
              bank visit.
            </p>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-none">
              We are a{" "}
              <strong className="text-brand-600">
                Lending Service Provider (LSP)
              </strong>{" "}
              working in partnership with RBI-licensed NBFCs to offer customers a
              pre-approved credit line and Personal Loan. Customers can use this
              credit line to pay any UPI merchant directly from the creditU app —
              and repay in simple monthly EMIs.
            </p>

            {/* Quote */}
            <div className="mx-auto mt-8 border-l-4 border-accent-gold bg-accent-gold-light/60 py-4 pl-5 pr-4 text-left lg:mx-0">
              <p className="text-sm font-medium italic text-slate-700">
                &quot;creditU is registered under the Companies Act 2013 and
                operates in full compliance with RBI Digital Lending Guidelines
                2022.&quot;
              </p>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                icon: TrendingUp,
                title: "100%",
                label: "DIGITAL"
              },
              {
                icon: ShieldCheck,
                title: "Secure",
                label: "COMPLIANCE"
              },
              {
                icon: CreditCard,
                title: "Instant",
                label: "CREDIT LINE"
              },
              {
                icon: Users2,
                title: "Fair",
                label: "TRANSPARENCY"
              }
            ].map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-soft ring-1 ring-slate-100 sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold-light text-accent-gold">
                  <card.icon size={24} />
                </div>
                <div className="mt-4 text-xl font-extrabold text-brand-600">
                  {card.title}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">Requirement</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
              Who can Apply?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                iconBg: "bg-brand-50 text-brand-600",
                title: "Age & Income",
                items: ["Age: 21 to 55 years", "Monthly Income: ₹15,000+"]
              },
              {
                icon: TrendingUp,
                iconBg: "bg-accent-gold-light text-accent-gold",
                title: "Credit Health",
                items: ["Credit Score: 650+", "Active bank account"]
              },
              {
                icon: FileText,
                iconBg: "bg-brand-100 text-brand-600",
                title: "Requirements",
                items: ["Valid PAN and Aadhaar", "Salaried/Self-employed"]
              }
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-slate-100 lg:text-left"
              >
                <div
                  className={`mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl lg:mx-0 ${card.iconBg}`}
                >
                  <card.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-600">
                  {card.title}
                </h3>
                <ul className="mt-3 space-y-2 text-left">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 text-accent-green"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Gig workers and small business owners are also welcome to apply.
          </p>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 p-6 sm:p-8 md:p-12">
            <div className="flex flex-col items-center gap-3 text-white sm:flex-row lg:items-start">
              <Landmark size={24} className="text-accent-gold" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Regulatory Information
              </h3>
            </div>

            <hr className="my-6 border-white/20" />

            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/90 lg:mx-0 lg:text-left">
              <strong className="text-white">
                creditU Technologies Private Limited
              </strong>{" "}
              is a Lending Service Provider (LSP) registered under the Companies
              Act 2013. All loans and credit lines offered through the creditU
              platform are provided by our partner NBFC which is registered with
              and regulated by the Reserve Bank of India.
            </p>

            {/* Disclaimer Quote */}
            <div className="mt-6 rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 backdrop-blur">
              <p className="text-sm font-medium italic text-white/90">
                &quot;creditU does not lend money directly. creditU is a
                technology and distribution platform only.&quot;
              </p>
            </div>

            <hr className="my-6 border-white/20" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {[
                { label: "LOAN TENURE", value: "Up to 12 months" },
                { label: "COMPLIANCE", value: "RBI Guidelines 2022" },
                { label: "DISBURSAL SPEED", value: "Under 5 Minutes" },
                { label: "DATA PRIVACY", value: "DPDP Act 2023" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <Leadership />

      <Footer />
    </main>
  );
}
