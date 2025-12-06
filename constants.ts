import { Github, Linkedin, LucideMail, File } from "lucide-react";
import { Project, Skill, Experience } from "./types";
import Telegram from "./icons/Telegram";

export const DEV_NAME = "Nathnael Wondisha";
export const DEV_TITLE = "Senior Creative Developer";
export const DEV_BIO = `I build accessible, pixel-perfect, and performant web and mobile experiences. With over 5 years of experience in the React ecosystem, I blend technical expertise with a keen eye for design to create software that doesn't just work—it feels good to use.`;

export const SKILLS: Skill[] = [
  { name: "Linux", category: "backend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Postgres", category: "backend" },
  { name: "React Native", category: "backend" },
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
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Engineer",
    company: "Efoyy Transport Solutions",
    period: "2025 - Present",
    description: "",
  },
  {
    role: "Lead Developer",
    company:
      "American Institute for Certification Technology Incorporated(AICTI)",
    period: "2023",
    description:
      "Built a full-stack web application for managing 3000+ students.",
  },
  {
    role: "CTO & Founder",
    company: "Debol LLC",
    period: "2022",
    description:
      "Building A large ecommerce platform start up as solo developer",
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
    gallery: [
      "/algrab.png",
      "/algrab-1.png",
      "/algrab-2.png",
      "/algrab-3.png",
      "/algrab-4.png",
    ],
  },
  {
    id: 2,
    title: "Restaurant ERP",
    description: "End-to-end restaurant management system.",
    longDescription:
      "Includes ordering, payment validation, staff and role management, inventory/portioning, analytics, and accounting. Backend built with a custom vanilla Next.js setup.",
    technologies: ["Next.js", "Postgres", "TypeScript", "React", "Node.js"],
    imageUrl: "/erp-1.png",
    type: "web",
    role: "Solo-dev",
    year: "2023",
    gallery: [
      "/erp-1.png",
      "/erp-2.png",
      "/erp-3.png",
      "/erp-4.png",
      "/erp-5.png",
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
    year: "2023",
    gallery: ["/debbol.png"],
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
    gallery: ["/times.png"],
  },
  {
    id: 7,
    title: "Student Management System (AICTI)",
    description: "Student management and learning material platform.",
    longDescription:
      "Handles student registration, course assignment, progress tracking, and material sharing.",
    technologies: ["Next.js", "Node.js", "Postgres", "TypeScript"],
    imageUrl: "/aicti.png",
    demoUrl: "https://aicti.net",
    githubUrl: "",
    type: "web",
    role: "Solo-dev",
    year: "2022",
    gallery: ["/aicti.png"],
  },
  // {
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

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${DEV_NAME}'s portfolio website. 
Your goal is to answer visitor questions about Alex professionally, concisely, and with a touch of wit.
Use the following context to answer questions:

Name: ${DEV_NAME}
Role: ${DEV_TITLE}
Bio: ${DEV_BIO}

Skills: ${SKILLS.map((s) => s.name).join(", ")}

Projects:
${PROJECTS.map((p) => `- ${p.title} (${p.year}): ${p.description} (Tech: ${p.technologies.join(", ")})`).join("\n")}

Experience:
${EXPERIENCE.map((e) => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join("\n")}

If asked about contact info, suggest they scroll to the contact section or email alex.dev@example.com.
Do not hallucinate projects or skills not listed here.
Keep responses under 3 sentences unless asked for details.
`;

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
    url: "www.linkedin.com/in/nathnael-wondisha-67b048227",
    icon: Linkedin,
  },

  {
    url: "/updated-resume.pdf",
    icon: File,
    label: "Resume",
  },
];
