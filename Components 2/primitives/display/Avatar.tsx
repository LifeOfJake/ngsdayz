"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { User } from "lucide-react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Image URL.
   */
  src?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Avatar size.
   */
  size?: "sm" | "md" | "lg";
}

// =============================================================================
// Helpers
// =============================================================================

function getInitials(name?: string) {
  if (!name) {
    return null;
  }

  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// =============================================================================
// Component
// =============================================================================

export const Avatar = React.forwardRef<
  HTMLDivElement,
  AvatarProps
>(function Avatar(
  {
    className,
    src,
    name,
    size = "md",
    ...props
  },
  ref,
) {
  const initials =
    getInitials(name);

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "border border-white/10 bg-white/5",
        "font-semibold text-muted-foreground",
        sizes[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : initials ? (
        initials
      ) : (
        <User className="h-5 w-5" />
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";