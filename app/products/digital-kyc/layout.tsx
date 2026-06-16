import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital KYC — 100% Online Identity Verification",
  description:
    "Complete your KYC in under 90 seconds with creditU's digital verification. PAN, Aadhaar, face match, bank verification — all online. RBI-compliant, 256-bit encrypted.",
  keywords: ["digital KYC", "online KYC", "video KYC", "Aadhaar eKYC", "PAN verification", "instant KYC India", "creditU KYC"],
  openGraph: {
    title: "Digital KYC — creditU",
    description: "Complete KYC in 90 seconds. 100% digital, RBI-compliant, no branch visits.",
    url: "https://creditu.in/products/digital-kyc"
  }
};

export default function DigitalKycLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
