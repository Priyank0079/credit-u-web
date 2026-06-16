import { Mail, MapPin, Clock, MessageCircle, Building2, ShieldCheck } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Corporate Inquiry",
    value: "info@creditu.in",
    href: "mailto:info@creditu.in",
    gradient: "from-brand-600 to-brand-400"
  },
  {
    icon: MessageCircle,
    label: "Customer Care",
    value: "care@creditu.in",
    href: "mailto:care@creditu.in",
    gradient: "from-cyan-500 to-brand-500"
  },
  {
    icon: ShieldCheck,
    label: "Grievance Redressal Officer",
    value: "Rashmi : grievance@creditu.in",
    href: "mailto:grievance@creditu.in",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: MapPin,
    label: "Registered Office",
    value: "No.22, 1st Floor, 1st Cross, Kothanur Main Rd, Nataraja Layout, Bengaluru, Karnataka 560078",
    href: null,
    gradient: "from-amber-500 to-orange-500"
  }
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }}
          />
        </div>

        <div className="container-page relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="bg-gradient-to-r from-cyan-300 to-brand-300 bg-clip-text text-transparent">
              We respond within 24 hours
            </span>
          </span>

          <h1 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-tight text-white xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-brand-300 to-brand-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Have a question about a product, partnership or grievance? We&apos;re
            here to help every step of the way.
          </p>

          {/* Quick stats */}
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-white/50 sm:gap-8">
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-cyan-400" />
              <span>24hr response</span>
            </span>
            <span className="hidden opacity-30 sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>RBI compliant</span>
            </span>
            <span className="hidden opacity-30 sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <Building2 size={14} className="text-amber-400" />
              <span>Bangalore, India</span>
            </span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Reach us directly
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose the right channel for your query
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href || undefined}
                className="group relative block overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-200"
              >
                {/* Hover glow */}
                <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40`} />

                <div className="relative flex items-start gap-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <card.icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {card.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold leading-relaxed text-slate-800 group-hover:text-brand-600 transition-colors">
                      {card.value}
                    </div>
                  </div>
                </div>

                {/* Bottom border sweep */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${card.gradient} transition-transform duration-300 group-hover:scale-x-100`} />
              </a>
            ))}
          </div>

          {/* Working hours badge */}
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center">
            <div className="flex items-center justify-center gap-2">
              <Clock size={14} className="text-brand-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                Working Hours
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Mon – Sat: 10:00 AM – 7:00 PM IST
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Closed on Sundays & public holidays
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
