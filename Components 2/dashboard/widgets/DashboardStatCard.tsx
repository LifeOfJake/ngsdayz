import * as React from "react";

import {
  Card,
  CardContent,
} from "@/Components 2/primitives/surfaces/Card/index";

import { cn } from "@/lib/utils";

export interface DashboardStatCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  description?: string;
  trend?: React.ReactNode;
}

export function DashboardStatCard({
  title,
  value,
  icon,
  description,
  trend,
  className,
  ...props
}: DashboardStatCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <CardContent className="flex items-start justify-between p-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <div className="text-4xl font-bold tracking-tight">
            {value}
          </div>

          {(description || trend) && (
            <div className="space-y-1">
              {description && (
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              )}

              {trend}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border bg-muted/30 p-3">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}