"use client";

import * as React from "react";

import { Skeleton } from "@/Components 2/primitives/feedback/Skeleton";

import {
  DataTableBody,
  DataTableCell,
  DataTableRow,
} from ".";

export interface DataTableSkeletonProps {
  columns: number;
  rows?: number;
}

export function DataTableSkeleton({
  columns,
  rows = 5,
}: DataTableSkeletonProps) {
  return (
    <DataTableBody>
      {Array.from({ length: rows }).map((_, row) => (
        <DataTableRow key={row}>
          {Array.from({ length: columns }).map((_, column) => (
            <DataTableCell key={column}>
              <Skeleton className="h-4 w-full" />
            </DataTableCell>
          ))}
        </DataTableRow>
          ))}
    </DataTableBody>
  );
}