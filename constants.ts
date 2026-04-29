import { Github, Linkedin, LucideMail, File, Phone } from "lucide-react";
import { Project, Skill, Experience } from "./types";
import Telegram from "./icons/Telegram";

export const DEV_NAME = "Nathnael Wondisha";
export const DEV_BIO = `I am a Systems-focused Engineer who builds robust, scalable software where reliability is the foundation. With over 5 years of experience across the full stack, I specialize in architecting distributed systems, solving complex concurrency issues, and building high-performance interfaces that make complex tools feel intuitive.`;

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
    role: "CTO & Founder",
    company: "NegedOS",
    period: "2025 - Present",
    description:
      "Architected a full-scale restaurant ERP system handling hundreds of daily orders. Built integrated modules for inventory, accounting, and analytics with custom payment verification workflows.",
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
    id: 2,
    title: "NegedOS",
    description: "End-to-end restaurant management system.",
    longDescription:
      "The most advanced restaurant management system in Ethiopia built for Real restaurants. Includes ordering, payment validation, staff and role management, inventory/portioning, analytics, and accounting.",
    technologies: ["Next.js", "Postgres", "TypeScript", "React", "Node.js"],
    imageUrl: "/erp-1.png",
    type: "web",
    role: "Solo-dev",
    year: "2025",
    timeline: "4 Months",
    gallery: [
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
    id: 3,
    title: "Debbol eCommerce",
    description: "A complete eCommerce platform.",
    longDescription:
      "Built with Next.js, React Native, Postgres, Prisma, and Stripe. Includes product dashboards, RBAC, and mobile app for users.",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Postgres",
      "Prisma",
      "Stripe",
    ],
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
    longDescription:
      "Showcases company services, products, and contact flows with a clean design.",
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
    url: "/updated-resume.pdf",
    icon: File,
    label: "Resume",
  },
];
