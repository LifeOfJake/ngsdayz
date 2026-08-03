// =============================================================================
// Imports
// =============================================================================

import type { LucideIcon } from "lucide-react";

import {
  Ban,
  Circle,
  Moon,
} from "lucide-react";

import type { StaffStatus } from "@/components/staff/types";

// =============================================================================
// Types
// =============================================================================

export interface StaffStatusConfig {
  label: string;

  icon: LucideIcon;

  iconClassName: string;

  className: string;
}

// =============================================================================
// Statuses
// =============================================================================

export const STAFF_STATUSES: Record<
  StaffStatus,
  StaffStatusConfig
> = {
  Online: {
    label: "Online",
    icon: Circle,
    iconClassName:
      "h-2.5 w-2.5 fill-current",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  Away: {
    label: "Away",
    icon: Moon,
    iconClassName:
      "h-3.5 w-3.5",
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  Offline: {
    label: "Offline",
    icon: Circle,
    iconClassName:
      "h-2.5 w-2.5 fill-current",
    className:
      "border-slate-500/20 bg-slate-500/10 text-slate-400",
  },

  Suspended: {
    label: "Suspended",
    icon: Ban,
    iconClassName:
      "h-3.5 w-3.5",
    className:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },
};