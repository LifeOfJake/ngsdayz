"use client";

import * as React from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

export interface DataTableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | null;
}

export const DataTableHead = React.forwardRef<
  HTMLTableCellElement,
  DataTableHeadProps
>(function DataTableHead(
  {
    className,
    sortable = false,
    sortDirection = null,
    children,
    ...props
  },
  ref
) {
  const Icon =
    sortDirection === "asc"
      ? ArrowUp
      : sortDirection === "desc"
      ? ArrowDown
      : ArrowUpDown;

  return (
    <th
      ref={ref}
      scope="col"
      aria-sort={
        sortable
          ? sortDirection === "asc"
            ? "ascending"
            : sortDirection === "desc"
            ? "descending"
            : "none"
          : undefined
      }
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
        "[&:has([role=checkbox])]:pr-0",
        sortable && "select-none",
        className
      )}
      {...props}
    >
      {sortable ? (
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2",
            "transition-colors",
            "hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-ring",
            "focus-visible:ring-offset-2"
          )}
        >
          <span>{children}</span>

          <Icon className="h-4 w-4 shrink-0" />
        </button>
      ) : (
        children
      )}
    </th>
  );
});

DataTableHead.displayName = "DataTableHead";