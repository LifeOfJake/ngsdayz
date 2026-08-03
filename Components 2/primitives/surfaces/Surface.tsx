"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

// =============================================================================
// Component
// =============================================================================

export const Surface = React.forwardRef<
  HTMLDivElement,
  SurfaceProps
>(function Surface(
  {
    className,
    glow = false,
    children,
    ...props
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl",
        "border border-white/10",
        "bg-white/[0.03]",
        "backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.30)]",

        glow &&
          "shadow-[0_0_40px_rgba(163,255,0,0.08)]",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Surface.displayName = "Surface";