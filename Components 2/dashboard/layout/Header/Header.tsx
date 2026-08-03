"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { HEADER_HEIGHT } from "@/lib/dashboard/layout";
import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement> {}

// =============================================================================
// Component
// =============================================================================

export const Header = React.forwardRef<
  HTMLElement,
  HeaderProps
>(function Header(
  {
    className,
    style,
    children,
    ...props
  },
  ref
) {
  return (
    <header
      ref={ref}
      style={{
        height: HEADER_HEIGHT,
        ...style,
      }}
     className={cn(
  "sticky top-0 z-40",
  "flex items-center justify-between",
  "h-16",
  "border-b",
  "bg-background/80",
  "backdrop-blur-xl",
  "px-6",
  "shrink-0",
  className,
)}
      {...props}
    >
      {children}
    </header>
  );
});

Header.displayName = "Header";