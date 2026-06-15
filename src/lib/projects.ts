export type WorkItem = {
  title: string;
  summary: string;
  bullets: string[];
};

export type Product = {
  slug: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  /** Hero image path (e.g. "/work/qantas-hotels.jpg"). Falls back to a placeholder when unset. */
  image?: string;
  imageAlt?: string;
  /** Small caption shown beneath the image (e.g. a mockup disclaimer). */
  imageNote?: string;
  /** External link (e.g. a GitHub repo). When set, the card opens this instead of a detail page. */
  href?: string;
  /** Marks the project as in progress (shown as a label, no link). */
  wip?: boolean;
  work: WorkItem[];
  note?: string;
};

export const products: Product[] = [
  {
    slug: "qantas-hotels",
    name: "Qantas Hotels",
    role: "Senior Frontend Engineer",
    period: "2025 – 2026",
    summary:
      "A high-traffic hotel booking platform. I shipped production features in React and TypeScript, and owned the testing, accessibility, and experimentation systems behind critical booking flows.",
    tags: ["React", "TypeScript", "Cypress", "Accessibility"],
    image: "/work/qantas-hotels.png",
    imageAlt: "Qantas Hotels hotel booking page",
    work: [
      {
        title: "CI & E2E test speedup",
        summary:
          "Redesigned the Cypress end-to-end architecture to cut CI execution time by 75% (40m → <10m) while improving reliability across critical booking flows.",
        bullets: [
          "Audited the E2E suite and CI pipeline to find bottlenecks and flaky specs.",
          "Reworked test setup and shared fixtures to remove duplicated work across specs.",
          "Improved pipeline ergonomics with clearer failures and faster feedback.",
        ],
      },
      {
        title: "Accessibility shift-left",
        summary:
          "Built a multi-layer accessibility testing strategy that achieved and sustained WCAG 2.1 AA compliance with zero production regressions.",
        bullets: [
          "Layered automated a11y checks across local dev and CI (axe-core, eslint-plugin-jsx-a11y, jest-axe, Pa11y-CI).",
          "Added CI gates to stop accessibility regressions reaching production.",
          "Made accessibility checks part of the normal developer workflow.",
        ],
      },
      {
        title: "AI-assisted test migration",
        summary:
          "Led an AI-assisted workflow that delivered 250 of 500 Enzyme → React Testing Library migrations, improving speed and consistency.",
        bullets: [
          "Used AI coding tools (Gemini) to accelerate test generation, migration, and debugging.",
          "Established repeatable patterns so migrated specs stayed consistent.",
          "Reviewed and hardened AI-generated tests to keep coverage meaningful.",
        ],
      },
      {
        title: "Feature-flag targeting system",
        summary:
          "Built a feature flag-driven targeting system for dynamic UI rendering based on geographic and contextual data, supporting scalable experimentation.",
        bullets: [
          "Designed targeting rules that render UI dynamically from geographic and contextual data.",
          "Wired the system into existing booking flows without disrupting reliability.",
          "Made experimentation and personalisation safe to scale across teams.",
        ],
      },
    ],
    note: "Some details have been generalised to respect confidentiality.",
  },
  {
    slug: "qantas-pay",
    name: "Qantas Pay",
    role: "Frontend Engineer",
    period: "2023 – 2025",
    summary:
      "The payments experience within Qantas Money. I built Next.js features across key customer payment flows and improved cross-platform analytics and reliability.",
    tags: ["Next.js", "TypeScript", "GA4", "Payments"],
    image: "/work/qantas-pay.png",
    imageAlt: "Qantas Pay landing page",
    work: [
      {
        title: "Payment flow features",
        summary:
          "Delivered Next.js features across key Qantas Money (QPay) payment flows, improving reliability for customers.",
        bullets: [
          "Built customer-facing payment features in Next.js and TypeScript.",
          "Integrated with API-driven services to support reliable end-to-end journeys.",
          "Collaborated across product and platform teams to ship safely.",
        ],
      },
      {
        title: "GA4 analytics instrumentation",
        summary:
          "Implemented GA4 analytics instrumentation in partnership with Data & Analytics, iOS, Android, and Product teams.",
        bullets: [
          "Instrumented GA4 events across QPay customer journeys.",
          "Partnered cross-platform to align tracking on web, iOS, and Android.",
          "Improved cross-platform visibility into how customers use QPay.",
        ],
      },
    ],
  },
];

export const sideProjects: Product[] = [
  {
    slug: "rally-reserve",
    name: "Rally Reserve",
    role: "Side project",
    period: "2024",
    summary:
      "Multi-tenant court-booking platform with per-venue timezones, loyalty rewards, recurring bookings, and concurrency-safe reservations – backed by 300+ unit tests and a Playwright E2E suite.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Auth.js (OAuth + magic-link)",
      "Zod",
      "Jest + RTL",
      "Playwright",
    ],
    image: "/work/rally-reserve.png",
    imageAlt: "Rally Reserve court-booking platform",
    imageNote: "Mockup – not a real tennis venue or location.",
    href: "https://rally-reserve-bice.vercel.app/prestons-tennis-centre",
    work: [],
  },
  {
    slug: "automating-job-search",
    name: "Automating Job Search",
    role: "Side project",
    period: "2024",
    summary:
      "A local job-search tool that scrapes boards and scores roles against my stack – with no LLM API or per-call cost.",
    tags: ["Python", "Web Scraping", "python-docx", "pandas", "Automation"],
    image: "/work/automating-job-search.png",
    imageAlt: "Automating Job Search tool",
    href: "https://github.com/timzw961/automated-job-search",
    work: [],
  },
];
