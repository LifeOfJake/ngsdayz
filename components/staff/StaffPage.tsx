"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import {
  mockStaff,
} from "./data";

import {
  StaffRole,
  StaffStatus,
} from "./types";

import {
  StaffMemberList,
  StaffToolbar,
} from "./components";

// =============================================================================
// Component
// =============================================================================

export function StaffPage() {
  // ===========================================================================
  // State
  // ===========================================================================

  const [search, setSearch] =
    React.useState("");

  const [role, setRole] =
    React.useState<StaffRole | "All">(
      "All",
    );

  const [status, setStatus] =
    React.useState<StaffStatus | "All">(
      "All",
    );

  // ===========================================================================
  // Actions
  // ===========================================================================

  function handleClearFilters() {
    setSearch("");
    setRole("All");
    setStatus("All");
  }

  // ===========================================================================
  // Filtered Staff
  // ===========================================================================

  const filteredStaff =
    React.useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return mockStaff.filter(
        (member) => {
          const matchesSearch =
            query.length === 0 ||
            member.displayName
              .toLowerCase()
              .includes(query) ||
            member.username
              .toLowerCase()
              .includes(query) ||
            member.discordId
              .toLowerCase()
              .includes(query);

          const matchesRole =
            role === "All" ||
            member.role === role;

          const matchesStatus =
            status === "All" ||
            member.status === status;

          return (
            matchesSearch &&
            matchesRole &&
            matchesStatus
          );
        },
      );
    }, [
      search,
      role,
      status,
    ]);

  // ===========================================================================
  // Render
  // ===========================================================================

  return (
    <div className="space-y-6">

      <StaffToolbar
        search={search}
        onSearchChange={setSearch}
        role={role}
        onRoleChange={setRole}
        status={status}
        onStatusChange={setStatus}
        staffCount={filteredStaff.length}
      />

      <StaffMemberList
        staff={filteredStaff}
        onClearFilters={
          handleClearFilters
        }
      />

    </div>
  );
}