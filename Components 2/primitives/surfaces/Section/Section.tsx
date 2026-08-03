import * as React from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/Components 2/primitives/surfaces/Card";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function Section({
  title,
  description,
  actions,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("space-y-4", className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {title}
          </h2>

          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="shrink-0">
            {actions}
          </div>
        )}
      </div>

      <Card>
        {children}
      </Card>
    </section>
  );
}