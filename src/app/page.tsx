import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.showcase}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Selected work</p>
          <h1 className={styles.title}>Senior Frontend Engineer</h1>

          <div className={styles.projectMeta}>
            <h2>Accessible product systems</h2>
            <p>React, CI, E2E, accessibility</p>
          </div>

          <p className={styles.description}>
            I build fast, accessible web experiences and improve the engineering
            systems behind them, from testing strategy and CI feedback loops to
            component quality used across product teams.
          </p>

          <Link className={styles.projectLink} href="/projects">
            View projects
          </Link>
        </div>

        <Link className={styles.preview} href="/projects/ci-e2e-speedup">
          <div className={styles.browser}>
            <div className={styles.browserTop}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.previewHero}>
              <p>Case study</p>
              <h2>CI & E2E speedup</h2>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.previewBanner} />
              <h3>Latest improvements</h3>
              <div className={styles.previewGrid}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
