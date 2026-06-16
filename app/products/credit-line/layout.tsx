import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Line — Instant Access to Funds",
  description:
    "Get a pre-approved credit line up to ₹2 Lakhs with creditU. Borrow only what you need, pay interest only on amount used. Reusable credit, instant access, 100% digital.",
  keywords: ["credit line", "pre-approved credit", "flexible credit", "instant funds", "creditU credit line"],
  openGraph: {
    title: "Credit Line — creditU",
    description: "Access funds anytime with a pre-approved credit line. Pay interest only on what you use.",
    url: "https://creditu.in/products/credit-line"
  }
};

export default function CreditLineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
