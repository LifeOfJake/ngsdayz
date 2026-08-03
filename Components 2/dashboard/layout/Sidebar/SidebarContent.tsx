"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SidebarContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  SidebarContentProps
>(function SidebarContent(
  {
    className,
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex-1 overflow-y-auto",
        className,
      )}
      {...props}
    />
  );
});

SidebarContent.displayName = "SidebarContent";