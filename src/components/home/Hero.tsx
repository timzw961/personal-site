import Link from "next/link";
import styles from "./Hero.module.css";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Reveal className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Senior Frontend Engineer</p>

          <h1 className={styles.heroTitle}>Timothy Wang</h1>

          <div className={styles.heroBody}>
            <div className={styles.heroMain}>
              <p className={styles.heroLede}>
                I build high-traffic, accessible web applications in React and
                TypeScript &mdash; shipping production features across booking
                and financial services platforms, with a focus on automated
                testing, WCAG compliance, and the systems that keep frontends
                healthy as they scale.
              </p>

              <div className={styles.heroCtas}>
                <Link className={styles.btnPrimary} href="/#work">
                  See my work
                </Link>
                <a
                  className={styles.btnGhost}
                  href="mailto:timothy.zehao.wang@gmail.com"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <dl className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <dt>Based in</dt>
                <dd>Sydney, AU</dd>
              </div>
              <div className={styles.heroMetaItem}>
                <dt>Open to</dt>
                <dd>Remote &middot; Hybrid</dd>
              </div>
              <div className={styles.heroMetaItem}>
                <dt>Focus</dt>
                <dd>Frontend &middot; Testing &middot; A11y</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
