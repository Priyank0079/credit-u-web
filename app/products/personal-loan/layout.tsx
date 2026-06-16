import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan — Flexible Financial Support",
  description:
    "Apply for instant personal loans up to ₹5 Lakhs with creditU. Quick approval, minimal documentation, flexible EMIs. 100% digital process powered by RBI-registered NBFC partners.",
  keywords: ["personal loan", "instant personal loan", "personal loan online", "quick loan approval", "creditU personal loan"],
  openGraph: {
    title: "Personal Loan — creditU",
    description: "Get instant personal loans up to ₹5 Lakhs. Quick approval, no paperwork. Apply now.",
    url: "https://creditu.in/products/personal-loan"
  }
};

export default function PersonalLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
