import Link from "next/link";
import styles from "./Recognition.module.css";
import { featuredRecognitions } from "@/lib/recognition";
import { RecognitionCard } from "@/components/RecognitionCard";

export function Recognition() {
  return (
    <div>
      <p className={styles.intro}>
        Formal recognition from colleagues across Qantas, posted on the internal
        ThankQ platform during my time there.
      </p>

      <ul className={styles.grid}>
        {featuredRecognitions.map((r, i) => (
          <RecognitionCard key={i} recognition={r} />
        ))}
      </ul>

      <Link href="/recognition" className={styles.viewAll}>
        See more recognition
        <span className={styles.viewAllArrow} aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
}
