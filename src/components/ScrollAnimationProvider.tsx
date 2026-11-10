"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Defer observation until after initial React hydration is complete
    const timer = setTimeout(() => {
      // If reduced motion is preferred, reveal everything immediately
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll("[data-reveal]").forEach((el) => {
          el.setAttribute("data-revealed", "true");
          el.classList.add("is-revealed");
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const delayStr = target.getAttribute("data-delay");
              const delay = delayStr ? parseInt(delayStr, 10) : 0;

              if (delay > 0) {
                setTimeout(() => {
                  target.setAttribute("data-revealed", "true");
                  target.classList.add("is-revealed");
                }, delay);
              } else {
                target.setAttribute("data-revealed", "true");
                target.classList.add("is-revealed");
              }

              obs.unobserve(target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.08,
        }
      );

      // Query all reveal elements and observe them
      const elements = document.querySelectorAll(
        "[data-reveal]:not(.is-revealed):not([data-revealed='true'])"
      );
      elements.forEach((el) => observer?.observe(el));
    }, 120);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

