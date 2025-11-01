export interface ProjectIdea {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  techStack: TechStack;
  roadmap: RoadmapStep[];
  uiLayout: UISection[];
  prompt: string;
  createdAt: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  aiApi: string[];
  deployment: string[];
}

export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface UISection {
  name: string;
  description: string;
  layout: string;
}

export type IdeaCategory = "Web" | "Mobile" | "AI" | "Design" | "SaaS" | "All";
