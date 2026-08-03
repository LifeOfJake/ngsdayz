"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useFormControl } from "./FormContext";

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  FormLabelProps
>(function FormLabel(
  {
    className,
    children,
    ...props
  },
  ref
) {
  const {
    inputId,
    required,
    disabled,
  } = useFormControl();

  return (
    <label
      ref={ref}
      htmlFor={inputId}
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      {children}

      {required && (
        <span
          aria-hidden="true"
          className="ml-1 text-destructive"
        >
          *
        </span>
      )}
    </label>
  );
});

FormLabel.displayName = "FormLabel";