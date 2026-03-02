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

          <nav className={styles.nav} aria-label="Primary">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
