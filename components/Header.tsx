"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "EMI Calculator", href: "/#emi" },
  { label: "How it Works", href: "/#how" },
  { label: "Digital KYC", href: "/#kyc" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking Home or Logo while already on home page, smooth scroll to top
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      return;
    }
    // If clicking a hash link while already on home page, smooth scroll to section
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div className="container-page flex h-16 items-center justify-between sm:h-20 lg:h-24">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex flex-shrink-0 items-center"
        >
          <Logo width={120} height={44} className="xs:hidden" />
          <Logo width={140} height={52} className="hidden xs:block sm:hidden" />
          <Logo width={180} height={66} className="hidden sm:block" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-bold text-brand-600 transition hover:text-brand-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#download"
            onClick={(e) => handleNavClick(e, "/#download")}
            className="btn-primary"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
          <div className="container-page space-y-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-lg px-3 py-3 text-sm font-bold text-brand-600 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/#download"
                onClick={(e) => handleNavClick(e, "/#download")}
                className="btn-primary w-full"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
