import styles from "./Footer.module.css";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.note}>
            Designed &amp; built by Timothy Wang
            <span className={styles.dot} aria-hidden="true">·</span>
            <span className={styles.year}>{new Date().getFullYear()}</span>
          </p>

          <nav className={styles.links} aria-label="Social">
            <a
              href="mailto:timothy.zehao.wang@gmail.com"
              className={styles.link}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/timothy-w"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/timzw961"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
