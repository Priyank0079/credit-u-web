import Image from "next/image";

const partners = [
  { name: "RBI Registered NBFC", logo: null },
  { name: "Surepass", logo: "/surepass-logo.png" },
  { name: "Digimiles", logo: "/digimiles-logo.png" }
];

export default function Partners() {
  return (
    <section className="section bg-brand-50/50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Our Ecosystem</span>
          <h2 className="section-title mt-4">
            <span className="font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Trusted partners powering</span>{" "}
            <span className="text-brand-600">creditU</span>
          </h2>
          <p className="section-subtitle">
            We work with India&apos;s leading NBFCs, fintechs and infrastructure
            partners.
          </p>
        </div>

        <div className="marquee mt-12">
          <div className="marquee__group">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-xl bg-white px-4 shadow-soft ring-1 ring-slate-100 sm:h-16 sm:min-w-[180px] sm:px-6"
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain sm:h-10"
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-600 sm:text-sm">{p.name}</span>
                )}
              </div>
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {partners.map((p) => (
              <div
                key={`${p.name}-dup`}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-xl bg-white px-4 shadow-soft ring-1 ring-slate-100 sm:h-16 sm:min-w-[180px] sm:px-6"
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain sm:h-10"
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-600 sm:text-sm">{p.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
