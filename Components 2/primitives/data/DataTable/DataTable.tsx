"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface DataTableProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const DataTable = React.forwardRef<
    HTMLDivElement,
    DataTableProps
>(function DataTable(
    {
        className,
        children,
        ...props
    },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn(
                "relative w-full overflow-auto rounded-lg border",
                className
            )}
            {...props}
        >
            <table className="w-full caption-bottom text-sm">
                {children}
            </table>
        </div>
    );
});

DataTable.displayName = "DataTable";