export type Project = {
  title: string;
  subtitle: string;
  period: string;
  problem: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
};

export type TimelineEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export type SkillCategory = { label: string; items: string[] };

export type Cert = { name: string; issuer: string; year: string };

export const profile = {
  name: "Gioacchino Pio Di Leo",
  title: "Full Stack Developer",
  oneLiner:
    "I build reliable back ends with Java & Spring and fast, accessible front ends with TypeScript and Next.js — this site included.",
  availability: "Open to junior full-stack roles — remote/hybrid, Italy & EU",
  location: "Puglia, Italy",
  emailEncoded: "bW9jLmxpYW1nQDEwb2VsaWRvaXBvbmloY2Nhb2ln",
  github: "https://github.com/JakiWZ",
  linkedin: "https://www.linkedin.com/in/gioacchino-pio-di-leo/",
  pdfSummary:
    "Full Stack Developer with a solid Java/Spring back-end core (JEE, Hibernate/JPA, PostgreSQL/MySQL) and growing modern front-end skills (TypeScript, React, Next.js). Computer Science studies at the University of Bari; currently specializing at an ITS Full-Stack Academy. Agile methodologies, AI-assisted workflow (IBM certified), English C1.",
} as const;

export const about: string[] = [
  "I'm a full-stack developer from Puglia with a solid back-end core: Java, Spring and enterprise architectures (JEE), backed by relational databases — PostgreSQL and MySQL. I took Computer Science studies at the University of Bari and I'm now specializing at an ITS Academy for Full-Stack Developers.",
  "I work with Agile methodologies and an AI-assisted development workflow (IBM SkillsBuild AI Literacy & Faculty certified), with real attention to code quality and security. English: C1, certified.",
  "I'm looking for my first full-time full-stack role in a Java-centric web team — remote or hybrid, in Italy or across the EU — where I can ship real features and keep growing on the modern front end.",
];

export const projects: Project[] = [
  {
    title: "libreria-api",
    subtitle: "Bookstore REST API",
    period: "2026",
    problem:
      "A production-style Spring Boot back end: layered architecture, JPA persistence, versioned Flyway migrations and self-documenting OpenAPI endpoints — full CRUD plus search.",
    highlights: [
      "Full CRUD + search endpoints",
      "Versioned schema with Flyway migrations",
      "OpenAPI/Swagger documentation",
    ],
    stack: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "Flyway", "OpenAPI"],
    image: "/projects/libreria-api.png",
    repoUrl: "https://github.com/JakiWZ/libreria-api",
  },
  {
    title: "This Portfolio",
    subtitle: "Site + ATS CV pipeline",
    period: "2026",
    problem:
      "One typed data source renders both this site and a recruiter-ready, ATS-friendly PDF at build time — and a CI gate fails the build if personal data ever leaks into the public output.",
    highlights: [
      "Build-time ATS PDF from the same content model",
      "GDPR leak test wired into CI",
      "Editorial design, zero third-party requests",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "React PDF", "Playwright"],
    repoUrl: "https://github.com/JakiWZ/portfolio",
    liveUrl: "/",
  },
  {
    title: "FinanzaQui",
    subtitle: "Personal finance manager",
    period: "2024",
    problem:
      "A desktop finance manager to record income and expenses and keep custom budgets under control, behind a clean and intuitive Java GUI.",
    highlights: [
      "Income & expense tracking",
      "Custom budgets",
      "Desktop GUI built entirely in Java",
    ],
    stack: ["Java", "Desktop GUI"],
  },
  {
    title: "PasswordManager",
    subtitle: "Password vault",
    period: "2024",
    problem:
      "A desktop vault to create, edit, retrieve and delete credentials in one secure, intuitive interface — a focused exercise in safe state handling and UX.",
    highlights: [
      "Create / edit / delete / recover credentials",
      "Desktop GUI built entirely in Java",
    ],
    stack: ["Java", "Desktop GUI"],
  },
];

export const skills: SkillCategory[] = [
  {
    label: "Back end",
    items: ["Java", "Spring Boot", "JEE", "Hibernate/JPA", "Python", "Django", "REST API design"],
  },
  {
    label: "Front end",
    items: ["TypeScript", "JavaScript", "React", "Angular", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
  {
    label: "Tools & practices",
    items: ["Git/GitHub", "GitLab", "Docker", "Linux (Ubuntu)", "Agile", "AI-assisted development"],
  },
  { label: "Also", items: ["C", "C++"] },
  { label: "Languages", items: ["Italian (native)", "English (C1, certified)"] },
];

export const experience: TimelineEntry[] = [
  {
    role: "Full-Stack Developer specialization",
    org: "ITS Academy — Higher Technical Institute",
    period: "Jan 2026 — present",
    bullets: [
      "Server-side architectures with Java Enterprise Edition (JEE)",
      "Advanced web programming and enterprise OOP methodologies",
    ],
  },
  {
    role: "Software Developer",
    org: "IBILANCIAI SRL",
    period: "2024",
    bullets: [
      "Built software and databases for client projects",
      "Maintained and evolved existing applications on Linux/Ubuntu",
      "Developed with Android Studio and provided user-facing support",
    ],
  },
  {
    role: "Java & Pega Developer Academy",
    org: "BC Soft",
    period: "Sep — Oct 2023",
    bullets: [
      "Consolidated Java and SQL fundamentals",
      "Hands-on with the Pega low-code platform",
    ],
  },
  {
    role: "Back-End Developer Academy",
    org: "FIDES",
    period: "Feb — Apr 2023",
    bullets: [
      "Advanced Java and object-oriented programming",
      "Discrete mathematics applied to software development",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    role: "Computer Science studies",
    org: "University of Bari Aldo Moro",
    period: "2020 — 2025",
    bullets: [
      "IT security coursework",
      "Team project: Java application development with Agile methods",
    ],
  },
];

export const certifications: Cert[] = [
  { name: "IBM SkillsBuild: AI Literacy", issuer: "IBM", year: "2026" },
  { name: "IBM SkillsBuild: Faculty", issuer: "IBM", year: "2026" },
  { name: "English C1", issuer: "British Institutes", year: "2021" },
  { name: "EIPASS 7 Moduli User", issuer: "EIPASS", year: "2022" },
  { name: "Boolean Coding Week ×2", issuer: "Boolean", year: "2023" },
];
