"use client";

import type { ReactNode } from "react";

import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function Header({
  title,
  description,
  actions,
}: HeaderProps) {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-background px-8">
      {/* ---------------------------------------------------------------- */}
      {/* Page Information                                                  */}
      {/* ---------------------------------------------------------------- */}

      <div className="min-w-0">
        <h1 className="truncate text-2xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Right Side                                                       */}
      {/* ---------------------------------------------------------------- */}

      <div className="flex items-center gap-3">
        {/* Page Actions */}

        {actions}

        {/* Search */}

        <button
          type="button"
          className="flex h-10 w-72 items-center justify-between rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-accent"
        >
          <span className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Sentinel...
          </span>

          <kbd className="rounded border border-border bg-muted px-2 py-0.5 text-xs">
            Ctrl K
          </kbd>
        </button>

        {/* Notifications */}

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-accent"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        {/* User */}

        <button
          type="button"
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 transition-colors hover:bg-accent"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
            J
          </div>

          <div className="text-left">
            <p className="text-sm font-medium">
              Jake
            </p>

            <p className="text-xs text-muted-foreground">
              Owner
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}