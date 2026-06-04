import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/home/Section";
import { ProjectList } from "@/components/home/ProjectList";
import { Recognition } from "@/components/home/Recognition";
import { Contact } from "@/components/home/Contact";
import { products, sideProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="work" index="01" label="Work">
        <ProjectList items={products} />
      </Section>

      <Section id="projects" index="02" label="Projects">
        <ProjectList items={sideProjects} />
      </Section>

      <Section id="recognition" index="03" label="Recognition">
        <Recognition />
      </Section>

      <Section id="contact" index="04" label="Get in touch">
        <Contact />
      </Section>
    </>
  );
}
