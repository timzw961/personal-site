import Link from "next/link";
import styles from "./ProjectList.module.css";
import type { Product } from "@/lib/projects";

export function ProjectList({ items }: { items: Product[] }) {
  return (
    <ol className={styles.workList}>
      {items.map((product) => (
        <li key={product.slug} className={styles.workItem}>
          <Link href={`/projects/${product.slug}`} className={styles.workCard}>
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

              <div className={styles.workFooter}>
                <span className={styles.workCta}>
                  Read more
                  <span className={styles.workCtaArrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </div>

            <figure className={styles.workThumb}>
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={styles.workThumbImg}
                  src={product.image}
                  alt={product.imageAlt ?? product.name}
                />
              ) : (
                <span className={styles.workThumbPlaceholder} aria-hidden="true">
                  Image
                </span>
              )}
            </figure>
          </Link>
        </li>
      ))}
    </ol>
  );
}
