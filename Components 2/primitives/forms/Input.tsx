"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormField } from "@/Components 2/primitives/forms/Form/useFormField";

// =============================================================================
// Types
// =============================================================================

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

// =============================================================================
// Component
// =============================================================================

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  {
    className,
    id,
    required,
    disabled,
    leftIcon,
    rightIcon,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...props
  },
  ref,
) {
  const control = useFormField({
    id,
    required,
    disabled,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
  });

  return (
    <div
      className={cn(
        "flex h-10 w-full items-center rounded-md border border-border bg-background",
        "transition-colors duration-200",
        "focus-within:ring-2",
        "focus-within:ring-ring",
        "focus-within:ring-offset-2",
        "focus-within:border-lime-400",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {leftIcon && (
        <div className="pl-3 text-muted-foreground">
          {leftIcon}
        </div>
      )}

      <input
        ref={ref}
        {...control}
        {...props}
        className={cn(
          "h-full w-full bg-transparent text-sm outline-none",
          "placeholder:text-muted-foreground",
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",
          leftIcon ? "pl-3" : "px-3",
          rightIcon ? "pr-3" : "pr-3",
        )}
      />

      {rightIcon && (
        <div className="pr-3 text-muted-foreground">
          {rightIcon}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";