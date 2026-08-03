"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface AppWorkspaceProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// Component
// =============================================================================

export function AppWorkspace({
  className,
  children,
  ...props
}: AppWorkspaceProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1800px]",
        "px-8 py-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}