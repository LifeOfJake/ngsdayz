"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(function AlertDescription(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-sm leading-relaxed opacity-90",
        className
      )}
      {...props}
    />
  );
});

AlertDescription.displayName = "AlertDescription";