"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { AppShell } from "@/Components 2/dashboard/layout/layout";

// =============================================================================
// Types
// =============================================================================

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

// =============================================================================
// Component
// =============================================================================

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <AppShell>

      {children}

    </AppShell>
  );
}