"use client";

import { useMemo } from "react";

type Star = {
  size: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
};

function buildStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: 0.2 + Math.random() * 0.6,
    duration: 1.5 + Math.random() * 3.5,
    delay: Math.random() * 4,
  }));
}

export function HeroStars({
  count = 60,
  className,
  starClassName,
}: {
  count?: number;
  className?: string;
  starClassName?: string;
}) {
  const stars = useMemo(() => buildStars(count), [count]);

  return (
    <div className={className} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className={starClassName}
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "#fff",
            width: `${s.size}px`,
            height: `${s.size}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
