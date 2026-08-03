"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface HeaderActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// Component
// =============================================================================

export const HeaderActions = React.forwardRef<
  HTMLDivElement,
  HeaderActionsProps
>(function HeaderActions(
  {
    className,
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2",
        className,
      )}
      {...props}
    />
  );
});

HeaderActions.displayName =
  "HeaderActions";