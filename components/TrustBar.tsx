import { ShieldCheck, FileX2, TrendingUp, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "RBI Registered NBFC Partners" },
  { icon: FileX2, label: "100% Paperless Process" },
  { icon: TrendingUp, label: "CIBIL & Income Verified" },
  { icon: BadgeCheck, label: "256-bit Encrypted" }
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-accent-green-light/50">
      <div className="container-page grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 sm:gap-6 sm:py-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-center text-slate-700 sm:flex-row sm:justify-center sm:gap-3 sm:text-left"
          >
            <Icon size={22} className="flex-shrink-0 text-accent-green" />
            <span className="text-xs font-semibold tracking-wide sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
