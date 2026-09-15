export const site = {
  name: "William Blake",
  title: "Software Engineer",
  location: "Auckland, New Zealand",
  email: "william.blake021@gmail.com",
  linkedin: "https://linkedin.com/in/william-blake-88735936b",
  github: "https://github.com/wblake3/william-blake-portfolio",
  hero: {
    eyebrow: "Software Engineer · AI · Auckland",
    headline: "William Blake",
    lede: "Passionate about AI and its applications across energy and healthcare. Strongest across Python, APIs, AI integrations and React — shipping production systems people can trust.",
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
      "I am passionate about AI and focused on it for the long term: Python, APIs, model integrations, and React in front of them. I use AI tools well (Cursor, Claude, Copilot), then review the result. Based in Auckland and looking for an office-first team doing hard product work.",
    ],
    education: {
      qualification: "Bachelor of Computer and Information Sciences",
      school: "Auckland University of Technology",
      years: "Jul 2023 — Jun 2026",
      notes: [
        "Advanced courses in AI & ML, Data Science, Project Management and codebases.",
        "Full stack applications including Taxi App, Pub Quiz using OpenAI, Shortest Path Maze Finder and a Digital ISNCSCI web app.",
        "Member of AUT CSEA, AUT Basketball and AUT Gym.",
      ],
    },
    interests: [
      "AI integrations",
      "Python & APIs",
      "Hard product problems",
      "Complex domains",
      "Production reliability",
    ],
  },
  experience: [
    {
      kind: "work",
      role: "R&D Lead Engineer (Contract)",
      org: "Health New Zealand / Te Whatu Ora",
      dates: "Jul 2025 — Jun 2026",
      image: "/images/health-nz.jpg",
      imageAlt:
        "William Blake with the Health New Zealand spinal cord injury assessment team",
      imagePosition: "center center",
      summary:
        "Designed, built and delivered production software clinicians used daily — from the screens they touch through to APIs and PostgreSQL.",
      points: [
        "Owned work through requirements, implementation, testing, go-live and support, rather than treating ship as the end.",
        "Learned a dense clinical domain fast enough to ship tools people could trust; sat with non-technical users and iterated on awkward flows.",
        "Collaborated through design conversations, reviews and documentation; used Cursor and Claude daily with judgement about where AI helps and where it needs a human.",
      ],
    },
    {
      kind: "work",
      role: "Digital Systems Engineer (Internship)",
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
      href: "https://github.com/Vrishab17/SpinalCordProject",
    },
    {
      name: "Trivia on Tap",
      year: "2024",
      status: "Shipped",
      description:
        "Full-stack pub quiz with OpenAI for live question generation, plus scoring, persistence and multi-user flows. End-to-end ownership across frontend, API orchestration, Postgres and deployment — making an AI-backed product usable rather than leaving it as a prototype.",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "OpenAI API"],
      href: "https://github.com/rafaelmarcoo/trivia-on-tap",
    },
    {
      name: "Taxi App",
      year: "2024",
      status: "Coursework",
      description:
        "Full-stack taxi application covering booking, driver and passenger flows, live status and the APIs behind the screens. Practised shipping a complete product path — not a single happy-path demo.",
      stack: ["React", "TypeScript", "APIs", "SQL"],
      href: "",
    },
    {
      name: "Shortest Path Maze Finder",
      year: "2024",
      status: "Coursework",
      description:
        "Interactive maze solver that finds an optimal path through a grid and shows the search as it runs. Built to make the algorithm obvious — the path on screen, not only a result in the console.",
      stack: ["Python", "Algorithms", "Visualisation"],
      href: "",
    },
  ],
  skillGroups: [
    {
      label: "AI & product",
      items: [
        "Python",
        "REST APIs",
        "AI integrations",
        "React",
        "OpenAI API",
        "Azure",
      ],
    },
    {
      label: "Languages & tools",
      items: [
        "TypeScript",
        "JavaScript",
        "Java",
        "SQL",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Git",
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
