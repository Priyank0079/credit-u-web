import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey Mapping — Your Complete Loan Journey",
  description:
    "Track your loan application journey with creditU's 8-step digital process. From OTP verification to fund disbursement — 100% digital, real-time tracking, under 5 minutes.",
  keywords: ["loan journey", "digital loan process", "KYC verification steps", "loan application tracking", "creditU journey mapping"],
  openGraph: {
    title: "Journey Mapping — creditU",
    description: "Track your complete loan journey in 8 simple steps. 100% digital, real-time tracking.",
    url: "https://creditu.in/products/journey-mapping"
  }
};

export default function JourneyMappingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
