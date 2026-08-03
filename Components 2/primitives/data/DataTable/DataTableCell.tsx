"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface DataTableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const DataTableCell = React.forwardRef<
  HTMLTableCellElement,
  DataTableCellProps
>(function DataTableCell(
  {
    className,
    ...props
  },
  ref
) {
  return (
    <td
      ref={ref}
      className={cn(
        "p-4 align-middle",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  );
});

DataTableCell.displayName = "DataTableCell";