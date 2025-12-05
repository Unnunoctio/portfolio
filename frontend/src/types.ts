export interface About {
  _id: string;
  title: string;
  subtitles: string[];
  avatar: string;
  description: string | null;
  github: string;
  linkedin: string;
  cv: string;
  contactEmail: string;
}

export type ExperienceCode = "education" | "work";

export interface Experience {
  _id: string;
  code: ExperienceCode;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string | null;
  certificateFile: string | null;
  certificateUrl: string | null;
}

export type TechnologyCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "aws"
  | "tools"
  | "other";

export interface Technology {
  _id: string;
  id: string;
  name: string;
  color: string;
  category: TechnologyCategory;
}

export interface Project {
  _id: string;
  order: number;
  slug: string;
  title: string;
  isReady: boolean;
  description: string | null;
  skills: Technology[];
  repository: string | null;
  website: string | null;
  githubId: string;
  icon: string | null;
  logo: string | null;
  preview: string | null;
  architecture: string | null;
}
