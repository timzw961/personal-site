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
        <div className={`${styles.disk} ${styles.disk3}`} />
        <div className={`${styles.disk} ${styles.disk1}`} />
        <div className={`${styles.disk} ${styles.disk2}`} />
        <div className={styles.photonRing} />
        <div className={styles.core} />
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
