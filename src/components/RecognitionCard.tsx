import styles from "./RecognitionCard.module.css";
import type { Recognition } from "@/lib/recognition";

export function RecognitionCard({
  recognition,
  showDate = false,
}: {
  recognition: Recognition;
  showDate?: boolean;
}) {
  const { quote, author, team, date } = recognition;

  return (
    <li className={styles.card}>
      <blockquote className={styles.quote}>{quote}</blockquote>

      <div className={styles.attr}>
        <div className={styles.attrTop}>
          <span className={styles.author}>{author}</span>
          <span className={styles.team}>{team}</span>
        </div>
        {showDate ? <span className={styles.date}>{date}</span> : null}
      </div>
    </li>
  );
}
