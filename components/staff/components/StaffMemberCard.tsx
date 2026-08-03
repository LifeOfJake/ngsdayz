"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import {
  Clock3,
  Shield,
} from "lucide-react";

import {
  Avatar,
} from "@/components/ui";

import { STAFF_ROLES } from "@/lib/staff/roles";

import type { StaffMember } from "../types";

import {
  StaffActions,
  StatusBadge,
} from ".";

// =============================================================================
// Types
// =============================================================================

export interface StaffMemberCardProps {
  member: StaffMember;
}

// =============================================================================
// Component
// =============================================================================

export function StaffMemberCard({
  member,
}: StaffMemberCardProps) {
  const role =
    STAFF_ROLES[member.role];

  return (
    <div
      className="
        group
        relative
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-lime-400/30
        hover:bg-white/[0.045]
      "
    >
      {/* ============================================================ */}
      {/* Hover Accent                                                 */}
      {/* ============================================================ */}

      <div
        className="
          absolute
          left-0
          top-4
          bottom-4
          w-1
          rounded-r-full
          bg-lime-400
          opacity-0
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      />

      {/* ============================================================ */}
      {/* Content                                                      */}
      {/* ============================================================ */}

      <div className="flex items-start justify-between p-5">

        <div className="flex gap-4">

          {/* Avatar */}

          <Avatar
            name={member.displayName}
            size="md"
          />

          {/* Details */}

          <div className="space-y-2">

            <div className="flex items-center gap-3">

              <h3 className="font-semibold text-white">
                {member.displayName}
              </h3>

              <StatusBadge
                status={member.status}
              />

            </div>

            <p className="text-sm text-muted-foreground">
              @{member.username}
            </p>

            <div
              className={`flex items-center gap-2 text-sm font-medium ${role.colour}`}
            >
              <Shield className="h-4 w-4" />

              <span>
                {role.label}
              </span>

            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">

              <Clock3 className="h-4 w-4" />

              <span>
                Last seen • {member.lastSeen}
              </span>

            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* Actions                                                     */}
        {/* ============================================================ */}

        <div
          className="
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
        >
          <StaffActions />
        </div>

      </div>

    </div>
  );
}