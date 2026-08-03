"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground",

        success:
          "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300",

        warning:
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",

        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  role?: React.AriaRole;
}

export const Alert = React.forwardRef<
  HTMLDivElement,
  AlertProps
>(function Alert(
  {
    className,
    variant = "default",
    role = variant === "warning" || variant === "destructive"
      ? "alert"
      : "status",
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      role={role}
      className={cn(
        alertVariants({ variant }),
        className
      )}
      {...props}
    />
  );
});

Alert.displayName = "Alert";