import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "./Container";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            Timothy Wang
          </Link>

          <nav className={styles.nav} aria-label="Contact links">
            <a
              className={styles.iconLink}
              href="https://www.linkedin.com/in/timothy-w-8bbb521b0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <Link
              className={styles.iconLink}
              href="/contact"
              aria-label="Contact"
            >
              @
            </Link>
            <a
              className={styles.iconLink}
              href="https://github.com/timzw961"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              g
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
