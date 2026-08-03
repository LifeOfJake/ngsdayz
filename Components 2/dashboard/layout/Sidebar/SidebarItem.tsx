"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/lib/dashboard/navigation";

import { useSidebar } from "./SidebarProvider";

// =============================================================================
// Types
// =============================================================================

export interface SidebarItemProps {
  item: NavigationItem;
}

// =============================================================================
// Component
// =============================================================================

export function SidebarItem({
  item,
}: SidebarItemProps) {
  const pathname = usePathname();

  const { collapsed } = useSidebar();

  const active = pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      title={collapsed ? item.title : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-lg px-3 py-2",
        "transition-all duration-200",
        "focus:outline-none",

        active
          ? "bg-lime-400/10 text-lime-400"
          : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
      )}
    >
      <Icon
        className={cn(
          "h-5 w-5 shrink-0 transition-colors duration-200",
          active && "text-lime-400",
        )}
      />

      {!collapsed && (
        <span
          className={cn(
            "truncate text-sm font-medium transition-colors duration-200",
            active && "text-lime-400",
          )}
        >
          {item.title}
        </span>
      )}
    </Link>
  );
}