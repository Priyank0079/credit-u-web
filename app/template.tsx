"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// This variable persists during client-side (SPA) navigation
// but RESETS on full page reload (browser refresh / F5 / Cmd+R)
let hasClientNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Redirect to home on browser refresh
  useEffect(() => {
    if (pathname === "/") {
      hasClientNavigated = true;
    } else if (!hasClientNavigated) {
      window.location.replace("/");
      return;
    }
  }, [pathname]);

  // Smooth page enter animation + scroll to top
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Trigger page-enter animation
    const el = wrapperRef.current;
    if (el) {
      el.classList.remove("page-enter");
      // Force reflow to restart animation
      void el.offsetWidth;
      el.classList.add("page-enter");
    }
  }, [pathname]);

  return <div ref={wrapperRef} className="page-enter">{children}</div>;
}
