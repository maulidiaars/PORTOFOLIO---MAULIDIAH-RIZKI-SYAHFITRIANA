export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  tech: string[];
  features: string[];
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}