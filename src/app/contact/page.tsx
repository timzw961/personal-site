import styles from "./page.module.css";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container>
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.h1}>Let&rsquo;s talk.</h1>
        <p className={styles.lede}>
          Email is the most reliable way to reach me. I reply within a day
          or two.
        </p>

        <a
          href="mailto:timothy.zehao.wang@gmail.com"
          className={styles.primaryLink}
        >
          timothy.zehao.wang@gmail.com
        </a>

        <dl className={styles.list}>
          <div className={styles.row}>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/timothy-w"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/timothy-w
              </a>
            </dd>
          </div>

          <div className={styles.row}>
            <dt>GitHub</dt>
            <dd>
              <a
                href="https://github.com/timzw961"
                target="_blank"
                rel="noreferrer"
              >
                github.com/timzw961
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
