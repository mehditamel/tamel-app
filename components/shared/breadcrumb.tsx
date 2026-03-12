import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn("flex items-center gap-1.5 py-2 text-xs text-[var(--gray-500)]", className)}
    >
      <Link
        href="/"
        className="text-[var(--blue)] hover:underline"
      >
        Accueil
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className="text-[var(--gray-200)]">›</span>
          {i === items.length - 1 || !item.href ? (
            <span className="text-[var(--navy)] dark:text-white font-semibold">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="text-[var(--blue)] hover:underline">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
