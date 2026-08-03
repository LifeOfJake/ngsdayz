"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  useFormField,
  type FormFieldProps,
} from "@/Components 2/primitives/forms/Form";

export interface CheckboxProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof FormFieldProps | "type"
    >,
    FormFieldProps {}

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
  {
    className,
    id,
    required,
    disabled,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...props
  },
  ref
) {
  const control = useFormField({
    id,
    required,
    disabled,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
  });

  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center",
        control.disabled && "cursor-not-allowed"
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className="peer sr-only"
        {...control}
        {...props}
      />

      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
          "border-border bg-background",
          "transition-colors duration-200",

          "peer-checked:border-primary",
          "peer-checked:bg-primary",

          "peer-focus-visible:ring-2",
          "peer-focus-visible:ring-ring",
          "peer-focus-visible:ring-offset-2",

          "peer-disabled:opacity-50",

          control["aria-invalid"] &&
            "border-destructive"
        )}
      >
        <Check
          className={cn(
            "h-3.5 w-3.5 text-primary-foreground",
            "opacity-0 transition-opacity duration-200",
            "peer-checked:opacity-100"
          )}
        />
      </span>
    </label>
  );
});

Checkbox.displayName = "Checkbox";