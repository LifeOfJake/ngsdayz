"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "children"
  > {
  options: SelectOption[];
}

// =============================================================================
// Component
// =============================================================================

export const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select(
  {
    className,
    options,
    ...props
  },
  ref,
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-10 appearance-none rounded-xl",
          "border border-white/10",
          "bg-black/20",
          "px-4 pr-10",
          "text-sm",
          "outline-none",
          "transition-colors duration-200",
          "focus:border-lime-400",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-muted-foreground
        "
      />
    </div>
  );
});

Select.displayName = "Select";