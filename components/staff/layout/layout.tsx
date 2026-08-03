"use client";

import type { ReactNode } from "react";

import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />

      <main className="flex min-w-0 flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}