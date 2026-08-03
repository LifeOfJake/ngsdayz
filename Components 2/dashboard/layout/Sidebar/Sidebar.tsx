"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from "@/lib/dashboard/layout";

import { useSidebar } from "./SidebarProvider";

// =============================================================================
// Types
// =============================================================================

export interface SidebarProps
  extends React.HTMLAttributes<HTMLElement> {}

// =============================================================================
// Component
// =============================================================================

export const Sidebar = React.forwardRef<
  HTMLElement,
  SidebarProps
>(function Sidebar(
  {
    className,
    children,
    style,
    ...props
  },
  ref
) {
  const { collapsed } = useSidebar();

  return (
    <aside
      ref={ref}
      style={{
        width: collapsed
          ? SIDEBAR_COLLAPSED_WIDTH
          : SIDEBAR_WIDTH,
        ...style,
      }}
      className={cn(
        "flex h-screen flex-col",
        "border-r",
        "bg-background",
        "transition-[width]",
        "duration-300",
        "ease-in-out",
        "overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
});

Sidebar.displayName = "Sidebar";