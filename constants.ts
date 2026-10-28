import { Github, Linkedin, LucideMail, File, Phone, TrainFront, Building2 } from "lucide-react";
import { Project, Skill, Experience } from "./types";
import Telegram from "./icons/Telegram";

export const DEV_NAME = "Nathnael Wondisha";
export const DEV_BIO = `I'm a full-stack engineer based in Addis Ababa who builds business systems that handle real money. I've built logistics and ERP platforms for Ethio-Djibouti Railway, run a restaurant ERP of my own in production, and shipped payment, marketplace and fintech products before that. I work mostly in TypeScript on PostgreSQL, and I care most about correct numbers, safe concurrency, and software that people on the floor can actually use.`;

export const SKILLS: Skill[] = [
  { name: "Linux", category: "backend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Postgres", category: "backend" },
  { name: "React Native", category: "backend" },
  { name: "Flutter", category: "frontend" },
  { name: "Docker", category: "tools" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Hono", category: "backend" },
  { name: "Drizzle", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "Playwright", category: "tools" },
  { name: "Stripe", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "AI Sdk", category: "tools" },
  { name: "Firebase", category: "backend" },
  { name: "AWS", category: "backend" },
  { name: "Golang", category: "backend" },
  { name: "Rust", category: "backend" },
  { name: "Nix", category: "tools" },
  { name: "Dokploy", category: "tools" },
  { name: "Coolify", category: "tools" },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tria · Ethio-Djibouti Railway",
    period: "2026 - Present",
    description:
      "Core engineer on EDR's freight platform, which went live in about 5 months and now processes millions of ETB a month. I built bookings, billing, payments, multi-currency (ETB/USD/DJF), Ministry of Revenue e-invoicing and reporting. I also own the procurement module of EDR's ERP.",
  },
  {
    role: "CTO & Founder",
    company: "NegedOS",
    period: "2025 - Present",
    description:
      "Built and run a restaurant ERP in production for 15+ months, handling hundreds of orders a day. It covers automatic Telebirr/CBE payment verification, FIFO inventory costing and double-entry accounting.",
  },
  {
    role: "Software Engineer",
    company: "Efoyy Ride",
    period: "2025 - 2026",
    description:
      "Improved onboarding speed by 30-50% and reduced app startup time by 50%. Established monitoring systems and redesigned payment flows to increase successful transactions.",
  },
  {
    role: "Lead Developer",
    company: "AICTI",
    period: "2024",
    description:
      "Built and maintained a student management system for 3,000+ users, developing core features for course delivery and enrollment.",
  },
  {
    role: "Full Stack Developer",
    company: "Cicada",
    period: "2023 - 2023",
    description:
      "Developed responsive UI for a Web3 security platform and implemented a real-time chat feature independently.",
  },
  {
    role: "Lead Engineer",
    company: "Debbol",
    period: "2022",
    description:
      "Designed multi-tenant architecture and subscription-based payment systems for a fast-growing eCommerce startup.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 12,
    title: "EDR ILMS",
    description:
      "The logistics platform Ethio-Djibouti Railway uses to sell and run freight and passenger services.",
    longDescription:
      "A national rail platform built by a small team and taken live in about 5 months. It now processes millions of ETB in payments every month. I'm a core engineer on the freight subsystem, which covers the cargo lifecycle from booking and pricing through invoicing, payment, dispatch and delivery. I built the billing and payment path (Telebirr, CBE Birr, D-Money, Waafi, card), multi-currency support for ETB/USD/DJF, the Ministry of Revenue e-invoicing (EIMS) integration and the reporting module. I also built CRM, complaint handling with SLA escalation, and customer surveys, and I support the system in production.",
    highlights: [
      { value: "Millions", label: "ETB processed per month" },
      { value: "5 mo", label: "from start to live" },
      { value: "11", label: "services in production" },
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "RabbitMQ", "React", "Docker", "GitLab CI"],

    imageUrl: "/EDR.png",
    icon: TrainFront,
    type: "web",
    role: "Core Engineer (Freight)",
    year: "2026",
    timeline: "5 months to launch, ongoing",
    gallery: ["/EDR.png"],
  },
  {
    id: 13,
    title: "EDR ERP",
    description: "Finance, procurement and HR for Ethio-Djibouti Railway.",
    longDescription:
      "The railway's internal ERP. I own the procurement module end to end. It digitizes the whole process: demand planning, annual and consolidated plans, requisitions, RFQs and tenders with committee scoring and lot-by-lot awards, purchase orders, and goods receipt with inspection. Spending is checked against the budget per line and cost center, and approvals run through configurable multi-step workflows with delegation. Warehouse inventory is tracked by site, store and bin, and supplier bills flow into finance. I also wrote the Playwright end-to-end tests for the critical flows.",
    highlights: [
      { value: "3", label: "modules: finance, procurement, HR" },
      { value: "Owner", label: "of procurement" },
      { value: "~6", label: "engineers on the team" },
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "React", "Mantine", "Playwright"],
    imageUrl: "/EDR.png",
    icon: Building2,
    type: "web",
    role: "Core Developer (Procurement)",
    year: "2026",
    timeline: "Live, ongoing",
    gallery: ["/EDR.png"],
  },
  {
    id: 2,
    title: "NegedOS",
    description:
      "Restaurant operating system: from the order on the floor to the owner's financial statements.",
    longDescription:
      "An ERP for multi-branch restaurant groups in Ethiopia that I designed, built and run in production. Waiters, cashiers and kitchen staff use a real-time PWA on low-end Android phones. Telebirr and CBE transfer receipts are verified automatically against each branch's accounts. Inventory uses FIFO batch costing across a central warehouse and branch stores, and every sale, purchase and stock movement posts to a double-entry ledger. Correctness is enforced by 80+ integration test files on real PostgreSQL, Playwright race and soak tests that check financial invariants, and custom lint rules that prevent deadlocks.",
    highlights: [
      { value: "15+ mo", label: "in production" },
      { value: "~200", label: "API procedures" },
      { value: "95%", label: "of the code written by me" },
    ],
    technologies: ["React", "Hono", "oRPC", "PostgreSQL", "Drizzle", "Playwright", "Vitest"],
    imageUrl: "/NegedOs.png",
    type: "web",
    role: "CTO / Lead Engineer",
    year: "2025",
    timeline: "15+ months, ongoing",
    gallery: [
      "/NegedOs.png",
      "/erp-1.png",
      "/erp-2.png",
      "/erp-3.png",
      "/erp-4.png",
      "/erp-5.png",
      "/erp-6.png",
      "/erp-7.png",
    ],
  },
  {
    id: 1,
    title: "Algrab Classifieds",
    description: "A full classifieds platform similar to Craigslist.",
    longDescription:
      "Users can post ads, search listings, manage profiles, and handle communication. Includes a full admin dashboard with customer management and moderation tools.",
    technologies: ["Next.js", "Firebase", "Redis", "TypeScript", "React"],
    imageUrl: "/algrab.png",
    demoUrl: "https://algrab.com",
    githubUrl: "",
    type: "web",
    role: "Solo-dev",
    year: "2023",
    timeline: "7 Months",
    gallery: ["/algrab.png", "/algrab-1.png", "/algrab-2.png", "/algrab-4.png"],
  },
  {
    id: 3,
    title: "Debbol eCommerce",
    description: "A complete eCommerce platform.",
    longDescription:
      "Built with Next.js, React Native, Postgres, Prisma, and Stripe. Includes product dashboards, RBAC, and mobile app for users.",
    technologies: ["Next.js", "React Native", "TypeScript", "Postgres", "Prisma", "Stripe"],
    imageUrl: "/debbol.png",
    demoUrl: "https://debbol.com",
    githubUrl: "",
    type: "web",
    role: "Solo-dev",
    year: "2022",
    timeline: "1 year",
    gallery: [
      "/debbol.png",
      "/debbol/Screenshot_20250723_191035_Debbol.jpg",
      "/debbol/Screenshot_20250723_191151_Debbol.jpg",
      "/debbol/Screenshot_20250723_191208_Debbol.jpg",
    ],
  },
  {
    id: 4,
    title: "Debol Market",
    description: "Firebase-powered eCommerce platform.",
    longDescription:
      "Uses Firebase for real-time data and authentication, and Stripe for payment processing. Simple but scalable design.",
    technologies: ["Next.js", "Firebase", "Stripe", "TypeScript", "React"],
    imageUrl: "/debbolmarket.png",
    demoUrl: "https://debolmarket.com",
    githubUrl: "",
    type: "web",
    role: "Solo-dev",
    year: "2022",
    timeline: "2 Months",
    gallery: [],
  },
  {
    id: 6,
    title: "Payment Tracking System",
    description: "A system for validating and tracking payments.",
    longDescription:
      "Built for internal business use with dashboards, verification flows, and audit logs.",
    technologies: ["Next.js", "Postgres", "TypeScript"],
    imageUrl: "/payment.png",
    type: "web",
    role: "Solo-dev",
    year: "2022",
    timeline: "1 Month",
    gallery: ["/payment.png", "/payment-1.png"],
  },

  {
    id: 9,
    title: "Times Business Group",
    description: "Modern business website for a client.",
    longDescription: "Showcases company services, products, and contact flows with a clean design.",
    technologies: ["Next.js", "React", "TypeScript"],
    imageUrl: "/times.png",
    demoUrl: "https://times-rosy.vercel.app/",
    type: "web",
    role: "Solo-dev",
    year: "2023",
    timeline: "2 Weeks",
    gallery: ["/times.png"],
  },
  {
    id: 10,
    title: "Fluttree",
    description: "Visual dependency graph for Flutter projects.",
    longDescription:
      "fluttree is a command-line tool for visualizing the internal dependency graph of a Flutter project. It traverses Dart files starting from lib/main.dart, builds a map of imports, and identifies unused files. Supports JSON, DOT, and Mermaid formats.",
    technologies: ["JavaScript", "Bun", "Dart", "Graphviz"],
    imageUrl: "/vite.svg", // Placeholder, ideally a terminal screenshot
    githubUrl: "https://github.com/ghost2023/fluttree",
    type: "cli",
    role: "Solo-dev",
    year: "2024",
    timeline: "1 Month",
    gallery: [],
  },
  {
    id: 11,
    title: "Ghost API",
    description: "Dynamic structured mock response generator.",
    longDescription:
      "A high-performance mock API designed to generate structured test responses dynamically. Supports various data types such as strings, numbers, dates, arrays, and objects with a clean Golang implementation.",
    technologies: ["Golang", "JSON", "REST API"],
    imageUrl: "/vite.svg", // Placeholder
    githubUrl: "https://github.com/ghost2023/ghost-api",
    type: "cli",
    role: "Solo-dev",
    year: "2024",
    timeline: "2 Months",
    gallery: [],
  },
  //   id: 8,
  //   title: "Equb Saving Mobile App",
  //   description: "A mobile app UI for Equb group saving.",
  //   longDescription:
  //     "Front-end only prototype showcasing group saving flows, member roles, and payout cycles.",
  //   technologies: ["React Native", "TypeScript"],
  //   imageUrl: "/images/equb.png",
  //   type: "mobile",
  //   role: "Solo-dev",
  //   year: "2023",
  //   gallery: [],
  // },
];

export const contacts = [
  {
    url: "mailto:nathnaelwonisha@gmail.com",
    icon: LucideMail,
  },
  {
    url: "https://github.com/ghost2023",
    icon: Github,
  },
  {
    url: "https://t.me/AsinisterH",
    icon: Telegram,
  },
  {
    url: "https://www.linkedin.com/in/nathnael-wondisha-67b048227",
    icon: Linkedin,
  },
  {
    url: "tel:+251946669787",
    icon: Phone,
  },
  {
    url: "/resume.pdf",
    icon: File,
    label: "Resume",
  },
];
