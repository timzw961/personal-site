import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Recognition", href: "/#recognition" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/" aria-label="Timothy Wang">
            <span className={styles.brandName}>Timothy Wang</span>
          </Link>

          <div className={styles.right}>
            <nav className={styles.nav} aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
