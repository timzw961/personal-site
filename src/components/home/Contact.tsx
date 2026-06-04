import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.contactInner}>
      <h2 className={styles.contactHeading}>
        Let&rsquo;s build something good.
      </h2>
      <p className={styles.contactText}>
        I&rsquo;m open to mid-level to senior frontend roles and select contract
        work. The best way to reach me is email &ndash; I reply within a day or
        two.
      </p>

      <a
        href="mailto:timothy.zehao.wang@gmail.com"
        className={styles.contactEmail}
      >
        timothy.zehao.wang@gmail.com
      </a>
    </div>
  );
}
