"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  AlertTitleProps
>(function AlertTitle(
  { className, ...props },
  ref
) {
  return (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});

AlertTitle.displayName = "AlertTitle";