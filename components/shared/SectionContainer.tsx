import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
   children: React.ReactNode;
   className?: string;
}

export const SectionContainer = ({
   children,
   className,
   ...others
}: SectionContainerProps) => {
   return (
      <section
         className={cn(
            "max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-16 md:py-24",
            className,
         )}
         {...others}
      >
         {children}
      </section>
   );
};

export default SectionContainer;
