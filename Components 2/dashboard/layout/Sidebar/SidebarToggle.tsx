"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useSidebar } from "./SidebarProvider";

// =============================================================================
// Types
// =============================================================================

export interface SidebarToggleProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

// =============================================================================
// Component
// =============================================================================

export const SidebarToggle = React.forwardRef<
  HTMLButtonElement,
  SidebarToggleProps
>(function SidebarToggle(
  {
    className,
    ...props
  },
  ref,
) {
  const {
    collapsed,
    toggle,
  } = useSidebar();

  return (
    <Button
      ref={ref}
      type="button"
      variant="ghost"
      size="sm"
      aria-label={
        collapsed
          ? "Expand sidebar"
          : "Collapse sidebar"
      }
      onClick={toggle}
      className={cn(
        "focus:ring-0 focus:ring-transparent focus:ring-offset-0",
        className,
      )}
      {...props}
    >
      {collapsed ? (
        <PanelLeftOpen className="h-5 w-5" />
      ) : (
        <PanelLeftClose className="h-5 w-5" />
      )}
    </Button>
  );
});

SidebarToggle.displayName = "SidebarToggle";