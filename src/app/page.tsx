import Link from "next/link";
import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { HeroStars } from "@/components/HeroStars";
import { projects } from "@/lib/projects";

const projectAccents = [
  {
    bg: "#04050f",
    glow: "#4a90ff",
    planet:
      "radial-gradient(circle at 35% 35%, #7ab8ff, #1a5daa, #04214a)",
    tagBg: "rgba(74, 144, 255, 0.12)",
    tagFg: "rgba(120, 180, 255, 0.85)",
    tagBorder: "rgba(74, 144, 255, 0.25)",
    delay: "0s",
  },
  {
    bg: "#080510",
    glow: "#c27a3a",
    planet:
      "radial-gradient(circle at 40% 35%, #e8b87c, #c27a3a, #6b3a1a)",
    tagBg: "rgba(200, 120, 50, 0.12)",
    tagFg: "rgba(230, 160, 80, 0.85)",
    tagBorder: "rgba(200, 120, 50, 0.25)",
    delay: "1.3s",
  },
  {
    bg: "#030a05",
    glow: "#4a9a6a",
    planet:
      "radial-gradient(circle at 38% 33%, #a8e8a8, #4a9a6a, #1a4a2a)",
    tagBg: "rgba(74, 180, 100, 0.12)",
    tagFg: "rgba(120, 220, 140, 0.85)",
    tagBorder: "rgba(74, 180, 100, 0.25)",
    delay: "2.5s",
  },
];

