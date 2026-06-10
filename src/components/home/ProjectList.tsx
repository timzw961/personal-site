import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ProjectList.module.css";
import type { Product } from "@/lib/projects";

function ctaLabel(href: string) {
  return href.includes("github.com") ? "View on GitHub" : "View project";
}

export function ProjectList({ items }: { items: Product[] }) {
  return (
    <ol className={styles.workList}>
      {items.map((product) => {
        const hasDetail = product.work.length > 0;

        const footer = product.href ? (
          <span className={styles.workCta}>
            {ctaLabel(product.href)}
            <span className={styles.workCtaArrow} aria-hidden="true">
              →
            </span>
          </span>
        ) : hasDetail ? (
          <span className={styles.workCta}>
            Read more
            <span className={styles.workCtaArrow} aria-hidden="true">
              →
            </span>
          </span>
        ) : product.wip ? (
          <span className={styles.workStatus}>Work in progress</span>
        ) : null;

        const content = (
          <>
            <div className={styles.workMeta}>
              <h3 className={styles.workTitle}>{product.name}</h3>

              <p className={styles.workSummary}>{product.summary}</p>

              <ul className={styles.workTags}>
                {product.tags.map((t) => (
                  <li key={t} className={styles.workTag}>
                    {t}
                  </li>
                ))}
              </ul>

              {footer ? (
                <div className={styles.workFooter}>{footer}</div>
              ) : null}
            </div>

            <figure className={styles.workThumb}>
              <div className={styles.workThumbInner}>
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className={styles.workThumbImg}
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                  />
                ) : (
                  <span
                    className={styles.workThumbPlaceholder}
                    aria-hidden="true"
                  >
                    Image
                  </span>
                )}
              </div>
              {product.imageNote ? (
                <figcaption className={styles.workThumbNote}>
                  {product.imageNote}
                </figcaption>
              ) : null}
            </figure>
          </>
        );

        let card: ReactNode;
        if (product.href) {
          card = (
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className={styles.workCard}
            >
              {content}
            </a>
          );
        } else if (hasDetail) {
          card = (
            <Link
              href={`/projects/${product.slug}`}
              className={styles.workCard}
            >
              {content}
            </Link>
          );
        } else {
          card = <div className={styles.workCard}>{content}</div>;
        }

        return (
          <li key={product.slug} className={styles.workItem}>
            {card}
          </li>
        );
      })}
    </ol>
  );
}
