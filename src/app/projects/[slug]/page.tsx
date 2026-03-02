import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Container>
      <Link className={styles.back} href="/projects">
        ← Back to projects
      </Link>

      <h1 className={styles.h1}>{project.title}</h1>
      <p className={styles.p}>{project.summary}</p>

      {project.sections.map((section) => (
        <div key={section.title} className={styles.section}>
          <h2 className={styles.h2}>{section.title}</h2>

          {section.bullets?.length ? (
            <ul className={styles.list}>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}

          {section.note ? <p className={styles.note}>{section.note}</p> : null}
        </div>
      ))}
    </Container>
  );
}
