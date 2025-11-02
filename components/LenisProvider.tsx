"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute("href");
        if (!href) return;

        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
          lenis.scrollTo(target);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
