"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface EmptyStateTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  EmptyStateTitleProps
>(function EmptyStateTitle(
  { className, ...props },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
});

EmptyStateTitle.displayName = "EmptyStateTitle";