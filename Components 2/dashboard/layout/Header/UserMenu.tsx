"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { ChevronDown, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface UserMenuProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  name?: string;
  role?: string;
}

// =============================================================================
// Component
// =============================================================================

export const UserMenu = React.forwardRef<
  HTMLButtonElement,
  UserMenuProps
>(function UserMenu(
  {
    name = "Jake Henderson",
    role = "Administrator",
    className,
    ...props
  },
  ref,
) {
  return (
    <Button
      ref={ref}
      variant="ghost"
      typography="default"
      className={cn(
    "h-10 rounded-lg px-3",
    "justify-start gap-3",
    "hover:bg-muted",
        className,
      )}
      {...props}
    >
      <UserCircle2 className="h-6 w-6 shrink-0" />

      <div className="flex flex-col items-start leading-none">
        <span className="text-sm font-medium">
          {name}
        </span>

        <span className="text-xs text-muted-foreground">
          {role}
        </span>
      </div>

      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  );
});

UserMenu.displayName = "UserMenu";