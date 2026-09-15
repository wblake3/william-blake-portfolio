export const site = {
  name: "William Blake",
  title: "Software Engineer",
  location: "Auckland, New Zealand",
  email: "william.blake021@gmail.com",
  linkedin: "https://linkedin.com/in/william-blake-88735936b",
  github: "https://github.com/wblake3/william-blake-portfolio",
  hero: {
    eyebrow: "Software Engineer · Auckland",
    headline: "William Blake",
    lede: "Product-minded engineer shipping production systems that specialists and businesses depend on every day — strongest across TypeScript, React, APIs and Python.",
    primaryCta: { label: "View work", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  about: {
    eyebrow: "About",
    title: "Build it, ship it, stay with it.",
    body: [
      "I have commercial experience shipping production software in healthcare and energy — two messy, high-stakes domains where the software has to be correct. Comfortable building features from the ground up, owning them through go-live, and becoming useful in a complex domain quickly.",
      "I use AI tools well (Cursor, Claude, Copilot), then review the result. Based in Auckland and looking for an office-first team doing hard product work.",
    ],
    education: {
      qualification: "Bachelor of Computer and Information Sciences",
      school: "Auckland University of Technology",
      years: "2023 — 2026",
      notes: [
        "Software engineering across TypeScript, Python, Java and SQL — building working systems, not just completing labs.",
        "Full-stack React/TypeScript apps, REST APIs and an OpenAI-powered product; Git, testing, review and shipping to real users.",
        "Member of the AUT Computer Science & Engineering Association; Agile-style team delivery across design, build, review and test.",
      ],
    },
    interests: [
      "SaaS & APIs",
      "Hard product problems",
      "Complex domains",
      "Production reliability",
      "AI-assisted engineering",
    ],
  },
  experience: [
    {
      role: "R&D Lead Engineer (Contract)",
      org: "Health New Zealand / Te Whatu Ora",
      dates: "2025 — 2026",
      summary:
        "Designed, built and delivered production software clinicians used daily — from the screens they touch through to APIs and PostgreSQL.",
      points: [
        "Owned work through requirements, implementation, testing, go-live and support, rather than treating ship as the end.",
        "Learned a dense clinical domain fast enough to ship tools people could trust; sat with non-technical users and iterated on awkward flows.",
        "Collaborated through design conversations, reviews and documentation; used Cursor and Claude daily with judgement about where AI helps and where it needs a human.",
      ],
    },
    {
      role: "Digital Systems Engineer",
      org: "Top Energy Ltd",
      dates: "2025 — 2026",
      summary:
        "Built cloud data and ML workflows on Azure against real infrastructure — including a production fault-detection model on pole imagery.",
      points: [
        "Shipped a pole-imagery fault-detection model at 95% accuracy and recall, replacing days of manual work.",
        "Delivered integrations across SharePoint, Entra and FME that had to keep working when source systems were messy.",
        "Led practical Copilot adoption: used AI to move faster, reviewed generated code before it shipped, and shared that judgement with the team.",
      ],
    },
  ],
  projects: [
    {
      name: "ISNCSCI Assessment Tool",
      year: "2025",
      status: "Production",
      description:
        "React/TypeScript web app for neurological classification of spinal cord injuries, deployed at a major NZ hospital. Assessment views, draft/status workflows and reusable hooks in a high-stakes clinical setting — software that had to be correct when a clinician was with a patient, not only in a demo.",
      stack: ["Next.js", "React", "TypeScript", "Supabase"],
      href: undefined,
    },
    {
      name: "Online Pub Quiz",
      year: "2024",
      status: "Shipped",
      description:
        "Full-stack app integrating OpenAI’s API for live question generation, with scoring, persistence and multi-user flows. End-to-end ownership across frontend, API orchestration, Postgres and deployment — making an AI-backed product usable rather than leaving it as a prototype.",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "OpenAI API"],
      href: undefined,
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "HTML",
        "CSS",
        "Bash",
      ],
    },
    {
      label: "Frameworks & tools",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "REST APIs",
        "PostgreSQL",
        "Git",
        "Azure",
        "Cursor",
        "Copilot",
      ],
    },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
