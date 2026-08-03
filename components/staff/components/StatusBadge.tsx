"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";
import { STAFF_STATUSES } from "@/lib/staff/statuses";

import type { StaffStatus } from "../types";

// =============================================================================
// Types
// =============================================================================

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: StaffStatus;
}

// =============================================================================
// Component
// =============================================================================

export function StatusBadge({
  status,
  className,
  ...props
}: StatusBadgeProps) {
  const config =
    STAFF_STATUSES[status];

  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        "rounded-full border",
        "px-3 py-1",
        "text-xs font-medium",
        config.className,
        className,
      )}
      {...props}
    >
      <Icon
        className={config.iconClassName}
      />

      <span>
        {config.label}
      </span>
    </div>
  );
}