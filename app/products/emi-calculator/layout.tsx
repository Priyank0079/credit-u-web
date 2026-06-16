import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator — Plan Your Loan Repayments",
  description:
    "Use creditU's free EMI Calculator to estimate monthly loan repayments. Enter loan amount, interest rate, and tenure to get instant results. Plan your finances smartly.",
  keywords: ["EMI calculator", "loan EMI calculator", "monthly EMI", "loan repayment calculator", "personal loan EMI", "creditU EMI calculator"],
  openGraph: {
    title: "EMI Calculator — creditU",
    description: "Calculate your monthly EMI instantly. Free, accurate, no registration needed.",
    url: "https://creditu.in/products/emi-calculator"
  }
};

export default function EmiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
