import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { products } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Not found",
    };
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = getProduct(slug);
  if (!product) return notFound();

  return (
    <Container>
      <div className={styles.wrap}>
        <Link className={styles.back} href="/#work">
          <span aria-hidden="true">←</span> All work
        </Link>

        <p className={styles.eyebrow}>
          {product.role} · {product.period}
        </p>
        <h1 className={styles.h1}>{product.name}</h1>
        <p className={styles.lede}>{product.summary}</p>

        <ul className={styles.tags}>
          {product.tags.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>

        <h2 className={styles.workHeading}>Key work</h2>

        <ol className={styles.work}>
          {product.work.map((item) => (
            <li key={item.title} className={styles.workItem}>
              <h3 className={styles.workTitle}>{item.title}</h3>
              <p className={styles.workSummary}>{item.summary}</p>
              <ul className={styles.list}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {product.note ? <p className={styles.note}>{product.note}</p> : null}
      </div>
    </Container>
  );
}
