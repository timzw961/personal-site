import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/projects";

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SASS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Redux", "Design systems"],
  },
  {
    label: "Web architecture",
    items: ["SSR / SSG", "BFF", "Node.js", "GraphQL / REST", "Feature flags"],
  },
  {
    label: "Accessibility",
    items: ["WCAG 2.1 AA", "ARIA", "Semantic HTML", "axe-core / Pa11y"],
  },
  {
    label: "Testing & quality",
    items: ["Cypress", "Jest", "React Testing Library", "TDD"],
  },
  {
    label: "AI tooling",
    items: ["Claude", "Gemini", "OpenAI Codex"],
  },
  {
    label: "DevOps",
    items: ["Buildkite", "CI/CD", "Git", "Agile / Lean"],
  },
  {
    label: "Platforms",
    items: ["Splunk", "Postman", "Contentful", "Storybook", "Optimizely"],
  },
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span className={styles.sectionIndex}>{index}</span>
      <span className={styles.sectionText}>{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Container>
          <Reveal className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Senior Frontend Engineer</p>

            <h1 className={styles.heroTitle}>Timothy Wang</h1>

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
          </Reveal>
        </Container>
      </section>

      {/* WORK */}
      <section id="work" className={styles.section}>
        <Container>
          <Reveal>
          <SectionLabel index="01" label="Work" />

          <ol className={styles.workList}>
            {products.map((product, i) => (
              <li key={product.slug} className={styles.workItem}>
                <Link
                  href={`/projects/${product.slug}`}
                  className={styles.workCard}
                >
                  <div className={styles.workMeta}>
                    <span className={styles.workIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                      <span className={styles.workIndexTotal}>
                        / {String(products.length).padStart(2, "0")}
                      </span>
                    </span>

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
                      <span className={styles.workPeriod}>{product.period}</span>
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
                      <span
                        className={styles.workThumbPlaceholder}
                        aria-hidden="true"
                      >
                        Image
                      </span>
                    )}
                    <span className={styles.workThumbTick} aria-hidden="true" />
                  </figure>
                </Link>
              </li>
            ))}
          </ol>
          </Reveal>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className={styles.section}>
        <Container>
          <Reveal>
          <SectionLabel index="02" label="Stack & skills" />

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <div key={group.label} className={styles.skillGroup}>
                <h4 className={styles.skillGroupTitle}>{group.label}</h4>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.skillItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <Container>
          <Reveal>
          <SectionLabel index="03" label="Get in touch" />

          <div className={styles.contactInner}>
            <h2 className={styles.contactHeading}>
              Let&rsquo;s build something good.
            </h2>
            <p className={styles.contactLede}>
              I&rsquo;m open to senior frontend roles and select contract
              work. The best way to reach me is email &mdash; I reply within a
              day or two.
            </p>

            <a
              href="mailto:timothy.zehao.wang@gmail.com"
              className={styles.contactEmail}
            >
              timothy.zehao.wang@gmail.com
            </a>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
