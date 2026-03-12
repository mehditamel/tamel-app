"use client";

import { cn } from "@/lib/utils";

interface StepBarProps {
  steps: string[];
  current: number;
  color?: string;
}

export function StepBar({ steps, current, color = "var(--green)" }: StepBarProps) {
  return (
    <div className="flex items-center justify-center gap-1 py-4">
      {steps.map((label, i) => {
        const isActive = i + 1 === current;
        const isDone = i + 1 < current;
        return (
          <div key={label} className="flex items-center gap-1">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                  isActive
                    ? "text-white"
                    : isDone
                      ? "text-white"
                      : "bg-[var(--gray-100)] text-[var(--gray-500)]"
                )}
                style={{
                  background: isActive || isDone ? color : undefined,
                  opacity: isDone ? 0.6 : 1,
                }}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <span
                className={cn(
                  "text-[10px] mt-1 font-semibold whitespace-nowrap",
                  isActive
                    ? "text-[var(--navy)] dark:text-white"
                    : "text-[var(--gray-500)]"
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-10 h-0.5 mx-1 mt-[-14px] rounded-full"
                style={{
                  background: isDone ? color : "var(--gray-100)",
                  opacity: isDone ? 0.4 : 1,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
