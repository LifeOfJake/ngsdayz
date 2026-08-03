"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface FormFieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

export const FormField = React.forwardRef<
  HTMLDivElement,
  FormFieldProps
>(function FormField(
  {
    className,
    orientation = "vertical",
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        orientation === "vertical"
          ? "space-y-2"
          : "flex items-start gap-3",
        className
      )}
      {...props}
    />
  );
});

FormField.displayName = "FormField";