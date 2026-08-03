"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormField } from "@/Components 2/primitives/forms/Form/useFormField";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
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
    <textarea
      ref={ref}
      {...control}
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "resize-y",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";