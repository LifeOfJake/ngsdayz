"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface DataTableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

export const DataTableRow = React.forwardRef<
  HTMLTableRowElement,
  DataTableRowProps
>(function DataTableRow(
  {
    className,
    ...props
  },
  ref
) {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors",
        "hover:bg-muted/50",
        "data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  );
});

DataTableRow.displayName = "DataTableRow";