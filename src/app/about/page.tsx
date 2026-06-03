import styles from "./page.module.css";
import { Container } from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container>
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.h1}>
          Senior frontend engineer with a quality habit.
        </h1>

        <div className={styles.prose}>
          <p>
            I&rsquo;m a frontend engineer based in Sydney with two years
            building high-traffic, accessible web applications in React and
            TypeScript. I&rsquo;ve shipped production features across complex
            booking and financial services platforms, contributed to design
            systems, and leaned on AI tooling to accelerate delivery.
          </p>
          <p>
            Most recently I was a Senior Frontend Engineer at Qantas Hotels,
            where my role was eliminated in a March 2026 restructure. I care
            about the systems that keep a frontend healthy - automated
            testing, WCAG 2.1 AA accessibility, and fast CI feedback loops.
          </p>
          <p>
            I started at Qantas on the graduate program, rotating through
            frontend engineering, core platforms, and cyber automation before
            specialising in frontend. I work closely across design, product,
            and platform teams, and I&rsquo;m happiest in the messy middle
            where testing, tooling, and quality decide whether a frontend
            ages well.
          </p>
        </div>

        <div className={styles.columns}>
          <section className={styles.col}>
            <h2 className={styles.h2}>What I&rsquo;m good at</h2>
            <ul className={styles.list}>
              <li>React &amp; TypeScript product engineering</li>
              <li>Accessibility-first UI engineering (WCAG 2.1 AA)</li>
              <li>E2E testing architecture and CI improvements</li>
              <li>AI-assisted delivery and test scaffolding</li>
            </ul>
          </section>

          <section className={styles.col}>
            <h2 className={styles.h2}>What I care about</h2>
            <ul className={styles.list}>
              <li>Shipping value with high standards</li>
              <li>Clear communication across functions</li>
              <li>Systems that scale with teams</li>
              <li>Tools that respect the user&rsquo;s time</li>
            </ul>
          </section>
        </div>

        <section className={styles.block}>
          <h2 className={styles.h2}>Education</h2>
          <div className={styles.entryHead}>
            <span className={styles.entryRole}>
              Bachelor of Computer Science (Software Engineering) · University
              of Wollongong
            </span>
            <span className={styles.entryPeriod}>2019 – 2022</span>
          </div>
          <p className={styles.eduNote}>
            High Distinction Average · Dean&rsquo;s Merit List (2020–2022)
          </p>
        </section>
      </div>
    </Container>
  );
}
