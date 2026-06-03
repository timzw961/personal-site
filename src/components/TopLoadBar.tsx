"use client";

import { useEffect, useState } from "react";
import styles from "./TopLoadBar.module.css";

const TOTAL_MS = 1500;

export function TopLoadBar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), TOTAL_MS);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.bar} aria-hidden="true">
      <div className={styles.fill} />
    </div>
  );
}
