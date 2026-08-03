"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVIGATION } from "./navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-68 shrink-0 flex-col border-r border-border bg-card">
      {/* ---------------------------------------------------------------- */}
      {/* Branding                                                         */}
      {/* ---------------------------------------------------------------- */}
      <div className="border-b border-border px-6 py-6">
        <Link href="/staff/dashboard" className="block">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            NGS
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Sentinel
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Staff Operations
          </p>
        </Link>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Navigation                                                       */}
      {/* ---------------------------------------------------------------- */}
      <nav className="flex-1 space-y-1 p-3">
        {NAVIGATION.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/staff/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              ].join(" ")}
            >
              <Icon className="h-5 w-5 shrink-0" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-muted/50 p-3">
          <p className="text-sm font-medium">Project Sentinel</p>

          <p className="mt-1 text-xs text-muted-foreground">
            Version 0.1.0
          </p>
        </div>
      </div>
    </aside>
  );
}