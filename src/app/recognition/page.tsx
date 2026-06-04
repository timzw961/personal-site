import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { RecognitionCard } from "@/components/RecognitionCard";
import { recognitionsByDate } from "@/lib/recognition";

export const metadata = {
  title: "Recognition",
  description:
    "Formal ThankQ recognition received from colleagues across Qantas.",
};

export default function RecognitionPage() {
  return (
    <Container>
      <div className={styles.wrap}>
        <Link className={styles.back} href="/#recognition">
          <span aria-hidden="true">←</span> Back home
        </Link>

        <p className={styles.eyebrow}>Recognition</p>
        <h1 className={styles.h1}>ThankQ recognition</h1>
        <p className={styles.intro}>
          Formal recognition from colleagues across Qantas &mdash; Hotels,
          Qantas Money, Core Platforms, Loyalty, and Group Cyber &mdash; posted
          on the internal ThankQ platform during my time there.
        </p>

        <ul className={styles.grid}>
          {recognitionsByDate.map((r, i) => (
            <RecognitionCard key={i} recognition={r} showDate />
          ))}
        </ul>
      </div>
    </Container>
  );
}
