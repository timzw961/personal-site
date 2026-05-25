import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "./Container";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark}>⬡</span> Timothy.dev
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
