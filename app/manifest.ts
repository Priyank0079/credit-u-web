import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "creditU — Smart Fintech Loans",
    short_name: "creditU",
    description:
      "Instant personal loans, credit lines, medical & education loans with 100% digital KYC. Powered by RBI-registered NBFCs.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b3c6d",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
