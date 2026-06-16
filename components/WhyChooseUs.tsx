import { Zap, ShieldCheck, Smartphone, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Instant Approval",
    desc: "Get your loan approved within seconds using our advanced matching engine.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: ShieldCheck,
    title: "100% Secure KYC",
    desc: "Military-grade encryption for all your documents and personal data.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Fully Digital Process",
    desc: "From application to disbursal, everything happens on your smartphone.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600"
  },
  {
    icon: Cpu,
    title: "Smart Credit Engine",
    desc: "Our system analyzes thousands of data points to give you the best interest rates.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Why creditU</span>
          <h2 className="section-title mt-4">
            <span className="text-brand-600">Banking built for the</span>{" "}
            <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Modern Generation</span>
          </h2>
          <p className="section-subtitle">
            We&apos;ve removed the hurdles of traditional lending. Fast, secure,
            and entirely on your terms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="card text-center lg:text-left">
              <div className={`mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl lg:mx-0 ${r.iconBg} ${r.iconColor}`}>
                <r.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
