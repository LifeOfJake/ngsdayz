"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface EmptyStateDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>(function EmptyStateDescription(
  { className, ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn(
        "mt-2 max-w-md text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

EmptyStateDescription.displayName = "EmptyStateDescription";