import styles from "./Footer.module.css";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.coords}>
            Coordinates: 33.8688° S · 151.2093° E · Milky Way
          </p>

          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/timothy-w-8bbb521b0/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/timzw961"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <p className={styles.copy}>Copyright 2026 Timothy Wang</p>
      </Container>
    </footer>
  );
}
