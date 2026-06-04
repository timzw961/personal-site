import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { products } from "@/lib/projects";

export const metadata = {
  title: "Work",
};

export default function ProjectsPage() {
  return (
    <Container>
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>Work</p>
        <h1 className={styles.h1}>Products I&rsquo;ve worked on</h1>
        <p className={styles.intro}>
          The products I&rsquo;ve helped build - open one to see the key work
          behind it.
        </p>

        <ol className={styles.list}>
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className={styles.card}>
                <div className={styles.body}>
                  <h2 className={styles.title}>{p.name}</h2>
                  <p className={styles.summary}>{p.summary}</p>
                  <ul className={styles.tags}>
                    {p.tags.map((t) => (
                      <li key={t} className={styles.tag}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className={styles.cta}>Read more</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
