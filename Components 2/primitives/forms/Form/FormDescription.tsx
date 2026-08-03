"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useFormControl } from "./FormContext";

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(function FormDescription(
  {
    className,
    children,
    ...props
  },
  ref
) {
  const {
    descriptionId,
    registerDescription,
  } = useFormControl();

  React.useEffect(
    () => registerDescription(),
    [registerDescription]
  );

  if (!children) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={descriptionId}
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

FormDescription.displayName = "FormDescription";