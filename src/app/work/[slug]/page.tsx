import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { workProjects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return workProjects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <Container>
      <div className={styles.wrap}>
        <Link
          className={styles.back}
          href="/#work"
        >
          <span aria-hidden="true">←</span> All work
        </Link>

        <p className={styles.eyebrow}>{project.role}</p>
        <h1 className={styles.h1}>{project.name}</h1>
        <p className={styles.intro}>{project.summary}</p>

        <ul className={styles.tags}>
          {project.tags.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>

        {project.highlights.length > 0 ? (
          <>
            <h2 className={styles.highlightsHeading}>Key work</h2>

            <ol className={styles.highlights}>
              {project.highlights.map((item) => (
                <li key={item.title} className={styles.highlight}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightSummary}>{item.summary}</p>
                  <ul className={styles.list}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </>
        ) : null}

        {project.note ? <p className={styles.note}>{project.note}</p> : null}
      </div>
    </Container>
  );
}
