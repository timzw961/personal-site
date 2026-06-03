"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Optional ms delay applied AFTER the element enters the viewport. */
  delay?: number;
  /** Optional extra class on the wrapper. */
  className?: string;
};

/**
 * Fades + slides children up when they enter the viewport. Reveals once and
 * unobserves. Honours prefers-reduced-motion (skips animation entirely).
 *
 * Pairs with the [data-reveal] / [data-reveal][data-revealed="true"] rules
 * in globals.css.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.revealed = "true";
      return;
    }

    const reveal = () => {
      if (delay) {
        window.setTimeout(() => {
          el.dataset.revealed = "true";
        }, delay);
      } else {
        el.dataset.revealed = "true";
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
