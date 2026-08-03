// =============================================================================
// Imports
// =============================================================================

import type { LucideIcon } from "lucide-react";

import {
  ClipboardList,
  FileWarning,
  LayoutDashboard,
  Server,
  Settings,
  Users,
} from "lucide-react";

// =============================================================================
// Types
// =============================================================================

/**
 * A single navigation item displayed in the Sentinel sidebar.
 */
export interface NavigationItem {
  /**
   * Display title.
   */
  title: string;

  /**
   * Destination route.
   */
  href: string;

  /**
   * Icon displayed alongside the title.
   */
  icon: LucideIcon;

  /**
   * Determines whether the navigation item should be rendered.
   *
   * This will become permission-aware in a future milestone.
   */
  enabled?: boolean;
}

// =============================================================================
// Navigation
// =============================================================================

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Servers",
    href: "/servers",
    icon: Server,
  },
  {
    title: "Staff",
    href: "/staff",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileWarning,
  },
  {
    title: "Audit Log",
    href: "/audit",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];