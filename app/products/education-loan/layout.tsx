import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Loan — Invest in Your Future",
  description:
    "Apply for education loans with creditU for higher studies in India and abroad. Cover tuition, hostel, books, and more. Student-friendly EMIs, 100% digital.",
  keywords: ["education loan", "student loan India", "study loan", "higher education loan", "abroad study loan", "creditU education loan"],
  openGraph: {
    title: "Education Loan — creditU",
    description: "Fund your higher education with flexible education loans. Study in India or abroad.",
    url: "https://creditu.in/products/education-loan"
  }
};

export default function EducationLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
