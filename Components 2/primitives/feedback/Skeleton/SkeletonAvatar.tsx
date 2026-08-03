"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Skeleton } from "./Skeleton";

const avatarVariants = cva("", {
    variants: {
        size: {
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-14 w-14",
            xl: "h-20 w-20",
        },
    },

    defaultVariants: {
        size: "md",
    },
});

export interface SkeletonAvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof avatarVariants> {}

export const SkeletonAvatar = React.forwardRef<
    HTMLDivElement,
    SkeletonAvatarProps
>(function SkeletonAvatar(
    {
        className,
        size,
        ...props
    },
    ref
) {
    return (
        <Skeleton
            ref={ref}
            variant="circular"
            className={cn(
                avatarVariants({ size }),
                className
            )}
            {...props}
        />
    );
});

SkeletonAvatar.displayName = "SkeletonAvatar";