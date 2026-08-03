"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  [
    "animate-pulse",
    "rounded-md",
    "bg-muted",
    "select-none",
    "pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "",
        circular: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof skeletonVariants> {}

export const Skeleton = React.forwardRef<
    HTMLDivElement,
    SkeletonProps
>(function Skeleton(
    {
        className,
        variant,
        ...props
    },
    ref
) {
    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={cn(
                skeletonVariants({ variant }),
                className
            )}
            {...props}
        />
    );
});

Skeleton.displayName = "Skeleton";