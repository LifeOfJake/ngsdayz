"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useFormControl } from "./FormContext";

export interface FormErrorProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormError = React.forwardRef<
  HTMLParagraphElement,
  FormErrorProps
>(function FormError(
  {
    className,
    children,
    ...props
  },
  ref
) {
  const {
    errorId,
    registerError,
  } = useFormControl();

  React.useEffect(
    () => registerError(),
    [registerError]
  );

  if (!children) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={errorId}
      role="alert"
      className={cn(
        "text-sm font-medium text-destructive",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

FormError.displayName = "FormError";