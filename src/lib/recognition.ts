export type Recognition = {
  quote: string;
  author: string;
  team: string;
  date: string;
  featured?: boolean;
};

export const recognitions: Recognition[] = [
  // ---- Featured (homepage) ----
  {
    quote:
      "You've done so much to improve our E2E confidence and reduce flakiness, helping us move faster with greater trust in releases. Not just shipping features, but improving the foundations of the product — this is the kind of engineering work that raises standards for the team.",
    author: "Shubham S.",
    team: "Qantas Hotels",
    date: "Mar 2026",
    featured: true,
  },
  {
    quote:
      "You've shown everyone the standard of how a dev should be — curious, willing to get to the bottom of things, and documenting as you go. You communicate well and know how to navigate different roles and characters. It was such a pleasure to work with you.",
    author: "Chanda E.",
    team: "Qantas Hotels",
    date: "Mar 2026",
    featured: true,
  },
  {
    quote:
      "Since joining the Concierge team you've gone above and beyond. Your ability to deep-dive into problems, progress older tickets, and suggest process improvements has been outstanding.",
    author: "Katherine L.",
    team: "Qantas Hotels",
    date: "Jul 2025",
    featured: true,
  },
  {
    quote:
      "ThankQ to Tim for his work in the QPay squad. He got up to speed quickly and contributed 17 story points in a sprint — more than expected — while maintaining great attention to detail.",
    author: "Adam F.",
    team: "Qantas Money",
    date: "Nov 2024",
    featured: true,
  },
  {
    quote:
      "Amazing work in the analytics space of our codebase. We're all very impressed with your dedication and attention to detail, and how focused you are on your career and development. A pleasure working with you.",
    author: "Bhuvan M.",
    team: "Qantas Money",
    date: "Nov 2024",
    featured: true,
  },
  {
    quote:
      "A massive shout-out for an exceptional performance during your grad rotation with the Loyalty Tech Enablement team. Your growth mindset and commitment to excellence were evident in every project you undertook.",
    author: "Sanjeev S.",
    team: "Loyalty Tech Enablement",
    date: "Sep 2024",
    featured: true,
  },

  {
    quote:
      "Outstanding work on our E2E tests. Your dedication has been a game-changer, resulting in a significant and noticeable improvement in our overall E2E test health and reliability. It's greatly appreciated by the whole team.",
    author: "Shubham S.",
    team: "Qantas Hotels",
    date: "Oct 2025",
  },
  {
    quote:
      "Thanks for all your hard work over the last year. You've shown enthusiasm and a willingness to learn and improve the Hotels websites. You definitely have a bright future ahead of you!",
    author: "Paul C.",
    team: "Qantas Hotels",
    date: "Mar 2026",
  },
  {
    quote:
      "Even though you're earlier in your career, I've always seen you as someone incredibly active and always willing to help out — that doesn't go unnoticed. Thank you for everything you did to keep things running smoothly. You're gonna kill it!",
    author: "Marta S.",
    team: "Qantas Hotels",
    date: "Mar 2026",
  },
  {
    quote:
      "I'm really going to miss working with you, and appreciate all the support and learning you've shared. You've contributed so much to the team and we'll be left with a huge hole when you're gone. I wish you all the success in the future.",
    author: "Annette D.",
    team: "Qantas Hotels",
    date: "Mar 2026",
  },
  {
    quote:
      "I can't express my disappointment that you're leaving. You've always gone above and beyond, helping the team solve any issues and working collaboratively. It's a huge loss to Qantas, but wherever you go you'll do well.",
    author: "Katherine L.",
    team: "Qantas Hotels",
    date: "Mar 2026",
  },
  {
    quote:
      "Thanks for your collaboration on the implementation of QPay analytics. I've learned a lot in the process and appreciate the support and guidance along the way.",
    author: "Marco P.",
    team: "Qantas Money",
    date: "Dec 2024",
  },
  {
    quote:
      "Thank you for the amazing energy you've brought to the team. Your proactive attitude, confidence, and positive personality have truly stood out. Excited to see all that you'll accomplish!",
    author: "Shalini A.",
    team: "Qantas Money",
    date: "Sep 2024",
  },
  {
    quote:
      "Thank you for all the hard work, dedication, and positive energy you've brought to the team. It's been a pleasure working with you, and your contributions have made a significant impact.",
    author: "Nausheen A.",
    team: "Loyalty Tech Enablement",
    date: "Oct 2024",
  },
  {
    quote:
      "Great work! I'm sure you learned a lot from the Core Platforms team and enjoyed your time with us. I'm confident you'll excel in your next rotation and continue to grow. All the very best!",
    author: "Infant S.",
    team: "Loyalty Tech Enablement",
    date: "Sep 2024",
  },
  {
    quote:
      "A massive shout-out for completing your first Discovery independently with Core Platforms. I'd especially commend your attention to detail — you displayed the competency of a seasoned TEM.",
    author: "Sanjeev S.",
    team: "Loyalty Tech Enablement",
    date: "Jul 2024",
  },
  {
    quote:
      "I express my sincere gratitude for your contributions and dedication to the Technology Enablement function. Your expertise has been instrumental in our success, and I've learned a great deal from you.",
    author: "Narayanan D.",
    team: "Loyalty Tech Enablement",
    date: "Aug 2024",
  },
  {
    quote:
      "ThankQ for your efforts to introduce a duplication check into the Travel Insurance Pay with Points process. This is a key step in enabling us to resume selling policies with points, and it mitigates a number of risks. Well done!",
    author: "Luke P.",
    team: "Qantas Loyalty",
    date: "May 2024",
  },
  {
    quote:
      "Thank you for being a valuable member of the Cyber Automation team. You were only with us a few months but already achieved a lot despite tight timelines — including the SharePoint site and running the daily stand-up. Happy coding!",
    author: "Joanne L.",
    team: "Group Cyber Automation",
    date: "Dec 2023",
  },
  {
    quote:
      "Thank you for playing an important role in the new UAM platform build. Fantastic work on the FAQ and comms pack for all kinds of audiences, which helped a lot with onboarding and adoption. Your great work will be truly missed.",
    author: "Joanne L.",
    team: "Group Cyber Automation",
    date: "Feb 2024",
  },
  {
    quote:
      "A big thanks for your notable contribution to the Group Cyber team during your graduate rotation. You hit the ground running, quickly embedding in the Automation and broader ARC team, and went beyond your role to volunteer on other initiatives.",
    author: "Sarah P.",
    team: "Group Cyber",
    date: "Mar 2024",
  },
  {
    quote:
      "Thank you for being such an extraordinary team member. Your zeal towards work is highly commendable. Keep up the good work!",
    author: "Zeenat A.",
    team: "Group Cyber Automation",
    date: "Mar 2024",
  },
];

export const featuredRecognitions = recognitions.filter((r) => r.featured);

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function dateValue(date: string): number {
  const [month, year] = date.split(" ");
  const m = MONTHS.indexOf(month);
  return Number(year) * 12 + (m === -1 ? 0 : m);
}

// Newest first.
export const recognitionsByDate = [...recognitions].sort(
  (a, b) => dateValue(b.date) - dateValue(a.date),
);
