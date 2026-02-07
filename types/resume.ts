export interface PersonalInfo {
   name: string;
   role: string;
   bio: string;
   aboutMe: string;
   email: string;
   phone: string;
   location: string;
   linkedin: string;
   github: string;
   twitter: string;
   image: string;
}

export interface ExperienceItem {
   role: string;
   company: string;
   location: string;
   period: string;
   description: string[];
   technologies: string[];
}

export interface EducationItem {
   institution: string;
   degree: string;
   period: string;
   location: string;
}

export interface Skills {
   core: string[];
   tools: string[];
}

export interface ResumeData {
   personalInfo: PersonalInfo;
   experience: ExperienceItem[];
   education: EducationItem[];
   skills: Skills;
}

export interface EducationProps {
   items: EducationItem[];
}

export interface ExperienceProps {
   items: ExperienceItem[];
}

export interface SkillsProps {
   core: string[];
   tools: string[];
}

export interface AboutProps {
   content: string;
}

export interface ResumeHeroProps {
   name: string;
   role: string;
   bio: string;
   image: string;
   email: string;
   location: string;
}
