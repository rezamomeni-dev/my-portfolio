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


export interface ResumeData {
   personalInfo: PersonalInfo;
   experience: ExperienceItem[];
   education: EducationItem[];
   skills: SkillCategory[];
}

export interface EducationProps {
   items: EducationItem[];
}

export interface ExperienceProps {
   items: ExperienceItem[];
}


export interface SkillCategory {
   id: string;
   title: string;
   priority: number;
   variant: "primary" | "secondary";
   items: string[];
}

export interface SkillsProps {
   categories: SkillCategory[];
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
