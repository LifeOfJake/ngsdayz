"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface EmptyStateIconProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  EmptyStateIconProps
>(function EmptyStateIcon(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "mb-4 flex h-14 w-14 items-center justify-center rounded-full",
        "bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

EmptyStateIcon.displayName = "EmptyStateIcon";