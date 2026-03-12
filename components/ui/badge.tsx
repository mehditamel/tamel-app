import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "custom";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  color?: string;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--gray-100)] text-[var(--gray-600)]",
  success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  danger: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  custom: "",
};

export function Badge({ children, variant = "default", color, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full",
        variant !== "custom" && variantStyles[variant],
        className
      )}
      style={
        variant === "custom" && color
          ? { background: `${color}18`, color }
          : undefined
      }
    >
      {children}
    </span>
  );
}
