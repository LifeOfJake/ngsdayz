import * as React from "react";

import { X } from "lucide-react";

import Button from "@/Components 2/primitives/forms/Button";

import { cn } from "@/lib/utils";

import { useDialog } from "./DialogContext";

export function DialogHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { onClose } = useDialog();

  return (
    <div
      className={cn(
        "flex items-start justify-between gap-6 border-b border-border p-6",
        className
      )}
      {...props}
    >
      <div className="flex-1 space-y-2">
        {children}
      </div>

      <Button
        variant="ghost"
        size="inline"
        typography="default"
        aria-label="Close dialog"
        onClick={onClose}
        className="rounded-lg p-2"
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
}