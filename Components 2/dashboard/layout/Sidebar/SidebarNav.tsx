"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { navigation } from "@/lib/dashboard/navigation";

import { SidebarItem } from "./SidebarItem";

// =============================================================================
// Types
// =============================================================================

export interface SidebarNavProps
  extends React.HTMLAttributes<HTMLElement> {}

// =============================================================================
// Component
// =============================================================================

export const SidebarNav = React.forwardRef<
  HTMLElement,
  SidebarNavProps
>(function SidebarNav(
  props,
  ref,
) {
  return (
    <nav
      ref={ref}
      className="flex flex-col gap-1 p-2"
      {...props}
    >
      {navigation
        .filter((item) => item.enabled !== false)
        .map((item) => (
          <SidebarItem
            key={item.href}
            item={item}
          />
        ))}
    </nav>
  );
});

SidebarNav.displayName = "SidebarNav";