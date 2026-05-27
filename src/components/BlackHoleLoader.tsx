"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./BlackHoleLoader.module.css";

const SESSION_KEY = "blackhole-loader-played";
const TOTAL_DURATION_MS = 4500;

type Star = {
  size: number;
  top: number;
  left: number;
  duration: number;
  opacity: number;
  delay: number;
};

type Particle = {
  dx: number;
  dy: number;
  delay: number;
  duration: number;
};

function buildStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.7,
    delay: Math.random() * 4,
  }));
}

function buildParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * 360;
    const dist = 60 + Math.random() * 80;
    return {
      dx: Math.cos((angle * Math.PI) / 180) * dist,
      dy: Math.sin((angle * Math.PI) / 180) * dist,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    };
  });
}

export function BlackHoleLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;

    sessionStorage.setItem(SESSION_KEY, "1");
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);

    const t = window.setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      setShow(false);
    }, TOTAL_DURATION_MS);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const stars = useMemo(() => buildStars(80), []);
  const particles = useMemo(() => buildParticles(12), []);

  if (!show) return null;

  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.starsBg}>
        {stars.map((s, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
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

      <div className={styles.wrapper}>
        <svg
          className={styles.svgScene}
          viewBox="0 0 240 240"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="bh-starGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff7c2" />
              <stop offset="35%" stopColor="#ffe680" />
              <stop offset="70%" stopColor="#ff9420" />
              <stop offset="100%" stopColor="rgba(255, 80, 10, 0)" />
            </radialGradient>
            <linearGradient
              id="bh-streamGrad"
              x1="190"
              y1="120"
              x2="120"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 210, 110, 0.95)" />
              <stop offset="50%" stopColor="rgba(255, 100, 30, 0.95)" />
              <stop offset="100%" stopColor="rgba(160, 50, 20, 0.45)" />
            </linearGradient>
            <radialGradient id="bh-haloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 150, 60, 0.55)" />
              <stop offset="55%" stopColor="rgba(255, 110, 40, 0.18)" />
              <stop offset="100%" stopColor="rgba(140, 60, 20, 0)" />
            </radialGradient>
          </defs>

          {/* Soft halo behind the BH that intensifies as material accumulates,
              bridging the stream and disk visually. */}
          <ellipse
            className={styles.bhHalo}
            cx="120"
            cy="120"
            rx="86"
            ry="40"
          />

          {/* Phase A → B — star travels along the stream path via motion-path,
              shrinking and trailing fire as it goes. Same d= as the stream. */}
          <path
            className={styles.tail}
            d="M188 120 Q165 121 145 122"
          />

          {/* Phase B — spaghettified stream (drawn via stroke-dashoffset). */}
          <path
            className={styles.stream}
            d="M188 120 Q160 124 138 138 Q112 154 100 130 Q90 102 122 90 Q150 86 162 108"
            stroke="url(#bh-streamGrad)"
            fill="none"
          />

          {/* Phase C — accretion disk fades in early so it overlaps with the
              stream, then settles into a continuous gentle pulse. */}
          <g className={styles.diskGroup}>
            <ellipse
              className={styles.diskOuter}
              cx="120"
              cy="120"
              rx="72"
              ry="17"
            />
            <ellipse
              className={styles.diskInner}
              cx="120"
              cy="120"
              rx="46"
              ry="9"
            />
          </g>

          {/* Always-on BH */}
          <circle
            className={styles.svgPhotonRing}
            cx="120"
            cy="120"
            r="23"
          />
          <circle className={styles.svgCore} cx="120" cy="120" r="20" />

          {/* Star body — rendered last so it sits on top of everything as it
              travels the path; matches stream d= exactly via offset-path.
              Wrapped in <g> for broader browser support of offset-path on SVG. */}
          <g className={styles.starBody}>
            <circle cx="0" cy="0" r="14" fill="url(#bh-starGrad)" />
          </g>
        </svg>
      </div>

      <div className={styles.barWrap}>
        <div className={styles.barFill} />
      </div>

      <div className={styles.nameTag}>Timothy Wang</div>
      <div className={styles.subTag}>Frontend Engineer</div>

      {particles.map((p, i) => (
        <span
          key={i}
          className={styles.particle}
          style={
            {
              top: "50%",
              left: "50%",
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
