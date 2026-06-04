import type { ReactNode } from "react";
import styles from "./Section.module.css";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, index, label, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionIndex}>{index}</span>
            <span className={styles.sectionText}>{label}</span>
          </div>

          {children}
        </Reveal>
      </Container>
    </section>
  );
}
