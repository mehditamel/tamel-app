import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  className,
  hover = false,
  padding = "md",
  children,
  ...props
}: CardProps) {
  const paddings = { sm: "p-3", md: "p-5", lg: "p-6" };

  return (
    <div
      className={cn(
        "bg-white dark:bg-[var(--gray-100)] rounded-2xl border border-[var(--gray-100)] dark:border-[var(--gray-200)]",
        paddings[padding],
        hover && "hover:shadow-md transition-shadow cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "font-extrabold text-[var(--navy)] dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-[var(--gray-500)] text-xs leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}
