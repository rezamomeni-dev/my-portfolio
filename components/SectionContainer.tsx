import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
