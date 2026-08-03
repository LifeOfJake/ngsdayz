"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/lib/dashboard/layout";

export interface SidebarHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  SidebarHeaderProps
>(function SidebarHeader(
  {
    className,
    style,
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
        "flex shrink-0 items-center",
        "border-b",
        "px-4",
        className,
      )}
      {...props}
    />
  );
});

SidebarHeader.displayName = "SidebarHeader";