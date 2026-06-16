const stats = [
  { value: "100%", label: "Digital process" },
  { value: "2,000+", label: "Data points analyzed" },
  { value: "<2 min", label: "Approval time" },
  { value: "Zero", label: "Paperwork" }
];

export default function Stats() {
  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <div className="rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 p-8 sm:p-12">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-amber-300 xs:text-3xl sm:text-4xl lg:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
