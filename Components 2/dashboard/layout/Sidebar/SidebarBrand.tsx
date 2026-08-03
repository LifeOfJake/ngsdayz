"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { Shield } from "lucide-react";

import { cn } from "@/lib/utils";

import { useSidebar } from "./SidebarProvider";

// =============================================================================
// Types
// =============================================================================

export interface SidebarBrandProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// Component
// =============================================================================

export const SidebarBrand = React.forwardRef<
  HTMLDivElement,
  SidebarBrandProps
>(function SidebarBrand(
  {
    className,
    ...props
  },
  ref,
) {
  const { collapsed } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-center gap-3",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center",
          "rounded-lg border border-white/10 bg-white/5",
        )}
      >
        <Shield
          className="h-4 w-4"
          strokeWidth={2.25}
        />
      </div>

      {!collapsed && (
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            Sentinel
          </p>

          <p className="truncate text-xs text-muted-foreground">
            Administration
          </p>
        </div>
      )}
    </div>
  );
});

SidebarBrand.displayName = "SidebarBrand";