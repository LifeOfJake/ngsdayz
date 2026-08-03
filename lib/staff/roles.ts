// =============================================================================
// Types
// =============================================================================

import type { StaffRole } from "@/components/staff/types";

// =============================================================================
// Configuration
// =============================================================================

export interface StaffRoleConfig {
  /**
   * Display name.
   */
  label: string;

  /**
   * Discord hierarchy order.
   */
  order: number;

  /**
   * Tailwind text colour.
   */
  colour: string;
}

// =============================================================================
// Roles
// =============================================================================

export const STAFF_ROLES: Record<
  StaffRole,
  StaffRoleConfig
> = {
  Owner: {
    label: "Owner",
    order: 0,
    colour: "text-red-500",
  },

  "Senior Admin": {
    label: "Senior Admin",
    order: 1,
    colour: "text-orange-400",
  },

  Admin: {
    label: "Admin",
    order: 2,
    colour: "text-sky-400",
  },

  "Trial Admin": {
    label: "Trial Admin",
    order: 3,
    colour: "text-emerald-400",
  },

  Mod: {
    label: "Mod",
    order: 4,
    colour: "text-teal-400",
  },

  "Server Dev": {
    label: "Server Dev",
    order: 5,
    colour: "text-violet-400",
  },

  "Discord Dev": {
    label: "Discord Dev",
    order: 6,
    colour: "text-purple-400",
  },

  "Events Team": {
    label: "Events Team",
    order: 7,
    colour: "text-blue-400",
  },
};