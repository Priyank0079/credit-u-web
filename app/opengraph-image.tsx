import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "creditU — Smart Fintech Loans in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b3c6d 0%, #093158 50%, #061e38 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative"
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px"
            }}
          >
            credit
            <span style={{ color: "#f9be1a" }}>U</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.4
            }}
          >
            Instant Personal Loans, Credit Lines & Digital KYC
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              gap: "16px"
            }}
          >
            <span>100% Digital</span>
            <span>•</span>
            <span>RBI Compliant</span>
            <span>•</span>
            <span>No Paperwork</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #f59e0b, #eab308, #f59e0b)"
          }}
        />
      </div>
    ),
    { ...size }
  );
}
