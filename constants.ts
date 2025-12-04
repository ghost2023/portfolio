import { Project, Skill, Experience } from './types';

export const DEV_NAME = "Alex Sterling";
export const DEV_TITLE = "Senior Creative Developer";
export const DEV_BIO = `I build accessible, pixel-perfect, and performant web experiences. With over 8 years of experience in the React ecosystem, I blend technical expertise with a keen eye for design to create software that doesn't just work—it feels good to use.`;

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Gemini AI Integration', level: 85, category: 'backend' },
  { name: 'Three.js / R3F', level: 70, category: 'frontend' },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description: "Leading the frontend migration to React 18 and Next.js. Improved core web vitals by 40%."
  },
  {
    role: "Frontend Developer",
    company: "Creative Pulse Agency",
    period: "2018 - 2021",
    description: "Developed award-winning marketing sites for Fortune 500 clients using WebGL and GSAP."
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Inc.",
    period: "2016 - 2018",
    description: "Built the MVP for a fintech platform serving 10k+ daily users."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Nexus Dashboard",
    description: "A real-time analytics dashboard featuring dark mode, data visualization, and AI integration.",
    longDescription: "Neon Nexus is a comprehensive analytics platform designed for high-frequency trading firms. It aggregates data from multiple sources in real-time, visualizing complex trends through WebGL-accelerated charts. The dashboard features a fully customizable layout engine and integrated Gemini AI for predictive market analysis.",
    technologies: ["React", "TypeScript", "Tailwind", "Gemini API", "D3.js"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    gallery: ["https://picsum.photos/800/600?random=101", "https://picsum.photos/800/600?random=102"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    role: "Lead Architect",
    year: "2024"
  },
  {
    id: 2,
    title: "Zenith Fitness",
    description: "A mobile-first fitness tracking application with social features and biometric analysis.",
    longDescription: "Zenith is a cross-platform mobile application built with React Native. It connects with wearable devices to track heart rate, sleep patterns, and workout intensity. The app features a social feed, competitive leaderboards, and a 3D workout guide avatar.",
    technologies: ["React Native", "Expo", "Firebase", "HealthKit"],
    imageUrl: "https://picsum.photos/400/800?random=2", // Portrait aspect for mobile
    gallery: ["https://picsum.photos/400/800?random=201", "https://picsum.photos/400/800?random=202", "https://picsum.photos/400/800?random=203"],
    demoUrl: "#",
    githubUrl: "#",
    type: "mobile",
    role: "Mobile Developer",
    year: "2023"
  },
  {
    id: 3,
    title: "Aether Storyteller",
    description: "An interactive web app that generates children's stories with illustrations on the fly.",
    longDescription: "Aether utilizes the latest in generative AI to create personalized bedtime stories. Parents can define characters, settings, and moral themes. The application streams text and generates accompanying illustrations in real-time, creating a magical, unique experience for every session.",
    technologies: ["Next.js", "Node.js", "Google GenAI", "Stable Diffusion"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    gallery: ["https://picsum.photos/800/600?random=301", "https://picsum.photos/800/600?random=302"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    role: "Full Stack Developer",
    year: "2023"
  },
  {
    id: 4,
    title: "Void Commerce",
    description: "Headless e-commerce solution with sub-second page loads and 3D product previews.",
    longDescription: "A cutting-edge e-commerce front-end built for a luxury streetwear brand. It features R3F (React Three Fiber) product viewers, seamless page transitions using Framer Motion, and a highly optimized checkout flow integrated with Stripe.",
    technologies: ["Next.js", "Shopify Storefront API", "Three.js", "WebGL"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    gallery: ["https://picsum.photos/800/600?random=401", "https://picsum.photos/800/600?random=402"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    role: "Frontend Lead",
    year: "2022"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${DEV_NAME}'s portfolio website. 
Your goal is to answer visitor questions about Alex professionally, concisely, and with a touch of wit.
Use the following context to answer questions:

Name: ${DEV_NAME}
Role: ${DEV_TITLE}
Bio: ${DEV_BIO}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.year}): ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

If asked about contact info, suggest they scroll to the contact section or email alex.dev@example.com.
Do not hallucinate projects or skills not listed here.
Keep responses under 3 sentences unless asked for details.
`;