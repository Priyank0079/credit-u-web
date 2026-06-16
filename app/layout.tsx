import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b3c6d"
};

const siteUrl = "https://creditu.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "creditU — Smart Fintech for Instant Personal Loans, Credit Lines & Digital KYC | India",
    template: "%s | creditU"
  },
  description:
    "creditU Technologies offers instant personal loans up to ₹5 Lakhs, flexible credit lines, medical loans, and education loans with 100% digital KYC. No paperwork, fast approval. Powered by RBI-registered NBFC partners in India.",
  keywords: [
    "creditU",
    "personal loan India",
    "instant personal loan",
    "credit line",
    "medical loan",
    "education loan",
    "digital KYC",
    "online loan apply",
    "NBFC loan India",
    "fast loan approval",
    "EMI calculator",
    "loan app India",
    "paperless loan",
    "RBI registered NBFC",
    "fintech India",
    "creditU Technologies"
  ],
  authors: [{ name: "creditU Technologies Private Limited" }],
  creator: "creditU Technologies Private Limited",
  publisher: "creditU Technologies Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "creditU",
    title: "creditU — Instant Personal Loans, Credit Lines & Digital KYC",
    description:
      "Get instant personal loans up to ₹5 Lakhs with 100% digital KYC. No paperwork, fast approval. Apply now on creditU.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "creditU — Smart Fintech Loans in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "creditU — Instant Personal Loans & Digital KYC",
    description:
      "Apply for instant personal loans, credit lines, medical & education loans. 100% digital, no paperwork. Powered by RBI-registered NBFCs.",
    images: ["/opengraph-image"],
    creator: "@creditu_in"
  },
  alternates: {
    canonical: siteUrl
  },
  category: "Finance",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon.svg"
  },
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE"
  // }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "creditU Technologies Private Limited",
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              description:
                "creditU offers instant personal loans, credit lines, medical loans, and education loans with 100% digital KYC. Powered by RBI-registered NBFC partners.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka"
              },
              sameAs: [
                "https://www.linkedin.com/company/creditu-technologies-private-limited",
                "https://www.facebook.com/profile.php?id=61579571376717",
                "https://www.instagram.com/creditu.in"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "care@creditu.in",
                contactType: "customer service"
              },
              areaServed: {
                "@type": "Country",
                name: "India"
              },
              serviceType: [
                "Personal Loan",
                "Credit Line",
                "Medical Loan",
                "Education Loan",
                "Digital KYC"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
