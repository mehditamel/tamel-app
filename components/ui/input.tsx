import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-bold text-[var(--gray-500)] mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-3 py-2.5 text-sm rounded-xl border-2 border-[var(--gray-100)] bg-white dark:bg-[var(--gray-100)] text-[var(--navy)] dark:text-white outline-none transition-colors",
            "focus:border-[var(--blue)] focus:ring-1 focus:ring-[var(--blue)]/20",
            "placeholder:text-[var(--gray-500)]/50",
            error && "border-[var(--red)] focus:border-[var(--red)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[11px] text-[var(--red)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
