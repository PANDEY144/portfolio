export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  problem: string;
  process: string[];
  decisions: string[];
  challenges: string[];
  outcome: string;
  impact: string;
  tags: string[];
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  testimonial?: string;
  palette: string[];
};

export type SkillGroup = {
  title: string;
  items: { name: string; level: number }[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type Strength = {
  title: string;
  detail: string;
};
