import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Personal Loan", href: "/products/personal-loan" },
      { label: "Credit Line", href: "/products/credit-line" },
      { label: "Medical Loan", href: "/products/medical-loan" },
      { label: "Education Loan", href: "/products/education-loan" },
      { label: "EMI Calculator", href: "/products/emi-calculator" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Journey Mapping", href: "/products/journey-mapping" },
      { label: "Digital KYC", href: "/products/digital-kyc" },
      { label: "Contact", href: "/contact" },
      { label: "Download App", href: "/#download" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Grievance Redressal", href: "mailto:grievance@creditu.in" },
      { label: "Corporate Inquiry", href: "mailto:info@creditu.in" },
      { label: "Customer Care", href: "mailto:care@creditu.in" }
    ]
  }
];

const socials = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/creditu-technologies-private-limited"
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61579571376717"
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/creditu.in?igsh=MTF3M205ZjdtYThv"
  }
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-slate-950 text-slate-300">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-8 text-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:text-left">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="inline-block rounded-xl bg-white p-2 sm:p-3">
              <Logo width={150} height={55} className="sm:hidden" />
              <Logo width={190} height={70} className="hidden sm:block" />
            </div>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-slate-400 lg:mx-0">
              We&apos;re on a mission to democratize credit in India. Simple,
              fast, and fair financial solutions for everyone.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-brand-600 hover:text-white"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ISO Certification Badges */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* ISO 27001:2022 */}
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center lg:flex-row lg:text-left">
              <div className="flex-shrink-0 rounded-xl bg-white p-2">
                <Image
                  src="/iso-27001.jpeg"
                  alt="ISO 27001:2022 Certified - International Organization for Standardization"
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  ISO 27001:2022
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Information Security Management — ensuring robust data protection and security practices.
                </p>
              </div>
            </div>

            {/* ISO 9001:2015 */}
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center lg:flex-row lg:text-left">
              <div className="flex-shrink-0 rounded-xl bg-white p-2">
                <Image
                  src="/iso-9001.png"
                  alt="ISO 9001:2015 Certified - Guarantee Certified Quality Management"
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  ISO 9001:2015
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Quality Management System — guaranteeing consistent, high-quality service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 lg:text-left">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              © {new Date().getFullYear()} creditU Technologies Private
              Limited. All Rights Reserved.
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-slate-500">
            <strong className="text-slate-400">Disclaimer:</strong> creditU is a
            technology platform and not a lender. All loans are provided by our
            RBI-registered NBFC partners. We follow all guidelines set by the
            Reserve Bank of India and local financial regulations to ensure your
            safety and fairness.
          </p>
        </div>
      </div>
    </footer>
  );
}
