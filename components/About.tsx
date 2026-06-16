import { Building2, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="chip">About Us</span>
          <h2 className="section-title mt-4">
            Democratizing credit for every Indian
          </h2>
          <p className="section-subtitle">
            creditU Technologies Private Limited is on a mission to democratize
            credit in India. As a technology platform, we partner with
            RBI-registered NBFCs to deliver simple, fast, and fair financial
            solutions — 100% digital, 100% transparent.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Building2, k: "RBI", v: "Compliant Partners", color: "text-brand-600" },
              { icon: Users, k: "10K+", v: "Users joined", color: "text-accent-green" },
              { icon: Target, k: "4.8★", v: "Rated by users", color: "text-amber-500" }
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl bg-white p-4 shadow-soft ring-1 ring-slate-100"
              >
                <s.icon size={20} className={s.color} />
                <div className="mt-3 text-lg font-bold text-slate-900">
                  {s.k}
                </div>
                <div className="text-xs text-slate-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white">
            <div className="text-xs font-medium uppercase tracking-wider text-amber-300">
              Our Mission
            </div>
            <div className="mt-3 text-base font-semibold leading-snug">
              Democratize credit in India — simple, fast, and fair financial
              solutions for everyone.
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <div className="text-xs font-medium uppercase tracking-wider text-brand-700">
              Our Vision
            </div>
            <div className="mt-3 text-base font-semibold leading-snug text-slate-900">
              Banking built for the modern generation — 100% digital, 100%
              transparent.
            </div>
          </div>
          <div className="col-span-2 rounded-3xl bg-brand-900 p-6 text-white">
            <div className="text-xs font-medium uppercase tracking-wider text-white/70">
              Our Values
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-semibold sm:gap-3 sm:text-sm">
              <div className="rounded-xl bg-white/10 p-2 text-center ring-1 ring-white/15 sm:p-3">
                Transparency
              </div>
              <div className="rounded-xl bg-white/10 p-2 text-center ring-1 ring-white/15 sm:p-3">
                Speed
              </div>
              <div className="rounded-xl bg-white/10 p-2 text-center ring-1 ring-white/15 sm:p-3">
                Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
