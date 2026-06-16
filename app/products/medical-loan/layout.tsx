import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Loan — Healthcare Financing Made Easy",
  description:
    "Apply for medical loans with creditU for surgeries, treatments, dental care, fertility, and more. Quick disbursement, flexible EMIs, 100% digital process.",
  keywords: ["medical loan", "healthcare loan", "hospital loan", "surgery loan", "medical financing India", "creditU medical loan"],
  openGraph: {
    title: "Medical Loan — creditU",
    description: "Finance your healthcare needs with instant medical loans. Quick approval, flexible EMIs.",
    url: "https://creditu.in/products/medical-loan"
  }
};

export default function MedicalLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
