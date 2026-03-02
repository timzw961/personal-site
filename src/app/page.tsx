import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      <section className={styles.hero}>
        <h1 className={styles.title}>Senior Frontend Engineer</h1>
        <p className={styles.subtitle}>
          I build fast, accessible, conversion-critical web experiences — and
          love improving engineering systems (testing, CI, a11y) that raise
          quality across teams.
        </p>

        <div className={styles.ctaRow}>
          <Link className={styles.primaryCta} href="/projects">
            View projects
          </Link>
          <Link className={styles.secondaryCta} href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Focus areas</h2>
        <ul className={styles.list}>
          <li>Frontend architecture for complex flows</li>
          <li>Accessibility (WCAG), shift-left testing</li>
          <li>Performance + reliability (CI/CD, E2E)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Selected work</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.h3}>CI & E2E improvements</h3>
            <p>
              Reduced E2E runtime and improved feedback loops for engineers.
            </p>
            <Link href="/projects">See case studies →</Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.h3}>Accessibility strategy</h3>
            <p>Automated testing across dev and CI to prevent regressions.</p>
            <Link href="/projects">See case studies →</Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
