"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface SidebarFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// Component
// =============================================================================

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>(function SidebarFooter(
  {
    className,
    ...props
  },
  ref
) {
  return (
    <footer
      ref={ref}
      className={cn(
        "mt-auto border-t p-3",
        className,
      )}
      {...props}
    />
  );
});

SidebarFooter.displayName = "SidebarFooter";