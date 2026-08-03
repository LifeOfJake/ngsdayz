import * as React from "react";

import { cn } from "@/lib/utils";

export interface DialogOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function DialogOverlay({
  className,
  ...props
}: DialogOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-black/70 backdrop-blur-sm",
        "animate-in fade-in duration-200",
        className
      )}
      {...props}
    />
  );
}