"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./BlackHoleLoader.module.css";

const SESSION_KEY = "blackhole-loader-played";
const TOTAL_DURATION_MS = 3200;

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
            <radialGradient id="bh-haloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 150, 60, 0.45)" />
              <stop offset="55%" stopColor="rgba(255, 110, 40, 0.16)" />
              <stop offset="100%" stopColor="rgba(140, 60, 20, 0)" />
            </radialGradient>
          </defs>

          {/* Soft halo behind the disk for depth */}
          <ellipse
            className={styles.bhHalo}
            cx="120"
            cy="120"
            rx="92"
            ry="44"
          />

          {/* Outer accretion disk — orange, slow material flow */}
          <ellipse
            className={styles.diskOuter}
            cx="120"
            cy="120"
            rx="78"
            ry="19"
          />
          <ellipse
            className={styles.diskMid}
            cx="120"
            cy="120"
            rx="62"
            ry="14"
          />

          {/* Inner disk — hot blue/white ring near the photon sphere */}
          <ellipse
            className={styles.diskInner}
            cx="120"
            cy="120"
            rx="44"
            ry="9"
          />

          {/* Photon ring + event horizon */}
          <circle
            className={styles.svgPhotonRing}
            cx="120"
            cy="120"
            r="26"
          />
          <circle className={styles.svgCore} cx="120" cy="120" r="22" />
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
