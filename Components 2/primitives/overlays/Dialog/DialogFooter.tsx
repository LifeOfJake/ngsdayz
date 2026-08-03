import * as React from "react";

import { cn } from "@/lib/utils";

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex justify-end gap-3 border-t border-border p-6",
        className
      )}
      {...props}
    />
  );
}