const skills = [
  { label: "React", color: "#7ab8ff", duration: "2.1s" },
  { label: "TypeScript", color: "#bd93f9", duration: "3.4s" },
  { label: "Next.js", color: "#50fa7b", duration: "1.8s" },
  { label: "CSS / Tailwind", color: "#ffb86c", duration: "2.7s" },
  { label: "Cypress", color: "#8be9fd", duration: "2.3s" },
  { label: "CI / Buildkite", color: "#f1fa8c", duration: "1.6s" },
  { label: "Accessibility", color: "#a8e8a8", duration: "3.7s" },
  { label: "Performance", color: "#ff5555", duration: "2.9s" },
  { label: "Testing strategy", color: "#ff79c6", duration: "3.1s" },
  { label: "Node.js", color: "#c27a3a", duration: "2.4s" },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <HeroStars
          count={60}
          className={styles.heroStars}
          starClassName={styles.hstar}
        />

        <Container>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                {"// Transmission incoming"}
              </div>
              <h1 className={styles.heroName}>Timothy Wang</h1>
              <p className={styles.heroTitle}>
                Senior Frontend Engineer · Sydney
              </p>
              <div className={styles.heroBtns}>
                <Link className={styles.heroBtn} href="/#work">
                  View Work
                </Link>
                <Link
                  className={`${styles.heroBtn} ${styles.heroBtnGhost}`}
                  href="/#contact"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className={styles.solarSystem} aria-hidden="true">
              <div
                className={styles.orbitRing}
                style={{ width: 80, height: 80 }}
              />
              <div
                className={styles.orbitRing}
                style={{ width: 130, height: 130 }}
              />
              <div
                className={styles.orbitRing}
                style={{ width: 190, height: 190 }}
              />
              <div className={styles.sun} />
              <div
                className={styles.planetWrapper}
                style={
                  {
                    width: 80,
                    height: 80,
                    "--spd": "5s",
                  } as React.CSSProperties
                }
              >
                <div
                  className={styles.planet}
                  style={{
                    width: 10,
                    height: 10,
                    background:
                      "radial-gradient(circle, #9ecfff, #4a90c4)",
                  }}
                />
              </div>
              <div
                className={styles.planetWrapper}
                style={
                  {
                    width: 130,
                    height: 130,
                    "--spd": "9s",
                  } as React.CSSProperties
                }
              >
                <div
                  className={styles.planet}
                  style={{
                    width: 14,
                    height: 14,
                    background:
                      "radial-gradient(circle, #e8a87c, #c27a3a)",
                  }}
                />
              </div>
              <div
                className={styles.planetWrapper}
                style={
                  {
                    width: 190,
                    height: 190,
                    "--spd": "15s",
                  } as React.CSSProperties
                }
              >
                <div
                  className={styles.planet}
                  style={{
                    width: 18,
                    height: 18,
                    background:
                      "radial-gradient(circle, #a8d8a8, #4a8a6a)",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className={styles.section}>
        <Container>
          <div className={styles.sectionLabel}>{"// Sector 01 — About"}</div>
          <div className={styles.aboutGrid}>
            <div
              className={styles.aboutCard}
              style={
                { "--ac": "rgba(100,180,255,0.5)" } as React.CSSProperties
              }
            >
              <div className={styles.aboutIcon}>🛰️</div>
              <div className={styles.aboutTitle}>Mission</div>
              <div className={styles.aboutBody}>
                Building fast, accessible, delightful interfaces that connect
                people to what matters.
              </div>
            </div>
            <div
              className={styles.aboutCard}
              style={
                { "--ac": "rgba(180,100,255,0.5)" } as React.CSSProperties
              }
            >
              <div className={styles.aboutIcon}>🪐</div>
              <div className={styles.aboutTitle}>Base of Operations</div>
              <div className={styles.aboutBody}>
                Sydney, Australia. Open to remote missions across any timezone.
              </div>
            </div>
            <div
              className={styles.aboutCard}
              style={
                { "--ac": "rgba(255,180,60,0.5)" } as React.CSSProperties
              }
            >
              <div className={styles.aboutIcon}>⭐</div>
              <div className={styles.aboutTitle}>Experience</div>
              <div className={styles.aboutBody}>
                Years of production frontend at startups and scale-ups —
                accessibility, testing, and CI as first-class concerns.
              </div>
            </div>
            <div
              className={styles.aboutCard}
              style={
                { "--ac": "rgba(100,255,180,0.5)" } as React.CSSProperties
              }
            >
              <div className={styles.aboutIcon}>🔭</div>
              <div className={styles.aboutTitle}>Currently Exploring</div>
              <div className={styles.aboutBody}>
                Motion design, WebGL shaders, and AI-assisted UI generation.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="work" className={styles.section}>
        <Container>
          <div className={styles.sectionLabel}>{"// Sector 02 — Projects"}</div>
          <div className={styles.workGrid}>
            {projects.map((project, i) => {
              const accent = projectAccents[i % projectAccents.length];
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={styles.workCard}
                >
                  <div
                    className={styles.workHeader}
                    style={{ background: accent.bg }}
                  >
                    <div
                      className={styles.planetGlow}
                      style={{ background: accent.glow }}
                    />
                    <div
                      className={styles.planetVis}
                      style={{
                        background: accent.planet,
                        animationDelay: accent.delay,
                      }}
                    />
                  </div>
                  <div className={styles.workBody}>
                    <div className={styles.workTitle}>{project.title}</div>
                    <div className={styles.workDesc}>{project.summary}</div>
                    <div className={styles.workTags}>
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className={styles.workTag}
                          style={{
                            background: accent.tagBg,
                            color: accent.tagFg,
                            border: `1px solid ${accent.tagBorder}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="skills" className={styles.section}>
        <Container>
          <div className={styles.sectionLabel}>
            {"// Sector 03 — Star Cluster · Skills"}
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.label} className={styles.skillStar}>
                <span
                  className={styles.skillDot}
                  style={
                    {
                      background: s.color,
                      animationDuration: s.duration,
                    } as React.CSSProperties
                  }
                />
                {s.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className={styles.section}>
        <Container>
          <div className={styles.sectionLabel}>{"// Sector 04 — Hail Frequency"}</div>
          <div className={styles.contactInner}>
            <div className={styles.contactHeading}>Open for transmissions</div>
            <div className={styles.contactSub}>
              Available for freelance · full-time · collaborations
            </div>
            <div className={styles.contactBtns}>
              <a
                className={`${styles.contactBtn} ${styles.contactBtnPrimary}`}
                href="mailto:timothy.zehao.wang@gmail.com"
              >
                Send a signal
              </a>
              <a
                className={`${styles.contactBtn} ${styles.contactBtnSecondary}`}
                href="https://github.com/timzw961"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className={`${styles.contactBtn} ${styles.contactBtnSecondary}`}
                href="https://www.linkedin.com/in/timothy-w-8bbb521b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
