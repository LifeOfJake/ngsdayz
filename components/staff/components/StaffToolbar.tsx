"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { Plus, Search } from "lucide-react";

import {
  Button,
  Select,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  StaffRole,
  StaffStatus,
} from "../types";

// =============================================================================
// Types
// =============================================================================

export interface StaffToolbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  staffCount: number;

  search: string;

  onSearchChange: (
    value: string,
  ) => void;

  role: StaffRole | "All";

  onRoleChange: (
    value: StaffRole | "All",
  ) => void;

  status: StaffStatus | "All";

  onStatusChange: (
    value: StaffStatus | "All",
  ) => void;
}

// =============================================================================
// Component
// =============================================================================

export function StaffToolbar({
  className,
  staffCount,
  search,
  onSearchChange,
  role,
  onRoleChange,
  status,
  onStatusChange,
  ...props
}: StaffToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6",
        "lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center">

        {/* ============================================================ */}
        {/* Search                                                      */}
        {/* ============================================================ */}

        <div
          className="
            flex
            h-10
            w-full
            max-w-md
            items-center
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            transition-colors
            focus-within:border-lime-400
          "
        >
          <Search
            className="
              h-4
              w-4
              shrink-0
              text-muted-foreground
            "
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              onSearchChange(
                event.target.value,
              )
            }
            placeholder="Search staff..."
            className="
              ml-3
              h-full
              w-full
              bg-transparent
              text-sm
              outline-none
              placeholder:text-muted-foreground
            "
          />
        </div>

        {/* ============================================================ */}
        {/* Role                                                        */}
        {/* ============================================================ */}

        <Select
          value={role}
          onChange={(event) =>
            onRoleChange(
              event.target.value as
                | StaffRole
                | "All",
            )
          }
          options={[
            {
              label: "All Roles",
              value: "All",
            },
            {
              label: "Owner",
              value: "Owner",
            },
            {
              label: "Administrator",
              value: "Administrator",
            },
            {
              label: "Senior Moderator",
              value: "Senior Moderator",
            },
            {
              label: "Moderator",
              value: "Moderator",
            },
            {
              label: "Support",
              value: "Support",
            },
            {
              label: "Trial Staff",
              value: "Trial Staff",
            },
          ]}
        />

        {/* ============================================================ */}
        {/* Status                                                      */}
        {/* ============================================================ */}

        <Select
          value={status}
          onChange={(event) =>
            onStatusChange(
              event.target.value as
                | StaffStatus
                | "All",
            )
          }
          options={[
            {
              label: "All Statuses",
              value: "All",
            },
            {
              label: "Online",
              value: "Online",
            },
            {
              label: "Away",
              value: "Away",
            },
            {
              label: "Offline",
              value: "Offline",
            },
            {
              label: "Suspended",
              value: "Suspended",
            },
          ]}
        />

      </div>

      {/* ============================================================ */}
      {/* Actions                                                     */}
      {/* ============================================================ */}

      <div className="flex items-center gap-4">
        <p className="whitespace-nowrap text-sm text-muted-foreground">
          {staffCount} Staff Members
        </p>

        <Button
          leftIcon={<Plus className="h-4 w-4" />}
        >
          Add Staff Member
        </Button>
      </div>
    </div>
  );
}