"use client";

// =============================================================================
// Imports
// =============================================================================

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// =============================================================================
// Constants
// =============================================================================

const STORAGE_KEY = "sentinel.sidebar.collapsed";

// =============================================================================
// Types
// =============================================================================

interface SidebarContextValue {
  collapsed: boolean;

  toggle(): void;

  collapse(): void;

  expand(): void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

// =============================================================================
// Context
// =============================================================================

const SidebarContext = createContext<SidebarContextValue | null>(null);

// =============================================================================
// Helpers
// =============================================================================

function loadCollapsedState(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(STORAGE_KEY) === "true";
}

function saveCollapsedState(collapsed: boolean): void {
  localStorage.setItem(STORAGE_KEY, String(collapsed));
}

// =============================================================================
// Component
// =============================================================================

export function SidebarProvider({
  children,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(loadCollapsedState());
  }, []);

  useEffect(() => {
    saveCollapsedState(collapsed);
  }, [collapsed]);

  const collapse = useCallback(() => {
    setCollapsed(true);
  }, []);

  const expand = useCallback(() => {
    setCollapsed(false);
  }, []);

  const toggle = useCallback(() => {
    setCollapsed((value) => !value);
  }, []);

  const value = useMemo<SidebarContextValue>(
    () => ({
      collapsed,
      toggle,
      collapse,
      expand,
    }),
    [collapsed, toggle, collapse, expand],
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

// =============================================================================
// Hook
// =============================================================================

export function useSidebar(): SidebarContextValue {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used within a SidebarProvider.",
    );
  }

  return context;
}