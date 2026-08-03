import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  CardFooterProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center border-t border-border px-6 py-4",
        className
      )}
      {...props}
    />
  );
});

CardFooter.displayName = "CardFooter";
