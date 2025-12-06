export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  type: "web" | "mobile" | "other";
  role?: string;
  year?: string;
  gallery?: string[];
  timeline?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "soft";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
