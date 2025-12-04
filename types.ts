export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  type: "web" | "mobile";
  role?: string;
  year?: string;
  gallery?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "soft";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
