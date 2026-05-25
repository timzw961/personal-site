import styles from "./page.module.css";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container>
      <div className={styles.label}>{"// Sector 04 — Hail Frequency"}</div>
      <h1 className={styles.h1}>Contact</h1>
      <p className={styles.p}>
        Best way to reach me is email. I&rsquo;m also on LinkedIn.
      </p>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.labelInline}>Email</span>
          <a href="mailto:timothy.zehao.wang@gmail.com">
            timothy.zehao.wang@gmail.com
          </a>
        </div>

        <div className={styles.row}>
          <span className={styles.labelInline}>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/timothy-w-8bbb521b0/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/timothy-w-8bbb521b0
          </a>
        </div>

        <div className={styles.row}>
          <span className={styles.labelInline}>GitHub</span>
          <a
            href="https://github.com/timzw961"
            target="_blank"
            rel="noreferrer"
          >
            github.com/timzw961
          </a>
        </div>
      </div>
    </Container>
  );
}
