"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "./Skeleton";

export interface SkeletonTextProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const SkeletonText = React.forwardRef<
    HTMLDivElement,
    SkeletonTextProps
>(function SkeletonText(
    {
        className,
        ...props
    },
    ref
) {
    return (
        <Skeleton
            ref={ref}
            className={cn(
                "h-4 w-full",
                className
            )}
            {...props}
        />
    );
});

SkeletonText.displayName = "SkeletonText";