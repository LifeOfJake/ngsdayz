"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface DataTableEmptyProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  colSpan: number;
}

export const DataTableEmpty = React.forwardRef<
  HTMLTableCellElement,
  DataTableEmptyProps
>(function DataTableEmpty(
  {
    className,
    colSpan,
    children = "No data available.",
    ...props
  },
  ref
) {
  return (
    <tr>
      <td
        ref={ref}
        colSpan={colSpan}
        className={cn(
          "h-32 text-center align-middle text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </td>
    </tr>
  );
});

DataTableEmpty.displayName = "DataTableEmpty";