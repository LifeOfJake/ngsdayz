"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui";

import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/Components 2/primitives/feedback/EmptyState";

import { STAFF_ROLES } from "@/lib/staff/roles";

import type { StaffMember } from "../types";

import { StaffMemberCard } from "./StaffMemberCard";

// =============================================================================
// Types
// =============================================================================

export interface StaffMemberListProps {
  staff: StaffMember[];

  onClearFilters?: () => void;
}

// =============================================================================
// Component
// =============================================================================

export function StaffMemberList({
  staff,
  onClearFilters,
}: StaffMemberListProps) {
  const sortedStaff = React.useMemo(
    () =>
      [...staff].sort(
        (a, b) =>
          STAFF_ROLES[a.role].order -
          STAFF_ROLES[b.role].order,
      ),
    [staff],
  );

  if (sortedStaff.length === 0) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <Search className="h-10 w-10" />
        </EmptyStateIcon>

        <EmptyStateTitle>
          No staff members found
        </EmptyStateTitle>

        <EmptyStateDescription>
          Try adjusting your search or filters to find the staff member you're looking for.
        </EmptyStateDescription>

        {onClearFilters && (
          <EmptyStateActions>
            <Button
              variant="outline"
              onClick={onClearFilters}
            >
              Clear Filters
            </Button>
          </EmptyStateActions>
        )}
      </EmptyState>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4
        xl:grid-cols-2
      "
    >
      {sortedStaff.map((member) => (
        <StaffMemberCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
}