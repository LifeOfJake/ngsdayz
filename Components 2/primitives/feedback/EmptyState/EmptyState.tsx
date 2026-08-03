"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyState = React.forwardRef<
  HTMLDivElement,
  EmptyStateProps
>(function EmptyState(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-col items-center justify-center",
        "rounded-lg border border-dashed",
        "px-6 py-12 text-center",
        className
      )}
      {...props}
    />
  );
});

EmptyState.displayName = "EmptyState";