"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import {
  Eye,
  Pencil,
  Shield,
  Ban,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface StaffActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// Component
// =============================================================================

export function StaffActions({
  className,
  ...props
}: StaffActionsProps) {
  const [open, setOpen] =
    React.useState(false);

  const menuRef =
    React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(
      event: MouseEvent,
    ) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick,
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick,
      );
  }, []);

  return (
    <div
      ref={menuRef}
      className={cn(
        "relative",
        className,
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="inline"
        className="rounded-lg p-2"
        onClick={() =>
          setOpen((value) => !value)
        }
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-2
            w-56
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#111214]
            shadow-2xl
          "
        >
          <ActionItem
            icon={<Eye className="h-4 w-4" />}
          >
            View Profile
          </ActionItem>

          <ActionItem
            icon={<Pencil className="h-4 w-4" />}
          >
            Edit Staff Member
          </ActionItem>

          <ActionItem
            icon={<Shield className="h-4 w-4" />}
          >
            Change Role
          </ActionItem>

          <ActionItem
            icon={<Ban className="h-4 w-4" />}
          >
            Suspend
          </ActionItem>

          <div className="my-1 border-t border-white/10" />

          <ActionItem
            danger
            icon={
              <Trash2 className="h-4 w-4" />
            }
          >
            Remove Staff Member
          </ActionItem>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Internal Component
// =============================================================================

interface ActionItemProps {
  children: React.ReactNode;

  icon: React.ReactNode;

  danger?: boolean;
}

function ActionItem({
  children,
  icon,
  danger = false,
}: ActionItemProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors",
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "hover:bg-white/5",
      )}
    >
      {icon}

      <span>{children}</span>
    </button>
  );
}