export enum UserRole {
  STUDENT = 'Student',
  PROFESSOR = 'Professor',
  SCHOLAR = 'Research Scholar',
  RECRUITER = 'Recruiter / Admin'
}

export enum ResumeCategory {
  ENGINEERING = 'Engineering',
  MANAGEMENT = 'Management',
  ARTS = 'Arts & Design',
  RESEARCH = 'Research',
  ACADEMIC = 'Academic',
  OTHER = 'Other'
}

export interface ResumeAnalysis {
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  roleFit: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
}