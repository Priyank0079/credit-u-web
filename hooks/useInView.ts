"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean indicating if the element is in the viewport.
 * Animations/timers should pause when `inView` is false to save CPU/GPU.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: "100px", threshold: 0 }
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
