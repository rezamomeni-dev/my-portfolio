export interface HeroData {
   badge: string;
   headline: string;
   subheadline: string;
   cta: string;
   image: string;
}

export interface StatItem {
   label: string;
   value: string;
}

export interface ServiceItem {
   title: string;
   description: string;
}

export interface ServicesData {
   title: string;
   subtitle: string;
   items: ServiceItem[];
}

export interface TestimonialItem {
   name: string;
   role: string;
   content: string;
}

export interface FAQItem {
   question: string;
   answer: string;
}

export interface HomeData {
   hero: HeroData;
   stats: StatItem[];
   services: ServicesData;
   techStack: {
      title: string;
      subtitle: string;
   };
   projectShowcase: {
      title: string;
      subtitle: string;
      project: {
         title: string;
         description: string;
         tags: string[];
         link: string;
      };
   };
   testimonials: {
      title: string;
      subtitle: string;
      items: TestimonialItem[];
   };
   faq: {
      title: string;
      subtitle: string;
      items: FAQItem[];
   };
   contactCTA: {
      title: string;
      subtitle: string;
      cta: string;
   };
}

export interface FAQItemProps {
   question: string;
   answer: string;
   isOpen: boolean;
   onClick: () => void;
}

export interface StatItemProps {
   label: string;
   valueString: string;
   index: number;
}
