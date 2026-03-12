import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const widths = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

export function Section({
  children,
  title,
  subtitle,
  className,
  centered = false,
  maxWidth = "lg",
}: SectionProps) {
  return (
    <section
      className={cn("mx-auto px-4 py-12 md:py-16", widths[maxWidth], className)}
    >
      {(title || subtitle) && (
        <div className={cn("mb-8", centered && "text-center")}>
          {title && (
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)] dark:text-white mb-1">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[var(--gray-500)] text-sm">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
