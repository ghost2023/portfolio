import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  type: "web" | "mobile" | "cli" | "other";
  role?: string;
  year?: string;
  gallery?: string[];
  timeline?: string;
  icon?: LucideIcon;
  highlights?: { value: string; label: string }[];
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
