"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: easeOutExpo,
      smoothWheel: true,
    });

    let rafId = 0;
    let alive = true;

    function raf(time: number) {
      if (!alive) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    function onAnchorClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor || !anchor.href) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href);
      const current = new URL(window.location.href);
      if (url.origin !== current.origin || url.pathname !== current.pathname) {
        return;
      }
      if (!url.hash) return;

      event.preventDefault();
      lenis.scrollTo(decodeURIComponent(url.hash), {
        duration: 0.8,
        easing: easeOutExpo,
        offset: -128,
      });
    }

    document.addEventListener("click", onAnchorClick, true);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick, true);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
