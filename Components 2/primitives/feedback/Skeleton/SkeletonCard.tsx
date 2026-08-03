"use client";

import * as React from "react";

import { Skeleton } from "./Skeleton";
import { SkeletonText } from "./SkeletonText";

export interface SkeletonCardProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const SkeletonCard = React.forwardRef<
    HTMLDivElement,
    SkeletonCardProps
>(function SkeletonCard(
    props,
    ref
) {
    return (
        <div
            ref={ref}
            className="rounded-lg border p-6 space-y-4"
            {...props}
        >
            <Skeleton className="h-40 w-full rounded-lg" />

            <SkeletonText className="w-2/3" />

            <SkeletonText />

            <SkeletonText className="w-5/6" />
        </div>
    );
});

SkeletonCard.displayName = "SkeletonCard";