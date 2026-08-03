"use client";

// =============================================================================
// Imports
// =============================================================================

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// =============================================================================
// Helpers
// =============================================================================

function formatSegment(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// =============================================================================
// Component
// =============================================================================

export interface HeaderBreadcrumbsProps {
  className?: string;
}

export function HeaderBreadcrumbs({
  className,
}: HeaderBreadcrumbsProps) {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm",
        className,
      )}
    >
      <ol className="flex items-center gap-2">
        {segments.length === 0 ? (
          <li className="font-semibold text-foreground">
            Dashboard
          </li>
        ) : (
          segments.map((segment, index) => {
            const href =
              "/" +
              segments
                .slice(0, index + 1)
                .join("/");

            const isLast =
              index === segments.length - 1;

            return (
              <React.Fragment key={href}>
                {index > 0 && (
                  <li
                    aria-hidden="true"
                    className="text-muted-foreground"
                  >
                    /
                  </li>
                )}

                <li>
                  {isLast ? (
                    <span className="font-semibold text-foreground">
                      {formatSegment(segment)}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {formatSegment(segment)}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })
        )}
      </ol>
    </nav>
  );
}