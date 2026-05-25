import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container>
      <div className={styles.label}>{"// Sector 02 — Projects"}</div>
      <h1 className={styles.h1}>Projects</h1>
      <p className={styles.p}>
        A few case studies. Short and focused on decisions + impact.
      </p>

      <div className={styles.list}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={styles.item}
          >
            <div className={styles.itemTop}>
              <h2 className={styles.h2}>{p.title}</h2>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className={styles.summary}>{p.summary}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
