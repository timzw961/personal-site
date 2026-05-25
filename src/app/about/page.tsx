import styles from "./page.module.css";
import { Container } from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container>
      <div className={styles.label}>{"// Sector 01 — About"}</div>
      <h1 className={styles.h1}>About</h1>
      <p className={styles.p}>
        I&rsquo;m a frontend engineer based in Sydney. I enjoy building products
        that are simple on the surface but handle real-world complexity
        underneath.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.h2}>What I&rsquo;m good at</h2>
          <ul className={styles.list}>
            <li>Designing maintainable frontend architecture</li>
            <li>Accessibility-first UI engineering</li>
            <li>Testing strategy and CI improvements</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>What I care about</h2>
          <ul className={styles.list}>
            <li>Shipping value with high standards</li>
            <li>Clear communication across functions</li>
            <li>Systems that scale with teams</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
