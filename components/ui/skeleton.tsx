import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={cn("animate-shimmer rounded-lg", className)}
      style={{ width, height }}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-[var(--gray-100)] rounded-2xl p-6 border border-[var(--gray-100)]">
      <Skeleton className="w-3/5 h-4 mb-3" />
      <Skeleton className="w-full h-3 mb-2" />
      <Skeleton className="w-4/5 h-3 mb-4" />
      <Skeleton className="w-2/5 h-7" />
    </div>
  );
}
