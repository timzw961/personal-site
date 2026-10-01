import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ProjectList.module.css";
import type { Project } from "@/lib/projects";

function ctaLabel(href: string) {
  return href.includes("github.com") ? "View on GitHub" : "View project";
}

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ol className={styles.projectList}>
      {items.map((project) => {
        const hasDetail = project.highlights.length > 0;

        const footer = project.href ? (
          <span className={styles.projectCta}>
            {ctaLabel(project.href)}
            <span className={styles.projectCtaArrow} aria-hidden="true">
              →
            </span>
          </span>
        ) : hasDetail ? (
          <span className={styles.projectCta}>
            Read more
            <span className={styles.projectCtaArrow} aria-hidden="true">
              →
            </span>
          </span>
        ) : null;

        const content = (
          <>
            <div className={styles.projectMeta}>
              <h3 className={styles.projectTitle}>{project.name}</h3>

              <p className={styles.projectSummary}>{project.summary}</p>

              <ul className={styles.projectTags}>
                {project.tags.map((t) => (
                  <li key={t} className={styles.projectTag}>
                    {t}
                  </li>
                ))}
              </ul>

              {footer ? (
                <div className={styles.projectFooter}>{footer}</div>
              ) : null}
            </div>

            <figure className={styles.projectThumb}>
              <div className={styles.projectThumbInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.projectThumbImg}
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                />
              </div>
              {project.imageNote ? (
                <figcaption className={styles.projectThumbNote}>
                  {project.imageNote}
                </figcaption>
              ) : null}
            </figure>
          </>
        );

        let card: ReactNode;
        if (project.href) {
          card = (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={styles.projectCard}
            >
              {content}
            </a>
          );
        } else if (hasDetail) {
          card = (
            <Link
              href={`/work/${project.slug}`}
              className={styles.projectCard}
            >
              {content}
            </Link>
          );
        } else {
          card = <div className={styles.projectCard}>{content}</div>;
        }

        return (
          <li key={project.slug} className={styles.projectItem}>
            {card}
          </li>
        );
      })}
    </ol>
  );
}
