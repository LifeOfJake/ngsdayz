"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface EmptyStateActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  EmptyStateActionsProps
>(function EmptyStateActions(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-6 flex flex-wrap items-center justify-center gap-3",
        className
      )}
      {...props}
    />
  );
});

EmptyStateActions.displayName = "EmptyStateActions";