export type ProjectSection = {
  title: string;
  bullets?: string[];
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "ci-e2e-speedup",
    title: "CI & E2E speedup",
    summary:
      "Improved developer feedback loops by reducing end-to-end runtime and increasing coverage across critical flows.",
    tags: ["CI", "Cypress", "Buildkite"],
    sections: [
      {
        title: "What I did",
        bullets: [
          "Audited E2E suite + CI pipeline to identify bottlenecks and flaky specs.",
          "Refactored test setup to reduce duplicated work across specs.",
          "Improved pipeline ergonomics (clearer failures, faster feedback).",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Reduced CI execution time significantly (replace with your %).",
          "Improved confidence in critical booking flows.",
          "Reduced flakiness and sped up developer iteration.",
        ],
        note: "Details have been generalised to respect confidentiality.",
      },
    ],
  },
  {
    slug: "accessibility-shift-left",
    title: "Accessibility shift-left strategy",
    summary:
      "Implemented layered accessibility testing across local dev and CI to prevent regressions.",
    tags: ["a11y", "axe-core", "Pa11y"],
    sections: [
      {
        title: "What I did",
        bullets: [
          "Introduced automated a11y checks in local dev + CI.",
          "Integrated linting and component-level checks to catch issues early.",
          "Added CI gates to prevent regressions reaching production.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Raised baseline accessibility quality across teams.",
          "Reduced production accessibility regressions.",
          "Made accessibility checks part of the normal developer workflow.",
        ],
        note: "Details have been generalised to respect confidentiality.",
      },
    ],
  },
];
