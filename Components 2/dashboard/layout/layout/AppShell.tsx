"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

import { AppBackground } from "./AppBackground";
import { AppWorkspace } from "./AppWorkspace";

import {
  Header,
  HeaderActions,
  HeaderBreadcrumbs,
  HeaderNotifications,
  UserMenu,
} from "@/components/dashboard/Header";

import {
  Sidebar,
  SidebarBrand,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarProvider,
  SidebarToggle,
} from "@/components/dashboard/Sidebar";

// =============================================================================
// Types
// =============================================================================

export interface AppShellProps {
  children: React.ReactNode;

  className?: string;
}

// =============================================================================
// Component
// =============================================================================

export function AppShell({
  children,
  className,
}: AppShellProps) {
  return (
    <SidebarProvider>
      <div
        className={cn(
          "flex h-screen overflow-hidden",
          className,
        )}
      >
        {/* ============================================================= */}
        {/* Sidebar                                                       */}
        {/* ============================================================= */}

        <Sidebar>
          <SidebarHeader>
            <SidebarBrand />

            <SidebarToggle />
          </SidebarHeader>

          <SidebarContent>
            <SidebarNav />
          </SidebarContent>

          <SidebarFooter>
            <div className="text-xs text-muted-foreground">
              Sentinel v0.1.0
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* ============================================================= */}
        {/* Workspace                                                     */}
        {/* ============================================================= */}

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

          <Header>
            <HeaderBreadcrumbs />

            <HeaderActions>
              <HeaderNotifications />

              <UserMenu />
            </HeaderActions>
          </Header>

          <div className="flex-1 overflow-y-auto">

            <AppBackground>

              <AppWorkspace>

                {children}

              </AppWorkspace>

            </AppBackground>

          </div>

        </div>

      </div>
    </SidebarProvider>
  );
}