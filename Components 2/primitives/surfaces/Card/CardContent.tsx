import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<
  HTMLDivElement,
  CardContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  );
});

CardContent.displayName = "CardContent";
