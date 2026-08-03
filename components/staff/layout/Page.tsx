import * as React from "react";

import { cn } from "@/lib/utils";

export interface PageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function Page({
  title,
  description,
  actions,
  className,
  children,
  ...props
}: PageProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col gap-8 p-8",
        className
      )}
      {...props}
    >
      <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="max-w-2xl text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </header>

      <main className="flex flex-col gap-8">
        {children}
      </main>
    </div>
  );
}