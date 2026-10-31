export const site = {
  name: "William Blake",
  title: "Software Engineer",
  location: "Auckland, New Zealand",
  url: "https://williamblake.dev",
  email: "william.blake021@gmail.com",
  linkedin: "https://linkedin.com/in/william-blake-88735936b",
  githubProfile: "https://github.com/wblake3",
  github: "https://github.com/wblake3/william-blake-portfolio",
  cv: "/William-Blake-CV.pdf",
  hero: {
    eyebrow: "Software Engineer · Dimension Software · Auckland",
    headline: "William Blake",
    lede: "Software Engineer at Dimension Software. Working across SQL, Python, React and TypeScript, building APIs and MCP integrations — shipping production systems people can trust.",
    photo: "/images/william-snow.jpg",
    photoAlt: "William Blake in the mountains",
    primaryCta: { label: "View work", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  about: {
    eyebrow: "About",
    title: "Build it, ship it, stay with it.",
    body: [
      "I have commercial experience shipping production software in healthcare and energy — two messy, high-stakes domains where the software has to be correct. Comfortable building features from the ground up, owning them through go-live, and becoming useful in a complex domain quickly.",
      "I am now a Software Engineer at Dimension Software, where a lot of my work is connecting AI to real systems through MCP (Model Context Protocol) servers. Before that I led a five-person capstone team that shipped a clinical tool for Health New Zealand. I use AI tools well (Cursor, Claude, Copilot), then review the result. Based in Auckland.",
    ],
    interests: [
      "AI integrations",
      "APIs & MCPs",
      "Hard product problems",
      "Complex domains",
      "Production reliability",
    ],
  },
  experience: [
    {
      kind: "work",
      role: "Software Engineer",
      org: "Dimension Software",
      dates: "Sep 2026 — Present",
      summary:
        "Full-stack feature work, plus the MCP servers that let AI tools read from and act on real business systems.",
      points: [
        "Ship features end to end, from the database and back-end services through to the screens people use.",
        "Design and integrate APIs, and build MCP (Model Context Protocol) servers and integrations that let AI tools work with real business systems.",
      ],
    },
    {
      kind: "work",
      role: "R&D Lead Engineer (AUT Capstone)",
      org: "Health New Zealand / Te Whatu Ora · final-year capstone, alongside study",
      dates: "Jul 2025 — Jun 2026",
      image: "/images/health-nz.jpg",
      imageAlt:
        "William Blake with the Health New Zealand spinal cord injury assessment team",
      imagePosition: "center center",
      summary:
        "Led a team of five building the ISNCSCI Assessment Tool, production software clinicians use daily, as my degree's capstone project.",
      points: [
        "Set the technical direction, managed the Supabase PostgreSQL database, and built the clinician dashboard and profile section.",
        "Owned work through requirements, implementation, testing, go-live and support, rather than treating ship as the end.",
        "Learned a dense clinical domain fast enough to ship tools people could trust; sat with non-technical users and iterated on awkward flows.",
        "Collaborated through design conversations, reviews and documentation; used Cursor and Claude daily with judgement about where AI helps and where it needs a human.",
      ],
    },
    {
      kind: "work",
      role: "Digital Systems Engineer (Summer Internship)",
      org: "Top Energy Ltd",
      dates: "Nov 2025 — Feb 2026",
      image: "/images/top-energy.png",
      imageAlt: "Top Energy Outage Centre map of Northland with planned and unplanned outages",
      imagePosition: "center center",
      summary:
        "Built cloud data and ML workflows on Azure against real infrastructure — including a production fault-detection model on pole imagery.",
      points: [
        "Shipped a pole-imagery fault-detection model at 95% accuracy and recall, replacing days of manual work.",
        "Delivered integrations across SharePoint, Entra and FME that had to keep working when source systems were messy.",
        "Led practical Copilot adoption: used AI to move faster, reviewed generated code before it shipped, and shared that judgement with the team.",
      ],
    },
    {
      kind: "education",
      role: "Bachelor of Computer and Information Sciences",
      org: "Auckland University of Technology",
      dates: "Jul 2023 — Jun 2026",
      image: "/images/william-grad.jpg",
      imageAlt:
        "William Blake at graduation holding a Bachelor of Computer and Information Sciences certificate",
      imagePosition: "center center",
      summary:
        "Software engineering across Python, Java, SQL and TypeScript — building working systems, not just completing labs.",
      points: [
        "Advanced courses in AI & ML, Data Science, Project Management and codebases.",
        "Full stack applications including Taxi App, Pub Quiz using OpenAI, Shortest Path Maze Finder and a Digital ISNCSCI web app.",
        "Member of AUT CSEA, AUT Basketball and AUT Gym.",
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
      role: "Team of 5 — I led the team, set the direction, built the dashboard and profile section, and managed the database.",
      href: "https://github.com/Vrishab17/SpinalCordProject",
    },
    {
      name: "Trivia on Tap",
      year: "2024",
      status: "Shipped",
      description:
        "Full-stack pub quiz with OpenAI for live question generation, plus scoring, persistence and multi-user flows. Built to make an AI-backed product usable rather than leaving it as a prototype.",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "OpenAI API"],
      role: "Team of 4 — I designed the frontend, including the dashboard and button interactions.",
      href: "https://github.com/rafaelmarcoo/trivia-on-tap",
    },
  ],
  services: {
    eyebrow: "Freelance",
    title: "Automations and integrations for small businesses.",
    intro:
      "Stuck copying data between Xero, Shopify, spreadsheets and email? I build small, reliable automations that take the manual work off your plate.",
    offers: [
      {
        name: "Workflow automation",
        description:
          "Replace a manual, repetitive task with something that runs on its own: syncing orders, chasing invoices, filing documents, sending reports.",
        examples: ["Xero", "Shopify", "Google Sheets", "Email"],
      },
      {
        name: "Integrations & APIs",
        description:
          "Connect two systems that don't talk to each other, with error handling and alerts so it keeps working when something upstream changes.",
        examples: ["REST APIs", "Webhooks", "Python", "TypeScript"],
      },
      {
        name: "Dashboards & reporting",
        description:
          "Turn the spreadsheet everyone edits into one live view of the numbers that matter, refreshed automatically.",
        examples: ["SQL", "PostgreSQL", "React", "Charts"],
      },
      {
        name: "AI assistants",
        description:
          "Connect AI tools like Claude to your own data and systems through MCP servers, so they can look things up and take action safely.",
        examples: ["Claude", "OpenAI API", "MCP"],
      },
    ],
    process: [
      { step: "Consult", detail: "A free first chat about the problem and what a fix looks like." },
      { step: "Scope", detail: "We agree the scope and pricing together, in writing." },
      { step: "Build", detail: "Working software, usually in one to three weeks." },
      { step: "Support", detail: "Optional monthly maintenance once it's live." },
    ],
    cta: { label: "Start a project", subject: "Freelance project enquiry" },
  },
  skillGroups: [
    {
      label: "Core stack",
      items: [
        "SQL",
        "Python",
        "React",
        "TypeScript",
        "REST APIs",
        "MCP",
      ],
    },
    {
      label: "AI & cloud",
      items: [
        "AI integrations",
        "Claude",
        "OpenAI API",
        "Azure",
      ],
    },
    {
      label: "Languages & tools",
      items: [
        "JavaScript",
        "Java",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Git",
        "Cursor",
        "Copilot",
      ],
    },
  ],
  // Root-relative so the links also work from /services.
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type Site = typeof site;
